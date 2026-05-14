export default function VerificationTrustGap() {
  return (
    <div className="slide-body wide">
      <h2>96% розробників не довіряють AI-коду</h2>
      <p className="lede" style={{ margin: 0 }}>
        Між «згенеровано» і «можна деплоїти» немає автоматичної перевірки.
      </p>

      <div className="two-col text-md">
        <div data-accent="red">
          <h3 className="accent">Звідки недовіра</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>Код компілюється — і ламає прод</li>
            <li>Тести зелені на коді, який згенерував той самий агент</li>
            <li>Code-review перевантажене: ШІ пише швидше, ніж читають</li>
            <li>Security-scan ловить SQLi після merge, не до</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Що закриває цикл</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>Spec-first: перевірка пишеться раніше за код</li>
            <li>Property / fuzz / mutation поверх unit-тестів</li>
            <li>Production verifier: shadow traffic, diff-testing</li>
            <li>Human-in-the-loop із підписом на класах ризику</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-yellow">
        Виграє той, хто збудує перевірку, яку не пише та сама модель.
      </div>

      <p className="slide-footnote">
        The New Stack, «How Verification Will Define Agentic AI's Impact» (2025){' '}
        <a href="https://thenewstack.io/agentic-ai-verification-impact/">
          thenewstack.io/agentic-ai-verification-impact
        </a>
      </p>
    </div>
  );
}
