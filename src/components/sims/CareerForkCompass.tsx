import { useState } from 'react';
import { Slider } from '../charts/Slider';

type ForkKey = 'domain' | 'lead' | 'founder' | 'infra';

type Fork = {
  key: ForkKey;
  title: string;
  accent: 'yellow' | 'green' | 'blue' | 'purple';
  hint: string;
  bullets: string[];
  rationale: string;
  weights: { e: number; d: number; f: number; i: number; c: number };
};

const FORKS: Fork[] = [
  {
    key: 'domain',
    title: 'Domain expert',
    accent: 'yellow',
    hint: 'медицина · фінанси · оборонка · енергія',
    bullets: ['Глибина домену > широта стеку', 'Регуляція, ліцензії, ризик', 'Працюєте з не-розробниками'],
    rationale: 'ШІ не має «років у домені»',
    weights: { e: 0.3, d: 0.5, f: 0, i: 0, c: 0.2 },
  },
  {
    key: 'lead',
    title: 'Tech / staff lead',
    accent: 'green',
    hint: 'архітектура · координація',
    bullets: ['Дизайн систем, RFC', 'Mentoring & найм', 'Cross-team координація'],
    rationale: 'ШІ не несе відповідальності',
    weights: { e: 0.4, d: 0.3, f: 0, i: 0, c: 0.3 },
  },
  {
    key: 'founder',
    title: 'Founder / solo product',
    accent: 'blue',
    hint: 'сам собі продукт',
    bullets: ['1–3 людини, ШІ як «команда»', 'Дистрибуція > код', 'Готовність до невизначеності'],
    rationale: 'найбільший upside, найбільший ризик',
    weights: { e: 0.2, d: 0, f: 0.5, i: 0, c: 0.3 },
  },
  {
    key: 'infra',
    title: 'AI infra / platform',
    accent: 'purple',
    hint: 'той, хто будує інструменти',
    bullets: ['RAG, evals, observability', 'ML-ops, vector DB', 'Security для LLM'],
    rationale: 'найвища премія, найшвидша гонитва',
    weights: { e: 0.3, d: 0, f: 0.1, i: 0.6, c: 0 },
  },
];

const AXES = ['досвід', 'домен', 'founder', 'infra', "комʼюн."];

function Radar({ values }: { values: number[] }) {
  const size = 170;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 68;
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / 5;
  const point = (i: number, r: number) => [
    cx + r * Math.cos(angle(i)),
    cy + r * Math.sin(angle(i)),
  ];
  const ring = (r: number) =>
    Array.from({ length: 5 }, (_, i) => point(i, r).join(',')).join(' ');
  const valuePoly = Array.from({ length: 5 }, (_, i) =>
    point(i, radius * (values[i] / 10)).join(',')
  ).join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', maxWidth: 170, display: 'block' }}>
      {[0.25, 0.5, 0.75, 1].map((r) => (
        <polygon
          key={r}
          points={ring(radius * r)}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={1}
        />
      ))}
      {Array.from({ length: 5 }, (_, i) => {
        const [x, y] = point(i, radius);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x}
            y2={y}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1}
          />
        );
      })}
      <polygon
        points={valuePoly}
        fill="rgba(238,255,65,0.22)"
        stroke="#facc15"
        strokeWidth={2}
        style={{ transition: 'all 0.35s ease' }}
      />
      {AXES.map((label, i) => {
        const [x, y] = point(i, radius + 16);
        return (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize={11}
            dominantBaseline="middle"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export function CareerForkCompass() {
  const [e, setE] = useState(5);
  const [d, setD] = useState(5);
  const [f, setF] = useState(5);
  const [i, setI] = useState(5);
  const [c, setC] = useState(5);

  const n = (v: number) => v / 10;
  const scores = FORKS.map((fork) => ({
    key: fork.key,
    score:
      n(e) * fork.weights.e +
      n(d) * fork.weights.d +
      n(f) * fork.weights.f +
      n(i) * fork.weights.i +
      n(c) * fork.weights.c,
  })).sort((a, b) => b.score - a.score);

  const recommended = scores[0].key;
  const runnerUp = scores[1].key;

  return (
    <>
      <h2>Карʼєрні шляхи з 2026 — компас для вибору</h2>
      <p className="lede">
        Пʼять повзунків під свій профіль — побачите, де у вас найбільша перевага. Жоден шлях не гарантований.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '170px 1fr',
          gap: '0.6em',
          alignItems: 'center',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <Radar values={[e, d, f, i, c]} />

        <div className="fork">
          {FORKS.map((fork) => {
            const isRec = fork.key === recommended;
            const isRun = fork.key === runnerUp;
            return (
              <div
                key={fork.key}
                className="fork-node"
                data-accent={fork.accent}
                style={
                  isRec
                    ? {
                        outline: '2px solid var(--accent)',
                        boxShadow: '0 0 0 4px rgba(238,255,65,0.12)',
                      }
                    : isRun
                      ? { opacity: 0.85 }
                      : { opacity: 0.55 }
                }
              >
                <h3>
                  {fork.title}
                  {isRec && (
                    <span
                      style={{
                        fontSize: '0.55em',
                        marginLeft: '0.4em',
                        color: 'var(--accent)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      · РЕК.
                    </span>
                  )}
                </h3>
                <p className="muted">{fork.hint}</p>
                <ul style={{ paddingLeft: '1em', margin: '0.2em 0' }}>
                  {fork.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="muted">{fork.rationale}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="sim-controls-quad"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          marginTop: '0.2em',
        }}
      >
        <Slider label="досвід (років)" min={0} max={10} step={0.5} value={e} onChange={setE} format={(v) => `${v.toFixed(1)}`} />
        <Slider label="глибина домену" min={0} max={10} step={0.5} value={d} onChange={setD} format={(v) => `${v.toFixed(1)}`} />
        <Slider label="founder-апетит" min={0} max={10} step={0.5} value={f} onChange={setF} format={(v) => `${v.toFixed(1)}`} />
        <Slider label="інфра-інтерес" min={0} max={10} step={0.5} value={i} onChange={setI} format={(v) => `${v.toFixed(1)}`} />
        <Slider label="комунікація" min={0} max={10} step={0.5} value={c} onChange={setC} format={(v) => `${v.toFixed(1)}`} />
      </div>

      <p className="slide-footnote">
        Стилізована рекомендація — ваги авторські. Жоден з форків не гарантований.
      </p>
    </>
  );
}
