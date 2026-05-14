import { ChartSvg } from '../../components/charts/Svg';

type Segment = { label: string; value: number; color: string };

const BEFORE: Segment[] = [
  { label: 'писати код', value: 45, color: '#facc15' },
  { label: 'дизайн / специфікація', value: 10, color: '#bfdbfe' },
  { label: 'читання / ревʼю', value: 15, color: '#fde68a' },
  { label: 'відлагодження', value: 15, color: '#fda4ae' },
  { label: 'інтеграція / релізи', value: 10, color: '#86efac' },
  { label: 'координація', value: 5, color: '#c4b5fd' },
];

const AFTER: Segment[] = [
  { label: 'писати код', value: 15, color: '#facc15' },
  { label: 'дизайн / специфікація', value: 20, color: '#bfdbfe' },
  { label: 'читання / ревʼю', value: 25, color: '#fde68a' },
  { label: 'відлагодження', value: 18, color: '#fda4ae' },
  { label: 'інтеграція / релізи', value: 12, color: '#86efac' },
  { label: 'координація', value: 10, color: '#c4b5fd' },
];

function StackedBar({
  x,
  y,
  width,
  height,
  segments,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  segments: Segment[];
}) {
  let offset = 0;
  return (
    <g transform={`translate(${x}, ${y})`}>
      {segments.map((s) => {
        const h = (s.value / 100) * height;
        const rect = (
          <g key={s.label} transform={`translate(0, ${offset})`}>
            <rect width={width} height={h} fill={s.color} opacity={0.85} />
            {s.value >= 8 && (
              <text
                x={width / 2}
                y={h / 2 + 4}
                textAnchor="middle"
                fill="rgba(0,0,0,0.85)"
                fontSize={12}
                fontWeight={600}
              >
                {s.label} · {s.value}%
              </text>
            )}
          </g>
        );
        offset += h;
        return rect;
      })}
    </g>
  );
}

export default function TimeShift() {
  return (
    <>
      <h2>Куди зсувається час</h2>
      <p className="lede">
        ШІ стискає саме кодування. Усе, що не код, росте у відносній вазі.
      </p>

      <ChartSvg height={460}>
        <text x={300} y={36} textAnchor="middle" className="chart-title">
          до ШІ
        </text>
        <text x={700} y={36} textAnchor="middle" className="chart-title">
          з ШІ
        </text>
        <StackedBar x={200} y={60} width={200} height={340} segments={BEFORE} />
        <StackedBar x={600} y={60} width={200} height={340} segments={AFTER} />

        <text x={500} y={230} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize={28}>
          →
        </text>

      </ChartSvg>

      <p className="callout">
        Висновок: коли код дешевшає — <strong>дорожчає все, що не код</strong>. Дизайн, ревʼю, відлагодження
        між системами, інтеграція, домен. І ще координація.
      </p>

      <p className="slide-footnote">
        Ілюстративний розподіл — оцінка автора за даними команд 2025–2026. Напрямок підтверджують
        DORA 2024 (75% розробників відчували приріст, throughput команди −1.5%) і GitClear / Stack
        Overflow 2024–25; точні відсотки не є виміряними.
      </p>
    </>
  );
}
