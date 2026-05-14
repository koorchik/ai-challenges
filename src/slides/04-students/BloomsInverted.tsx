import { ChartSvg, CHART_W } from '../../components/charts/Svg';

type Level = { name: string; role: string; pct: number; color: string };

const levels: Level[] = [
  { name: 'Creating',      role: 'Visionary — бачення, продукт, архітектура',  pct: 95, color: '#86efac' },
  { name: 'Evaluating',    role: 'Decision-maker — вибір компромісів',          pct: 80, color: '#a7f3d0' },
  { name: 'Analyzing',     role: "Guardian — стандарти якості, рев'ю",          pct: 60, color: '#fde68a' },
  { name: 'Applying',      role: 'Orchestrator — інтеграція модулів',           pct: 40, color: '#fcd34d' },
  { name: 'Understanding', role: 'Auditor — верифікація згенерованого',         pct: 30, color: '#fdba74' },
  { name: 'Remembering',   role: 'Automated — синтаксис та пам\'ять моделі',    pct: 5,  color: '#fda4ae' },
];

export default function BloomsInverted() {
  const py = { left: 80, top: 50, width: 380, height: 320 };
  const cx = py.left + py.width / 2;
  const step = py.height / levels.length;
  const widthAt = (frac: number) => py.width * (0.2 + 0.8 * frac);

  return (
    <div className="slide-body wide">
      <h2>Та сама піраміда — після ШІ. Цінність змістилася нагору</h2>
      <p className="lede" style={{ margin: 0 }}>
        ШІ повністю забрав низ — синтаксис, запам'ятовування, написання бойлерплейту. 
        Те, що раніше було верхівкою кар'єри (бачення, архітектурні рішення, рев'ю), 
        стало стартовою позицією.
      </p>

      <div style={{ marginTop: '1.5em' }}>
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
            ↑ Людина
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
            % роботи, яку все ще виконує людина
          </text>

          <text x={CHART_W - 20} y={py.top + py.height + 22} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize={10}>
            B. Bloom (1956) · реструктуризація Turskyi (2026)
          </text>
        </ChartSvg>
      </div>

      <p className="callout callout-yellow">
        Раніше виші вчили <em>знизу вгору</em>. Тепер фундамент автоматизовано, а вся людська цінність 
        зосереджена на вершині. <strong>Стартова лінія студента змістилася на 4 рівні вгору</strong> — прямо в зону Tech Lead.
      </p>
    </div>
  );
}