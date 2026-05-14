// 40 · Розробники · Новий workflow з ШІ
import { ChartSvg } from '../components/charts/Svg';
import { useInView } from '../components/hooks/useInView';

const steps = [
  { label: '1. Сформулювати', sub: 'що насправді треба', x: 80, color: '#bfdbfe' },
  { label: '2. Згенерувати', sub: 'дратft з ШІ', x: 280, color: '#facc15' },
  { label: '3. Перевірити', sub: 'тести, типи, читання', x: 480, color: '#fde68a' },
  { label: '4. Інтегрувати', sub: 'у систему / гілку', x: 680, color: '#86efac' },
  { label: '5. Виміряти', sub: 'що змінилося в проді', x: 880, color: '#c4b5fd' },
];

// Single path the traveling dot follows: across all five steps, then back
// via the dashed return arc so the loop reads end-to-end.
const FLOW_PATH = 'M 80 220 L 280 220 L 480 220 L 680 220 L 880 220 Q 480 380 80 220';
const LOOP_DUR = '9s';

export function Slide40() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <div ref={ref}>
      <h2>Новий цикл: специфікація → ШІ → людина → продакшен</h2>
      <p className="lede">
        Антипатерн — «згенерував і скомітив». Цикл, у якому ШІ <em>прискорює</em> і <em>не випадає</em>{' '}
        з-під вашої перевірки:
      </p>

      <ChartSvg height={350}>
        {/* loop arc background */}
        <path
          d="M 80 220 Q 480 60 880 220"
          fill="none"
          stroke="rgba(250,204,21,0.25)"
          strokeWidth={2}
          strokeDasharray="6 6"
        />
        <path
          d="M 880 220 Q 480 380 80 220"
          fill="none"
          stroke="rgba(250,204,21,0.15)"
          strokeWidth={1.5}
          strokeDasharray="3 6"
        />
        <text x={480} y={310} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize={11} fontStyle="italic">
          назад до специфікації — якщо щось не так
        </text>

        {steps.map((step, i) => (
          <g key={step.label}>
            <circle cx={step.x} cy={220} r={40} fill="rgba(0,0,0,0.4)" stroke={step.color} strokeWidth={3} />
            <text
              x={step.x}
              y={216}
              textAnchor="middle"
              fill={step.color}
              fontSize={12}
              fontWeight={700}
            >
              {step.label.split(' ')[0]}
            </text>
            <text
              x={step.x}
              y={230}
              textAnchor="middle"
              fill={step.color}
              fontSize={10}
              opacity={0.85}
            >
              {step.label.split(' ').slice(1).join(' ')}
            </text>
            <text
              x={step.x}
              y={280}
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize={11}
            >
              {step.sub}
            </text>
            {i < steps.length - 1 && (
              <text x={step.x + 100} y={225} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={20}>
                →
              </text>
            )}
          </g>
        ))}

        {/* checkpoint flags — pulse subtly when the dot is moving */}
        <g className={inView ? 'wf-checkpoints wf-on' : 'wf-checkpoints'}>
          <text x={280} y={170} textAnchor="middle" fill="#fda4ae" fontSize={10} fontWeight={600}>
            ✓ checkpoint: чи це те, що мені треба?
          </text>
          <text x={680} y={170} textAnchor="middle" fill="#fda4ae" fontSize={10} fontWeight={600}>
            ✓ checkpoint: чи це безпечно для прода?
          </text>
        </g>

        {/* Traveling pulse — gated on inView so it only animates while the
            slide is on-screen. Glow halo + core circle move together. */}
        {inView && (
          <g style={{ pointerEvents: 'none' }}>
            <circle r={20} fill="rgba(250,204,21,0.22)">
              <animateMotion dur={LOOP_DUR} repeatCount="indefinite" path={FLOW_PATH} />
            </circle>
            <circle r={10} fill="rgba(250,204,21,0.55)">
              <animateMotion dur={LOOP_DUR} repeatCount="indefinite" path={FLOW_PATH} />
            </circle>
            <circle r={5} fill="#fff7c2">
              <animateMotion dur={LOOP_DUR} repeatCount="indefinite" path={FLOW_PATH} />
            </circle>
          </g>
        )}
      </ChartSvg>

      <p className="callout">
        Принцип: <strong>швидкість циклу</strong> важливіша за швидкість будь-якого кроку. Цикл, де ви не
        ставите checkpoint-и, — це не швидкий цикл, це <em>повільний поломаний</em> цикл, тільки відкритий
        для багатотижневих регресів.
      </p>
    </div>
  );
}
