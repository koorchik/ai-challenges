import { scaleLinear } from 'd3-scale';
import { ChartSvg, CHART_W } from '../../components/charts/Svg';
import { Line } from '../../components/charts/Line';

const N_VALUES = [1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64];

const curves = [
  { p: 0.5, color: '#94a3b8', label: 'p=50%', ceiling: 2 },
  { p: 0.75, color: '#60a5fa', label: 'p=75%', ceiling: 4 },
  { p: 0.9, color: '#facc15', label: 'p=90%', ceiling: 10 },
  { p: 0.95, color: '#86efac', label: 'p=95%', ceiling: 20 },
];

function speedup(p: number, n: number) {
  return 1 / (1 - p + p / n);
}

export default function AmdahlClassic() {
  const margin = { top: 50, right: 170, bottom: 56, left: 70 };
  const innerW = CHART_W - margin.left - margin.right;
  const innerH = 280;

  const xs = scaleLinear().domain([1, 64]).range([margin.left, margin.left + innerW]);
  const ys = scaleLinear().domain([0, 22]).range([margin.top + innerH, margin.top]);

  return (
    <>
      <h2>Закон Амдала (1967)</h2>
      <p className="lede">
        Як би сильно ви не прискорювали один етап роботи, загальний приріст обмежений тим, що залишилось без змін.
      </p>

      <ChartSvg height={400}>
        <text x={margin.left + innerW / 2} y={28} textAnchor="middle" className="chart-title">
          S(N) = 1 / ((1−p) + p/N) — стеля = 1/(1−p)
        </text>

        {[0, 5, 10, 15, 20].map((v) => (
          <g key={v}>
            <line
              x1={margin.left}
              x2={margin.left + innerW}
              y1={ys(v)}
              y2={ys(v)}
              stroke="rgba(255,255,255,0.06)"
            />
            <text
              x={margin.left - 8}
              y={ys(v) + 4}
              textAnchor="end"
              fill="rgba(255,255,255,0.6)"
              fontSize={11}
            >
              {v}×
            </text>
          </g>
        ))}

        {[1, 16, 32, 48, 64].map((v) => (
          <text
            key={v}
            x={xs(v)}
            y={margin.top + innerH + 22}
            textAnchor="middle"
            fill="rgba(255,255,255,0.6)"
            fontSize={11}
          >
            {v}
          </text>
        ))}
        <text
          x={margin.left + innerW / 2}
          y={margin.top + innerH + 42}
          textAnchor="middle"
          fill="rgba(255,255,255,0.6)"
          fontSize={11}
        >
          процесори N
        </text>
        <text x={margin.left - 50} y={margin.top - 6} fill="rgba(255,255,255,0.6)" fontSize={11}>
          прискорення S
        </text>

        {curves.map((c) => {
          const pts = N_VALUES.map((n) => ({ x: xs(n), y: ys(speedup(c.p, n)) }));
          const ceilY = ys(c.ceiling);
          return (
            <g key={c.p}>
              <line
                x1={margin.left}
                x2={margin.left + innerW}
                y1={ceilY}
                y2={ceilY}
                stroke={c.color}
                strokeWidth={1}
                strokeDasharray="4 4"
                opacity={0.35}
              />
              <Line points={pts} stroke={c.color} strokeWidth={2.5} />
              <text
                x={margin.left + innerW + 10}
                y={ceilY + 4}
                fill={c.color}
                fontSize={12}
                fontWeight={600}
              >
                {c.label} · стеля {c.ceiling}×
              </text>
            </g>
          );
        })}
      </ChartSvg>

      <div className="callout callout-yellow">
        Закон працює для будь-якої оптимізації. У випадку ШІ:
        <ul className="checklist" style={{ marginTop: '0.4em' }}>
          <li><strong>Оптимізована частка:</strong> безпосередньо написання коду.</li>
          <li><strong>Неоптимізована:</strong> збір вимог, проєктування архітектури, дебаг та комунікація.</li>
        </ul>
        <p style={{ marginTop: '0.4em' }}>Саме вони задають жорстку стелю вашої продуктивності.</p>
      </div>

      <p className="slide-footnote">
        Amdahl, G. (1967) — «Validity of the single-processor approach to achieving large-scale computing
        capabilities», AFIPS. p — частка, що паралелиться; стеля = 1/(1−p).{' '}
        <a href="https://en.wikipedia.org/wiki/Amdahl%27s_law" target="_blank" rel="noreferrer">
          Wikipedia
        </a>
      </p>
    </>
  );
}
