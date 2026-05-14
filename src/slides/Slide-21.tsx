// 21 · Студенти · Класична піраміда Блума
import { ChartSvg, CHART_W } from '../components/charts/Svg';

type Level = { name: string; sw: string };

const levels: Level[] = [
  { name: 'Creating',      sw: 'дизайн нової системи, нової архітектури' },
  { name: 'Evaluating',    sw: "code review, вибір трейд-офу" },
  { name: 'Analyzing',     sw: 'debug між шарами, читання чужого коду' },
  { name: 'Applying',      sw: 'CRUD за специфікацією, нові endpoint-и' },
  { name: 'Understanding', sw: 'пояснити, що робить функція або паттерн' },
  { name: 'Remembering',   sw: 'синтаксис, API, типи, команди' },
];

const FILL = '#a5b4fc';

export function Slide21() {
  const py = { left: 80, top: 50, width: 380, height: 320 };
  const cx = py.left + py.width / 2;
  const step = py.height / levels.length;
  const widthAt = (frac: number) => py.width * (0.2 + 0.8 * frac);

  return (
    <>
      <h2>Класична піраміда Блума: як учили до 2022</h2>
      <p className="lede">
        Bloom (1956), доопрацьовано Anderson & Krathwohl (2001) — таксономія освітніх цілей. Університет
        будували <em>знизу вгору</em>: спершу синтаксис, потім архітектура. Tech-lead-роль — після 5+ років.
      </p>

      <ChartSvg height={420}>
        {levels.map((l, i) => {
          const topY = py.top + i * step;
          const bottomY = topY + step;
          const topW = widthAt(i / levels.length);
          const botW = widthAt((i + 1) / levels.length);
          const pts = [
            [cx - topW / 2, topY],
            [cx + topW / 2, topY],
            [cx + botW / 2, bottomY],
            [cx - botW / 2, bottomY],
          ];
          return (
            <g key={l.name}>
              <polygon
                points={pts.map((p) => p.join(',')).join(' ')}
                fill={FILL}
                fillOpacity={0.88}
                stroke="rgba(0,0,0,0.3)"
                strokeWidth={1}
              />
              <text
                x={cx}
                y={(topY + bottomY) / 2 + 4}
                textAnchor="middle"
                fill="#0d021b"
                fontSize={13}
                fontWeight={700}
              >
                {l.name}
              </text>
            </g>
          );
        })}

        {/* Upward progression arrow on the left */}
        <g transform={`translate(${py.left - 38}, 0)`}>
          <line
            x1={0}
            x2={0}
            y1={py.top + py.height - 8}
            y2={py.top + 8}
            stroke="rgba(255,255,255,0.5)"
            strokeWidth={1.5}
          />
          <polygon
            points={`-5,${py.top + 12} 5,${py.top + 12} 0,${py.top - 2}`}
            fill="rgba(255,255,255,0.5)"
          />
          <text
            x={-8}
            y={py.top + py.height / 2}
            fill="rgba(255,255,255,0.55)"
            fontSize={11}
            textAnchor="middle"
            transform={`rotate(-90, -8, ${py.top + py.height / 2})`}
          >
            роки навчання
          </text>
        </g>

        {/* Right-side legend: software-engineering equivalent per level */}
        <text x={py.left + py.width + 60} y={py.top - 18} fill="rgba(255,255,255,0.5)" fontSize={10}>
          що це для розробника
        </text>
        {levels.map((l, i) => {
          const rowY = py.top + i * step + step / 2 + 5;
          const legendX = py.left + py.width + 60;
          return (
            <g key={`legend-${l.name}`}>
              <text x={legendX} y={rowY - 2} fill={FILL} fontSize={12} fontWeight={700}>
                {l.name}
              </text>
              <text x={legendX} y={rowY + 12} fill="rgba(255,255,255,0.65)" fontSize={10.5}>
                {l.sw}
              </text>
            </g>
          );
        })}

        <text x={CHART_W - 20} y={py.top + py.height + 22} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize={10}>
          B. Bloom (1956) · Anderson & Krathwohl (2001)
        </text>
      </ChartSvg>

      <p className="callout">
        1-й курс — Remember / Understand. Диплом — Apply. Магістерська й роки досвіду — Analyze / Evaluate.
        До «Creating» (архітектура, продукт) доростали 5+ років. Логіка: <em>знати → розуміти → робити →
        будувати</em>.
      </p>

      <p className="slide-footnote">
        B. Bloom et al. (1956), «Taxonomy of Educational Objectives»; revision — Anderson & Krathwohl (2001),
        «A Taxonomy for Learning, Teaching, and Assessing». 6 рівнів, поступове сходження знизу вгору.
      </p>
    </>
  );
}
