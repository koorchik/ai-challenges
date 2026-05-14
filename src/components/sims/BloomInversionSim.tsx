import { useState } from 'react';
import { ChartSvg, CHART_W } from '../charts/Svg';
import { Slider } from '../charts/Slider';

type Level = {
  name: string;
  role: string;
  pctClassic: number;
  pctInverted: number;
  colorAi: string; // color when AI dominates (low human %)
  colorHuman: string; // color when humans dominate (high human %)
};

const levels: Level[] = [
  { name: 'Creating',      role: 'Visionary — продукт + архітектура',  pctClassic: 30, pctInverted: 95, colorAi: '#a5b4fc', colorHuman: '#86efac' },
  { name: 'Evaluating',    role: 'Decision-maker — trade-offs',         pctClassic: 40, pctInverted: 80, colorAi: '#a5b4fc', colorHuman: '#a7f3d0' },
  { name: 'Analyzing',     role: "Guardian — стандарти, рев'ю",         pctClassic: 50, pctInverted: 60, colorAi: '#a5b4fc', colorHuman: '#fde68a' },
  { name: 'Applying',      role: 'Orchestrator — інтеграція коду',      pctClassic: 60, pctInverted: 40, colorAi: '#a5b4fc', colorHuman: '#fcd34d' },
  { name: 'Understanding', role: 'Auditor — верифікація пояснень',      pctClassic: 70, pctInverted: 30, colorAi: '#a5b4fc', colorHuman: '#fdba74' },
  { name: 'Remembering',   role: 'Automated — recall, syntax',          pctClassic: 80, pctInverted: 5,  colorAi: '#a5b4fc', colorHuman: '#fda4ae' },
];

function smoothstep(t: number) {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

function mixHex(a: string, b: string, t: number) {
  const pa = a.replace('#', '');
  const pb = b.replace('#', '');
  const ar = parseInt(pa.slice(0, 2), 16);
  const ag = parseInt(pa.slice(2, 4), 16);
  const ab = parseInt(pa.slice(4, 6), 16);
  const br = parseInt(pb.slice(0, 2), 16);
  const bg = parseInt(pb.slice(2, 4), 16);
  const bb = parseInt(pb.slice(4, 6), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

export function BloomInversionSim() {
  const [year, setYear] = useState(2026);
  const t = smoothstep((year - 2020) / 10);

  const py = { left: 80, top: 50, width: 380, height: 320 };
  const cx = py.left + py.width / 2;
  const step = py.height / levels.length;
  const widthAt = (frac: number) => py.width * (0.2 + 0.8 * frac);

  // Tipping point: smallest pct that's still ≥50 (humans still dominate)
  const live = levels.map((l) => l.pctClassic + (l.pctInverted - l.pctClassic) * t);
  const tippingIdx = live.findIndex((v) => v < 50);

  return (
    <>
      <h2>Інверсія Блума у часі — 2020 → 2030</h2>
      <p className="lede">
        Перетягніть рік: цінність зміщується вгору, ШІ забирає низ. Червона лінія — там, де людська
        частка падає під 50%.
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
          const pct = live[i];
          const color = mixHex(l.colorAi, l.colorHuman, t);
          return (
            <g key={l.name}>
              <polygon
                points={pts.map((p) => p.join(',')).join(' ')}
                fill={color}
                fillOpacity={0.88}
                stroke="rgba(0,0,0,0.3)"
                strokeWidth={1}
                style={{ transition: 'fill 0.35s ease' }}
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

              {/* live % on right legend */}
              <text
                x={py.left + py.width + 60}
                y={(topY + bottomY) / 2 + 5}
                fill={color}
                fontSize={18}
                fontWeight={800}
              >
                {Math.round(pct)}%
              </text>
              <text
                x={py.left + py.width + 130}
                y={(topY + bottomY) / 2 - 2}
                fill="rgba(255,255,255,0.85)"
                fontSize={12}
                fontWeight={600}
              >
                {l.name}
              </text>
              <text
                x={py.left + py.width + 130}
                y={(topY + bottomY) / 2 + 12}
                fill="rgba(255,255,255,0.55)"
                fontSize={10.5}
              >
                {l.role}
              </text>
            </g>
          );
        })}

        {/* Tipping line — where ownership drops below 50% */}
        {tippingIdx > 0 && (
          <>
            <line
              x1={py.left - 10}
              x2={py.left + py.width + 10}
              y1={py.top + tippingIdx * step}
              y2={py.top + tippingIdx * step}
              stroke="#fda4ae"
              strokeOpacity={0.85}
              strokeDasharray="5 4"
            />
            <text
              x={py.left - 14}
              y={py.top + tippingIdx * step - 4}
              textAnchor="end"
              fill="#fda4ae"
              fontSize={11}
              fontWeight={600}
            >
              нижче 50% — ШІ домінує
            </text>
          </>
        )}

        {/* Side annotations */}
        <text x={py.left - 20} y={py.top - 12} fill="rgba(255,255,255,0.6)" fontSize={11}>
          ↑ людина
        </text>
        <text x={py.left - 20} y={py.top + py.height + 22} fill="rgba(255,255,255,0.6)" fontSize={11}>
          ↓ ШІ
        </text>

        <text x={py.left + py.width + 60} y={py.top - 18} fill="rgba(255,255,255,0.5)" fontSize={10}>
          % роботи, де людина все ще домінує · {year}
        </text>

        <text
          x={CHART_W - 20}
          y={py.top + py.height + 22}
          textAnchor="end"
          fill="rgba(255,255,255,0.45)"
          fontSize={10}
        >
          B. Bloom (1956) · інтерполяція 2020–2030 — Turskyi (2026)
        </text>
      </ChartSvg>

      <div className="sim-controls-single" style={{ maxWidth: 900 }}>
        <Slider
          label="рік"
          min={2020}
          max={2030}
          step={0.25}
          value={year}
          onChange={setYear}
          format={(v) => v.toFixed(2)}
        />
      </div>

      <p className="slide-footnote">
        Bloom (1956) · Anderson & Krathwohl (2001) · реструктуризація — Turskyi (2026). Стартові і
        кінцеві значення (2020 vs 2030) — реконструкція автора; траєкторія між ними — гладка
        інтерполяція, не виміряні часові ряди.
      </p>
    </>
  );
}
