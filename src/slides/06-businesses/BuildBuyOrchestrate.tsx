import { useState } from 'react';
import { ChartSvg } from '../../components/charts/Svg';

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

type Q1 = 'yes' | 'combo' | 'no';
type Q2 = 'yes' | 'no';

type WalkerState = {
  q1: Q1 | null;
  q2: Q2 | null;
};

type Outcome = {
  destination: NodeId;
  path: EdgeId[];
  example: string;
};

function resolve(state: WalkerState): Outcome | null {
  if (state.q1 === 'yes') {
    return {
      destination: 'build',
      path: ['q1-build'],
      example: 'Dynamic pricing для маркетплейсу — власні дані конверсій + власна модель.',
    };
  }
  if (state.q1 === 'combo') {
    return {
      destination: 'orchestrate',
      path: ['q1-orchestrate'],
      example: 'AI-помічник у SaaS-кабінеті — кілька моделей під ваш UX, без foundation.',
    };
  }
  if (state.q1 === 'no' && state.q2 === 'yes') {
    return {
      destination: 'buy',
      path: ['q1-q2', 'q2-buy'],
      example: 'Чат-бот підтримки — Intercom Fin / Zendesk AI / Ada вже зріли.',
    };
  }
  if (state.q1 === 'no' && state.q2 === 'no') {
    return {
      destination: 'build-narrow',
      path: ['q1-q2', 'q2-build-narrow'],
      example: 'Спеціалізована аналітика для оборонки — ринку SaaS немає, будуйте під себе.',
    };
  }
  return null;
}

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

export default function BuildBuyOrchestrate() {
  const [state, setState] = useState<WalkerState>({ q1: null, q2: null });
  const outcome = resolve(state);
  const litEdges = new Set<EdgeId>(outcome?.path ?? []);

  const reset = () => setState({ q1: null, q2: null });
  const pickQ1 = (q1: Q1) =>
    setState({ q1, q2: q1 === 'no' ? null : null });
  const pickQ2 = (q2: Q2) => setState((s) => ({ ...s, q2 }));

  const showQ2 = state.q1 === 'no';

  return (
    <>
      <h2>Build · Buy · Orchestrate — пройдіть через дерево</h2>
      <p className="lede">
        Дайте дві відповіді — побачите рекомендацію + продукт-приклад, який пройшов цей самий шлях.
      </p>

      <div
        className="tree-examples"
        style={{ flexDirection: 'column', alignItems: 'center', gap: '0.25em' }}
      >
        <div
          style={{
            display: 'flex',
            gap: '0.4em',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '0.45em', opacity: 0.7, letterSpacing: '0.06em' }}>
            Q1 · disambiguator?
          </span>
          <button
            type="button"
            className={`preset-btn ${state.q1 === 'yes' ? 'active' : ''}`}
            onClick={() => pickQ1('yes')}
          >
            так — наш моат
          </button>
          <button
            type="button"
            className={`preset-btn ${state.q1 === 'combo' ? 'active' : ''}`}
            onClick={() => pickQ1('combo')}
          >
            у комбінаціях
          </button>
          <button
            type="button"
            className={`preset-btn ${state.q1 === 'no' ? 'active' : ''}`}
            onClick={() => pickQ1('no')}
          >
            ні — стандартна задача
          </button>
        </div>
        {showQ2 && (
          <div
            style={{
              display: 'flex',
              gap: '0.4em',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '0.45em', opacity: 0.7, letterSpacing: '0.06em' }}>
              Q2 · зріле SaaS-рішення?
            </span>
            <button
              type="button"
              className={`preset-btn ${state.q2 === 'yes' ? 'active' : ''}`}
              onClick={() => pickQ2('yes')}
            >
              так — є SaaS
            </button>
            <button
              type="button"
              className={`preset-btn ${state.q2 === 'no' ? 'active' : ''}`}
              onClick={() => pickQ2('no')}
            >
              ні — нішевий кейс
            </button>
          </div>
        )}
        {outcome && (
          <button
            type="button"
            className="preset-btn"
            onClick={reset}
            style={{ marginTop: '0.2em' }}
          >
            ↺ скинути
          </button>
        )}
      </div>

      <ChartSvg height={420}>
        {edges.map((e) => (
          <EdgeLine key={e.id} edge={e} isActive={litEdges.has(e.id)} />
        ))}
        {nodes.map((n) => (
          <NodeBox key={n.id} n={n} isDestination={outcome?.destination === n.id} />
        ))}
      </ChartSvg>

      <p className={`callout ${outcome ? 'callout-yellow' : ''}`}>
        {outcome ? (
          <>
            <strong>Приклад:</strong> {outcome.example}
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
