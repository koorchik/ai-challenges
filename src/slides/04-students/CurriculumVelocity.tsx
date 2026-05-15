export default function CurriculumVelocity() {
  return (
    <div className="slide-body wide">
      <h2>Університет як Waterfall vs Навчання як Continuous Deployment</h2>
      <p className="lede" style={{ margin: 0 }}>
        Університет затверджує програму на роки вперед; платформи переписують модулі щотижня. Коли період напіврозпаду стеку — 6 місяців, виграє найкоротший release cycle.
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1.5em', gap: '2em' }}>
        <div data-accent="red">
          <h3 className="accent">Університет (Waterfall)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Повільний цикл:</strong> Розробка → Вчена рада → Акредитація.
            </li>
            <li>
              <strong>Застарівання на старті:</strong> 4-й курс вчиться за програмою, написаною до вступу.
            </li>
            <li>
              <strong>Бюрократія найму:</strong> практикуючого Tech Lead-а на семестр — складно.
            </li>
            <li>
              <strong>Інерція:</strong> зміна курсу — політичний компроміс кафедри, не продуктове рішення.
            </li>
          </ul>
        </div>
        <div data-accent="yellow">
          <h3 className="accent">Курси та Буткемпи (CI/CD)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Метрики замість комісій:</strong> Реліз → A/B тест на когортах → метрики completion/NPS → миттєве оновлення.
            </li>
            <li>
              <strong>Адаптивність:</strong> Провідні буткемпи оновлюють програму між наборами (кожні кілька тижнів, а не років).
            </li>
            <li>
              <strong>Швидкість:</strong> Курс прикладної ШІ-інженерії триває 6 тижнів — швидше, ніж закінчиться один університетський семестр.
            </li>
            <li>
              <strong>Викладачі-практики:</strong> Інструктором є діючий інженер, якого можна замінити за тиждень.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}