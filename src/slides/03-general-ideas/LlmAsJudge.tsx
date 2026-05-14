export default function LlmAsJudge() {
  return (
    <div className="slide-body wide">
      <h2>LLM-as-a-Judge: Що робити, коли немає чітких критеріїв</h2>
      <p className="lede" style={{ margin: 0 }}>
        Текст, дизайн, архітектура чи UX — у цих сферах не існує об'єктивного «тест пройдено». 
        Тому для перевірки результату використовують інші ШІ-моделі.
      </p>
      <div className="two-col text-md">
        <div data-accent="blue">
          <h3 className="accent">Як це працює</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><a href="https://arxiv.org/abs/2303.16634">G-Eval</a>: потужна модель оцінює результат за заданими критеріями.</li>
            <li><strong>Комітет моделей</strong>: використання кількох різних ШІ зменшує упередженість (bias).</li>
            <li><strong>Self-critique</strong>: модель самостійно шукає помилки та виправляє свій результат.</li>
            <li><strong>Debate</strong>: агенти дискутують між собою, доки не дійдуть консенсусу.</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">На практиці (у проді)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><a href="https://cursor.com/blog/cursorbench">Cursor</a> — моделі-судді (graders) автоматично обирають найкращий згенерований код.</li>
            <li><a href="https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback">Anthropic CAI</a> — Claude оцінює відповіді іншого Claude на безпечність.</li>
            <li><strong>LangSmith / OpenAI Evals</strong> — оцінка моделей іншими моделями стала індустріальним стандартом.</li>
          </ul>
        </div>
      </div>
      <div className="callout callout-yellow">
        <a href="https://arxiv.org/abs/2306.05685">MT-Bench</a>: оцінки GPT-4 збігаються з людськими у ≈80% випадків (це рівень збігу людей між собою). А комітет із кількох малих моделей (<a href="https://arxiv.org/abs/2404.18796">PoLL</a>) оцінює точніше за одну велику, і при цьому в 7 разів дешевше.
      </div>
    </div>
  );
}