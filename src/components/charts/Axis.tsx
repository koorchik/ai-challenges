import type { ScaleLinear, ScaleLogarithmic } from 'd3-scale';

type AnyLinearScale = ScaleLinear<number, number> | ScaleLogarithmic<number, number>;

type AxisProps = {
  scale: AnyLinearScale;
  orientation: 'bottom' | 'left';
  x: number;
  y: number;
  length: number;
  ticks?: number[];
  format?: (v: number) => string;
  label?: string;
};

export function Axis({ scale, orientation, x, y, length, ticks, format, label }: AxisProps) {
  const tickValues = ticks ?? (scale.ticks ? scale.ticks(6) : []);
  const fmt = format ?? ((v: number) => String(v));

  return (
    <g className="chart-axis" transform={`translate(${x}, ${y})`}>
      {orientation === 'bottom' ? (
        <>
          <line x1={0} y1={0} x2={length} y2={0} />
          {tickValues.map((v) => {
            const pos = scale(v) - scale.range()[0];
            return (
              <g key={`t-${v}`} transform={`translate(${pos}, 0)`}>
                <line y2={5} />
                <text y={18} textAnchor="middle">
                  {fmt(v)}
                </text>
              </g>
            );
          })}
          {label && (
            <text x={length / 2} y={40} textAnchor="middle" opacity={0.7}>
              {label}
            </text>
          )}
        </>
      ) : (
        <>
          <line x1={0} y1={0} x2={0} y2={length} />
          {tickValues.map((v) => {
            const pos = scale(v) - scale.range()[1];
            return (
              <g key={`t-${v}`} transform={`translate(0, ${pos})`}>
                <line x2={-5} />
                <text x={-9} y={4} textAnchor="end">
                  {fmt(v)}
                </text>
              </g>
            );
          })}
          {label && (
            <text
              transform={`translate(-46, ${length / 2}) rotate(-90)`}
              textAnchor="middle"
              opacity={0.7}
            >
              {label}
            </text>
          )}
        </>
      )}
    </g>
  );
}
