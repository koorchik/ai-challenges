// 13 · Концепції · Verifiability
export function Slide13() {
  return (
    <>
      <h2>Verifiability — і ШІ стає solver</h2>
      <p className="lede">
        Якщо є автоматична перевірка результату, агент ітерує скільки треба —
        як solver в Excel шукає корінь рівняння. Дай йому verifiability — решту він зробить сам.
      </p>
      <div className="two-col wide" style={{ marginTop: '0.4em' }}>
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
      <div className="callout" style={{ marginTop: '0.5em' }}>
        «Software 2.0 easily automates what you can verify.» — Karpathy
      </div>
      <p className="slide-footnote">
        Працює не тільки для коду — для будь-якої агентної задачі. Спочатку придумай, як перевіряти автоматично.
        <br />
        Andrej Karpathy, «Verifiability» (листопад 2025){' '}
        <a href="https://karpathy.bearblog.dev/verifiability/">karpathy.bearblog.dev/verifiability/</a>
      </p>
    </>
  );
}
