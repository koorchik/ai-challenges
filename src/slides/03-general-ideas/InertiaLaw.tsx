export default function InertiaLaw() {
  return (
    <div className="slide-body wide">
      <h2>Закон Амари: переоцінюємо короткостроково, недооцінюємо довгостроково</h2>
      <p className="lede" style={{ margin: 0 }}>
        ChatGPT набрав 100 млн користувачів за 2 місяці. Це швидкість awareness. Workflow, P&amp;L і
        ринкові звички рухаються роками, не місяцями.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em', gap: '1em' }}>
        <div data-accent="amber">
          <h3 className="accent">Roy Amara · IFTF, 1970-ті</h3>
          <p style={{ margin: '0.25em 0 0' }}>
            «Ми переоцінюємо ефект технології в короткому періоді й недооцінюємо в довгому».
            Гайп мерехтить — наслідки накопичуються.
          </p>
        </div>
        <div data-accent="amber">
          <h3 className="accent">Geoffrey Moore · Crossing the Chasm, 1991</h3>
          <p style={{ margin: '0.25em 0 0' }}>
            Між visionaries і pragmatist majority — прірва. Ентузіасти хочуть розрив зі старим.
            Маса хоче мінімізувати розрив.
          </p>
        </div>
        <div data-accent="amber">
          <h3 className="accent">Paul Saffo · Stanford / IFTF</h3>
          <p style={{ margin: '0.25em 0 0' }}>
            Правило 30 років: винахід → щоденне життя проходить три декади хайпу й розчарувань,
            перш ніж стати буденністю.
          </p>
        </div>
      </div>

      <div className="callout callout-yellow">
        <strong>100M людей увімкнули ChatGPT.</strong> 100M команд не переписали свій воркфлоу.
      </div>

      <p className="slide-footnote">
        Roy Amara ·{' '}
        <a href="https://en.wikipedia.org/wiki/Roy_Amara">en.wikipedia.org/wiki/Roy_Amara</a>
        {' · '}
        Geoffrey A. Moore, «Crossing the Chasm» (1991) ·{' '}
        <a href="https://en.wikipedia.org/wiki/Crossing_the_Chasm">
          en.wikipedia.org/wiki/Crossing_the_Chasm
        </a>
        {' · '}
        ChatGPT — 100M MAU за 2 місяці ·{' '}
        <a href="https://en.wikipedia.org/wiki/ChatGPT">en.wikipedia.org/wiki/ChatGPT</a>
      </p>
    </div>
  );
}
