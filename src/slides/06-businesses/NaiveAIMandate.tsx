export default function NaiveAIMandate() {
  return (
    <div className="slide-body wide">
      <h2>«Користуйтеся AI, давайте у 2× швидше»</h2>
      <p className="lede" style={{ margin: 0 }}>
        Менеджмент починає тут. Дані закінчують інакше.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em', gap: '1em' }}>
        <div data-accent="red">
          <h3 className="accent">Сприйняття ≠ реальність</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>−19%</p>
          <p style={{ margin: 0 }}>
            METR 2025: досвідчені розробники очікували +24%, відчували +20%. На ділі — на 19% повільніше з AI.
          </p>
        </div>
        <div data-accent="red">
          <h3 className="accent">Швидкість ≠ доставка</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>−7.2%</p>
          <p style={{ margin: 0 }}>
            DORA 2024: throughput −1.5%, stability −7.2%. Batch size росте, тестування слабне — ламається прод.
          </p>
        </div>
        <div data-accent="red">
          <h3 className="accent">Впровадження ≠ ROI</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>60% / 5%</p>
          <p style={{ margin: 0 }}>
            BCG 2025: 60% компаній — нуль матеріальної вартості, лише 5% масштабують. McKinsey: 88% впровадили, EBIT бачать 39%.
          </p>
        </div>
      </div>

      <div className="callout callout-yellow">
        <strong>AI — підсилювач, а не множник.</strong> Сильна команда стає сильнішою, слабка — слабшою (DORA 2025).
        McKinsey: redesign workflow корелює з EBIT у <strong>3×</strong> сильніше, ніж прикручування інструмента.
      </div>

      <p className="slide-footnote">
        METR (Becker et al., 2025), RCT на 16 досвідчених open-source devs ·{' '}
        <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">metr.org/blog</a>
        {' · '}
        DORA «Accelerate State of DevOps 2024» ·{' '}
        <a href="https://dora.dev/research/2024/dora-report/">dora.dev/2024</a>
        {' · '}
        DORA «State of AI-assisted Software Development 2025» ·{' '}
        <a href="https://dora.dev/dora-report-2025/">dora.dev/2025</a>
        {' · '}
        BCG «The Widening AI Value Gap» (Sept 2025) ·{' '}
        <a href="https://media-publications.bcg.com/The-Widening-AI-Value-Gap-October-2025.pdf">bcg.com/value-gap</a>
      </p>
    </div>
  );
}
