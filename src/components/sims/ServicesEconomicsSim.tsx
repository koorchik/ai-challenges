import { useState } from 'react';
import { ChartSvg } from '../charts/Svg';
import { Slider } from '../charts/Slider';
import { KPI } from '../charts/KPI';

type Segment = { label: string; value: number; color: string };

function StackedBar({
  x,
  y,
  width,
  segments,
  unitHeight,
  labelThreshold = 0.07,
}: {
  x: number;
  y: number;
  width: number;
  segments: Segment[];
  unitHeight: number;
  labelThreshold?: number;
}) {
  let offset = 0;
  return (
    <g transform={`translate(${x}, ${y})`}>
      {segments.map((s) => {
        const h = s.value * unitHeight;
        const rect = (
          <g key={s.label} transform={`translate(0, ${offset})`}>
            <rect width={width} height={h} fill={s.color} opacity={0.92} />
            {s.value >= labelThreshold && (
              <text
                x={width / 2}
                y={h / 2 + 4}
                textAnchor="middle"
                fill="rgba(0,0,0,0.85)"
                fontSize={12}
                fontWeight={600}
              >
                {s.label} · {Math.round(s.value * 100)}%
              </text>
            )}
          </g>
        );
        offset += h;
        return rect;
      })}
    </g>
  );
}

