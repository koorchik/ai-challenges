// 12 · Концепції · Це Agentic engineering
export function Slide12() {
  return (
    <div data-accent="yellow">
      <h2>Це <span className="accent">Agentic engineering</span></h2>
      <ul className="checklist text-md wide" style={{ textAlign: 'left' }}>
        <li><strong>Надійна система.</strong> Jarvis не «майже спрацював» — він тримає костюм у польоті.</li>
        <li><strong>Працює в проді.</strong> Не Jupyter-нотбук, а зброя, від якої залежить життя.</li>
        <li><strong>Найкращі практики.</strong> Тести, evals, спостережуваність, fallback — як у будь-якій критичній системі.</li>
      </ul>
      <div className="callout callout-yellow" style={{ marginTop: '0.6em' }}>
        <p style={{ margin: 0 }}><strong>Andrej Karpathy:</strong></p>
        <ul style={{ margin: '0.3em 0 0 1em', textAlign: 'left' }}>
          <li><strong>Vibe coding</strong> — anyone can vibe code (lower the ceiling for newcomers).</li>
          <li><strong>Agentic engineering</strong> — preserving the quality bar in professional software.</li>
        </ul>
      </div>
      <p className="slide-footnote">
        Andrej Karpathy (X/блог, 2025){' '}
        <a href="https://karpathy.bearblog.dev/">karpathy.bearblog.dev</a>
      </p>
    </div>
  );
}
