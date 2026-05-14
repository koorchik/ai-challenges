// 41 · Розробники · Калібрація на собі
export function Slide33() {
  return (
    <>
      <h2>Як виміряти <em>власний</em> ШІ-приріст</h2>
      <p className="lede">
        METR показав: розрив між відчутою і реальною продуктивністю ≈ 40 п.п. Якщо ви не міряєте —
        приймаєте рішення на відчуттях. Ось простий протокол, який ви можете зробити за 4 тижні.
      </p>

      <ol className="text-md wide" style={{ textAlign: 'left' }}>
        <li>
          <strong>Т1. Категоризуйте задачі</strong> на 3 типи: greenfield, legacy-інтеграції, дослідницькі.
        </li>
        <li>
          <strong>Т2. «Без ШІ»:</strong> по 3 задачі кожного типу. Записуйте фактичний час, не оцінку.
        </li>
        <li>
          <strong>Т3. «З ШІ»:</strong> 3 нові схожі задачі кожного типу. Окремо рахуйте rollback-и.
        </li>
        <li>
          <strong>Т4. Підбийте.</strong> Очікуйте: +30–50% на greenfield, ~0 на legacy, можливо −Х на
          дослідженнях.
        </li>
      </ol>

      <div className="two-col wide text-md" style={{ marginTop: '0.4em' }}>
        <div data-accent="green">
          <h3 className="accent">що отримаєте</h3>
          <ul className="checklist">
            <li>Власну Cui-криву, не теоретичну</li>
            <li>Розуміння, де ставити ШІ, а де — ні</li>
            <li>Аргументи для переговорів про роль</li>
          </ul>
        </div>
        <div data-accent="red">
          <h3 className="accent">пастки в зборі даних</h3>
          <ul className="checklist">
            <li>«Я б все одно зробив за той самий час» (ні)</li>
            <li>Не рахувати час на review AI-коду</li>
            <li>Виключати «провалені» спроби з підрахунку</li>
          </ul>
        </div>
      </div>
    </>
  );
}