export function ServicesEconomicsSim() {
  const [alpha, setAlpha] = useState(0.5);
  const [tau, setTau] = useState(0.5);
  const [pi, setPi] = useState(1.0);
  const [demand, setDemand] = useState(0.5);

  // Per-unit-of-baseline cost model:
  //   delivered_cost = α · τ        (tokens, for AI-handled share)
  //                  + (1 − α) / π  (residual human labor, sped up by π)
  // Baseline (no AI) = 1.0. At defaults (α=0.5, τ=0.5, π=1, d=0.5):
  // delivered_cost = 0.25 + 0.5 = 0.75 → 25% delivered reduction vs 50% demand → 25-pp margin gap.
  const tokenCost = alpha * tau;
  const humanCost = (1 - alpha) / Math.max(pi, 0.01);
  const deliveredCost = tokenCost + humanCost;
  const delivered = Math.max(1 - deliveredCost, -0.5);
  const gap = demand - delivered;

  const barW = 200;
  const beforeX = 230;
  const afterX = 560;
  const barTotalH = 380;
  const baselineY = 470;
  const beforeTopY = baselineY - barTotalH;
  const afterBarH = Math.min(deliveredCost, 1.4) * barTotalH;
  const afterTopY = baselineY - afterBarH;
  const expectedTopY = baselineY - (1 - demand) * barTotalH;

  const beforeSegs: Segment[] = [
    { label: 'людська праця', value: 1.0, color: '#fdba74' },
  ];

  const afterSegs: Segment[] = [
    { label: 'токени', value: tokenCost, color: '#facc15' },
    { label: 'людська праця', value: humanCost, color: '#fdba74' },
  ];

  const gapPp = Math.round(gap * 100);
  const deliveredPct = Math.round(delivered * 100);
  const demandPct = Math.round(demand * 100);

  const deliveredColor = gap <= 0 ? '#86efac' : gap >= 0.15 ? '#fda4ae' : '#fde68a';
  const gapColor = gap > 0 ? '#fda4ae' : '#86efac';

  return (
    <>
      <h2>Економіка послуг: чому 2× продуктивності не дають 50%</h2>
      <p className="lede">
        Токен — нова підлога ціни. Якщо він коштує половину людини, швидкість не закриває −50% від клієнта.
      </p>

      <div className="sim-grid">
        <ChartSvg height={550} style={{ maxHeight: '9.2em' }}>
          {/* 100% reference line */}
          <line
            x1={beforeX - 24}
            x2={afterX + barW + 60}
            y1={beforeTopY}
            y2={beforeTopY}
            stroke="rgba(255,255,255,0.2)"
            strokeDasharray="4 4"
          />
          <text
            x={afterX + barW + 12}
            y={beforeTopY + 4}
            fill="rgba(255,255,255,0.45)"
            fontSize={12}
          >
            100%
          </text>

          {/* Client expectation reference line — dashed magenta across both bars */}
          <line
            x1={beforeX - 24}
            x2={afterX + barW + 60}
            y1={expectedTopY}
            y2={expectedTopY}
            stroke="#ff79c6"
            strokeOpacity={0.7}
            strokeDasharray="6 5"
          />
          <text
            x={afterX + barW + 12}
            y={expectedTopY + 4}
            fill="#ff79c6"
            fontSize={12}
            fontWeight={600}
          >
            клієнт хоче · {Math.round((1 - demand) * 100)}%
          </text>

          {/* Baseline */}
          <line
            x1={beforeX - 24}
            x2={afterX + barW + 60}
            y1={baselineY}
            y2={baselineY}
            stroke="rgba(255,255,255,0.3)"
          />

          <StackedBar
            x={beforeX}
            y={beforeTopY}
            width={barW}
            segments={beforeSegs}
            unitHeight={barTotalH}
          />
          <StackedBar
            x={afterX}
            y={afterTopY}
            width={barW}
            segments={afterSegs}
            unitHeight={barTotalH}
          />

          {/* Gap bracket: when AFTER bar overshoots client expectation, mark the margin you eat */}
          {gap > 0.005 && (
            <>
              <rect
                x={afterX - 6}
                y={expectedTopY}
                width={barW + 12}
                height={afterTopY < expectedTopY ? expectedTopY - afterTopY : 0}
                fill="rgba(248,113,113,0.16)"
                stroke="rgba(248,113,113,0.7)"
                strokeDasharray="5 3"
              />
              <text
                x={afterX + barW / 2}
                y={(expectedTopY + Math.max(afterTopY, expectedTopY - 40)) / 2 + 4}
                textAnchor="middle"
                fill="#fda4ae"
                fontSize={13}
                fontWeight={700}
              >
                розрив {gapPp} в.п.
              </text>
            </>
          )}

          {/* Saved/delivered zone — between BEFORE top and AFTER top */}
          {deliveredCost < 0.99 && (
            <text
              x={afterX + barW / 2}
              y={(beforeTopY + afterTopY) / 2 + 4}
              textAnchor="middle"
              fill="#86efac"
              fontSize={13}
              fontWeight={600}
            >
              −{Math.round((1 - deliveredCost) * 100)}% доставлено
            </text>
          )}

          <text
            x={(beforeX + afterX + barW) / 2 - 80}
            y={(beforeTopY + baselineY) / 2 + 10}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize={32}
          >
            →
          </text>

          <text
            x={beforeX + barW / 2}
            y={baselineY + 26}
            textAnchor="middle"
            className="chart-title"
          >
            до ШІ · 100%
          </text>
          <text
            x={afterX + barW / 2}
            y={baselineY + 26}
            textAnchor="middle"
            className="chart-title"
          >
            з ШІ · {Math.round(deliveredCost * 100)}%
          </text>
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI value={`−${deliveredPct}%`} label="доставлена економія" color={deliveredColor} />
            <KPI value={`−${demandPct}%`} label="клієнт очікує" color="#ff79c6" />
            <KPI
              value={`${gap > 0 ? '+' : ''}${gapPp} в.п.`}
              label={gap > 0 ? 'маржа, яку зʼїдаєте' : 'запас маржі'}
              color={gapColor}
            />
          </div>
        </div>
      </div>

      <div className="sim-controls-quad">
        <Slider
          label="частка ШІ-роботи"
          min={0}
          max={1}
          step={0.01}
          value={alpha}
          onChange={setAlpha}
          format={(v) => `${Math.round(v * 100)}%`}
        />
        <Slider
          label="токени від ставки людини"
          min={0}
          max={1}
          step={0.01}
          value={tau}
          onChange={setTau}
          format={(v) => `${Math.round(v * 100)}%`}
        />
        <Slider
          label="прискорення людської частини"
          min={1}
          max={3}
          step={0.05}
          value={pi}
          onChange={setPi}
          format={(v) => `${v.toFixed(2)}×`}
        />
        <Slider
          label="клієнт хоче −"
          min={0}
          max={0.7}
          step={0.01}
          value={demand}
          onChange={setDemand}
          format={(v) => `${Math.round(v * 100)}%`}
        />
      </div>

      <p className="slide-footnote">
        Модель ілюстративна. Дефолт (α=50%, τ=50%, π=1×, попит −50%) дає 25% економії і 25 в.п. розриву — арифметика, з якої починається переговори по ставці.
      </p>
    </>
  );
}
