// 12 · Концепції · Це Agentic engineering
export function Slide12() {
  return (
    <div className="slide-body wide" data-accent="yellow">
      <h2>Це <span className="accent">Agentic engineering</span></h2>
      <p className="lede" style={{ margin: 0 }}>
        Karpathy: <strong>vibe coding</strong> опускає стелю для новачків.{' '}
        <strong>Agentic engineering</strong> тримає планку якості в проді.
      </p>
      <ul className="checklist text-md" style={{ textAlign: 'left' }}>
        <li><strong>Надійна система.</strong> Jarvis не «майже спрацював» — він тримає костюм у польоті.</li>
        <li><strong>Працює в проді.</strong> Не Jupyter-нотбук, а зброя, від якої залежить життя.</li>
        <li><strong>Найкращі практики.</strong> Тести, evals, спостережуваність, fallback — як у критичній системі.</li>
      </ul>
      <p className="slide-footnote">
        Andrej Karpathy (X/блог, 2025){' '}
        <a href="https://karpathy.bearblog.dev/">karpathy.bearblog.dev</a>
      </p>
    </div>
  );
}
