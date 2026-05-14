// 51 · Бізнеси · J-крива продуктивності
import { scaleLinear } from 'd3-scale';
import { ChartSvg, CHART_W } from '../components/charts/Svg';
import { Line } from '../components/charts/Line';
import { Annotation } from '../components/charts/Annotation';

type Curve = { years: number; productivity: number };

const electricity: Curve[] = [
  { years: 0, productivity: 0 },
  { years: 5, productivity: -0.05 },
  { years: 15, productivity: -0.08 },
  { years: 25, productivity: 0.05 },
  { years: 35, productivity: 0.45 },
  { years: 45, productivity: 0.9 },
];

const it: Curve[] = [
  { years: 0, productivity: 0 },
  { years: 4, productivity: -0.04 },
  { years: 8, productivity: -0.06 },
  { years: 12, productivity: 0.1 },
  { years: 18, productivity: 0.45 },
  { years: 25, productivity: 0.75 },
];

const ai: Curve[] = [
  { years: 0, productivity: 0 },
  { years: 1, productivity: -0.03 },
  { years: 2, productivity: -0.05 },
  { years: 4, productivity: -0.04 },
];

export function Slide18() {
  const margin = { top: 60, right: 200, bottom: 60, left: 80 };
  const innerW = CHART_W - margin.left - margin.right;
  const innerH = 360;

  const xs = scaleLinear().domain([0, 45]).range([margin.left, margin.left + innerW]);
  const ys = scaleLinear()
    .domain([-0.15, 1.0])
    .range([margin.top + innerH, margin.top]);

  const toPts = (c: Curve[]) => c.map((d) => ({ x: xs(d.years), y: ys(d.productivity) }));

  return (
    <>
      <h2>J-крива продуктивності: ми <em>досі</em> в просіданні</h2>
      <p className="lede">
        General-purpose technologies показують виміряний <strong>спад</strong> продуктивності
        протягом років після появи. Потім — стрімкий ріст. Це не парадокс — це вартість перебудови процесів.
      </p>

      <ChartSvg height={420}>
        <line
          x1={margin.left}
          y1={ys(0)}
          x2={margin.left + innerW}
          y2={ys(0)}
          stroke="rgba(255,255,255,0.3)"
        />
        {[0, 10, 20, 30, 40].map((v) => (
          <g key={v}>
            <line
              x1={xs(v)}
              y1={margin.top + innerH}
              x2={xs(v)}
              y2={margin.top + innerH + 5}
              stroke="rgba(255,255,255,0.3)"
            />
            <text
              x={xs(v)}
              y={margin.top + innerH + 22}
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize={11}
            >
              +{v}р.
            </text>
          </g>
        ))}
        <text
          x={margin.left + innerW / 2}
          y={margin.top + innerH + 42}
          textAnchor="middle"
          fill="rgba(255,255,255,0.6)"
          fontSize={11}
        >
          років від «винаходу»
        </text>
        {[-0.1, 0, 0.5, 1.0].map((v) => (
          <text
            key={v}
            x={margin.left - 8}
            y={ys(v) + 4}
            textAnchor="end"
            fill="rgba(255,255,255,0.6)"
            fontSize={11}
          >
            {v > 0 ? '+' : ''}
            {Math.round(v * 100)}%
          </text>
        ))}

        <Line points={toPts(electricity)} stroke="#bfdbfe" strokeWidth={2.5} />
        <Line points={toPts(it)} stroke="#86efac" strokeWidth={2.5} />
        <Line points={toPts(ai)} stroke="#facc15" strokeWidth={3.5} />

        <Annotation x={xs(45)} y={ys(0.9)} dx={6} dy={-4} color="#bfdbfe" showLeader={false}>
          Електрика 1882→1927
        </Annotation>
        <Annotation x={xs(25)} y={ys(0.75)} dx={6} dy={-4} color="#86efac" showLeader={false}>
          IT 1987→2012
        </Annotation>
        <Annotation x={xs(4)} y={ys(-0.04)} dx={20} dy={-14} color="#facc15" align="start">
          ШІ 2022→?
        </Annotation>
      </ChartSvg>

      <p className="callout callout-yellow">
        Макропоказники покажуть «AI-бум» через 5–15 років. Карʼєрна стратегія на «станеться
        будь-якого дня» — гадання. Беріть рішення там, де ваші цифри сходяться вже зараз.
      </p>

      <p className="slide-footnote">
        Brynjolfsson, Rock, Syverson «The Productivity J-Curve» (NBER w25148, 2018); Paul David «The
        Computer and the Dynamo» (AER 1990) — електрика; стилізовано.
      </p>
    </>
  );
}
