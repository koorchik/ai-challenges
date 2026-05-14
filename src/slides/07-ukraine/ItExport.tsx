import { scaleLinear } from 'd3-scale';
import { ChartSvg, CHART_W } from '../../components/charts/Svg';
import { Line } from '../../components/charts/Line';
import { Annotation } from '../../components/charts/Annotation';

// NBU balance-of-payments, IT services exports (USD billion), annual.
const exports = [
  { year: 2017, value: 3.05 },
  { year: 2018, value: 3.86 },
  { year: 2019, value: 4.17 },
  { year: 2020, value: 5.04 },
  { year: 2021, value: 7.34 },
  { year: 2022, value: 7.35 },
  { year: 2023, value: 6.67 },
  { year: 2024, value: 6.45 },
];

export default function ItExport() {
  const margin = { top: 60, right: 130, bottom: 60, left: 70 };
  const innerW = CHART_W - margin.left - margin.right;
  const innerH = 320;

  const xs = scaleLinear().domain([2017, 2024]).range([margin.left, margin.left + innerW]);
  const ys = scaleLinear().domain([0, 8]).range([margin.top + innerH, margin.top]);
  const pts = exports.map((d) => ({ x: xs(d.year), y: ys(d.value) }));

  const peak = exports.find((d) => d.year === 2021)!;
  const latest = exports[exports.length - 1];

  return (
    <>
      <h2>Експорт IT-послуг України: пік позаду</h2>
      <p className="lede">
        Реальні цифри НБУ. Війна не зупинила галузь у 2022. Але вже 2 роки поспіль —{' '}
        <strong>спад</strong>, попри глобальний AI-бум. Це не випадковість, це сигнал.
      </p>

      <ChartSvg height={400}>
        <text x={CHART_W / 2 - 50} y={32} textAnchor="middle" className="chart-title">
          Експорт IT-послуг, $ млрд (НБУ, баланс платежів)
        </text>

        {[0, 2, 4, 6, 8].map((v) => (
          <g key={v}>
            <line
              x1={margin.left}
              x2={margin.left + innerW}
              y1={ys(v)}
              y2={ys(v)}
              stroke="rgba(255,255,255,0.06)"
            />
            <text x={margin.left - 8} y={ys(v) + 4} textAnchor="end" fill="rgba(255,255,255,0.6)" fontSize={11}>
              ${v}b
            </text>
          </g>
        ))}

        {exports.map((d) => (
          <text
            key={d.year}
            x={xs(d.year)}
            y={margin.top + innerH + 22}
            textAnchor="middle"
            fill="rgba(255,255,255,0.6)"
            fontSize={11}
          >
            {d.year}
          </text>
        ))}

        <Line points={pts} stroke="#facc15" strokeWidth={3} />
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={4} fill="#facc15" />
        ))}

        <Annotation x={xs(peak.year)} y={ys(peak.value)} dx={-12} dy={-32} align="end" color="#86efac">
          пік $7.34b · 4% ВВП
        </Annotation>
        <Annotation x={xs(2022)} y={ys(7.35)} dx={-12} dy={-32} align="end" color="#facc15">
          вторгнення, але +0%
        </Annotation>
        <Annotation x={xs(latest.year)} y={ys(latest.value)} dx={6} dy={26} align="start" color="#fda4ae">
          −12% від піку
        </Annotation>
      </ChartSvg>

      <p className="callout">
        Причини спаду: (1) зниження глобального попиту на outsourcing, (2) міграція клієнтів через ризики
        війни, (3) <strong>початкова автоматизація junior/mid-завдань</strong> на стороні замовника.
        Перші два циклічні. Третій — структурний.
      </p>

      <p className="slide-footnote">
        НБУ Балансова статистика 2017–2024; IT Ukraine Association reports 2022–2024; DOU developer census.
      </p>
    </>
  );
}
