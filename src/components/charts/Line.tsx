type LinePoint = { x: number; y: number };

type LineProps = {
  points: LinePoint[];
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  animate?: boolean;
  dasharray?: string;
};

export function Line({
  points,
  stroke = '#facc15',
  strokeWidth = 3,
  fill = 'none',
  animate = false,
  dasharray,
}: LineProps) {
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const totalLen = approxLen(points);
  return (
    <path
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={animate ? `${totalLen}` : dasharray}
      strokeDashoffset={animate ? totalLen : 0}
      style={
        animate
          ? { animation: `dash-in 1.4s ease forwards` }
          : undefined
      }
    />
  );
}

function approxLen(points: LinePoint[]) {
  let len = 0;
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    len += Math.sqrt(dx * dx + dy * dy);
  }
  return Math.ceil(len);
}
