// 12 · Концепції · Karpathy on vibe coding vs agentic engineering
export function Slide12() {
  return (
    <div className="slide-body wide">
      <h2>То чим займається Старк?</h2>
      <div className="callout callout-yellow">
        <p style={{ fontStyle: 'italic' }}>
          “Vibe coding is about <strong>raising the floor</strong> — everyone can vibe code
          anything. Agentic engineering is about <strong>preserving the quality bar</strong> of
          professional software: you’re still responsible for your code, but you can go faster —
          if you do it properly. How do you coordinate these spiky, fallible, but extremely
          powerful agents without sacrificing your quality bar?” — Andrej Karpathy
        </p>
      </div>
      <p className="text-md" style={{ margin: 0 }}>
        Vibe coding опускає поріг для всіх. Agentic engineering — це дисципліна того, як
        координувати агентів (потужних, але непередбачуваних), щоб іти швидше й не втратити
        якість у проді.
      </p>
      <ul className="checklist text-md" style={{ textAlign: 'left' }}>
        <li><strong>Надійна система.</strong> Jarvis не «майже спрацював» — він тримає костюм у польоті.</li>
        <li><strong>Працює в проді.</strong> Не Jupyter-нотбук, а зброя, від якої залежить життя.</li>
        <li><strong>Найкращі практики.</strong> Тести, evals, спостережуваність, fallback — як у критичній системі.</li>
      </ul>
      <p className="slide-footnote">
        Andrej Karpathy on agentic engineering (YouTube, 2025){' '}
        <a href="https://www.youtube.com/watch?v=96jN2OCOfLs">youtube.com/watch?v=96jN2OCOfLs</a>
      </p>
    </div>
  );
}
