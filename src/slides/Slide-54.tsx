// 54 · Бізнеси · 90-day playbook
export function Slide41() {
  return (
    <>
      <h2>90-денний план для бізнесу</h2>
      <p className="lede">
        Не «зробити AI-стратегію», а конкретний квартал, після якого ви знаєте, де ШІ дає вам гроші
        — і де ні.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.5em', gap: '1em' }}>
        <div data-accent="yellow">
          <h3 className="accent">Дні 1–30 · Аудит</h3>
          <ul className="checklist">
            <li>Перерахувати топ-20 процесів, у яких ваші люди витрачають час</li>
            <li>Для кожного: чи це rule-based, judgment-based, чи domain-specific?</li>
            <li>Вибрати <em>один</em> процес, де AI дає очевидний lift</li>
            <li>Зрозуміти ваш єдиний справжній рів — або визнати його відсутність</li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Дні 31–60 · Пілот</h3>
          <ul className="checklist">
            <li>Запустити <em>один</em> end-to-end AI-процес у проді з real users</li>
            <li>Збудувати eval і моніторинг до запуску, не після</li>
            <li>Зафіксувати baseline: продуктивність, помилки, NPS — без ШІ</li>
            <li>Виміряти різницю на 2–4 тижнях. Чесно. Без округлень догори</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Дні 61–90 · Масштаб або стоп</h3>
          <ul className="checklist">
            <li>Якщо ефект є — підготувати investment case на 4× scope</li>
            <li>Якщо ні — закрийте, не «дайте ще місяць»</li>
            <li>Документуйте знайдене для команди (eval-кейси, prompts, помилки)</li>
            <li>Перенесіть найкращі практики на наступний кандидат-процес</li>
          </ul>
        </div>
      </div>

      <p className="callout callout-green">
        <strong>Найважливіший слайд для бізнесу:</strong> рішення в AI-епосі не приймаються один раз. Вони
        приймаються щоквартально, на основі evals. Це нова операційна модель, не одноразовий проєкт.
      </p>
    </>
  );
}
