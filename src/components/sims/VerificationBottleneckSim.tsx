import { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { ChartSvg, CHART_W } from '../charts/Svg';
import { Slider } from '../charts/Slider';
import { KPI } from '../charts/KPI';
import { Axis } from '../charts/Axis';

const DEBT_THRESHOLD = 50;
const HORIZON_MIN = 60;
const DEBT_CAP = 250;

export function VerificationBottleneckSim() {
  const [aiGen, setAiGen] = useState(5);
  const [depth, setDepth] = useState(5);

  const reviewRate = 0.5 + 4.5 * (depth / 10);
  const growthPerMin = Math.max(0, aiGen - reviewRate);
  const debtAt60 = Math.min(growthPerMin * HORIZON_MIN, DEBT_CAP);
  const tCrossover = growthPerMin > 0 ? DEBT_THRESHOLD / growthPerMin : Infinity;
  const willOverflow = debtAt60 > DEBT_THRESHOLD;

  const margin = { top: 30, right: 60, bottom: 50, left: 60 };
  const chartW = 540;
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

  const debtAt60Color = willOverflow ? '#f43f5e' : '#10b981';
  const ratio = aiGen / Math.max(reviewRate, 0.01);

  return (
    <>
      <h2>Verification bottleneck: ШІ пише швидше, ніж ви читаєте</h2>
      <p className="lede">
        Ви — не вузьке місце у написанні коду. Ви — вузьке місце у його розумінні. Швидкість генерації &gt; швидкість читання ⇒ <em>AI-борг</em>.
      </p>

      <div className="sim-grid">
        <ChartSvg height={360}>
          <Axis
            scale={xScale}
            orientation="bottom"
            x={margin.left}
            y={margin.top + chartH}
            length={chartW}
            ticks={[0, 15, 30, 45, 60]}
            format={(v) => `${v} хв`}
            label="час сесії з агентом (хв)"
          />
          <Axis
            scale={yScale}
            orientation="left"
            x={margin.left}
            y={margin.top}
            length={chartH}
            ticks={[0, 50, 100, 150, 200]}
            label="накопичені функції / блоки коду (AI Debt)"
          />

          <line
            x1={margin.left}
            x2={margin.left + chartW}
            y1={yScale(DEBT_THRESHOLD)}
            y2={yScale(DEBT_THRESHOLD)}
            stroke="rgba(244,63,94,0.5)"
            strokeDasharray="5 4"
            strokeWidth={2}
          />
          <text
            x={margin.left + chartW - 6}
            y={yScale(DEBT_THRESHOLD) - 6}
            fill="rgba(244,63,94,0.8)"
            fontSize={12}
            fontWeight={600}
            textAnchor="end"
          >
            втрата контролю &gt; 50 блоків
          </text>

          {dangerArea && (
            <path d={dangerArea} fill="rgba(244,63,94,0.1)" stroke="none" />
          )}

          <path
            d={pathD}
            stroke={willOverflow ? '#f43f5e' : '#f59e0b'}
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {Number.isFinite(tCrossover) && tCrossover <= HORIZON_MIN && (
            <>
              <line
                x1={xScale(tCrossover)}
                x2={xScale(tCrossover)}
                y1={yScale(DEBT_THRESHOLD)}
                y2={margin.top + chartH}
                stroke="rgba(244,63,94,0.45)"
                strokeDasharray="3 3"
              />
              <circle cx={xScale(tCrossover)} cy={yScale(DEBT_THRESHOLD)} r={6} fill="#f43f5e" />
              <text
                x={xScale(tCrossover) + 12}
                y={yScale(DEBT_THRESHOLD) - 12}
                fill="#f43f5e"
                fontSize={14}
                fontWeight={700}
              >
                Крах через {Math.round(tCrossover)} хв
              </text>
            </>
          )}
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI
              value={`${debtAt60.toFixed(0)} блоків`}
              label="борг через 1 год"
              color={debtAt60Color}
            />
            <KPI
              value={
                Number.isFinite(tCrossover) && tCrossover <= HORIZON_MIN
                  ? `${Math.round(tCrossover)} хв`
                  : 'безпечно'
              }
              label="до втрати контролю"
              color={Number.isFinite(tCrossover) && tCrossover <= HORIZON_MIN ? '#f43f5e' : '#10b981'}
            />
            <KPI
              value={`${ratio.toFixed(1)}×`}
              label="ШІ швидше за вас"
              color={ratio > 3 ? '#f43f5e' : ratio > 1.5 ? '#f59e0b' : '#10b981'}
            />
          </div>
          <div
            className="callout"
            style={{ borderLeftColor: debtAt60Color, background: `${debtAt60Color}1a` }}
          >
            {willOverflow ? (
              <>
                <strong style={{ color: debtAt60Color }}>Довіра наосліп.</strong>{' '}
                {aiGen.toFixed(1)} блоків/хв генерації проти {reviewRate.toFixed(1)} блоків/хв читання — за годину чорна скринька.
              </>
            ) : (
              <>
                <strong style={{ color: debtAt60Color }}>Контроль тримається.</strong>{' '}
                {aiGen.toFixed(1)} блоків/хв встигаєте рев'юити. Архітектура ціла.
              </>
            )}
          </div>
        </div>
      </div>

      <div className="sim-controls" style={{ maxWidth: CHART_W }}>
        <Slider
          label="швидкість генерації ШІ"
          min={0.5}
          max={10}
          step={0.5}
          value={aiGen}
          onChange={setAiGen}
          format={(v) => `${v.toFixed(1)} бл/хв`}
        />
        <Slider
          label="швидкість рев'ю AI-коду"
          min={0}
          max={10}
          step={1}
          value={depth}
          onChange={setDepth}
          format={(v) => `Lvl ${v} · ${(0.5 + 4.5 * (v / 10)).toFixed(1)}/хв`}
        />
      </div>
    </>
  );
}