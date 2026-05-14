export default function WrapperTrap() {
  return (
    <>
      <h2>The Wrapper Trap</h2>
      <p className="lede">
        Що відрізняє обгортку, яка <em>тримається</em>, від обгортки, яку клонують за тиждень?
      </p>

      <div className="matrix-2x2 wide">
        <div></div>
        <div className="matrix-header">тонка інтеграція</div>
        <div className="matrix-header">глибока інтеграція</div>

        <div className="matrix-row-label">тонкий шар продукту</div>
        <div className="matrix-cell" data-accent="red">
          <strong className="accent">✗ Обгортка-смерть</strong>
          <p className="muted text-sm">Chat + системний промпт. Конкурує з фічею OpenAI завтра.</p>
        </div>
        <div className="matrix-cell" data-accent="yellow">
          <strong className="accent">~ Інтегратор</strong>
          <p className="muted text-sm">Хороша інтеграція, але рів — у платформи, не у вас.</p>
        </div>

        <div className="matrix-row-label">опініонований продукт</div>
        <div className="matrix-cell" data-accent="blue">
          <strong className="accent">○ Нішевий лідер</strong>
          <p className="muted text-sm">UX + ніша, але без даних — клонується повільніше.</p>
        </div>
        <div className="matrix-cell" data-accent="green">
          <strong className="accent">✓ Стійкий продукт</strong>
          <p className="muted text-sm">Дані + feedback + workflow + дистрибуція. Copilot, Linear, Cursor.</p>
        </div>
      </div>

      <p className="callout">
        Якщо продукт — це 70% UI поверх API-ключа: будуйте, але як <em>функцію</em>, не стартап.
        Або додавайте дані / інтеграцію / domain-context — єдиний шанс проти платформи.
      </p>
    </>
  );
}
