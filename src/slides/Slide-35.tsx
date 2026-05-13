// 35 · Розробники · Cui-крива: продуктивність × досвід
import { scaleLinear } from 'd3-scale';
import { ChartSvg, CHART_W } from '../components/charts/Svg';
import { Line } from '../components/charts/Line';

// Stylized Cui et al. 2024 — productivity gain (%) as function of years of experience.
// Smooth curve through anchor points {<1y: 45%, 2y: 35%, 5y: 22%, 8y: 15%, 12y: 10%, 20y: 5%}.
const curve = [
  { exp: 0.5, gain: 45 },
  { exp: 2, gain: 35 },
  { exp: 4, gain: 27 },
  { exp: 6, gain: 21 },
  { exp: 8, gain: 16 },
  { exp: 12, gain: 11 },
  { exp: 16, gain: 7 },
  { exp: 20, gain: 5 },
];

const personas = [
  { exp: 1, gain: 42, label: 'ти, якщо junior', color: '#86efac', desc: '~+40%: великий виграш, але ще треба навчитися верифікувати' },
  { exp: 5, gain: 22, label: 'ти, якщо mid', color: '#fde68a', desc: '~+22%: впізнаваний приріст, ризик переоцінити' },
  { exp: 14, gain: 9, label: 'ти, якщо senior', color: '#fda4ae', desc: '~+10% або −19% на реальних кодбейсах (METR)' },
];

export function Slide29() {
  const margin = { top: 60, right: 250, bottom: 60, left: 70 };
  const innerW = CHART_W - margin.left - margin.right;
  const innerH = 340;

  const xs = scaleLinear().domain([0, 20]).range([margin.left, margin.left + innerW]);
  const ys = scaleLinear().domain([-25, 55]).range([margin.top + innerH, margin.top]);

  const pts = curve.map((d) => ({ x: xs(d.exp), y: ys(d.gain) }));

  return (
    <>
      <h2>Чим більше досвіду — тим менший виграш від ШІ</h2>
      <p className="lede">
        Знайдіть свою точку. На бойлерплейті сеньйори вже швидкі — там ШІ дає менше.
      </p>

      <ChartSvg height={360}>
        <text x={CHART_W / 2 - 80} y={36} textAnchor="middle" className="chart-title">
          Стилізовано за Cui et al. 2024 — приріст продуктивності у функції досвіду
        </text>

        {/* gridlines */}
        {[0, 20, 40].map((v) => (
          <g key={v}>
            <line
              x1={margin.left}
              x2={margin.left + innerW}
              y1={ys(v)}
              y2={ys(v)}
              stroke="rgba(255,255,255,0.06)"
            />
            <text x={margin.left - 8} y={ys(v) + 4} textAnchor="end" fill="rgba(255,255,255,0.6)" fontSize={11}>
              +{v}%
            </text>
          </g>
        ))}
        <line
          x1={margin.left}
          x2={margin.left + innerW}
          y1={ys(-20)}
          y2={ys(-20)}
          stroke="rgba(230,57,70,0.2)"
          strokeDasharray="4 4"
        />
        <text x={margin.left - 8} y={ys(-19) + 4} textAnchor="end" fill="#fda4ae" fontSize={11}>
          −19%
        </text>
        <text x={margin.left + innerW + 8} y={ys(-19) + 4} fill="#fda4ae" fontSize={10}>
          METR на реальних задачах
        </text>

        {/* zero line */}
        <line
          x1={margin.left}
          x2={margin.left + innerW}
          y1={ys(0)}
          y2={ys(0)}
          stroke="rgba(255,255,255,0.25)"
        />

        {/* x-axis */}
        {[0, 5, 10, 15, 20].map((v) => (
          <text
            key={v}
            x={xs(v)}
            y={margin.top + innerH + 22}
            textAnchor="middle"
            fill="rgba(255,255,255,0.6)"
            fontSize={11}
          >
            {v}р
          </text>
        ))}
        <text
          x={margin.left + innerW / 2}
          y={margin.top + innerH + 42}
          textAnchor="middle"
          fill="rgba(255,255,255,0.6)"
          fontSize={11}
        >
          років досвіду
        </text>

        <Line points={pts} stroke="#facc15" strokeWidth={2.5} />

        {personas.map((p) => (
          <g key={p.label}>
            <circle cx={xs(p.exp)} cy={ys(p.gain)} r={7} fill={p.color} />
            <text
              x={xs(p.exp)}
              y={ys(p.gain) - 14}
              textAnchor="middle"
              fill={p.color}
              fontSize={11}
              fontWeight={700}
            >
              {p.label}
            </text>
            <text
              x={xs(p.exp)}
              y={ys(p.gain) + 22}
              textAnchor="middle"
              fill={p.color}
              fontSize={11}
              fontWeight={600}
            >
              {p.gain > 0 ? '+' : ''}
              {p.gain}%
            </text>
          </g>
        ))}
      </ChartSvg>

      <p className="callout">
        Приріст від ШІ — функція <em>чого</em> ви робите, не <em>хто</em> ви. Виграє той, хто ставить ШІ
        на бойлерплейт + чернетки, а людину — на смак, інтеграцію, аудит.
      </p>

      <p className="slide-footnote">
        Cui et al. 2024 (n=4867) — крива стилізована, паттерн «менше досвіду — більший виграш»
        з паперу; METR 2025 — для верхньої когорти на мейнтейнерських задачах.
      </p>
    </>
  );
}
