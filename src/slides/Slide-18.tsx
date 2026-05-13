// 18 · Студенти · Pet-проєкти у часи ШІ
export function Slide25() {
  return (
    <>
      <h2>Pet-проєкти: 1 глибоко &gt; 5 поверхово</h2>
      <p className="lede">
        Раніше portfolio був списком ваших навичок. Тепер це доказ того, що ви <em>довели до кінця</em>{' '}
        річ, яку інші використовують. ШІ скоротив дорогу від ідеї до прототипу. Поріг того, що
        вважається «достатньо», піднявся.
      </p>

      <div className="two-col wide text-md">
        <div data-accent="green">
          <h3 className="accent">що показує смак та доведення до кінця</h3>
          <ul className="checklist">
            <li>
              <strong>Реальні користувачі</strong> (10, 100, 1000 — не нуль)
            </li>
            <li>
              <strong>Один сфокусований домен</strong>: ботанічний помічник, ETL для дрібного e-commerce
            </li>
            <li>
              <strong>Метрики</strong>: latency p95, success rate, NPS — будь-що виміряне
            </li>
            <li>
              <strong>Чесний post-mortem</strong>: що не спрацювало, чому ви зупинилися
            </li>
            <li>
              <strong>Production-розгортання</strong>: hosting, моніторинг, payments
            </li>
          </ul>
        </div>
        <div data-accent="red">
          <h3 className="accent">що більше не вражає</h3>
          <ul className="checklist">
            <li>Todo-list з GPT-API всередині</li>
            <li>Ще одна обгортка для ChatGPT</li>
            <li>«Я зробив це за вечір з Cursor» без користувачів</li>
            <li>20 туторіальних репозиторіїв з README як код</li>
            <li>Клон Twitter / Airbnb / Uber «для практики»</li>
          </ul>
        </div>
      </div>

      <p className="callout callout-green">
        <strong>Тест трьох питань на ваш проєкт:</strong> (1) що він робить, що ніхто інший не робить?{' '}
        (2) чим я можу довести, що це <em>працює</em>? (3) хто, конкретно, ним користується?
      </p>
    </>
  );
}
