// 45 · Бізнеси · Крива вартості MVP
import { scaleLinear, scaleLog } from 'd3-scale';
import { ChartSvg, CHART_W } from '../components/charts/Svg';
import { Line } from '../components/charts/Line';
import { Annotation } from '../components/charts/Annotation';

type Point = { year: number; cost: number; label: string };

const data: Point[] = [
  { year: 2005, cost: 100_000, label: 'on-prem, власний фреймворк' },
  { year: 2008, cost: 50_000, label: 'Rails + Heroku' },
  { year: 2011, cost: 25_000, label: 'AWS, mobile-first' },
  { year: 2014, cost: 15_000, label: 'Stripe, Twilio, SaaS-кубики' },
  { year: 2018, cost: 8_000, label: 'JAMstack, no-code' },
  { year: 2022, cost: 4_000, label: 'GPT-стартери' },
  { year: 2025, cost: 1_500, label: 'LLM-codegen + IDE-агенти' },
  { year: 2026, cost: 600, label: 'агенти "ship-a-feature"' },
];

export function Slide10() {
  const margin = { top: 50, right: 200, bottom: 60, left: 90 };
  const innerW = CHART_W - margin.left - margin.right;
  const innerH = 380;

  const x = scaleLinear()
    .domain([2005, 2026])
    .range([margin.left, margin.left + innerW]);

  const y = scaleLog()
    .domain([300, 200_000])
    .range([margin.top + innerH, margin.top]);

  const pts = data.map((d) => ({ x: x(d.year), y: y(d.cost) }));

  return (
    <>
      <h2>Скільки коштувало запустити MVP</h2>
      <p className="lede">
        Двадцять років вартість запуску падала на ~порядок щодесятиліття. ШІ — наступний крок тієї ж кривої.
      </p>

      <ChartSvg height={420}>
        <text x={CHART_W / 2 - 50} y={36} textAnchor="middle" className="chart-title">
          Орієнтовна вартість MVP (USD, лог. шкала)
        </text>
        {[1000, 10_000, 100_000].map((v) => (
          <g key={v}>
            <line
              x1={margin.left}
              x2={margin.left + innerW}
              y1={y(v)}
              y2={y(v)}
              stroke="rgba(255,255,255,0.08)"
            />
            <text x={margin.left - 10} y={y(v) + 4} textAnchor="end" fill="rgba(255,255,255,0.6)" fontSize={11}>
              ${v >= 1000 ? `${v / 1000}k` : v}
            </text>
          </g>
        ))}
        <line
          x1={margin.left}
          y1={margin.top + innerH}
          x2={margin.left + innerW}
          y2={margin.top + innerH}
          stroke="rgba(255,255,255,0.25)"
        />
        {[2005, 2010, 2015, 2020, 2025].map((yr) => (
          <text
            key={yr}
            x={x(yr)}
            y={margin.top + innerH + 22}
            textAnchor="middle"
            fill="rgba(255,255,255,0.6)"
            fontSize={11}
          >
            {yr}
          </text>
        ))}

        <Line points={pts.slice(0, 7)} stroke="#facc15" strokeWidth={3} />
        <Line points={pts.slice(6)} stroke="#facc15" strokeWidth={3} dasharray="6 5" />
        <text
          x={pts[7].x + 10}
          y={pts[7].y + 4}
          fill="rgba(250,204,21,0.85)"
          fontSize={11}
          fontStyle="italic"
        >
          проєкція
        </text>
        {data.map((d, i) => (
          <Annotation
            key={d.year}
            x={pts[i].x}
            y={pts[i].y}
            dx={i % 2 === 0 ? 14 : -14}
            dy={i % 2 === 0 ? -22 : 22}
            align={i % 2 === 0 ? 'start' : 'end'}
            showLeader={false}
          >
            {d.label}
          </Annotation>
        ))}
      </ChartSvg>

      <p className="callout callout-yellow">
        Наслідок: <strong>побудувати</strong> — більше не вузьке місце. Ним стає{' '}
        <strong>дистрибуція та утримання</strong>. Хороша новина для одинаків; погана — для тонких SaaS-обгорток.
      </p>

      <p className="slide-footnote">
        Дані-орієнтири: a16z «cost of starting a software company» серії (2010–2024); розрахунки автора.
      </p>
    </>
  );
}
