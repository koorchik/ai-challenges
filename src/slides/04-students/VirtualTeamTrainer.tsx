export default function VirtualTeamTrainer() {
  return (
    <div className="slide-body wide">
      <h2>Раніше для Tech Lead навичок потрібна була команда. Тепер — ні.</h2>
      <p className="lede" style={{ margin: 0 }}>
        Парадокс старої системи: щоб тренувати лідерські навички, потрібна команда. А команду давали лише 
        після років роботи як інженера. Замкнене коло для студента. ШІ-агенти назавжди його розірвали.
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1.5em' }}>
        <div data-accent="red">
          <h3 className="accent">Раніше (замкнене коло)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Code review:</strong> потрібен код колег, щоб його перевіряти.
            </li>
            <li>
              <strong>Архітектура:</strong> потрібен реальний проєкт і розробники-виконавці.
            </li>
            <li>
              <strong>Делегування:</strong> потрібні молодші інженери.
            </li>
            <li>
              <strong>Висновок:</strong> Студент без команди = студент без управлінських тренувань.
            </li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Зараз (твоя віртуальна команда)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Твої «молодші інженери»:</strong> Cursor, Claude Code, Codex, Cline.
            </li>
            <li>
              <strong>Процес:</strong> Ти ставиш задачі, рев'юєш PR (діфи), виправляєш архітектуру.
            </li>
            <li>
              <strong>Team onboarding:</strong> Написання <code>.cursorrules</code> або <code>CLAUDE.md</code> для команди.
            </li>
            <li>
              <strong>1-на-1 з командою:</strong> Написання Evals на твої правила для перевірки якості.
            </li>
          </ul>
        </div>
      </div>

      <div className="callout callout-green" style={{ marginTop: '1.5em' }}>
        <strong>Pet-проєкт у 2026 — це не «подивіться, який код я написав».</strong> <br/>
        Це «подивіться, яку систему зробила моя команда агентів під моїм архітектурним наглядом». 
        Інтерв'юер питатиме саме про друге: як ви розв'язували конфлікти, ставили рамки і проводили рев'ю.
      </div>
    </div>
  );
}