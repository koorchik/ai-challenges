type Vertical = {
  name: string;
  accent: 'red' | 'purple' | 'amber' | 'blue' | 'green' | 'yellow';
  cost: string;
  gap: string;
};

const verticals: Vertical[] = [
  {
    name: 'Фінтех',
    accent: 'red',
    cost: 'штрафи AML / GDPR / SOX, прямі грошові втрати',
    gap: 'детерміністська верифікація, аудит-трейл — не можна «ймовірнісно правильно»',
  },
  {
    name: 'Медтех',
    accent: 'red',
    cost: 'шкода пацієнту, FDA, HIPAA, відкликання пристрою',
    gap: 'клінічна валідація + регуляторика медвиробів, які LLM не проходять',
  },
  {
    name: 'Defense / GovTech',
    accent: 'purple',
    cost: 'життя, класифіковані дані, експорт-контроль',
    gap: 'ITAR / EAR, безпекові огляди, недопустима auto-pilot LLM-логіка',
  },
  {
    name: 'Авто / авіо embedded',
    accent: 'amber',
    cost: 'ISO 26262 / DO-178C, відгуки, сертифікація',
    gap: 'формальна верифікація, traceability вимог, повний слід коду',
  },
  {
    name: 'Юр-tech',
    accent: 'blue',
    cost: 'малпрактис, штрафи, відкликання адвокатури',
    gap: 'галюцинації прецедентів = матеріал для дисциплінарних справ',
  },
  {
    name: 'Енергетика / критична інфра',
    accent: 'green',
    cost: 'NERC CIP, цілодобова безпека, downtime у мільйонах',
    gap: 'regulatory audit + persona-відповідальність — потрібен підпис людини',
  },
];

export default function RegulatedVerticalsMoat() {
  return (
    <div className="slide-body wide">
      <h2>Куди тікати: ринки, де помилка ШІ дорожча за токен</h2>
      <p className="lede" style={{ margin: 0 }}>
        Премія за людську інженерію залишається там, де verifiability слабка, а штраф за
        неправильний результат — більший за всю зекономлену вартість розробки.
      </p>

      <div className="three-col text-sm">
        {verticals.map((v) => (
          <div key={v.name} className="quad-cell" data-accent={v.accent}>
            <h3>{v.name}</h3>
            <p>
              <strong>Ціна помилки:</strong> {v.cost}
            </p>
            <p>
              <strong>Чому ШІ не закриває сам:</strong> {v.gap}
            </p>
          </div>
        ))}
      </div>

      <p className="callout callout-yellow">
        Переходимо з offering-у «розробка під ключ» на «інженерія + комплаєнс + аудит». Премія
        тут не за швидкість — за здатність підписатися під результатом.
      </p>

      <p className="slide-footnote">
        Спирається на Karpathy «Verifiability» (2025) — там, де перевірка не автоматизується, ШІ
        не дозамикає цикл сам. METR task-horizon показує, що довгі автономні сесії розпадаються.
      </p>
    </div>
  );
}
