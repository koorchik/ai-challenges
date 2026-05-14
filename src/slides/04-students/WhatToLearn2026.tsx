export default function WhatToLearn2026() {
  return (
    <div className="slide-body wide">
      <h2>Hard Skills 2026: Дві ноги сучасного інженера</h2>
      <p className="lede" style={{ margin: 0 }}>
        Щоб перетворити бриф на робочий продукт, сьогодні потрібна комбінація: класичні навички 
        Tech Lead-а для управління хаосом + новітні патерни ШІ-інженерії (Agentic Workflows).
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1.5em', gap: '2em' }}>
        <div data-accent="yellow">
          <h3 className="accent">Класика Tech Lead-а</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Жорсткий Scoping:</strong> здатність урізати скоуп до «тиждень-у-проді» / «місяць-MVP».
            </li>
            <li>
              <strong>Прагматична архітектура:</strong> вибір інструментів під задачу, а не під хайп (іноді достатньо просто SQL та моноліту).
            </li>
            <li>
              <strong>Агресивна декомпозиція:</strong> розбиття системи на вертикальні шматки, які можна доставити незалежно.
            </li>
            <li>
              <strong>Onboarding як артефакт:</strong> створення <code>.cursorrules</code> та <code>CLAUDE.md</code> — інструкцій, які читають і люди, і агенти.
            </li>
            <li>
              <strong>Ship & Operate:</strong> моніторинг, rollback-стратегії, написання post-mortems.
            </li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">ШІ-Пайплайни (Agentic Engineering)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Багатоагентна оркестрація:</strong> розробка не одним універсалом, а командою промптів (аналітик → кодер → рев'юер).
            </li>
            <li>
              <strong>Топологія пайплайнів:</strong> послідовні ланцюжки з gating (валідацією), паралельний fan-out → merge.
            </li>
            <li>
              <strong>Evals як CI (Continuous Integration):</strong> model-graded оцінки, LLM-as-a-judge, автоматичні регресії перед релізом.
            </li>
            <li>
              <strong>Робота з контекстом:</strong> RAG, Vector DB, re-ranking як стандартні компоненти будь-якого застосунку.
            </li>
            <li>
              <strong>Управління бюджетом та Latency:</strong> контроль витрат токенів, оптимізація кешу, стратегії fallback.
            </li>
          </ul>
        </div>
      </div>

      <div className="callout callout-green" style={{ marginTop: '1.5em' }}>
        <strong>Головний іспит на профпридатність:</strong> Отримав бізнес-бриф → за місяць привів продукт до 
        перших живих користувачів → зібрав метрики → система не впала. Усе інше (швидкість друку, знання синтаксису) — вторинне.
      </div>
    </div>
  );
}