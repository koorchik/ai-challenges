import { ChartSvg, CHART_W } from '../../components/charts/Svg';

type Level = { name: string; sw: string };

const levels: Level[] = [
  { name: 'Creating',      sw: 'дизайн нової системи, архітектура' },
  { name: 'Evaluating',    sw: "code review, архітектурні компроміси (trade-offs)" },
  { name: 'Analyzing',     sw: 'debug між шарами, читання чужого коду' },
  { name: 'Applying',      sw: 'CRUD за специфікацією, нові endpoint-и' },
  { name: 'Understanding', sw: 'пояснити, що робить функція або патерн' },
  { name: 'Remembering',   sw: 'синтаксис, API, типи, команди' },
];

const FILL = '#a5b4fc';

export default function BloomsClassic() {
  const py = { left: 80, top: 30, width: 380, height: 260 };
  const cx = py.left + py.width / 2;
  const step = py.height / levels.length;
  const widthAt = (frac: number) => py.width * (0.2 + 0.8 * frac);

  return (
    <div className="slide-body wide">
      <h2>Класична піраміда Блума: як вчили до 2022 року</h2>
      <p className="lede" style={{ margin: 0 }}>
        Bloom (1956) та Anderson (2001) — таксономія освітніх цілей. Університети та кар'єру 
        будували <em>знизу вгору</em>: спершу вчимо синтаксис, потім доростаємо до архітектури. 
        Tech Lead роль давали лише після 5+ років.
      </p>

      <div style={{ marginTop: '0.5em' }}>
        <ChartSvg height={340}>
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
            що це означає для розробника
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
      </div>

      <p className="callout callout-blue">
        1-й курс — Remember/Understand · Диплом — Apply · Магістерська й перші роки — Analyze/Evaluate · до «Creating» доростали після років досвіду.
      </p>

      <p className="slide-footnote">
        B. Bloom et al. (1956), «Taxonomy of Educational Objectives»; revision — Anderson & Krathwohl (2001).
      </p>
    </div>
  );
}