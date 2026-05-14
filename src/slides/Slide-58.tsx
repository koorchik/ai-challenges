// 58 · Україна · Можливості
export function Slide58() {
  return (
    <>
      <h2>Де Україна <em>дійсно</em> має перевагу у 2026</h2>
      <p className="lede">
        Три ніші, де у нас є те, чого нема у Кремнієвої долини.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em', gap: '1em' }}>
        <div data-accent="yellow">
          <h3 className="accent">Defense-tech з AI</h3>
          <ul className="checklist">
            <li>Brave1 — ~1000+ зареєстрованих компаній</li>
            <li>Автономія дронів, EW, цілевказання, C2</li>
            <li>
              <em>Бойова валідація</em> — ваш реальний рів
            </li>
            <li>ReArm Europe / Readiness 2030: до €800b</li>
          </ul>
          <p className="muted" style={{ marginTop: '0.4em' }}>
            Це єдина галузь, де українець <strong>швидше</strong> від Lockheed-а через досвід, а не через ціну.
          </p>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Dual-use та resilient infra</h3>
          <ul className="checklist">
            <li>Distributed compute, edge inference</li>
            <li>Disaster-recovery як стандарт мислення</li>
            <li>Energy-grid AI, mobile networks</li>
            <li>«Працює без інтернету» — нова норма</li>
          </ul>
          <p className="muted" style={{ marginTop: '0.4em' }}>
            Європа купує цей know-how, бо в нас він уже відпрацьований.
          </p>
        </div>
        <div data-accent="green">
          <h3 className="accent">Digital state as a platform</h3>
          <ul className="checklist">
            <li>Дія — найкраще digital-gov-tech у Європі</li>
            <li>Експорт стеку в EU / global south</li>
            <li>AI-в-державних-сервісах = випробувальний майданчик</li>
            <li>Прозорі дані для AI — рідкість світового рівня</li>
          </ul>
          <p className="muted" style={{ marginTop: '0.4em' }}>
            Експорт <em>підходу</em>, не лише коду.
          </p>
        </div>
      </div>

      <p className="callout callout-green">
        Зверніть увагу: жодна з трьох ніш — не «черговий AI-чат». Усі три спираються на унікальний
        національний досвід. Це і є наш справжній моат.
      </p>

      <p className="slide-footnote">
        Brave1 / Мінцифра (brave1.gov.ua, 2025); ReArm Europe Plan / EU Commission, березень 2025
        (Readiness 2030).
      </p>
    </>
  );
}
