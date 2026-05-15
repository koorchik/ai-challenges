export default function TokensLikeLoc() {
  return (
    <div className="slide-body wide">
      <h2>Міряти продуктивність токенами — це як міряти її рядками коду</h2>
      
      <div className="callout callout-blue" style={{ marginTop: '0.5em', borderLeftColor: '#3b82f6' }}>
        <p style={{ fontStyle: 'italic', margin: 0, fontSize: '1.1em' }}>
          “Measuring programming progress by lines of code is like measuring
          aircraft building progress by weight.” — Bill Gates
        </p>
      </div>

      <p className="lede" style={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
        <strong>Закон Гудхарта:</strong> щойно метрика стає ціллю, вона перестає бути хорошою метрикою. 
        Прив'яжіть бонуси до використання ШІ — і отримаєте <em>tokenmaxxing</em> (штучно роздуті промпти та нескінченні діалоги). 
        Токени потрібно рахувати, але виключно як ваші витрати, а не як індикатор продуктивності.
      </p>

      <div className="three-col wide text-md" style={{ gap: '1.5em' }}>
        {/* Колонка 1 */}
        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Анти-патерни (Не робіть цього)</h3>
          <ul style={{ paddingLeft: '1.2em', lineHeight: 1.5, flexGrow: 1 }}>
            <li style={{ marginBottom: '0.8em' }}>Кількість токенів на інженера в OKR.</li>
            <li style={{ marginBottom: '0.8em' }}>AI-LOC (відсоток згенерованого коду) в Performance Review.</li>
            <li>Copilot Acceptance Rate як KPI команди.</li>
          </ul>
        </div>

        {/* Колонка 2 */}
        <div className="tile" data-accent="amber" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Управління витратами (Cost)</h3>
          <ul className="checklist" style={{ textAlign: 'left', flexGrow: 1 }}>
            <li>Вартість викликів LLM ($) на один тікет або фічу.</li>
            <li>Жорсткі AI-бюджети та алерти для кожної команди.</li>
            <li>LLM-gateway для централізованої атрибуції витрат.</li>
          </ul>
        </div>

        {/* Колонка 3 */}
        <div className="tile" data-accent="green" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Метрики результату (Outcome)</h3>
          <ul className="checklist" style={{ textAlign: 'left', flexGrow: 1 }}>
            <li><strong>DORA 4:</strong> Lead time, Change-fail rate.</li>
            <li><strong>DX Framework:</strong> Опитування інженерів про зменшення рутини.</li>
            <li>Кількість дефектів та відкатів на AI-згенеровану фічу.</li>
          </ul>
        </div>
      </div>

      <p className="slide-footnote" style={{ marginTop: '2em', lineHeight: 1.4 }}>
        Bill Gates (приписується) ·{' '}
        <a href="https://www.goodreads.com/quotes/536587-measuring-programming-progress-by-lines-of-code-is-like-measuring">
          goodreads.com/quotes/536587
        </a>
        {' · '}
        DX AI Measurement Framework:{' '}
        <a href="https://getdx.com/research/measuring-ai-code-assistants-and-agents/">
          getdx.com/research
        </a>
      </p>
    </div>
  );
}