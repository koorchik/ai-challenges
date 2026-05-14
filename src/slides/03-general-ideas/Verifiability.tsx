export default function Verifiability() {
  return (
    <div className="slide-body wide">
      <h2>Verifiability — і ШІ стає solver</h2>
      <p className="lede" style={{ margin: 0 }}>
        Якщо є автоматична перевірка результату, агент ітерує скільки треба — як solver в Excel.
      </p>
      <div className="two-col text-md">
        <div data-accent="green">
          <h3 className="accent">Verifiable → автоматизується</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>Код: тести, type-check, lints</li>
            <li>Математика: підстановка в рівняння</li>
            <li>SQL: схема + очікуваний результат</li>
            <li>Shell: exit code, snapshot output</li>
          </ul>
        </div>
        <div data-accent="red">
          <h3 className="accent">Не verifiable → агент застряг</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>«Чи гарний дизайн?»</li>
            <li>«Чи переконливий текст?»</li>
            <li>Стратегія без метрик</li>
            <li>UX без user-тестів</li>
          </ul>
        </div>
      </div>
      <div className="callout">
        «Software 2.0 easily automates what you can verify.» — Karpathy
      </div>
      <p className="slide-footnote">
        Andrej Karpathy, «Verifiability» (листопад 2025){' '}
        <a href="https://karpathy.bearblog.dev/verifiability/">karpathy.bearblog.dev/verifiability/</a>
      </p>
    </div>
  );
}
