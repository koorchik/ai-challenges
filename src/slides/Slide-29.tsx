// 29 · Бізнеси · Спроможність ≠ Надійність
type Quadrant = 'reliable' | 'inconsistent' | 'augment' | 'dont-trust';

type Chip = {
  id: string;
  label: string;
  quadrant: Quadrant;
};

const chips: Chip[] = [
  { id: 'crud',          label: 'CRUD endpoint',                 quadrant: 'reliable' },
  { id: 'json-ts',       label: 'JSON ↔ TS типи',                 quadrant: 'reliable' },
  { id: 'unit-test',     label: 'Юніт-тест зі специфікації',     quadrant: 'reliable' },
  { id: 'refactor',      label: 'Рефактор у 200k LoC',            quadrant: 'inconsistent' },
  { id: 'agent-loop',    label: 'Agent-loop на 8 годин',          quadrant: 'inconsistent' },
  { id: 'arch',          label: 'Архітектура у новому домені',   quadrant: 'augment' },
  { id: 'investigation', label: 'Розслідування інциденту',        quadrant: 'augment' },
  { id: 'prod-deploy',   label: 'Production deploy без людини',  quadrant: 'dont-trust' },
  { id: 'med-code',      label: 'Код для медичного приладу',      quadrant: 'dont-trust' },
];

const QUADRANT_META: Record<Quadrant, {
  accent: 'green' | 'yellow' | 'blue' | 'red';
  badge: string;
  reasoning: string;
}> = {
  reliable:     { accent: 'green',  badge: '✓ Reliable today', reasoning: 'Чітка специфікація, низька автономія, перевірка тестами — зона, де ШІ виграє стабільно.' },
  inconsistent: { accent: 'yellow', badge: '~ Inconsistent',   reasoning: 'Спроможність висока, але багатогодинна автономія розпадається. Робіть короткими кроками з checkpoint-ами.' },
  augment:      { accent: 'blue',   badge: '○ Augment-only',   reasoning: 'ШІ не має домен-контексту, людина має. Використовуйте ШІ як читач/чорновик, не як автора.' },
  'dont-trust': { accent: 'red',    badge: '✗ Don\'t trust',   reasoning: 'Високі ставки + автономія = недопустимо без людини в колі. Закон, медицина, гроші, фронт.' },
};

export function Slide20() {
  const chipsByQuadrant = (q: Quadrant) => chips.filter((c) => c.quadrant === q);

  return (
    <>
      <h2>Висока спроможність ≠ висока надійність</h2>
      <p className="lede">
        ШІ може пройти SWE-bench на 70–80% і провалитися на 8-годинній автономній задачі.
        Питання — де її <em>можна довіряти</em>.
      </p>

      <div className="matrix-2x2">
        <div></div>
        <div className="matrix-header">низька автономія</div>
        <div className="matrix-header">висока автономія</div>

        <div className="matrix-row-label">висока спроможність</div>
        <MatrixCell quadrant="reliable"     placed={chipsByQuadrant('reliable')} />
        <MatrixCell quadrant="inconsistent" placed={chipsByQuadrant('inconsistent')} />

        <div className="matrix-row-label">низька спроможність</div>
        <MatrixCell quadrant="augment"      placed={chipsByQuadrant('augment')} />
        <MatrixCell quadrant="dont-trust"   placed={chipsByQuadrant('dont-trust')} />
      </div>

      <p className="slide-footnote">
        Орієнтири: METR task-horizon (2024–25); SWE-bench Verified leaderboard.
      </p>
    </>
  );
}

function MatrixCell({ quadrant, placed }: { quadrant: Quadrant; placed: Chip[] }) {
  const meta = QUADRANT_META[quadrant];
  return (
    <div className="matrix-cell task-cell" data-accent={meta.accent}>
      <strong className="accent">{meta.badge}</strong>
      <p className="muted task-cell-hint">{meta.reasoning}</p>
      <div className="task-cell-chips">
        {placed.map((c) => (
          <span key={c.id} className="task-chip task-chip-placed">
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}
