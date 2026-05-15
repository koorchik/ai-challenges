export default function PetProjects() {
  return (
    <div className="slide-body wide">
      <h2>Pet-проєкт 2026: Один працюючий продукт &gt; 5 мертвих репозиторіїв</h2>
      <p className="lede" style={{ margin: 0 }}>
        ШІ знецінив написання базового коду — MVP пишеться за вечір. Портфоліо тепер має доводити вашу здатність <em>вивести продукт у продакшен</em> і підтримувати його.
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1em', gap: '2em' }}>
        <div data-accent="red">
          <h3 className="accent">Red Flags</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>«Написав за вечір у Cursor»</strong> — без користувачів це демо ШІ, не ваш скіл.</li>
            <li><strong>Тонкі обгортки над ChatGPT</strong> — ToDo-лісти з нульовою доданою вартістю.</li>
            <li><strong>Клони Twitter / Netflix / Uber</strong> — туторіальна «жуйка».</li>
            <li><strong>Цвинтар з 20 репозиторіїв</strong> — перший і останній коміт в один день.</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Green Flags</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>Реальні користувачі:</strong> 10, 100, 1000 — головне, що &gt; 0.</li>
            <li><strong>Вузький фокус:</strong> одна специфічна проблема.</li>
            <li><strong>Production-ready:</strong> CI/CD, моніторинг, latency p95, логи помилок.</li>
            <li><strong>Чесний post-mortem у README:</strong> що зламалось, де ШІ галюцинував, як фіксили.</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-green" style={{ marginTop: '1em' }}>
        Рев'ю починається з трьох питань: (1) яку проблему вирішує? (2) хто користується зараз? (3) <em>як дізнаєтеся, якщо БД впаде о 3-й ночі?</em>
      </div>
    </div>
  );
}