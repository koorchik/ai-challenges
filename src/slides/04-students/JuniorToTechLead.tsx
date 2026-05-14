export default function JuniorToTechLead() {
  return (
    <div className="slide-body wide">
      <h2>Junior не зник. Його перейменували на Tech Lead</h2>
      <p className="lede" style={{ margin: 0 }}>
        Те, що раніше було роботою джуна (синтаксис, бойлерплейт, код за ТЗ), тепер закриває ШІ. 
        Те, що раніше робив Tech Lead, стало базовим мінімумом для входу в професію.
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1.5em' }}>
        <div data-accent="red">
          <h3 className="accent">Старий шлях (зник)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Junior → Middle → Senior Dev</strong>
            </li>
            <li><strong>Фокус:</strong> Написання коду за готовою специфікацією.</li>
            <li><strong>Навички:</strong> Знання синтаксису, фреймворків, типових патернів.</li>
            <li><strong>Управління:</strong> Отримуєш команду (або право приймати рішення) лише через 3-5 років.</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Новий шлях (реальність)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Junior Tech Lead → Middle → Senior</strong>
            </li>
            <li><strong>Фокус:</strong> Рев'ю ШІ-коду, архітектурні рішення, компроміси (trade-offs).</li>
            <li><strong>Навички:</strong> Продуктове бачення, системний дизайн, дебагінг згенерованого хаосу.</li>
            <li><strong>Управління:</strong> Ти керуєш "командою" ШІ-агентів починаючи з першого дня.</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1.5em' }}>
        <strong>Вміння писати код нікуди не зникло.</strong> Але з унікальної переваги воно перетворилося на гігієнічний мінімум (precondition). Роботу отримує той, хто бачить систему цілком.
      </div>
    </div>
  );
}