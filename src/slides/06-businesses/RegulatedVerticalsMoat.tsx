type Vertical = {
  name: string;
  accent: 'red' | 'amber' | 'blue' | 'yellow';
  cost: string;
  gap: string;
};

const verticals: Vertical[] = [
  {
    name: 'FinTech',
    accent: 'yellow',
    cost: 'Штрафи AML/GDPR, відкликання ліцензій, фінансові збитки.',
    gap: 'Жорстка детермінованість і аудит. Ймовірнісний код LLM — недопустимий.',
  },
  {
    name: 'HealthTech',
    accent: 'red',
    cost: 'Шкода пацієнтам, санкції FDA/HIPAA, відкликання обладнання.',
    gap: 'Клінічна валідація та сертифікація — без людини агенти не проходять.',
  },
  {
    name: 'Auto & Авіація',
    accent: 'amber',
    cost: 'Аварії, мільярдні відкликання, втрата сертифікатів польотів.',
    gap: 'ISO 26262 / DO-178C — формальна верифікація і трасування кожного рядка.',
  },
  {
    name: 'LegalTech',
    accent: 'blue',
    cost: 'Недбалість, програні справи, втрата адвокатського статусу.',
    gap: 'Галюцинації (вигадані прецеденти) = дисциплінарка проти компанії.',
  },
];

export default function RegulatedVerticalsMoat() {
  return (
    <div className="slide-body wide">
      <h2>Індустрії, де помилки ШІ ризикові</h2>
      <p className="lede" style={{ margin: 0 }}>
        Людська інженерія тримає преміум там, де <em>вартість помилки</em> кратно перевищує <em>економію</em> від автоматизації.
      </p>

      <div className="two-col wide text-sm" style={{ marginTop: '0.8em', gap: '1em' }}>
        {verticals.map((v) => (
          <div key={v.name} className="tile" data-accent={v.accent} style={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
            <h3 className="accent" style={{ fontSize: '1.2em', marginBottom: '8px' }}>{v.name}</h3>
            <p style={{ margin: '0 0 6px', lineHeight: 1.35 }}>
              <strong style={{ color: 'var(--text-dim)' }}>Ціна помилки:</strong> {v.cost}
            </p>
            <p style={{ margin: 0, lineHeight: 1.35 }}>
              <strong style={{ color: 'var(--text-dim)' }}>Чому ШІ не впорається:</strong> {v.gap}
            </p>
          </div>
        ))}
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '0.8em' }}>
        Премію платять не за швидкість друку, а за здатність юридично підписатися під результатом.
      </div>
    </div>
  );
}