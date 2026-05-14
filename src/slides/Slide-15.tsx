// 15 · Концепції · LLM-as-judge
export function Slide14() {
  return (
    <div className="slide-body wide">
      <h2>А якщо verifiability важка? — постав інших як суддів</h2>
      <p className="lede" style={{ margin: 0 }}>
        Творчість, дизайн, текст, UX — об'єктивного «тест пройдено» немає. Тоді інші моделі оцінюють
        результат за рубрикою.
      </p>
      <div className="two-col text-md">
        <div data-accent="blue">
          <h3 className="accent">Як працює</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><a href="https://arxiv.org/abs/2303.16634">G-Eval</a>: сильніша модель ставить оцінку за рубрикою</li>
            <li>Панель моделей → менше bias, дешевше</li>
            <li>Self-critique: модель виправляє себе за конституцією</li>
            <li>Debate: агенти сперечаються до консенсусу</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">У проді</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><a href="https://cursor.com/blog/cursorbench">Cursor</a> — graders обирають кращий з паралельних варіантів</li>
            <li><a href="https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback">Anthropic CAI</a> — Claude оцінює Claude</li>
            <li>LangSmith / OpenAI Evals — model-graded rubrics як стандарт</li>
          </ul>
        </div>
      </div>
      <div className="callout callout-yellow">
        <a href="https://arxiv.org/abs/2306.05685">MT-Bench</a>: GPT-4 як суддя збігається з людьми ≈80% —
        як люди між собою. Панель малих моделей (<a href="https://arxiv.org/abs/2404.18796">PoLL</a>)
        перемагає одного «великого» — у 7× дешевше.
      </div>
    </div>
  );
}
