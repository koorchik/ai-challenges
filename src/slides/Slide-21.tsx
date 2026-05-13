// 21 · Студенти · Bloom's Taxonomy перевертається
import { ChartSvg, CHART_W } from '../components/charts/Svg';

type Level = { name: string; role: string; pct: number; color: string };

const levels: Level[] = [
  { name: 'Creating',      role: 'Visionary — продукт + архітектура',  pct: 95, color: '#86efac' },
  { name: 'Evaluating',    role: 'Decision-maker — trade-offs',         pct: 80, color: '#a7f3d0' },
  { name: 'Analyzing',     role: "Guardian — стандарти якості, рев'ю",  pct: 60, color: '#fde68a' },
  { name: 'Applying',      role: 'Orchestrator — інтеграція коду',      pct: 40, color: '#fcd34d' },
  { name: 'Understanding', role: 'Auditor — верифікація пояснень',      pct: 30, color: '#fdba74' },
  { name: 'Remembering',   role: 'Automated — recall, syntax',          pct: 5,  color: '#fda4ae' },
];

export function Slide13() {
  const py = { left: 80, top: 50, width: 380, height: 320 };
  const cx = py.left + py.width / 2;
  const step = py.height / levels.length;
  const widthAt = (frac: number) => py.width * (0.2 + 0.8 * frac);

  return (
    <>
      <h2>Та сама піраміда — після ШІ. Цінність зміщується вгору</h2>
      <p className="lede">
        ШІ забрав низ — recall, syntax, бойлерплейт. Те, що було
        верхівкою кар'єри (бачення, рішення, рев'ю), стало стартовою позицією для студента.
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
                fill={l.color}
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

        {/* Side annotations: where the human/AI ownership lives */}
        <text x={py.left - 20} y={py.top - 12} fill="rgba(255,255,255,0.6)" fontSize={11}>
          ↑ людина
        </text>
        <text x={py.left - 20} y={py.top + py.height + 22} fill="rgba(255,255,255,0.6)" fontSize={11}>
          ↓ ШІ
        </text>

        {/* Right-side legend: % людини + role per level */}
        {levels.map((l, i) => {
          const rowY = py.top + i * step + step / 2 + 5;
          const legendX = py.left + py.width + 60;
          return (
            <g key={`legend-${l.name}`}>
              <text x={legendX} y={rowY} fill={l.color} fontSize={18} fontWeight={800}>
                {l.pct}%
              </text>
              <text
                x={legendX + 70}
                y={rowY - 2}
                fill="rgba(255,255,255,0.85)"
                fontSize={12}
                fontWeight={600}
              >
                {l.name}
              </text>
              <text
                x={legendX + 70}
                y={rowY + 12}
                fill="rgba(255,255,255,0.55)"
                fontSize={10.5}
              >
                {l.role}
              </text>
            </g>
          );
        })}

        <text x={py.left + py.width + 60} y={py.top - 18} fill="rgba(255,255,255,0.5)" fontSize={10}>
          % роботи, де людина все ще домінує
        </text>

        <text x={CHART_W - 20} y={py.top + py.height + 22} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize={10}>
          B. Bloom (1956) · реструктуризація Turskyi (2026)
        </text>
      </ChartSvg>

      <p className="callout">
        Раніше виш вчив <em>знизу вгору</em>: спочатку синтаксис, потім архітектура. Тепер цінність —
        нагорі, а низ автоматизовано. Стартова позиція студента зсунулася на 4 рівні вгору.
      </p>

      <p className="slide-footnote">
        B. Bloom (1956), «Taxonomy of Educational Objectives»; реструктуризація — Turskyi (2026),
        «AI-Integrated Bloom's Taxonomy: From "Coder" to "Tech Lead"».
      </p>
    </>
  );
}
