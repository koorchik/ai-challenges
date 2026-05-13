// 32 · Розробники · Чому досвід усе ще виграє
export function Slide08() {
  return (
    <>
      <h2>Чому досвід усе ще виграє</h2>
      <p className="lede">
        Повертаймося до METR. Чому −19%? Що саме сповільнило досвідчених?
      </p>

      <div className="two-col wide text-md">
        <div>
          <h3>де ШІ зашпортується</h3>
          <ul className="checklist">
            <li>
              <strong>Довгий контекст реального кодбейсу.</strong> Контекстне вікно росте — увага падає
            </li>
            <li>
              <strong>Прихована логіка</strong> (фічфлаги, конфіги, легасі-припущення)
            </li>
            <li>
              <strong>Інтеграції з прихованим станом</strong> (IAM, мережа, кеші)
            </li>
            <li>
              <strong>Помилки, що каскадують між шарами</strong> (тільки під навантаженням, тільки у вівторок)
            </li>
            <li>
              <strong>«Не знаю, що не знаю»</strong> — впевнений неправильний код
            </li>
          </ul>
        </div>
        <div>
          <h3>де людський досвід дорожчає</h3>
          <ul className="checklist">
            <li>
              <strong>Смак</strong> — що <em>не</em> будувати; коли спростити
            </li>
            <li>
              <strong>Калібрація</strong> — оцінка надійності чужого коду
            </li>
            <li>
              <strong>Локалізація проблеми</strong> в системі без специфікації
            </li>
            <li>
              <strong>Дизайн обмежень</strong> — еволюція API, контрактів, схем
            </li>
            <li>
              <strong>Перемовини зі стейкхолдерами</strong> — що бізнес <em>насправді</em> хоче
            </li>
          </ul>
        </div>
      </div>

      <p className="callout callout-yellow">
        Контраргумент чесно: швидкість моделей зростає. METR-число (−19%) поковзне. Але{' '}
        <strong>розрив між відчутою і реальною продуктивністю</strong> — навряд.
      </p>

      <p className="slide-footnote">
        METR 2025; також DORA «State of AI-Assisted Software Development» (2024) — самозвітна
        продуктивність зросла, throughput команд — ні.
      </p>
    </>
  );
}
