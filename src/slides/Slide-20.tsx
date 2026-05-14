// 20 · Студенти · Перейменування junior → tech-lead
export function Slide20() {
  return (
    <>
      <h2>Junior не зник. Його перейменували на tech-lead</h2>
      <p className="lede">
        Падіння junior-вакансій має одне пояснення: те, що раніше робив junior — синтаксис, бойлерплейт,
        implement-from-spec — закриває ШІ. Те, що раніше робив tech-lead, стало мінімумом для входу.
      </p>

      <div className="two-col wide text-md">
        <div data-accent="red">
          <h3 className="accent">старий шлях (зник)</h3>
          <ul className="checklist">
            <li>
              <strong>junior dev → middle dev → senior dev</strong>
            </li>
            <li>День 1: пиши код за специфікацією</li>
            <li>Скіли: синтаксис, фреймворк, типові патерни</li>
            <li>Команда — нагорода за 3+ роки писання коду</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">новий шлях</h3>
          <ul className="checklist">
            <li>
              <strong>junior tech-lead → mid tech-lead → senior tech-lead</strong>
            </li>
            <li>День 1: рев'ю ШІ-коду, архітектура, trade-offs</li>
            <li>Скіли: бачення, зв'язок продукт↔код, формування правил</li>
            <li>«Команда» — твої ШІ-агенти від першого дня</li>
          </ul>
        </div>
      </div>

      <p className="callout callout-yellow">
        Старі навички не зникли — вони стали precondition-ом, не диференціатором.
      </p>

      <p className="slide-footnote">
        Peter Steinberger — менеджмент AI-агентів читається як tech-lead-фанаут; Turskyi (2026),
        «AI-Integrated Bloom's Taxonomy».
      </p>
    </>
  );
}
