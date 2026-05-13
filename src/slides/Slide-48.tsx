// 48 · Бізнеси · Build / Buy / Orchestrate
import { useEffect, useState } from 'react';
import { ChartSvg } from '../components/charts/Svg';

type NodeId = 'q1' | 'q2' | 'build' | 'orchestrate' | 'buy' | 'build-narrow';

type Node = {
  id: NodeId;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  detail?: string;
  color: string;
};

const nodes: Node[] = [
  { id: 'q1', x: 350, y: 30, width: 300, height: 60, label: 'Чи це наш ключовий disambiguator?', color: '#facc15' },
  { id: 'build', x: 50, y: 170, width: 220, height: 100, label: 'BUILD', detail: 'власна модель / pipeline\nдомен-фіт, контроль', color: '#86efac' },
  { id: 'q2', x: 380, y: 170, width: 240, height: 60, label: 'Чи є зріле SaaS-рішення?', color: '#fde68a' },
  { id: 'orchestrate', x: 730, y: 170, width: 220, height: 100, label: 'ORCHESTRATE', detail: 'кілька моделей / API\nпід власний workflow', color: '#bfdbfe' },
  { id: 'buy', x: 320, y: 320, width: 220, height: 100, label: 'BUY', detail: 'купуйте SaaS / API\nне винаходьте велосипед', color: '#c4b5fd' },
  { id: 'build-narrow', x: 580, y: 320, width: 220, height: 100, label: 'BUILD (вузько)', detail: 'власне рішення для нішевого\nкейсу, де ринку немає', color: '#86efac' },
];

type EdgeId = 'q1-build' | 'q1-q2' | 'q1-orchestrate' | 'q2-buy' | 'q2-build-narrow';

type Edge = {
  id: EdgeId;
  from: { x: number; y: number };
  to: { x: number; y: number };
  label: string;
};

const edges: Edge[] = [
  { id: 'q1-build',         from: { x: 400, y: 90 }, to: { x: 160, y: 170 }, label: 'так' },
  { id: 'q1-q2',            from: { x: 500, y: 90 }, to: { x: 500, y: 170 }, label: 'ні' },
  { id: 'q1-orchestrate',   from: { x: 600, y: 90 }, to: { x: 840, y: 170 }, label: 'у комбінаціях?' },
  { id: 'q2-buy',           from: { x: 460, y: 230 }, to: { x: 430, y: 320 }, label: 'так' },
  { id: 'q2-build-narrow',  from: { x: 580, y: 230 }, to: { x: 690, y: 320 }, label: 'ні' },
];

type Example = {
  id: string;
  label: string;
  path: EdgeId[];
  destination: NodeId;
  rationale: string;
};

const examples: Example[] = [
  {
    id: 'support',
    label: 'Чат-бот підтримки клієнтів',
    path: ['q1-q2', 'q2-buy'],
    destination: 'buy',
    rationale: 'Для типового support-бота ринок зрілий: Intercom Fin, Zendesk AI, Ada. Купуйте — не будуйте, не орхеструйте.',
  },
  {
    id: 'pricing',
    label: 'Dynamic pricing для маркетплейсу',
    path: ['q1-build'],
    destination: 'build',
    rationale: 'Pricing — це ваш моат: власні дані про конверсії + власна модель. Жоден SaaS не закриє те, що відрізняє вас від конкурента.',
  },
  {
    id: 'assistant',
    label: 'AI-помічник у вашому SaaS-кабінеті',
    path: ['q1-orchestrate'],
    destination: 'orchestrate',
    rationale: 'Користувач платить за UX і знання про ВАШ продукт, а не за модель. Збирайте кілька моделей під власний workflow — без власного foundation model.',
  },
];

function NodeBox({ n, isDestination }: { n: Node; isDestination: boolean }) {
  const lines = n.detail?.split('\n') ?? [];
  return (
    <g className={isDestination ? 'tree-node tree-node-active' : 'tree-node'}>
      <rect
        x={n.x}
        y={n.y}
        width={n.width}
        height={n.height}
        rx={8}
        fill="rgba(0,0,0,0.4)"
        stroke={isDestination ? '#facc15' : n.color}
        strokeWidth={isDestination ? 3.5 : 2}
      />
      <text
        x={n.x + n.width / 2}
        y={n.y + 26}
        textAnchor="middle"
        fill={n.color}
        fontSize={14}
        fontWeight={700}
      >
        {n.label}
      </text>
      {lines.map((line, i) => (
        <text
          key={i}
          x={n.x + n.width / 2}
          y={n.y + 48 + i * 15}
          textAnchor="middle"
          fill="rgba(255,255,255,0.75)"
          fontSize={11}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function EdgeLine({ edge, isActive }: { edge: Edge; isActive: boolean }) {
  const midX = (edge.from.x + edge.to.x) / 2;
  const midY = (edge.from.y + edge.to.y) / 2;
  return (
    <g>
      <line
        x1={edge.from.x}
        y1={edge.from.y}
        x2={edge.to.x}
        y2={edge.to.y}
        stroke={isActive ? '#facc15' : 'rgba(255,255,255,0.3)'}
        strokeWidth={isActive ? 3 : 1.5}
        style={{ transition: 'stroke 0.3s ease, stroke-width 0.3s ease' }}
      />
      <text
        x={midX}
        y={midY - 4}
        textAnchor="middle"
        fill={isActive ? '#facc15' : 'rgba(255,255,255,0.7)'}
        fontSize={11}
        fontWeight={600}
        style={{ transition: 'fill 0.3s ease' }}
      >
        {edge.label}
      </text>
    </g>
  );
}

export function Slide39() {
  const [active, setActive] = useState<Example | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!active) {
      setStep(0);
      return;
    }
    setStep(0);
    const ids: number[] = [];
    active.path.forEach((_, i) => {
      ids.push(window.setTimeout(() => setStep(i + 1), (i + 1) * 550));
    });
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [active]);

  const litEdges = new Set(active ? active.path.slice(0, step) : []);
  const destinationLit = active != null && step >= active.path.length ? active.destination : null;

  return (
    <>
      <h2>Build · Buy · Orchestrate — дерево рішень</h2>
      <p className="lede">
        У 2026 «купи модель, побудуй обгортку» — це частий, але часто помилковий вибір. Натисніть один з
        прикладів — і подивіться, куди він приведе.
      </p>

      <div className="tree-examples">
        {examples.map((ex) => (
          <button
            key={ex.id}
            type="button"
            className={`preset-btn ${active?.id === ex.id ? 'active' : ''}`}
            onClick={() => setActive((cur) => (cur?.id === ex.id ? null : ex))}
          >
            {ex.label}
          </button>
        ))}
      </div>

      <ChartSvg height={420}>
        {edges.map((e) => (
          <EdgeLine key={e.id} edge={e} isActive={litEdges.has(e.id)} />
        ))}
        {nodes.map((n) => (
          <NodeBox key={n.id} n={n} isDestination={destinationLit === n.id} />
        ))}
      </ChartSvg>

      <p className={`callout ${active ? 'callout-yellow' : ''}`}>
        {active && step >= active.path.length ? (
          <>
            <strong>{active.label}:</strong> {active.rationale}
          </>
        ) : (
          <>
            Антипатерн 2026: «давайте побудуємо власний RAG / агент» там, де є зріле SaaS за $200/міс.
            Бюджет команди на «велосипед» — не моат, а стаття витрат.
          </>
        )}
      </p>
    </>
  );
}
