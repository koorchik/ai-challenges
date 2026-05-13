// 43 · Бізнеси · Нова структура витрат
import { useEffect, useState } from 'react';
import { ChartSvg } from '../components/charts/Svg';
import { Bar } from '../components/charts/Bar';
import { useInView } from '../components/hooks/useInView';

type Cost = { label: string; before: number; after: number };

const costs: Cost[] = [
  { label: 'оплата праці', before: 70, after: 45 },
  { label: 'інференс / токени', before: 1, after: 8 },
  { label: 'інфра / клауд', before: 12, after: 15 },
  { label: 'інструменти / SaaS', before: 5, after: 10 },
  { label: 'evals / якість', before: 2, after: 8 },
  { label: 'інше', before: 10, after: 14 },
];

type Year = 2023 | 2026;

export function Slide36() {
  const [year, setYear] = useState<Year>(2023);
  const [auto, setAuto] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  // Auto-toggle when "auto" is on and the slide is visible — otherwise the
  // animation burns cycles while the audience is on another slide.
  useEffect(() => {
    if (!auto || !inView) return;
    const id = window.setInterval(() => setYear((y) => (y === 2023 ? 2026 : 2023)), 2200);
    return () => window.clearInterval(id);
  }, [auto, inView]);

  const margin = { top: 60, left: 110, right: 80 };
  const baselineY = 360;
  const maxPct = 80;
  const barW = 70;
  const groupGap = 60;
  const heightPerPct = 270 / maxPct;
  const beforeColor = '#bfdbfe';
  const afterColor = '#facc15';
  const activeColor = year === 2023 ? beforeColor : afterColor;

  return (
    <div ref={ref}>
      <h2>Структура витрат на R&amp;D — куди вони зсуваються</h2>
      <p className="lede">
        Ілюстративний сценарій продуктової компанії, не індустріальне середнє. Перемикайте 2023 ↔ 2026 —
        бачите паттерн: <em>інференс, інструменти й evals</em> стають рядками в P&amp;L, а частка зарплат скорочується.
      </p>

      <div className="year-toggle">
        <button
          type="button"
          className={`preset-btn ${year === 2023 ? 'active' : ''}`}
          onClick={() => { setAuto(false); setYear(2023); }}
        >
          2023
        </button>
        <button
          type="button"
          className={`preset-btn ${year === 2026 ? 'active' : ''}`}
          onClick={() => { setAuto(false); setYear(2026); }}
        >
          2026
        </button>
        <button
          type="button"
          className={`preset-btn ${auto ? 'active' : ''}`}
          onClick={() => setAuto((a) => !a)}
          aria-pressed={auto}
        >
          {auto ? '⏸ пауза' : '▶ авто'}
        </button>
      </div>

      <ChartSvg height={360}>
        <text x={500} y={36} textAnchor="middle" className="chart-title">
          Орієнтовна структура R&amp;D-витрат продуктової компанії (%) — {year}
        </text>

        {[0, 20, 40, 60, 80].map((v) => (
          <g key={v}>
            <line
              x1={margin.left}
              x2={1000 - margin.right}
              y1={baselineY - v * heightPerPct}
              y2={baselineY - v * heightPerPct}
              stroke="rgba(255,255,255,0.06)"
            />
            <text x={margin.left - 8} y={baselineY - v * heightPerPct + 4} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize={11}>
              {v}%
            </text>
          </g>
        ))}

        {costs.map((c, i) => {
          const value = year === 2023 ? c.before : c.after;
          const otherValue = year === 2023 ? c.after : c.before;
          const h = value * heightPerPct;
          const hOther = otherValue * heightPerPct;
          const gx = margin.left + 20 + i * (barW + groupGap);

          return (
            <g key={c.label}>
              {/* Ghost outline of the other year for comparison. */}
              <rect
                x={gx}
                y={baselineY - hOther}
                width={barW}
                height={hOther}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth={1}
                strokeDasharray="3 4"
                rx={4}
                style={{ transition: 'y 0.55s ease, height 0.55s ease' }}
              />
              <Bar
                x={gx}
                y={baselineY - h}
                width={barW}
                height={h}
                fill={activeColor}
                valueLabel={`${value}%`}
              />
              <text x={gx + barW / 2} y={baselineY + 22} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize={11}>
                {c.label}
              </text>
              {/* Delta tag */}
              <text
                x={gx + barW / 2}
                y={baselineY + 38}
                textAnchor="middle"
                fill={c.after > c.before ? '#86efac' : '#fda4ae'}
                fontSize={10}
                fontWeight={600}
                opacity={0.85}
              >
                {c.after > c.before ? '+' : ''}{c.after - c.before}пп
              </text>
            </g>
          );
        })}

        {/* legend */}
        <g transform={`translate(820, 60)`}>
          <rect width={14} height={14} fill={beforeColor} opacity={year === 2023 ? 1 : 0.35} style={{ transition: 'opacity 0.4s ease' }} />
          <text x={22} y={11} fill="rgba(255,255,255,0.8)" fontSize={12}>2023</text>
          <rect y={22} width={14} height={14} fill={afterColor} opacity={year === 2026 ? 1 : 0.35} style={{ transition: 'opacity 0.4s ease' }} />
          <text x={22} y={33} fill="rgba(255,255,255,0.8)" fontSize={12}>2026</text>
          <rect y={44} width={14} height={14} fill="none" stroke="rgba(255,255,255,0.5)" strokeDasharray="3 3" />
          <text x={22} y={55} fill="rgba(255,255,255,0.6)" fontSize={11}>інший рік</text>
        </g>
      </ChartSvg>

      <p className="callout callout-yellow">
        Інференс <em>дешевшає</em> ~10×/рік, тож абсолютна сума на токени росте повільніше за частку.
        Реальна історія — менші команди + більше витрат на якість, не «токени з'їли бюджет».
      </p>

      <p className="slide-footnote">
        Орієнтири: a16z «Cost of AI» 2025 (тренд цін інференсу); Stack Overflow Developer Survey 2024–25
        (розмір команд); конкретний міксей — оцінка автора, не індустріальна стат. вибірка.
      </p>
    </div>
  );
}
