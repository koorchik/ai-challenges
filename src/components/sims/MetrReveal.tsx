import { ChartSvg, CHART_W, CHART_H } from '../charts/Svg';
import { Bar } from '../charts/Bar';
import { useInView } from '../hooks/useInView';

const bars = [
  { label: 'передбачали', value: 24, color: '#facc15' },
  { label: 'відчували', value: 20, color: '#fde68a' },
  { label: 'виміряно', value: -19, color: '#e63946' },
];

export function MetrReveal() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  const margin = { top: 60, right: 60, bottom: 60, left: 100 };
  const innerW = CHART_W - margin.left - margin.right;
  const innerH = CHART_H - margin.top - margin.bottom;
  const zeroY = margin.top + innerH / 2;

  const barWidth = 140;
  const gap = (innerW - bars.length * barWidth) / (bars.length + 1);
  const pixelsPerPct = (innerH / 2) / 30;

  return (
    <div ref={ref}>
      <h2>А ось реальність</h2>
      <ChartSvg>
        <text x={CHART_W / 2} y={36} textAnchor="middle" className="chart-title">
          METR 2025: продуктивність досвідчених розробників із ШІ
        </text>
        <line
          x1={margin.left}
          x2={margin.left + innerW}
          y1={zeroY}
          y2={zeroY}
          stroke="rgba(255,255,255,0.4)"
        />
        <text
          x={margin.left - 12}
          y={zeroY + 4}
          textAnchor="end"
          className="chart-axis"
          fill="rgba(255,255,255,0.6)"
        >
          0%
        </text>

        {bars.map((b, i) => {
          const x = margin.left + gap + i * (barWidth + gap);
          const targetHeight = Math.abs(b.value) * pixelsPerPct;
          const h = inView ? targetHeight : 0;
          const y = b.value >= 0 ? zeroY - h : zeroY;
          return (
            <g key={b.label} style={{ transition: 'opacity 0.6s', opacity: inView ? 1 : 0.1 }}>
              <Bar
                x={x}
                y={y}
                width={barWidth}
                height={h}
                fill={b.color}
                valueLabel={inView ? `${b.value > 0 ? '+' : ''}${b.value}%` : ''}
                labelPosition={b.value >= 0 ? 'above' : 'below'}
              />
              <text
                x={x + barWidth / 2}
                y={b.value >= 0 ? zeroY + 20 : zeroY - 10}
                textAnchor="middle"
                className="chart-label"
                opacity={0.85}
              >
                {b.label}
              </text>
            </g>
          );
        })}
      </ChartSvg>
      <div className="callout">
        <strong>Розрив калібрації ≈ 40 п.п.</strong> Розробники *очікували* +24%, *відчули* +20%, але
        виміряні дані показали <strong>−19%</strong>. Тобто з ШІ на власному великому коді вони працювали
        <strong> повільніше</strong>.
      </div>
      <p className="slide-footnote">
        Джерело: Becker, Rush, Barnes, Rein. «Measuring the Impact of Early-2025 AI on Experienced
        Open-Source Developer Productivity» (METR, липень 2025), n = 246 завдань, 16 досвідчених
        maintainer-ів на власних репозиторіях.
      </p>
    </div>
  );
}
