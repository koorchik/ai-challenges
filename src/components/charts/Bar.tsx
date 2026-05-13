type BarProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  opacity?: number;
  label?: string;
  labelPosition?: 'above' | 'inside' | 'below';
  valueLabel?: string;
  rx?: number;
};

export function Bar({
  x,
  y,
  width,
  height,
  fill = '#facc15',
  opacity = 1,
  label,
  labelPosition = 'above',
  valueLabel,
  rx = 4,
}: BarProps) {
  const labelY = labelPosition === 'above' ? y - 8 : labelPosition === 'inside' ? y + height / 2 + 4 : y + height + 18;
  return (
    <g>
      <rect
        className="chart-bar"
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        opacity={opacity}
        rx={rx}
      />
      {valueLabel !== undefined && (
        <text
          x={x + width / 2}
          y={labelY}
          textAnchor="middle"
          className="chart-label"
          fontWeight={700}
        >
          {valueLabel}
        </text>
      )}
      {label && (
        <text
          x={x + width / 2}
          y={y + height + 28}
          textAnchor="middle"
          className="chart-label"
          opacity={0.7}
        >
          {label}
        </text>
      )}
    </g>
  );
}
