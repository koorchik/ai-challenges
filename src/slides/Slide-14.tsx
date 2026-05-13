// 14 · Концепції · LLM-as-judge
export function Slide14() {
  return (
    <>
      <h2>А якщо verifiability важка? — постав інших як суддів</h2>
      <p className="lede">
        Творчість, дизайн, текст, UX — об'єктивного «тест пройдено» немає.
        Тоді інші моделі оцінюють результат за рубрикою: автоматичний score замість живого ревʼюера.
      </p>
      <div className="two-col wide" style={{ marginTop: '0.4em' }}>
        <div data-accent="blue">
          <h3 className="accent">Як працює</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>Сильніша модель оцінює слабшу за рубрикою (<a href="https://arxiv.org/abs/2303.16634">G-Eval</a>)</li>
            <li>Панель різних моделей → менше bias, дешевше</li>
            <li>Self-critique: модель сама себе виправляє за конституцією</li>
            <li>Debate: кілька агентів сперечаються до консенсусу</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">У проді</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong><a href="https://cursor.com/blog/cursorbench">Cursor</a></strong> — graders обирають кращий з паралельних варіантів</li>
            <li><strong><a href="https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback">Anthropic CAI</a></strong> — Claude оцінює Claude за конституцією</li>
            <li><strong>LangSmith / OpenAI Evals</strong> — model-graded rubrics як стандарт</li>
          </ul>
        </div>
      </div>
      <div className="callout callout-yellow" style={{ marginTop: '0.5em' }}>
        <a href="https://arxiv.org/abs/2306.05685">MT-Bench</a>: GPT-4 як суддя збігається з людьми ≈80% — як люди між собою.
        <br />
        Панель малих моделей (<a href="https://arxiv.org/abs/2404.18796">PoLL</a>) перемагає одного «великого» суддю — і коштує у 7 разів дешевше.
      </div>
      <p className="slide-footnote">
        Caveat: суддя має бути сильнішим або хоча б рівним за виконавця, інакше шум.
      </p>
    </>
  );
}
