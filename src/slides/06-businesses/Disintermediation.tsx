export default function Disintermediation() {
  return (
    <div className="slide-body wide">
      <h2>Дезінтермедіація: коли клієнт іде напряму до OpenAI</h2>
      <p className="lede" style={{ margin: 0 }}>
        Найтихіший виклик 2026 року — виключення ІТ-посередника. Покупець, який раніше платив вам за 
        системну інтеграцію, тепер просто робить виклик до API. Три патерни втрати ринку.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '1em', gap: '1.5em' }}>
        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent" style={{ fontSize: '1.2em', marginBottom: '0.6em' }}>Корпорації (In-house)</h3>
          <p style={{ margin: '0 0 0.6em', lineHeight: 1.4, color: 'var(--text-dim)' }}>
            <strong>Тенденція:</strong> Klarna замінила першу лінію підтримки (700 FTE) власним агентом. Внутрішні тули корпорації пишуть напряму через LLM.
          </p>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong style={{ color: '#f43f5e' }}>Контрхід:</strong> унікальні дата-сети та feedback-loops, яких немає публічно.
          </p>
        </div>

        <div className="tile" data-accent="amber" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent" style={{ fontSize: '1.2em', marginBottom: '0.6em' }}>SaaS-клієнти (DIY)</h3>
          <p style={{ margin: '0 0 0.6em', lineHeight: 1.4, color: 'var(--text-dim)' }}>
            <strong>Тенденція:</strong> замість підписки на «AI-CRM» — власна інтеграція з Claude за вихідні. «Секретні промпти» більше не моат.
          </p>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong style={{ color: '#f59e0b' }}>Контрхід:</strong> глибока інтеграція у Legacy ERP та on-premise.
          </p>
        </div>

        <div className="tile" data-accent="purple" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent" style={{ fontSize: '1.2em', marginBottom: '0.6em' }}>B2C Споживачі</h3>
          <p style={{ margin: '0 0 0.6em', lineHeight: 1.4, color: 'var(--text-dim)' }}>
            <strong>Тенденція:</strong> «зручніший інтерфейс над GPT» — не бізнес. Базові моделі вже мають десктоп, голос і пам'ять.
          </p>
          <p style={{ margin: 0, fontSize: '0.9em' }}>
            <strong style={{ color: '#c084fc' }}>Контрхід:</strong> ніші, де чат-боти юридично заборонені (медицина, уряд).
          </p>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1em' }}>
        <strong>Acid test:</strong> якщо клієнт завтра прочитає документацію API провайдера — чи буде ви йому потрібні?
      </div>
    </div>
  );
}