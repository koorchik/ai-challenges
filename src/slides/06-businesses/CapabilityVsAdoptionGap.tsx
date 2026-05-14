import { scaleLinear } from 'd3-scale';
import { ChartSvg } from '../../components/charts/Svg';
import { Axis } from '../../components/charts/Axis';
import { Line } from '../../components/charts/Line';
import { Annotation } from '../../components/charts/Annotation';

const W = 1000;
const H = 480;
const PAD_L = 70;
const PAD_R = 40;
const PAD_T = 30;
const PAD_B = 60;

const x = scaleLinear().domain([2022, 2026]).range([PAD_L, W - PAD_R]);
const y = scaleLinear().domain([0, 100]).range([H - PAD_B, PAD_T]);

const capability = [
  { x: 2022, y: 10 },
  { x: 2023, y: 25 },
  { x: 2024, y: 48 },
  { x: 2025, y: 72 },
  { x: 2026, y: 92 },
];

const adoption = [
  { x: 2022, y: 3 },
  { x: 2023, y: 6 },
  { x: 2024, y: 10 },
  { x: 2025, y: 14 },
  { x: 2026, y: 20 },
];

const capabilityPts = capability.map((p) => ({ x: x(p.x), y: y(p.y) }));
const adoptionPts = adoption.map((p) => ({ x: x(p.x), y: y(p.y) }));

export default function CapabilityVsAdoptionGap() {
  return (
    <div className="slide-body wide">
      <h2>Можливості ростуть місяцями. Впровадження — роками.</h2>
      <p className="lede" style={{ margin: 0 }}>
        Frontier-моделі вже вміють те, чого Fortune-500 ще не запустила в продакшн. Розрив дає
        малим командам перевагу, яку великі не можуть скопіювати — бо не встигають
        переадаптовуватися.
      </p>

      <div className="two-col" style={{ alignItems: 'center' }}>
        <div>
          <ChartSvg width={W} height={H} style={{ maxHeight: '10em' }}>
            <Axis
              scale={x}
              orientation="bottom"
              x={0}
              y={H - PAD_B}
              length={W - PAD_L - PAD_R}
              ticks={[2022, 2023, 2024, 2025, 2026]}
              format={(v) => String(Math.round(v))}
            />
            <Axis
              scale={y}
              orientation="left"
              x={PAD_L}
              y={PAD_T}
              length={H - PAD_T - PAD_B}
              ticks={[0, 25, 50, 75, 100]}
              format={(v) => `${v}`}
            />

            {/* Gap shading between the two curves */}
            <path
              d={`M ${capabilityPts[0].x} ${capabilityPts[0].y} ${capabilityPts
                .slice(1)
                .map((p) => `L ${p.x} ${p.y}`)
                .join(' ')} L ${adoptionPts[adoptionPts.length - 1].x} ${
                adoptionPts[adoptionPts.length - 1].y
              } ${adoptionPts
                .slice(0, -1)
                .reverse()
                .map((p) => `L ${p.x} ${p.y}`)
                .join(' ')} Z`}
              fill="rgba(238,255,65,0.08)"
              stroke="none"
            />

            <Line points={capabilityPts} stroke="#facc15" strokeWidth={3.5} />
            <Line points={adoptionPts} stroke="#bfdbfe" strokeWidth={3} />

            <Annotation
              x={capabilityPts[3].x}
              y={capabilityPts[3].y}
              dx={-20}
              dy={-22}
              align="end"
              color="#facc15"
            >
              можливості frontier
            </Annotation>
            <Annotation
              x={adoptionPts[3].x}
              y={adoptionPts[3].y}
              dx={-10}
              dy={30}
              align="end"
              color="#bfdbfe"
            >
              реальне впровадження у F500
            </Annotation>
            <Annotation
              x={(capabilityPts[4].x + adoptionPts[4].x) / 2}
              y={(capabilityPts[4].y + adoptionPts[4].y) / 2}
              dx={-200}
              dy={0}
              align="end"
              color="#fde68a"
            >
              розрив ширшає
            </Annotation>
          </ChartSvg>
        </div>

        <div className="text-sm" style={{ display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
          <div className="callout callout-yellow">
            <strong>Покупці не міняються за 6 місяців.</strong> Користувач хоче той самий продукт,
            трохи кращий. Стабільність UX і даних — окремий актив.
          </div>
          <div className="callout">
            <strong>Великі можуть впровадити. Не можуть переадаптуватися.</strong> Кожні 6 місяців
            — нова модель, новий tool-stack. Інкумбент платить re-adoption tax; стартап — ні.
          </div>
          <div className="callout callout-green">
            <strong>Formula 1 у дощ.</strong> Жодне лідерство не безпечне. Той, хто реагує
            швидше за умов хаосу, виграє стейдж — навіть якщо програв сухий круг.
          </div>
        </div>
      </div>

      <p className="slide-footnote">
        Криві стилізовані: «можливості» — композит фронтирних бенчмарків (SWE-bench Verified,
        METR task-horizon, MMLU); «впровадження» — McKinsey{' '}
        <a
          href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
          target="_blank"
          rel="noreferrer"
        >
          State of AI 2024
        </a>{' '}
        — у Fortune-500 лише ~11% демонструють відчутну economic value від ШІ, а deep production
        intеграція &lt; 20%. Точкові значення ілюстративні; форма розриву — стійка.
      </p>
    </div>
  );
}
