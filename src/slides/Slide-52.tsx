// 52 · Бізнеси · Pipeline наступного покоління
export function Slide37() {
  return (
    <>
      <h2>Pipeline наступного покоління</h2>
      <p className="lede">
        Якщо ніхто не наймає junior-ів сьогодні — звідки візьмуться senior-и за п'ять років?
      </p>

      <div className="two-col wide text-md">
        <div data-accent="red">
          <h3 className="accent">Чому ламається</h3>
          <ul>
            <li>−62% junior-вакансій 2022→2026. Перший крок драбини зник.</li>
            <li>Через 3–5 років — дефіцит mid-ів. Через 8 — дефіцит tech-lead-ів.</li>
            <li>Внутрішнє менторство зникає разом із greenfield-задачами.</li>
            <li>Інфляція на senior-ринку випереджає економію на ШІ.</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Що робити сьогодні</h3>
          <ul className="checklist">
            <li>Apprenticeship-треки 6–12 міс під senior-а, з KPI на ментора.</li>
            <li>Внутрішній greenfield для junior-ів — ШІ як інструмент.</li>
            <li>Domain-bootcamp 18–24 міс: фундамент + домен + прод-цикл.</li>
            <li>Партнерство з ВНЗ: дипломні з реальних задач, stage у проді.</li>
          </ul>
        </div>
      </div>

      <p className="callout callout-yellow">
        Це не CSR — це хеджування проти власної інфляції талантів у 2030.
      </p>
    </>
  );
}
