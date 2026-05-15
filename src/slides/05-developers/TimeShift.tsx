import { ChartSvg } from '../../components/charts/Svg';

type Segment = { label: string; value: number; color: string };

const DISTRIBUTION: Segment[] = [
  { label: 'писати код', value: 45, color: '#facc15' },
  { label: 'дизайн / специфікація', value: 10, color: '#bfdbfe' },
  { label: 'читання / ревʼю', value: 15, color: '#fde68a' },
  { label: 'відлагодження', value: 15, color: '#fda4ae' },
  { label: 'інтеграція / релізи', value: 10, color: '#86efac' },
  { label: 'координація', value: 5, color: '#c4b5fd' },
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
  const rows = segments.map((s) => {
    const h = (s.value / 100) * height;
    const row = { ...s, top: offset, height: h, mid: offset + h / 2 };
    offset += h;
    return row;
  });

  return (
    <g transform={`translate(${x}, ${y})`}>
      {rows.map((r) => (
        <rect
          key={`bar-${r.label}`}
          x={0}
          y={r.top}
          width={width}
          height={r.height}
          fill={r.color}
          opacity={0.9}
        />
      ))}
      {rows.map((r) => {
        const labelX = width + 24;
        return (
          <g key={`lbl-${r.label}`}>
            <line
              x1={width}
              y1={r.mid}
              x2={labelX - 8}
              y2={r.mid}
              stroke={r.color}
              strokeWidth={1.5}
              opacity={0.8}
            />
            <text
              x={labelX}
              y={r.mid + 5}
              fill="rgba(255,255,255,0.92)"
              fontSize={15}
              fontWeight={600}
            >
              <tspan fill={r.color}>{r.value}%</tspan>
              <tspan dx={8}>{r.label}</tspan>
            </text>
          </g>
        );
      })}
    </g>
  );
}

export default function TimeShift() {
  return (
    <>
      <h2>На що йде час розробника</h2>
      <p className="lede">
        Менше половини — на сам код. Решта — дизайн, ревʼю, відлагодження, інтеграція, координація.
      </p>

      <ChartSvg height={420}>
        <text x={360} y={30} textAnchor="middle" className="chart-title">
          типовий senior, до ШІ
        </text>
        <StackedBar x={260} y={50} width={200} height={340} segments={DISTRIBUTION} />
      </ChartSvg>
    </>
  );
}
