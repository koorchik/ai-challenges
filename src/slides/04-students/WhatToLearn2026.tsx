export default function WhatToLearn2026() {
  return (
    <div className="slide-body wide">
      <h2>Hard Skills 2026: Дві ноги сучасного інженера</h2>
      <p className="lede" style={{ margin: 0 }}>
        Щоб перетворити бриф на робочий продукт, сьогодні потрібна комбінація: класичні навички 
        Tech Lead-а для управління хаосом + новітні патерни ШІ-інженерії (Agentic Workflows).
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1em', gap: '2em' }}>
        <div data-accent="yellow">
          <h3 className="accent">Класика Tech Lead-а</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>Жорсткий scoping:</strong> «тиждень-у-проді» / «місяць-MVP».</li>
            <li><strong>Прагматична архітектура:</strong> інструмент під задачу, не під хайп.</li>
            <li><strong>Агресивна декомпозиція:</strong> вертикальні шматки, що шиппляться незалежно.</li>
            <li><strong>Onboarding як артефакт:</strong> <code>.cursorrules</code>, <code>CLAUDE.md</code> — для людей і агентів.</li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">ШІ-пайплайни (Agentic Engineering)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>Багатоагентна оркестрація:</strong> аналітик → кодер → рев'юер.</li>
            <li><strong>Топологія пайплайнів:</strong> gating, паралельний fan-out → merge.</li>
            <li><strong>Evals як CI:</strong> model-graded, LLM-as-a-judge, автоматичні регресії.</li>
            <li><strong>Робота з контекстом:</strong> RAG, Vector DB, re-ranking.</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-green" style={{ marginTop: '1em' }}>
        <strong>Іспит на профпридатність:</strong> бриф → за місяць перші живі користувачі → метрики → система не впала.
      </div>
    </div>
  );
}