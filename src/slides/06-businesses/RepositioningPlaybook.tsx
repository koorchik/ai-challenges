export default function RepositioningPlaybook() {
  return (
    <div className="slide-body wide">
      <h2>Клієнт вимагає знижку 50% через ШІ. Як зберегти маржу?</h2>
      <p className="lede" style={{ margin: 0 }}>
        Продаж годин розробки вмер. Якщо ви продаєте час, клієнт вважає, що ШІ зробив цей час дешевшим. 
        Переведіть переговори в площину того, чого ШІ робити не вміє: відповідальність, безпека та доменна експертиза.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '1em', gap: '1.5em' }}>
        <div className="tile" data-accent="yellow" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Від годин до результату</h3>
          <div style={{ flexGrow: 1, marginTop: '0.6em' }}>
            <p style={{ marginBottom: '0.6em', color: 'var(--text-dim)' }}>
              <strong>Стара:</strong> рейт $50/год → клієнт тисне на знижку → маржа зникає.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Нова:</strong> fixed-price за бізнес-результат — економія часу стає вашою маржею, не знижкою.
            </p>
          </div>
        </div>

        <div className="tile" data-accent="green" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Від аутстафу до безпеки</h3>
          <div style={{ flexGrow: 1, marginTop: '0.6em' }}>
            <p style={{ marginBottom: '0.6em', color: 'var(--text-dim)' }}>
              <strong>Стара:</strong> «5 мідлів на пів року» → клієнт бере 1 сеньйора з агентами.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Нова:</strong> комплаєнс (SOC2, HIPAA), Evals, аудит безпеки. Ви продаєте спокій.
            </p>
          </div>
        </div>

        <div className="tile" data-accent="blue" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Від bench до ніші</h3>
          <div style={{ flexGrow: 1, marginTop: '0.6em' }}>
            <p style={{ marginBottom: '0.6em', color: 'var(--text-dim)' }}>
              <strong>Стара:</strong> «експертиза в 30 індустріях» — ШІ універсал кращий.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Нова:</strong> «FinTech-інтеграції для ЄС з GDPR» — локальні регуляції ШІ не знає.
            </p>
          </div>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1em' }}>
        Переговори тепер про те, <strong>хто несе ризик за результат</strong>. Беріть ризик — AI-прискорення стане чистою маржею.
      </div>
    </div>
  );
}