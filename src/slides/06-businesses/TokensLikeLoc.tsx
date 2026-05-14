export default function TokensLikeLoc() {
  return (
    <div className="slide-body wide">
      <h2>Токени як KPI продуктивності — це LOC як KPI</h2>
      <div className="callout callout-yellow">
        <p style={{ fontStyle: 'italic' }}>
          “Measuring programming progress by lines of code is like measuring
          aircraft building progress by weight.” — Bill Gates
        </p>
      </div>
      <p className="text-md" style={{ margin: 0 }}>
        Goodhart’s Law: метрика, що стає ціллю, перестає бути метрикою. Покладіть
        токени в performance review — отримаєте <em>tokenmaxxing</em>: довші
        промпти, штучні діалоги, інфляція контексту. Токени треба міряти — але
        як витрати, не як продуктивність.
      </p>
      <div className="three-col wide text-sm">
        <div data-accent="red">
          <h3 className="accent">Анти-патерн</h3>
          <ul>
            <li>Токенів / девелопера в OKR</li>
            <li>AI-LOC у performance review</li>
            <li>Copilot acceptance rate як KPI</li>
          </ul>
        </div>
        <div data-accent="amber">
          <h3 className="accent">Cost-governance</h3>
          <ul className="checklist">
            <li>$ на тикет / фічу / користувача</li>
            <li>Бюджети + alerts per team</li>
            <li>LLM-gateway з атрибуцією</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Outcome KPI</h3>
          <ul className="checklist">
            <li>DORA 4: lead time, change-fail rate</li>
            <li>DX Core 4 + AI-impact layer</li>
            <li>Defects / rollback на AI-фічу</li>
          </ul>
        </div>
      </div>
      <p className="slide-footnote">
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
