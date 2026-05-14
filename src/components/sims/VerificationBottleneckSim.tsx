import { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { ChartSvg } from '../charts/Svg';
import { Slider } from '../charts/Slider';
import { KPI } from '../charts/KPI';
import { Axis } from '../charts/Axis';

const DEBT_THRESHOLD = 50;
const HORIZON_MIN = 60;
const DEBT_CAP = 250;

export function VerificationBottleneckSim() {
  const [aiGen, setAiGen] = useState(5);
  const [depth, setDepth] = useState(5);

  const reviewRate = 0.4 + 0.6 * (depth / 10);
  const growthPerMin = Math.max(0, aiGen - reviewRate);
  const debtAt60 = Math.min(growthPerMin * HORIZON_MIN, DEBT_CAP);
  const tCrossover = growthPerMin > 0 ? DEBT_THRESHOLD / growthPerMin : Infinity;
  const willOverflow = debtAt60 > DEBT_THRESHOLD;

  const margin = { top: 30, right: 40, bottom: 50, left: 60 };
  const chartW = 560;
  const chartH = 310;
  const xScale = scaleLinear()
    .domain([0, HORIZON_MIN])
    .range([margin.left, margin.left + chartW]);
  const yScale = scaleLinear()
    .domain([0, 200])
    .range([margin.top + chartH, margin.top]);

  const samples = 60;
  const pts: { x: number; y: number; debt: number; min: number }[] = [];
  for (let i = 0; i <= samples; i++) {
    const min = (HORIZON_MIN * i) / samples;
    const debt = Math.min(growthPerMin * min, DEBT_CAP);
    pts.push({ x: xScale(min), y: yScale(Math.min(debt, 200)), debt, min });
  }
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  // Red-zone fill above threshold
  const dangerSplit = pts.findIndex((p) => p.debt >= DEBT_THRESHOLD);
  const dangerStart = dangerSplit > 0 ? pts[dangerSplit] : null;
  const dangerArea =
    dangerStart && pts.length > dangerSplit
      ? `M ${dangerStart.x} ${yScale(DEBT_THRESHOLD)} ` +
        pts
          .slice(dangerSplit)
          .map((p) => `L ${p.x} ${p.y}`)
          .join(' ') +
        ` L ${pts[pts.length - 1].x} ${yScale(DEBT_THRESHOLD)} Z`
      : null;

  const debtAt60Color = willOverflow ? '#fda4ae' : '#86efac';
  const ratio = aiGen / Math.max(reviewRate, 0.01);

  return (
    <>
      <h2>Verification bottleneck: коли ШІ генерує швидше, ніж ви рев'юєте</h2>
      <p className="lede">
        Швидкість генерації висока, швидкість верифікації обмежена фундаментом — борг росте.
      </p>

      <div className="sim-grid">
        <ChartSvg height={400} style={{ maxHeight: '8em' }}>
          <Axis
            scale={xScale}
            orientation="bottom"
            x={margin.left}
            y={margin.top + chartH}
            length={chartW}
            ticks={[0, 15, 30, 45, 60]}
            format={(v) => `${v} хв`}
            label="час роботи з агентом"
          />
          <Axis
            scale={yScale}
            orientation="left"
            x={margin.left}
            y={margin.top}
            length={chartH}
            ticks={[0, 50, 100, 150, 200]}
            label="індекс невіддзеркаленого боргу"
          />

          {/* Threshold band */}
          <line
            x1={margin.left}
            x2={margin.left + chartW}
            y1={yScale(DEBT_THRESHOLD)}
            y2={yScale(DEBT_THRESHOLD)}
            stroke="rgba(253,164,174,0.5)"
            strokeDasharray="5 4"
          />
          <text
            x={margin.left + chartW + 6}
            y={yScale(DEBT_THRESHOLD) + 4}
            fill="rgba(253,164,174,0.8)"
            fontSize={11}
          >
            catastrophic
          </text>

          {/* Red-zone fill */}
          {dangerArea && (
            <path d={dangerArea} fill="rgba(248,113,113,0.18)" stroke="none" />
          )}

          {/* Debt curve */}
          <path
            d={pathD}
            stroke={willOverflow ? '#fda4ae' : '#facc15'}
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Crossover marker */}
          {Number.isFinite(tCrossover) && tCrossover <= HORIZON_MIN && (
            <>
              <line
                x1={xScale(tCrossover)}
                x2={xScale(tCrossover)}
                y1={yScale(DEBT_THRESHOLD)}
                y2={margin.top + chartH}
                stroke="rgba(253,164,174,0.45)"
                strokeDasharray="3 3"
              />
              <circle cx={xScale(tCrossover)} cy={yScale(DEBT_THRESHOLD)} r={5} fill="#fda4ae" />
              <text
                x={xScale(tCrossover) + 8}
                y={yScale(DEBT_THRESHOLD) - 10}
                fill="#fda4ae"
                fontSize={12}
                fontWeight={600}
              >
                ≈ {Math.round(tCrossover)} хв
              </text>
            </>
          )}
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI
              value={`${debtAt60.toFixed(0)}`}
              label="борг @ 60 хв"
              color={debtAt60Color}
            />
            <KPI
              value={
                Number.isFinite(tCrossover) && tCrossover <= HORIZON_MIN
                  ? `${Math.round(tCrossover)} хв`
                  : '∞'
              }
              label="до catastrophic"
              color={Number.isFinite(tCrossover) && tCrossover <= HORIZON_MIN ? '#fda4ae' : '#86efac'}
            />
            <KPI
              value={`${ratio.toFixed(1)}×`}
              label="ген ÷ рев'ю"
              color={ratio > 1.5 ? '#fda4ae' : ratio > 1 ? '#fde68a' : '#86efac'}
            />
          </div>
          <div
            className="callout"
            style={{
              borderLeftColor: debtAt60Color,
              background: `${debtAt60Color}1a`,
            }}
          >
            {willOverflow ? (
              <>
                <strong style={{ color: debtAt60Color }}>Борг швидше за рев'ю.</strong>{' '}
                Швидкість рев'ю — це ваш фундамент. Без нього ШІ генерує швидше, ніж ви здатні
                перевірити.
              </>
            ) : (
              <>
                <strong style={{ color: debtAt60Color }}>Рев'ю наздоганяє.</strong>{' '}
                Фундамент тримає темп — генерація не випереджає верифікацію.
              </>
            )}
          </div>
        </div>
      </div>

      <div className="sim-controls" style={{ maxWidth: 1000 }}>
        <Slider
          label="швидкість генерації ШІ"
          min={1}
          max={10}
          step={0.1}
          value={aiGen}
          onChange={setAiGen}
          format={(v) => `${v.toFixed(1)}×`}
        />
        <Slider
          label="фундамент розробника"
          min={0}
          max={10}
          step={0.1}
          value={depth}
          onChange={setDepth}
          format={(v) => `${v.toFixed(1)} / 10`}
        />
      </div>

      <p className="slide-footnote">
        Стилізована модель verification-debt. Спирається на тезу{' '}
        <a href="https://x.com/karpathy/status/1915581920022585597" target="_blank" rel="noreferrer">
          Karpathy (2025)
        </a>{' '}
        — agentic engineering зберігає планку якості тільки якщо верифікація встигає за генерацією.
        METR 2025: −19% на legacy у досвідчених розробників — час іде в перевірку, не в код.
      </p>
    </>
  );
}
