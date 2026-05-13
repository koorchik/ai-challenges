import { useState } from 'react';
import { ChartSvg, CHART_W } from '../charts/Svg';
import { Slider } from '../charts/Slider';
import { KPI } from '../charts/KPI';

// Cost-per-feature model:
//   Kyiv  = $40/hr labor / mult  + $10 coordination overhead per feature
//   Berlin = $80/hr labor / mult + $0 coordination
// As AI productivity multiplier grows, labor cost collapses for both —
// but the fixed Kyiv coordination overhead doesn't, eroding the discount.
const KYIV_LABOR = 40;
const KYIV_COORD = 10;
const BERLIN_LABOR = 80;
const BERLIN_COORD = 0;

export function OutsourcingErosion() {
  const [mult, setMult] = useState(1);

  const kyivLabor = KYIV_LABOR / mult;
  const kyivTotal = kyivLabor + KYIV_COORD;
  const berlinLabor = BERLIN_LABOR / mult;
  const berlinTotal = berlinLabor + BERLIN_COORD;
  const discountAbs = berlinTotal - kyivTotal;
  const discountPct = (discountAbs / berlinTotal) * 100;

  const maxVal = 90;
  const margin = { top: 30, right: 60, bottom: 55, left: 100 };
  const chartW = CHART_W - margin.left - margin.right;
  const chartH = 220;
  const barW = 140;
  const gap = 200;
  const centerX = margin.left + chartW / 2;

  const yScale = (v: number) => margin.top + chartH - (v / maxVal) * chartH;

  return (
    <>
      <h2>Ерозія цінового арбітражу України</h2>
      <p className="lede">
        ШІ прискорює і Київ, і Берлін однаково. У <em>%</em> знижка тримається; у <em>$</em> — тане.
      </p>

      <ChartSvg height={280}>
        {/* y-axis */}
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={margin.top + chartH}
          stroke="rgba(255,255,255,0.25)"
        />
        {[0, 30, 60, 90].map((v) => (
          <g key={v}>
            <text x={margin.left - 10} y={yScale(v) + 4} textAnchor="end" fill="rgba(255,255,255,0.6)" fontSize={12}>
              ${v}
            </text>
            <line
              x1={margin.left}
              x2={margin.left + chartW}
              y1={yScale(v)}
              y2={yScale(v)}
              stroke="rgba(255,255,255,0.06)"
            />
          </g>
        ))}
        <text
          transform={`translate(${margin.left - 50}, ${margin.top + chartH / 2}) rotate(-90)`}
          textAnchor="middle"
          fill="rgba(255,255,255,0.7)"
          fontSize={12}
        >
          $ на фічу
        </text>

        {/* Kyiv */}
        <g>
          {/* labor */}
          <rect
            x={centerX - gap / 2 - barW / 2}
            y={yScale(kyivLabor)}
            width={barW}
            height={(kyivLabor / maxVal) * chartH}
            fill="#facc15"
            rx={6}
          />
          {/* coord (stacked on top) */}
          <rect
            x={centerX - gap / 2 - barW / 2}
            y={yScale(kyivTotal)}
            width={barW}
            height={(KYIV_COORD / maxVal) * chartH}
            fill="rgba(250,204,21,0.4)"
            rx={6}
          />
          <text
            x={centerX - gap / 2}
            y={yScale(kyivTotal) - 10}
            textAnchor="middle"
            fontWeight={700}
            fill="#facc15"
            fontSize={18}
          >
            ${kyivTotal.toFixed(0)}
          </text>
          <text
            x={centerX - gap / 2}
            y={margin.top + chartH + 22}
            textAnchor="middle"
            className="chart-label"
          >
            Київ ($40/год)
          </text>
          <text
            x={centerX - gap / 2}
            y={margin.top + chartH + 40}
            textAnchor="middle"
            className="chart-annotation"
            opacity={0.6}
          >
            праця ${kyivLabor.toFixed(0)} + координація $10
          </text>
        </g>

        {/* Berlin */}
        <g>
          <rect
            x={centerX + gap / 2 - barW / 2}
            y={yScale(berlinLabor)}
            width={barW}
            height={(berlinLabor / maxVal) * chartH}
            fill="#bfdbfe"
            rx={6}
          />
          <text
            x={centerX + gap / 2}
            y={yScale(berlinTotal) - 10}
            textAnchor="middle"
            fontWeight={700}
            fill="#bfdbfe"
            fontSize={18}
          >
            ${berlinTotal.toFixed(0)}
          </text>
          <text
            x={centerX + gap / 2}
            y={margin.top + chartH + 22}
            textAnchor="middle"
            className="chart-label"
          >
            Берлін ($80/год)
          </text>
          <text
            x={centerX + gap / 2}
            y={margin.top + chartH + 40}
            textAnchor="middle"
            className="chart-annotation"
            opacity={0.6}
          >
            праця ${berlinLabor.toFixed(0)} + координація $0
          </text>
        </g>
      </ChartSvg>

      <div className="sim-controls-single">
        <Slider
          label="продуктивність ШІ (для обох)"
          min={1}
          max={6}
          step={0.1}
          value={mult}
          onChange={setMult}
          format={(v) => `${v.toFixed(1)}×`}
        />
        <div className="kpi-row" style={{ margin: 0 }}>
          <KPI
            value={discountAbs > 0 ? `$${discountAbs.toFixed(0)}` : `−$${Math.abs(discountAbs).toFixed(0)}`}
            label="абсолютна знижка"
            color={discountAbs > 0 ? '#86efac' : '#e63946'}
          />
          <KPI
            value={`${discountPct.toFixed(0)}%`}
            label="відносна знижка"
            color={discountPct > 0 ? '#86efac' : '#e63946'}
          />
        </div>
      </div>

      <p
        className="callout"
        style={{
          borderLeftColor: discountAbs <= 0 ? '#e63946' : '#facc15',
          background: discountAbs <= 0 ? 'rgba(230,57,70,0.1)' : 'rgba(250,204,21,0.08)',
        }}
      >
        {discountAbs > 0 ? (
          <>
            До ШІ — економія <strong>$40/фічу</strong>. При <strong>{mult.toFixed(1)}×</strong> —{' '}
            <strong>${discountAbs.toFixed(0)}</strong>. Коли різниця менша за координацію — аутсорс не окуповується.
          </>
        ) : (
          <>
            <strong>Берлін уже дешевший.</strong> При {mult.toFixed(1)}× координація перевершує економію на праці.
          </>
        )}
      </p>
    </>
  );
}
