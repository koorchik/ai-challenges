export default function DeveloperInertia() {
  return (
    <div className="slide-body wide">
      <h2>Розробники використовують AI як автодоповнення. Не як інженера.</h2>
      <p className="lede" style={{ margin: 0 }}>
        84% уже користуються AI-інструментами. Те, як ми ними користуємось, відстає від того, на
        що вони здатні.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em', gap: '1em' }}>
        <div data-accent="red">
          <h3 className="accent">Користуються AI-tools</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>84%</p>
          <p style={{ margin: 0 }}>
            Stack Overflow 2025. Але лише <strong>16.9%</strong> делегують їм написання коду —
            більшість б'ють у search/research.
          </p>
        </div>
        <div data-accent="red">
          <h3 className="accent">Користуються AI-агентами щодня</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>
            14.1%
          </p>
          <p style={{ margin: 0 }}>
            <strong>37.9%</strong> не планують зовсім. JetBrains: 1 з 8 Java-розробників
            користується агентами в коді.
          </p>
        </div>
        <div data-accent="red">
          <h3 className="accent">Повністю довіряють результату</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>3.1%</p>
          <p style={{ margin: 0 }}>
            Довіра до точності AI впала з <strong>40% → 29%</strong> за рік.{' '}
            <strong>45.7%</strong> активно не довіряють.
          </p>
        </div>
      </div>

      <div className="callout callout-yellow">
        <strong>Використання росте. Довіра падає.</strong> Стеля — у нашій звичці, поки модель
        біжить вперед.
      </div>

      <p className="slide-footnote">
        Stack Overflow Developer Survey 2025 — AI section ·{' '}
        <a href="https://survey.stackoverflow.co/2025/ai">survey.stackoverflow.co/2025/ai</a>
        {' · '}
        JetBrains «State of Developer Ecosystem 2025» (N=24 534) ·{' '}
        <a href="https://blog.jetbrains.com/research/2025/10/state-of-developer-ecosystem-2025/">
          blog.jetbrains.com/research/2025
        </a>
      </p>
    </div>
  );
}
