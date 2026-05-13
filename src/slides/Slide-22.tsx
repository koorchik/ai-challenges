// 22 · Студенти · Віртуальна команда як тренажер техліда
export function Slide14() {
  return (
    <>
      <h2>Раніше для tech-lead-навичок треба була команда. Тепер — ні.</h2>
      <p className="lede">
        Парадокс старої системи: щоб тренувати техлід-навички, потрібна команда. А команду давали лише
        після кількох років як engineer. Замкнене коло для студента. ШІ-агенти його розривають.
      </p>

      <div className="two-col wide text-md">
        <div data-accent="red">
          <h3 className="accent">раніше — без команди тренувати неможливо</h3>
          <ul className="checklist">
            <li>
              <strong>Code review</strong> — потрібен код колег
            </li>
            <li>
              <strong>Архітектурні рішення для інших</strong> — потрібна команда
            </li>
            <li>
              <strong>Делегування</strong> — потрібні підлеглі
            </li>
            <li>
              <strong>Тех-бачення</strong> — потрібен проєкт із командою
            </li>
            <li>Студент без команди = без тренувань</li>
          </ul>
        </div>
        <div data-accent="yellow">
          <h3 className="accent">зараз — твоя віртуальна команда</h3>
          <ul className="checklist">
            <li>
              <strong>«Інженери»</strong>: Cursor / Claude Code / Codex / Cline
            </li>
            <li>Ти ставиш задачі, рев'юєш діфи, виправляєш архітектуру</li>
            <li>
              <strong>rules-файли</strong> (CLAUDE.md, .cursorrules) — твій team onboarding
            </li>
            <li>
              <strong>Evals</strong> на твої правила — твій «1-на-1» з командою
            </li>
            <li>Pet-проєкт = твій перший проєкт як техлід</li>
          </ul>
        </div>
      </div>

      <p className="callout callout-green">
        Pet-проєкт у 2026 — не «що я написав». Це «що моя команда зробила під моїм керівництвом».
        Інтерв'юер питатиме саме про друге.
      </p>

      <p className="slide-footnote">
        Peter Steinberger — практика менеджменту AI-агентів як аналог tech-lead-фанауту.
      </p>
    </>
  );
}
