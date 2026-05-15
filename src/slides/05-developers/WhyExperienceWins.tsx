export default function WhyExperienceWins() {
  return (
    <div className="slide-body wide">
      <h2>Що залишається людині</h2>
      <p className="lede">
        METR-2025: досвідчені розробники з AI-агентами були на 19% повільніші.
        Робота, що займає їхній час, — не та, яку прискорює модель.
      </p>

      <div className="two-col wide text-md">
        <div data-accent="red">
          <h3 className="accent">де ШІ слабкий</h3>
          <ul className="checklist">
            <li>
              <strong>Контекст великої кодової бази</strong> — флаги, легасі,
              недокументовані правила
            </li>
            <li>
              <strong>Інтеграції з розподіленим станом</strong> — IAM, мережа, кеші
            </li>
            <li>
              <strong>Архітектура під навантаженням</strong> — баги, що видно лише в проді
            </li>
            <li>
              <strong>Впевнено-неправильний код</strong> — синтаксис ідеальний,
              дизайн хибний
            </li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">що дає досвід</h3>
          <ul className="checklist">
            <li>
              <strong>Смак</strong> — коли спростити або взагалі не писати
            </li>
            <li>
              <strong>Формування інтуїції — </strong>Калібрування довіри до AI-виводу за секунду
            </li>
            <li>
              <strong>Орієнтація без свіжої документації</strong>
            </li>
            <li>
              <strong>Дизайн API та доменних меж</strong> на роки вперед
            </li>
          </ul>
        </div>
      </div>

      <p className="callout callout-yellow">
        Швидкість генерації зростатиме. Розрив між «написав скрипт» і «безпечно
        довіз фічу» — теж.
      </p>

      <p className="slide-footnote">
        METR, 2025 — рандомізоване польове дослідження 16 досвідчених
        OSS-мейнтейнерів:{' '}
        <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">
          −19% швидкості з AI-агентами
        </a>{' '}
        проти контролю.
      </p>
    </div>
  );
}
