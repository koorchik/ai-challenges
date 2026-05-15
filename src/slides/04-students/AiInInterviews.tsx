export default function AiInInterviews() {
  return (
    <div className="slide-body wide">
      <h2>Google: «AI Fluency» стає офіційним критерієм на співбесіді</h2>
      <p className="lede" style={{ margin: 0 }}>
        Травень 2026, витік внутрішнього документа Google (Business Insider). У другій половині року на
        раунді <em>Code Comprehension</em> кандидатам офіційно дозволять користуватися Gemini — і{' '}
        <strong>окремо оцінюватимуть навички Prompt Engineering та Debugging у парі з ШІ</strong>.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '1.5em', gap: '1em' }}>
        <div data-accent="green">
          <h3 className="accent">Кого тестують</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>Early- та Mid-career SWE</li>
            <li>Обрані команди в США (пілот)</li>
            <li>Далі — масштабування на всі регіони</li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Формат раунду</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>Етап «Code Comprehension»</li>
            <li>Аналіз реального великого кодбейзу</li>
            <li>Пошук багів, performance, рефакторинг</li>
          </ul>
        </div>
        <div data-accent="yellow">
          <h3 className="accent">Критерії оцінки</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>AI Fluency (вільне володіння)</strong></li>
            <li>Ефективність prompt engineering</li>
            <li>Здатність дебажити галюцинації моделі</li>
            <li>Критичне осмислення згенерованого</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-green">
        <strong>«AI Fluency» — це тепер hard skill, без якого не наймають.</strong>
      </div>

      <p className="slide-footnote">
        Business Insider (травень 2026) — внутрішній документ Google.{' '}
        <a href="https://www.businessinsider.com/google-job-interview-software-engineers-ai-assistant-coding-2026-5">
          businessinsider.com/google-job-interview-software-engineers-ai-assistant-coding-2026-5
        </a>
      </p>
    </div>
  );
}