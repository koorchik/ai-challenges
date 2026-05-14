export default function RepositioningPlaybook() {
  return (
    <>
      <h2>Клієнт хоче −50%. Грати ціною — програти. Перепакуйте оффер.</h2>
      <p className="lede">
        Якщо торгуватися годинами — ви на ринку, де токен — нова підлога. Три ходи, які виводять
        переговори з ціни в результат.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em' }}>
        <div data-accent="yellow">
          <h3 className="accent">Години → результат</h3>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Було:</strong> $40–80/год × кількість розробників.
          </p>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Пастка:</strong> «зменшимо ставку, додамо junior-ів» — ставка падає, маржа разом з нею.
          </p>
          <p style={{ margin: '0.2em 0' }}>
            <strong>Новий оффер:</strong> fixed-price на outcome — релізи, SLA по uptime, conversion lift. Ваш ризик,
            ваша економія від AI-прискорення.
          </p>
        </div>
        <div data-accent="green">
          <h3 className="accent">Staff aug → compliance delivery</h3>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Було:</strong> «дамо 5 інженерів на 6 місяців».
          </p>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Пастка:</strong> штатний інженер у клієнта + ChatGPT робить ту саму роботу за половину.
          </p>
          <p style={{ margin: '0.2em 0' }}>
            <strong>Новий оффер:</strong> SOC2 / HIPAA / ISO + audit trail як частина delivery. AI-eval і
            verification — у вашому контракті, не у клієнта в коридорі.
          </p>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Bench → vertical моат</h3>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Було:</strong> «маємо досвід у 30 індустріях».
          </p>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Пастка:</strong> широта без глибини — клон-аутсорсер з Індії або Польщі копіює за квартал.
          </p>
          <p style={{ margin: '0.2em 0' }}>
            <strong>Новий оффер:</strong> 2–3 вертикалі з повним стеком (домен + ліцензії + дані + evals). Не
            «робимо все» — «робимо HealthTech / DefenseTech / FinTech з регуляційним покриттям».
          </p>
        </div>
      </div>

      <p className="callout callout-yellow">
        Спільний знаменник: переговори більше не про годину, а про <strong>хто несе ризик результату</strong>.
        Беріть ризик у свій бік — і AI-прискорення стає вашою маржею, а не дисконтом клієнта.
      </p>

      <p className="slide-footnote">
        Базова теза — Christensen «competing against luck» (job-to-be-done), адаптована до AI-епохи.
        Конкретні переходи (outcome-pricing, compliance delivery) — практика провідних європейських
        компетенс-центрів 2024–2026, не один опублікований кейс.
      </p>
    </>
  );
}
