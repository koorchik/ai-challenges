export default function NaiveAIMandate() {
  return (
    <div className="slide-body wide">
      <h2>Наївна вказівка: «Купіть їм ШІ, нехай кодять удвічі швидше»</h2>
      <p className="lede" style={{ margin: 0 }}>
        Це найпоширеніша ілюзія топ-менеджменту. Дані з полів доводять: просте додавання 
        AI-інструментів поверх старих процесів руйнує метрики, а не покращує їх.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '1em', gap: '1.5em' }}>
        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Ілюзія швидкості</h3>
          <p style={{ fontSize: '2.6em', fontWeight: 800, color: '#f43f5e', margin: '0.2em 0', lineHeight: 1 }}>
            −19%
          </p>
          <p style={{ flexGrow: 1, margin: 0, marginTop: '0.6em' }}>
            <strong>METR (2025):</strong> розробники <em>відчували</em> +20%, а здали роботу на 19% повільніше.
          </p>
        </div>

        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Деградація якості</h3>
          <p style={{ fontSize: '2.6em', fontWeight: 800, color: '#f43f5e', margin: '0.2em 0', lineHeight: 1 }}>
            −7.2%
          </p>
          <p style={{ flexGrow: 1, margin: 0, marginTop: '0.6em' }}>
            <strong>DORA (2024):</strong> великі PR-и, рев'ю не встигає — стабільність продакшену падає.
          </p>
        </div>

        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Парадокс ROI</h3>
          <p style={{ fontSize: '2.6em', fontWeight: 800, color: '#f43f5e', margin: '0.2em 0', lineHeight: 1 }}>
            60%
          </p>
          <p style={{ flexGrow: 1, margin: 0, marginTop: '0.6em' }}>
            <strong>BCG (2025):</strong> 60% компаній — нульовий фінрезультат від ШІ; лише 5% масштабували.
          </p>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1em' }}>
        McKinsey: перебудова процесів дає зростання EBIT у <strong>3× сильніше</strong>, ніж проста закупівля ліцензій на Copilot.
      </div>
    </div>
  );
}