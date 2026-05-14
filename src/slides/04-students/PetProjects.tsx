export default function PetProjects() {
  return (
    <div className="slide-body wide">
      <h2>Pet-проєкт 2026: Один працюючий продукт &gt; 5 мертвих репозиторіїв</h2>
      <p className="lede" style={{ margin: 0 }}>
        ШІ повністю знецінив написання базового коду — згенерувати MVP можна за вечір. Тому ваше портфоліо 
        більше не доводить, що ви знаєте синтаксис. Воно має доводити вашу здатність <em>вивести продукт у продакшен (delivery)</em> та підтримувати його.
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1.5em', gap: '2em' }}>
        <div data-accent="red">
          <h3 className="accent">Red Flags (Що більше не вражає)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>«Я написав це за вечір у Cursor»</strong> — без реальних користувачів це просто демо можливостей ШІ, а не вашого скіла.
            </li>
            <li>
              <strong>Тонкі обгортки над ChatGPT</strong> — ToDo-лісти чи чат-боти з нульовою доданою вартістю.
            </li>
            <li>
              <strong>Клони Twitter / Netflix / Uber</strong> — стандартна "жуйка" з туторіалів, яку ніхто не буде рев'ювити.
            </li>
            <li>
              <strong>Цвинтар з 20 репозиторіїв</strong> — де перший і останній коміт зроблені в один день.
            </li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Green Flags (Що наймає на роботу)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Реальні користувачі:</strong> 10, 100 чи 1000 людей — головне, що ця метрика більша за нуль.
            </li>
            <li>
              <strong>Вузький фокус:</strong> Вирішення дуже специфічної проблеми.
            </li>
            <li>
              <strong>Production-ready:</strong> Налаштований CI/CD, моніторинг, метрики (latency p95), логування помилок.
            </li>
            <li>
              <strong>Чесний Post-mortem:</strong> Розділ у README про те, що зламалося, де ШІ загалюцинував і як ви особисто це фіксили.
            </li>
          </ul>
        </div>
      </div>

      <div className="callout callout-green" style={{ marginTop: '1.5em' }}>
        <strong>Рев'ю вашого проєкту тепер не починається з читання коду.</strong> <br/>
        Воно починається з питань інтерв'юера: (1) Яку реальну проблему це вирішує? (2) Хто цим користується прямо зараз? 
        і (3) <em>Як ви дізнаєтеся, якщо база даних впаде о 3-й ночі?</em>
      </div>
    </div>
  );
}