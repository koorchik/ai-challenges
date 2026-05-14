// 19 · Студенти · Junior job-postings 2022→2026
import { scaleLinear } from 'd3-scale';
import { ChartSvg, CHART_W } from '../components/charts/Svg';
import { Line } from '../components/charts/Line';

const juniorIndex: { date: number; value: number }[] = [
  { date: 2022.0, value: 100 },
  { date: 2022.5, value: 110 },
  { date: 2023.0, value: 75 },
  { date: 2023.5, value: 58 },
  { date: 2024.0, value: 50 },
  { date: 2024.5, value: 45 },
  { date: 2025.0, value: 42 },
  { date: 2025.5, value: 40 },
  { date: 2026.25, value: 38 },
];

const seniorIndex: { date: number; value: number }[] = [
  { date: 2022.0, value: 100 },
  { date: 2022.5, value: 108 },
  { date: 2023.0, value: 92 },
  { date: 2023.5, value: 85 },
  { date: 2024.0, value: 82 },
  { date: 2024.5, value: 84 },
  { date: 2025.0, value: 88 },
  { date: 2025.5, value: 92 },
  { date: 2026.25, value: 95 },
];

export function Slide22() {
  const margin = { top: 50, right: 200, bottom: 50, left: 70 };
  const innerW = CHART_W - margin.left - margin.right;
  const innerH = 320;

  const xs = scaleLinear().domain([2022, 2026.5]).range([margin.left, margin.left + innerW]);
  const ys = scaleLinear().domain([0, 130]).range([margin.top + innerH, margin.top]);

  const juniorPts = juniorIndex.map((d) => ({ x: xs(d.date), y: ys(d.value) }));
  const seniorPts = seniorIndex.map((d) => ({ x: xs(d.date), y: ys(d.value) }));

  return (
    <>
      <h2>Так — junior-вакансій справді менше</h2>
      <p className="lede">
        Junior-роль як «implement-from-spec» — саме та задача, де ШІ найсильніший.
        Senior-вакансії <em>пережили</em> 2023–2024, а junior — впали втричі.
      </p>

      <ChartSvg height={400}>
        <text x={CHART_W / 2 - 50} y={32} textAnchor="middle" className="chart-title">
          Індекс відкритих вакансій (січ. 2022 = 100), tech, глобально
        </text>

        {[0, 50, 100].map((v) => (
          <g key={v}>
            <line
              x1={margin.left}
              x2={margin.left + innerW}
              y1={ys(v)}
              y2={ys(v)}
              stroke="rgba(255,255,255,0.08)"
            />
            <text x={margin.left - 8} y={ys(v) + 4} textAnchor="end" fill="rgba(255,255,255,0.6)" fontSize={11}>
              {v}
            </text>
          </g>
        ))}

        {[2022, 2023, 2024, 2025, 2026].map((yr) => (
          <text
            key={yr}
            x={xs(yr)}
            y={margin.top + innerH + 22}
            textAnchor="middle"
            fill="rgba(255,255,255,0.6)"
            fontSize={11}
          >
            {yr}
          </text>
        ))}

        <Line points={seniorPts} stroke="#86efac" strokeWidth={3} />
        <Line points={juniorPts} stroke="#fda4ae" strokeWidth={3} />

        <text x={margin.left + innerW + 12} y={ys(95)} fill="#86efac" fontSize={12} fontWeight={600}>
          senior ≈ 95
        </text>
        <text x={margin.left + innerW + 12} y={ys(38)} fill="#fda4ae" fontSize={12} fontWeight={600}>
          junior ≈ 38
        </text>
      </ChartSvg>

      <p className="callout">
        Це <strong>не</strong> кінець професії. Це означає, що <em>вхідна планка піднялася</em>: щоб тебе
        найняли junior-ом, треба показати те, що ШІ ще не робить — смак, доведення до кінця,
        вміння працювати в команді.
      </p>

      <p className="slide-footnote">
        Стилізовано за: LinkedIn Economic Graph 2024–2025, Indeed Hiring Lab, ITJobsWatch, DOU job index, Stack
        Overflow Developer Survey 2024–2025.
      </p>
    </>
  );
}
