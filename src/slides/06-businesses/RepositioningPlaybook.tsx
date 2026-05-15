export default function RepositioningPlaybook() {
  return (
    <div className="slide-body wide">
      <h2>Клієнт вимагає знижку 50% через ШІ. Як зберегти маржу?</h2>
      <p className="lede" style={{ margin: 0 }}>
        Продаж годин розробки вмер. Якщо ви продаєте час, клієнт вважає, що ШІ зробив цей час дешевшим. 
        Переведіть переговори в площину того, чого ШІ робити не вміє: відповідальність, безпека та доменна експертиза.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '2em', gap: '1.5em' }}>
        {/* Колонка 1 */}
        <div className="tile" data-accent="yellow" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Від годин до Результату</h3>
          <div style={{ flexGrow: 1, marginTop: '1em' }}>
            <p style={{ marginBottom: '0.8em', color: 'var(--text-dim)' }}>
              <strong>Стара пастка:</strong> Рейт $50/год. Клієнт просить знизити ставку, бо "у вас є ШІ". Ви знижуєте рейт — маржа зникає.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Новий оффер:</strong> Fixed-price за бізнес-результат (реліз фічі, SLA по аптайму). Ви виконуєте роботу вдвічі швидше завдяки ШІ, але <em>економія часу перетворюється на вашу надприбутковість</em>, а не на знижку клієнту.
            </p>
          </div>
        </div>

        {/* Колонка 2 */}
        <div className="tile" data-accent="green" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Від Аутстафу до Безпеки</h3>
          <div style={{ flexGrow: 1, marginTop: '1em' }}>
            <p style={{ marginBottom: '0.8em', color: 'var(--text-dim)' }}>
              <strong>Стара пастка:</strong> "Дамо вам 5 мідлів на пів року". Клієнт розуміє, що може найняти одного сеньйора з ШІ-агентами.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Новий оффер:</strong> Продаж комплаєнсу (SOC2, HIPAA) та гарантії якості. Ви продаєте налаштовані ШІ-пайплайни з жорсткими Evals та аудитом безпеки згенерованого коду. Ви продаєте спокій.
            </p>
          </div>
        </div>

        {/* Колонка 3 */}
        <div className="tile" data-accent="blue" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Від Bench до Вузької ніші</h3>
          <div style={{ flexGrow: 1, marginTop: '1em' }}>
            <p style={{ marginBottom: '0.8em', color: 'var(--text-dim)' }}>
              <strong>Стара пастка:</strong> "Маємо експертизу в 30 індустріях". ШІ — це абсолютний універсал. Бути "просто програмістом" більше недостатньо.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Новий оффер:</strong> Глибока спеціалізація. "Ми робимо виключно FinTech інтеграції для Європи з урахуванням GDPR". ШІ не знає локальних регуляцій і бізнес-контексту — це ваша монополія.
            </p>
          </div>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '2em' }}>
        <strong>Зміна парадигми:</strong> Переговори більше не ведуться про вартість години. Вони ведуться про те, <strong>хто несе ризик за кінцевий результат</strong>. Беріть ризик на себе — і AI-прискорення стане вашою чистою маржею.
      </div>

      <p className="slide-footnote" style={{ marginTop: '1.5em', lineHeight: 1.4 }}>
        Методологія: Christensen «Competing Against Luck» (Job-to-be-Done) в епоху ШІ. 
        Перехід до Outcome-Pricing — практика провідних європейських агенцій 2024–2026 років.
      </p>
    </div>
  );
}