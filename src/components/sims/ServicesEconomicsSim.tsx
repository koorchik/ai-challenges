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
  const [tau, setTau] = useState(0.7);
  const [discount, setDiscount] = useState(0.5);

  // Project-cost model (baseline = expensive engineer + tokens = 1.0):
  //   expensive_cost = (1 − τ) + τ                     = 1.0
  //   cheap_cost     = (1 − τ)(1 − d) + τ
  //   savings        = (1 − τ) · d
  // At τ=0, d=50% → 50% off. At τ=70%, d=50% → only 15% off.
  const tokens = tau;
  const expEngineer = 1 - tau;
  const cheapEngineer = (1 - tau) * (1 - discount);
  const expensiveCost = expEngineer + tokens;
  const cheapCost = cheapEngineer + tokens;
  const savings = Math.max((1 - tau) * discount, 0);

  const barW = 200;
  const expensiveX = 280;
  const cheapX = 580;
  const barTotalH = 340;
  const baselineY = 410;
  const expensiveTopY = baselineY - expensiveCost * barTotalH;
  const cheapTopY = baselineY - cheapCost * barTotalH;

  const expensiveSegs: Segment[] = [
    { label: 'токени', value: tokens, color: '#facc15' },
    { label: 'інженер', value: expEngineer, color: '#fdba74' },
  ];

  const cheapSegs: Segment[] = [
    { label: 'токени', value: tokens, color: '#facc15' },
    { label: 'інженер', value: cheapEngineer, color: '#fdba74' },
  ];

  const savingsPct = Math.round(savings * 100);
  const savingsLabel = savingsPct > 0 ? `−${savingsPct}%` : '0%';
  const savingsColor = savings >= 0.3 ? '#86efac' : savings >= 0.1 ? '#fde68a' : '#fda4ae';

  return (
    <>
      <h2>Токени стирають перевагу дешевшого інженера</h2>
      <p className="lede">
        Ціна токенів однакова всюди. Ціна інженера — ні.
      </p>

      <div className="sim-grid">
        <ChartSvg height={480} style={{ maxHeight: '8em' }}>
          {/* 100% reference line */}
          <line
            x1={expensiveX - 24}
            x2={cheapX + barW + 24}
            y1={baselineY - barTotalH}
            y2={baselineY - barTotalH}
            stroke="rgba(255,255,255,0.2)"
            strokeDasharray="4 4"
          />
          <text
            x={cheapX + barW + 30}
            y={baselineY - barTotalH + 4}
            fill="rgba(255,255,255,0.45)"
            fontSize={12}
          >
            100%
          </text>

          {/* Baseline */}
          <line
            x1={expensiveX - 24}
            x2={cheapX + barW + 24}
            y1={baselineY}
            y2={baselineY}
            stroke="rgba(255,255,255,0.3)"
          />

          <StackedBar
            x={expensiveX}
            y={expensiveTopY}
            width={barW}
            segments={expensiveSegs}
            unitHeight={barTotalH}
          />
          <StackedBar
            x={cheapX}
            y={cheapTopY}
            width={barW}
            segments={cheapSegs}
            unitHeight={barTotalH}
          />

          {/* Saved zone — between expensive top and cheap top */}
          {savingsPct > 0 && (
            <text
              x={cheapX + barW / 2}
              y={(expensiveTopY + cheapTopY) / 2 + 4}
              textAnchor="middle"
              fill="#86efac"
              fontSize={14}
              fontWeight={700}
            >
              −{savingsPct}%
            </text>
          )}

          <text
            x={expensiveX + barW / 2}
            y={baselineY + 26}
            textAnchor="middle"
            className="chart-title"
          >
            дорогий інженер · 100%
          </text>
          <text
            x={cheapX + barW / 2}
            y={baselineY + 26}
            textAnchor="middle"
            className="chart-title"
          >
            дешевший інженер (−{Math.round(discount * 100)}%) · {Math.round(cheapCost * 100)}%
          </text>
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI value={savingsLabel} label="реальна знижка проєкту" color={savingsColor} />
          </div>
        </div>
      </div>

      <div className="sim-controls-quad" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Slider
          label="частка токенів у вартості"
          min={0}
          max={1}
          step={0.01}
          value={tau}
          onChange={setTau}
          format={(v) => `${Math.round(v * 100)}%`}
        />
        <Slider
          label="знижка на інженера"
          min={0}
          max={0.8}
          step={0.01}
          value={discount}
          onChange={setDiscount}
          format={(v) => `${Math.round(v * 100)}%`}
        />
      </div>

      <p className="slide-footnote">
        Без ШІ: −50% інженер = −50% проєкту. При 70% токенів — лише ~15%.
      </p>
    </>
  );
}
