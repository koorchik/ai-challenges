export default function InertiaLaw() {
  return (
    <div className="slide-body wide">
      <h2>Закон Амари: переоцінюємо короткостроково, недооцінюємо довгостроково</h2>
      <p className="lede" style={{ margin: 0 }}>
        ChatGPT набрав 100 млн користувачів за 2 місяці. Це швидкість хайпу. 
        Але зміна реальних робочих процесів (workflow), бізнес-моделей та ринкових звичок 
        займає роки, а не місяці.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.8em', gap: '1em' }}>
        <div data-accent="amber">
          <h3 className="accent">Roy Amara · IFTF, 1970-ті</h3>
          <p style={{ margin: '0.25em 0 0' }}>
            «Ми переоцінюємо ефект технології в короткому періоді й недооцінюємо в довгому».
            Хайп швидко згасає — фундаментальні наслідки накопичуються роками.
          </p>
        </div>
        <div data-accent="amber">
          <h3 className="accent">Geoffrey Moore · Crossing the Chasm</h3>
          <p style={{ margin: '0.25em 0 0' }}>
            Між візіонерами та прагматичною більшістю — прірва. Ентузіасти прагнуть 
            революції та розриву зі старим. Масовий ринок хоче мінімізувати ризики.
          </p>
        </div>
        <div data-accent="amber">
          <h3 className="accent">Paul Saffo · Правило 30 років</h3>
          <p style={{ margin: '0.25em 0 0' }}>
            Від винаходу до щоденного життя технологія проходить три декади хайпу й 
            розчарувань, перш ніж стати непомітною буденністю.
          </p>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1.2em' }}>
        <strong>100M людей увімкнули ChatGPT.</strong> Але 100M компаній не переписали свій воркфлоу.
      </div>

      <p className="slide-footnote" style={{ marginTop: '1.5em' }}>
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