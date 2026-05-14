// 35 · Ринок · ШІ — це skill-leveling, а не skill-bias
import { ChartSvg } from '../components/charts/Svg';
import { Bar } from '../components/charts/Bar';

const supportData = [
  { label: 'Q1 (новачки)', value: 35, color: '#86efac' },
  { label: 'Q2', value: 20, color: '#fde68a' },
  { label: 'Q3', value: 10, color: '#fcd34d' },
  { label: 'Q4 (топ)', value: 0, color: '#fda4ae' },
];

const devData = [
  { label: '<2р досвіду', value: 40, color: '#86efac' },
  { label: '2–5р', value: 26, color: '#fde68a' },
  { label: '5–10р', value: 15, color: '#fcd34d' },
  { label: '10р+', value: 7, color: '#fda4ae' },
];

function BarPanel({
  data,
  x,
  y,
  width,
  title,
}: {
  data: { label: string; value: number; color: string }[];
  x: number;
  y: number;
  width: number;
  title: string;
}) {
  const barCount = data.length;
  const maxVal = 45;
  const innerW = width - 20;
  const barW = (innerW - (barCount - 1) * 16) / barCount;
  const baselineY = y + 200;
  const heightPerPct = 170 / maxVal;
  return (
    <g transform={`translate(${x}, 0)`}>
      <text x={width / 2} y={y + 18} textAnchor="middle" className="chart-title" fontSize={13}>
        {title}
      </text>
      <line x1={10} x2={width - 10} y1={baselineY} y2={baselineY} stroke="rgba(255,255,255,0.3)" />
      {data.map((d, i) => {
        const bx = 10 + i * (barW + 16);
        const h = d.value * heightPerPct;
        const by = baselineY - h;
        return (
          <Bar
            key={d.label}
            x={bx}
            y={by}
            width={barW}
            height={h}
            fill={d.color}
            valueLabel={`+${d.value}%`}
            label={d.label}
          />
        );
      })}
    </g>
  );
}

export function Slide35() {
  return (
    <>
      <h2>ШІ — це <em>skill-leveling</em>, а не skill-bias</h2>
      <p className="lede">
        Найбільше виграють <strong>новачки і середні</strong>. Верхній квартиль майже не змінюється.
      </p>

      <ChartSvg height={300}>
        <BarPanel
          data={supportData}
          x={20}
          y={20}
          width={480}
          title="Стилізовано за Brynjolfsson et al. 2023 · підтримка (n=5179)"
        />
        <BarPanel
          data={devData}
          x={520}
          y={20}
          width={480}
          title="Стилізовано за Cui et al. 2024 · розробники MS/Accenture (n=4867)"
        />
      </ChartSvg>

      <p className="callout callout-green">
        Що це означає: <strong>премія за досвід стискається</strong> на простих завданнях, але{' '}
        <strong>зростає на складних</strong>. Сеньйори перестають бути «10× швидші за код», стають
        «10× кращі за вибір що робити».
      </p>

      <p className="slide-footnote">
        Brynjolfsson, Li, Raymond «Generative AI at Work» (NBER w31161, 2023): +14% у середньому,
        +34% у новачків, ~0 у топ-когорти. Cui, Demirer, Jaffe, Musolff, Peng, Salz «Effects of
        Generative AI on High Skilled Work» (MS/MIT, 2024 → Management Science 2026): +26% у
        середньому, ефект сильніший у менш досвідчених. Розподіл по бакетах ілюстративний.
      </p>
    </>
  );
}
