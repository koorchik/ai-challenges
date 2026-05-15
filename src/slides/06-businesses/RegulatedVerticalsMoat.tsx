type Vertical = {
  name: string;
  accent: 'red' | 'purple' | 'amber' | 'blue' | 'green' | 'yellow';
  cost: string;
  gap: string;
};

const verticals: Vertical[] = [
  {
    name: 'FinTech (Фінанси)',
    accent: 'yellow',
    cost: 'Штрафи AML / GDPR, відкликання ліцензій, прямі фінансові збитки.',
    gap: 'Жорстка детермінованість логіки та фінансовий аудит. Ймовірнісний код (який видає LLM) тут недопустимий.',
  },
  {
    name: 'HealthTech (Медицина)',
    accent: 'red',
    cost: 'Шкода здоров’ю пацієнтів, санкції FDA/HIPAA, масові відкликання обладнання.',
    gap: 'Клінічна валідація та сертифікація медичних виробів, які ШІ-агенти не здатні пройти без людини.',
  },
  {
    name: 'DefenseTech (Оборонка)',
    accent: 'purple',
    cost: 'Загроза життю, витік класифікованих даних, порушення експортного контролю.',
    gap: 'Норми ITAR / EAR та жорсткі перевірки безпеки. Автономні ШІ-рішення заборонені на рівні воєнних доктрин.',
  },
  {
    name: 'Auto & Авіація',
    accent: 'amber',
    cost: 'Аварії, мільярдні відкликання авто, втрата сертифікатів безпеки польотів.',
    gap: 'Стандарти ISO 26262 / DO-178C вимагають формальної верифікації та наскрізного трасування кожного рядка коду.',
  },
  {
    name: 'LegalTech (Право)',
    accent: 'blue',
    cost: 'Професійна недбалість, програні справи, позбавлення адвокатського статусу.',
    gap: 'ШІ-галюцинації (вигадані прецеденти) миттєво перетворюються на дисциплінарні провадження проти компанії.',
  },
  {
    name: 'Critical Infra (Енергетика)',
    accent: 'green',
    cost: 'Блекаути, кібератаки на мережі (NERC CIP), збитки у мільйони за хвилини простою.',
    gap: 'Регуляторний аудит та персональна кримінальна відповідальність. Потрібен юридичний підпис живої людини.',
  },
];

export default function RegulatedVerticalsMoat() {
  return (
    <div className="slide-body wide">
      <h2>Індустрії, де помилки ШІ ризикові</h2>
      <p className="lede" style={{ margin: 0, marginBottom: '1.5em' }}>
        Людська інженерія зберігає преміальну ціну там, де <em>вартість помилки</em> катастрофічно 
        перевищує <em>економію</em> від автоматизації коду. Це зони з нульовою толерантністю до ШІ-галюцинацій.
      </p>

      <div className="three-col wide text-sm" style={{ gap: '1.2em' }}>
        {verticals.map((v) => (
          <div key={v.name} className="tile" data-accent={v.accent} style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <h3 className="accent" style={{ fontSize: '1.3em', marginBottom: '15px' }}>{v.name}</h3>
            <div style={{ flexGrow: 1 }}>
              <p style={{ marginBottom: '0.8em', lineHeight: 1.4 }}>
                <strong style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Ціна помилки:</strong> 
                {v.cost}
              </p>
              <p style={{ margin: 0, lineHeight: 1.4 }}>
                <strong style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.9em', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Чому ШІ не впорається:</strong> 
                {v.gap}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1.5em' }}>
        <strong>Ваш новий продукт — це спокій, а не рядки коду.</strong> Переходьте від продажу «розробки під ключ» 
        до пакетів <strong>«інженерія + комплаєнс + аудит безпеки»</strong>. Премію у 2026 році платять не за швидкість 
        друку, а за здатність вашої компанії юридично підписатися під результатом.
      </div>
    </div>
  );
}