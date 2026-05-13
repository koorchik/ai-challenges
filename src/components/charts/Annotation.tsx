import type { ReactNode } from 'react';

type AnnotationProps = {
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  children: ReactNode;
  color?: string;
  align?: 'start' | 'middle' | 'end';
  showLeader?: boolean;
};

export function Annotation({
  x,
  y,
  dx = 30,
  dy = -30,
  children,
  color = 'rgba(255,255,255,0.9)',
  align = 'start',
  showLeader = true,
}: AnnotationProps) {
  const tx = x + dx;
  const ty = y + dy;
  return (
    <g>
      {showLeader && (
        <line x1={x} y1={y} x2={tx} y2={ty} stroke={color} strokeOpacity={0.4} strokeDasharray="3 3" />
      )}
      <circle cx={x} cy={y} r={3.5} fill={color} />
      <text
        x={tx}
        y={ty - 2}
        textAnchor={align}
        fill={color}
        className="chart-annotation"
      >
        {children}
      </text>
    </g>
  );
}
