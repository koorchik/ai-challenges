import type { ReactNode } from 'react';

export const CHART_W = 1000;
export const CHART_H = 480;

type SvgProps = {
  width?: number;
  height?: number;
  children: ReactNode;
  style?: React.CSSProperties;
};

// maxHeight chosen so a slide with h2 + lede + chart + callout + footnote
// fits inside the 720px reveal.js slide viewport without overflow.
// Using `em` because reveal.js scales slides via font-size; `vh` would
// reference the browser viewport, not the (1280×720) slide.
export function ChartSvg({ width = CHART_W, height = CHART_H, children, style }: SvgProps) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: 'auto', maxHeight: '8.5em', display: 'block', margin: '0 auto', ...style }}
      role="img"
    >
      {children}
    </svg>
  );
}
