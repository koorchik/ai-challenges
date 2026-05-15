export default function CapabilityVsAdoptionGap() {
  return (
    <div className="slide-body wide">
      <h2>ШІ розвивається місяцями. Корпорації впроваджують роками.</h2>
      <p className="lede">
        Те, що фронтир уміє сьогодні, Fortune 500 запустить у продакшен через роки. Цей розрив — вікно стартапу.
      </p>

      <div className="three-col text-md">
        <div className="tile" data-accent="blue" style={{ padding: '0.9em' }}>
          <h3 className="accent" style={{ fontSize: '1.05em', marginBottom: '0.4em' }}>Податок на інерцію</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            Корпорація рік погоджує інструмент, який застаріває за 6 місяців. Стартап оновлює стек за вихідні.
          </p>
        </div>

        <div className="tile" data-accent="amber" style={{ padding: '0.9em' }}>
          <h3 className="accent" style={{ fontSize: '1.05em', marginBottom: '0.4em' }}>Стабільність vs хайп</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            Масовий ринок не змінює звички кожні пів року — йому треба стабільний UX, а не нові LLM під капотом.
          </p>
        </div>

        <div className="tile" data-accent="green" style={{ padding: '0.9em' }}>
          <h3 className="accent" style={{ fontSize: '1.05em', marginBottom: '0.4em' }}>Асиметрія хаосу</h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            У спокійні часи перемагає капітал. У шторм — <strong>швидкість ітерацій</strong>.
          </p>
        </div>
      </div>

      <p className="slide-footnote">
        McKinsey{' '}
        <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" target="_blank" rel="noreferrer">
          State of AI 2024
        </a>
        : ~11% корпорацій мають відчутну фінансову вигоду від ШІ, глибока інтеграція &lt; 20%.
      </p>
    </div>
  );
}
