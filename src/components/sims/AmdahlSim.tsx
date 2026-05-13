import { useState } from 'react';
import { ChartSvg } from '../charts/Svg';
import { Slider } from '../charts/Slider';
import { KPI } from '../charts/KPI';

type Segment = { label: string; value: number; color: string };

function StackedBar({
  x,
  y,
  width,
  height,
  segments,
  labelThreshold = 7,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  segments: Segment[];
  labelThreshold?: number;
}) {
  let offset = 0;
  return (
    <g transform={`translate(${x}, ${y})`}>
      {segments.map((s) => {
        const h = (s.value / 100) * height;
        const rect = (
          <g key={s.label} transform={`translate(0, ${offset})`}>
            <rect width={width} height={h} fill={s.color} opacity={0.9} />
            {s.value >= labelThreshold && (
              <text
                x={width / 2}
                y={h / 2 + 4}
                textAnchor="middle"
                fill="rgba(0,0,0,0.85)"
                fontSize={12}
                fontWeight={600}
              >
                {s.label} · {Math.round(s.value)}%
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

export function AmdahlSim() {
  const [alpha, setAlpha] = useState(0.75);
  const [beta, setBeta] = useState(0.2);
  const [gamma, setGamma] = useState(1.5);
  const [f, setF] = useState(0.45);

  // Volume-conserving model: AI takes the easier α share, humans the harder (1−α);
  // γ = complexity ratio of human-written vs AI-written code.
  // At α=0 the residual IS the average → γ has no effect (newTotal = 1).
  const denomCoding = alpha + (1 - alpha) * gamma;
  const codingFactor = (beta * alpha + (1 - alpha) * gamma) / denomCoding;
  const newTotal = 1 - f + f * codingFactor;
  const realGain = 1 / Math.max(newTotal, 0.01);
  const timeSaved = 1 - newTotal;
  const naivePromise = alpha < 0.999 ? 1 / (1 - alpha) : 99;

  const nonCodePct = (1 - f) * 100;
  const aiReviewPct = (f * beta * alpha * 100) / denomCoding;
  const humanCodePct = (f * (1 - alpha) * gamma * 100) / denomCoding;

  const beforeSegs: Segment[] = [
    { label: 'кодування', value: f * 100, color: '#facc15' },
    { label: 'все, що не код', value: nonCodePct, color: '#94a3b8' },
  ];

  // AFTER segments normalized to sum to 100% of the AFTER bar's own height
  // (bar height itself encodes total — segments are proportions within it).
  const denom = Math.max(newTotal, 0.001);
  const afterSegs: Segment[] = [
    { label: 'ревʼю ШІ', value: aiReviewPct / denom, color: '#bfdbfe' },
    { label: 'людський код', value: humanCodePct / denom, color: '#fdba74' },
    { label: 'все, що не код', value: nonCodePct / denom, color: '#94a3b8' },
  ];

  const barW = 200;
  const beforeX = 250;
  const afterX = 550;
  const barTotalH = 380; // BEFORE bar height = 100% reference (tall)
  const maxRatio = 1.4; // newTotal ≤ 1 in current model; small buffer for safety
  const renderRatio = Math.min(newTotal, maxRatio);
  const baselineY = 470;
  const beforeTopY = baselineY - barTotalH;
  const afterBarH = barTotalH * renderRatio;
  const afterTopY = baselineY - afterBarH;

  return (
    <>
      <h2>Закон Амдала для AI-кодування</h2>
      <p className="lede">
        Прискорюємо тільки кодування — приріст обмежений його часткою у дні розробника.
      </p>

      <div className="sim-grid">
        <ChartSvg height={550} style={{ maxHeight: '11em' }}>
          {/* 100% reference line spanning both bars */}
        <line
          x1={beforeX - 24}
          x2={afterX + barW + 60}
          y1={beforeTopY}
          y2={beforeTopY}
          stroke="rgba(255,255,255,0.2)"
          strokeDasharray="4 4"
        />
        <text x={afterX + barW + 12} y={beforeTopY + 4} fill="rgba(255,255,255,0.45)" fontSize={12}>
          100%
        </text>

        {/* Baseline */}
        <line
          x1={beforeX - 24}
          x2={afterX + barW + 60}
          y1={baselineY}
          y2={baselineY}
          stroke="rgba(255,255,255,0.3)"
        />

        <StackedBar x={beforeX} y={beforeTopY} width={barW} height={barTotalH} segments={beforeSegs} />
        <StackedBar x={afterX} y={afterTopY} width={barW} height={afterBarH} segments={afterSegs} />

        {/* Delta annotation: overhead bracket (red) or saved zone (green) */}
        {newTotal > 1.01 && (
          <>
            <rect
              x={afterX - 2}
              y={afterTopY}
              width={barW + 4}
              height={beforeTopY - afterTopY}
              fill="none"
              stroke="rgba(248,113,113,0.7)"
              strokeDasharray="5 3"
            />
            <text
              x={afterX + barW / 2}
              y={afterTopY - 8}
              textAnchor="middle"
              fill="#fda4ae"
              fontSize={13}
              fontWeight={600}
            >
              +{Math.round((newTotal - 1) * 100)}% перевитрата
            </text>
          </>
        )}
        {newTotal < 0.99 && (
          <>
            <rect
              x={afterX}
              y={beforeTopY}
              width={barW}
              height={afterTopY - beforeTopY}
              fill="rgba(134,239,172,0.18)"
              stroke="rgba(134,239,172,0.55)"
              strokeDasharray="4 3"
            />
            <text
              x={afterX + barW / 2}
              y={(beforeTopY + afterTopY) / 2 + 4}
              textAnchor="middle"
              fill="#86efac"
              fontSize={13}
              fontWeight={600}
            >
              −{Math.round((1 - newTotal) * 100)}% економія
            </text>
          </>
        )}

        <text
          x={500}
          y={(beforeTopY + baselineY) / 2 + 10}
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize={32}
        >
          →
        </text>

        {/* Bar titles below baseline */}
        <text x={beforeX + barW / 2} y={baselineY + 26} textAnchor="middle" className="chart-title">
          до ШІ · 100%
        </text>
        <text x={afterX + barW / 2} y={baselineY + 26} textAnchor="middle" className="chart-title">
          з ШІ · {Math.round(newTotal * 100)}%
        </text>
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI value={`${realGain.toFixed(2)}×`} label="реальний приріст" color="#facc15" />
            <KPI
              value={`${(timeSaved * 100).toFixed(0)}%`}
              label="економія часу"
              color={timeSaved >= 0 ? '#86efac' : '#fda4ae'}
            />
            <KPI value={`${naivePromise.toFixed(1)}×`} label="наївна обіцянка" color="#94a3b8" />
          </div>
        </div>
      </div>

      <div className="sim-controls-quad">
        <Slider
          label="частка ШІ-коду"
          min={0}
          max={1}
          step={0.01}
          value={alpha}
          onChange={setAlpha}
          format={(v) => `${Math.round(v * 100)}%`}
        />
        <Slider
          label="ревʼю ШІ-коду"
          min={0}
          max={0.6}
          step={0.01}
          value={beta}
          onChange={setBeta}
          format={(v) => `${Math.round(v * 100)}%`}
        />
        <Slider
          label="складність решти"
          min={1}
          max={3}
          step={0.05}
          value={gamma}
          onChange={setGamma}
          format={(v) => `${v.toFixed(2)}×`}
        />
        <Slider
          label="доля кодування"
          min={0.1}
          max={0.8}
          step={0.01}
          value={f}
          onChange={setF}
          format={(v) => `${Math.round(v * 100)}%`}
        />
      </div>

      <p className="slide-footnote">
        Заявка{' '}
        <a href="https://www.youtube.com/watch?v=11PBno-cJ1g" target="_blank" rel="noreferrer">
          Google Cloud Next '26
        </a>
        : ~75% коду пишеться ШІ. Контрапункт — DORA 2024: 75% розробників відчували приріст, throughput
        команд −1.5%. Amdahl (1967): неприскорена частка задає стелю загального прискорення.
      </p>
    </>
  );
}
