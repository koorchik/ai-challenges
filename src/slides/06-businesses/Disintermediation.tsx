export default function Disintermediation() {
  return (
    <div className="slide-body wide">
      <h2>Дезінтермедіація: коли клієнт іде напряму до OpenAI</h2>
      <p className="lede" style={{ margin: 0 }}>
        Найтихіший виклик 2026 року — виключення ІТ-посередника. Покупець, який раніше платив вам за 
        системну інтеграцію, тепер просто робить виклик до API. Три патерни втрати ринку.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '2em', gap: '1.5em' }}>
        {/* Enterprise */}
        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent" style={{ fontSize: '1.2em', marginBottom: '0.8em' }}>Корпорації (In-house)</h3>
          <div style={{ flexGrow: 1 }}>
            <p style={{ margin: 0, lineHeight: 1.4, color: 'var(--text-dim)' }}>
              <strong>Тенденція:</strong> Klarna замінила першу лінію підтримки (роботу 700 людей) власним AI-агентом. Корпорації більше не наймають аутсорс для створення внутрішніх тулів — їхні розробники використовують LLM напряму.
            </p>
          </div>
          <div style={{ marginTop: '1.5em', paddingTop: '1em', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ margin: 0, fontSize: '0.9em' }}>
              <strong style={{ color: '#f43f5e' }}>Контрхід:</strong> Унікальні дата-сети та feedback-loops (цикли навчання). Продавайте те, чого OpenAI не бачить у публічному доступі.
            </p>
          </div>
        </div>

        {/* B2B / SaaS */}
        <div className="tile" data-accent="amber" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent" style={{ fontSize: '1.2em', marginBottom: '0.8em' }}>SaaS-клієнти (DIY)</h3>
          <div style={{ flexGrow: 1 }}>
            <p style={{ margin: 0, lineHeight: 1.4, color: 'var(--text-dim)' }}>
              <strong>Тенденція:</strong> Компанія, що планувала підписатися на вашу "AI-CRM", тепер пише власну інтеграцію з Claude за вихідні. Якщо ваша цінність була лише у «секретних промптах від експертів» — ви банкрут.
            </p>
          </div>
          <div style={{ marginTop: '1.5em', paddingTop: '1em', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ margin: 0, fontSize: '0.9em' }}>
              <strong style={{ color: '#f59e0b' }}>Контрхід:</strong> Глибока інтеграція у застарілі системи (Legacy ERP, On-premise). Будьте там, де ШІ самостійно не розбереться.
            </p>
          </div>
        </div>

        {/* B2C */}
        <div className="tile" data-accent="purple" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent" style={{ fontSize: '1.2em', marginBottom: '0.8em' }}>B2C Споживачі (Apps)</h3>
          <div style={{ flexGrow: 1 }}>
            <p style={{ margin: 0, lineHeight: 1.4, color: 'var(--text-dim)' }}>
              <strong>Тенденція:</strong> «Зручніший інтерфейс для генерації текстів» — це більше не бізнес. Базові моделі (Gemini, ChatGPT) вже мають нативні десктоп-додатки, розпізнавання голосу та довгострокову пам'ять.
            </p>
          </div>
          <div style={{ marginTop: '1.5em', paddingTop: '1em', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ margin: 0, fontSize: '0.9em' }}>
              <strong style={{ color: '#c084fc' }}>Контрхід:</strong> Юридична та регуляторна відповідальність. Йдіть у ніші (медицина, уряд), де загальні чат-боти юридично не мають права працювати.
            </p>
          </div>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '2em' }}>
        <strong>Тест на виживання (Acid Test):</strong> <em>Якщо ваш клієнт завтра вранці прочитає офіційну документацію до API провайдера моделі — чи будете ви йому досі потрібні?</em> Якщо відповідь «ні», то клієнт просто купує у вас час, поки його команда не розбереться з технологією.
      </div>

      <p className="slide-footnote" style={{ marginTop: '1.5em', lineHeight: 1.4 }}>
        Кейс Klarna (Q1 2024): ШІ-помічник виконує роботу еквівалентну 700 FTE, скорочуючи час вирішення тикетів з 11 до 2 хвилин. 
        Структурний тренд 2024–2026: перехід від "AI-обгорток" до глибоких інтеграцій.
      </p>
    </div>
  );
}