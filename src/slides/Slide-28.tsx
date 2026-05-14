// 28 · Студенти · Чого вчитися у 2026
export function Slide24() {
  return (
    <>
      <h2>Чого вчитися у 2026</h2>
      <p className="lede">
        Ключова навичка — провести проєкт від брифу до робочого релізу. Стоїть на двох ногах:
        класика тех-ліда + ШІ-пайплайни та інструментарій.
      </p>

      <div className="two-col wide text-md">
        <div data-accent="yellow">
          <h3 className="accent">класика тех-ліда</h3>
          <ul className="checklist">
            <li>
              <strong>Scoping</strong>: тиждень-у-проді / місяць-MVP / квартал-V1
            </li>
            <li>
              <strong>Архітектура під задачу</strong>, не під моду: монолит / queue / просто SQL
            </li>
            <li>
              <strong>Декомпозиція</strong> на вертикальні, самостійно-доставлювані шматки
            </li>
            <li>
              <strong>Code review</strong> як основна форма виробництва — читати швидше, ніж писати
            </li>
            <li>
              <strong>Onboarding як артефакт</strong>: CLAUDE.md, конвенції — для людей і агентів
            </li>
            <li>
              <strong>Ship &amp; operate</strong>: моніторинг, rollback, post-mortem
            </li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">ШІ-пайплайни та інструментарій</h3>
          <ul className="checklist">
            <li>
              <strong>Багатоагентна оркестрація</strong>: команда (аналітик / кодер / рев'юер /
              тестувальник), не один універсал
            </li>
            <li>
              <strong>Топологія пайплайну</strong>: послідовні етапи з gating, паралельний
              fan-out → merge
            </li>
            <li>
              <strong>RAG / vector DB / re-ranking</strong> — стандартний компонент пайплайну
            </li>
            <li>
              <strong>Evals як CI</strong>: model-graded, LLM-as-judge, регресії перед релізом
            </li>
            <li>
              <strong>Cost &amp; latency budgets</strong>: токени, кеш, fallback, паралелізм як
              левередж
            </li>
            <li>
              <strong>Tooling fluency</strong>: Cursor / Claude Code / Codex / sub-agents
            </li>
          </ul>
        </div>
      </div>

      <p className="callout callout-green">
        <strong>Тест «ти вмієш»:</strong> отримав бриф → за місяць-два привів продукт до перших
        10 живих користувачів і метрик. Не «знаю React», не «вмію промпти». Довів проєкт до релізу.
      </p>
    </>
  );
}
