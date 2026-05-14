// 24 · Студенти · Google: ШІ-помічник на самій співбесіді
export function Slide16() {
  return (
    <>
      <h2>Google: «AI fluency» — окрема оцінка на співбесіді SWE</h2>
      <p className="lede">
        Травень 2026, внутрішній документ Google (Business Insider). У другій половині року на
        раунді <em>code comprehension</em> кандидатам дозволять користуватися Gemini — і{' '}
        <strong>окремо оцінюватимуть prompt engineering та debugging із ШІ</strong>.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em' }}>
        <div data-accent="green">
          <h3 className="accent">кого</h3>
          <ul className="checklist">
            <li>early- та mid-career SWE</li>
            <li>обрані команди в США (пілот)</li>
            <li>далі — розширення на інші регіони</li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">на якому етапі</h3>
          <ul className="checklist">
            <li>раунд «code comprehension»</li>
            <li>аналіз реального кодбейзу</li>
            <li>пошук багів, performance, рефакторинг</li>
          </ul>
        </div>
        <div data-accent="yellow">
          <h3 className="accent">що оцінюють окремо</h3>
          <ul className="checklist">
            <li><strong>AI fluency</strong></li>
            <li>prompt engineering</li>
            <li>debugging із ШІ</li>
            <li>розуміння й уточнення згенерованого</li>
          </ul>
        </div>
      </div>

      <p className="callout callout-green">
        Pet-проєкт — це команда під твоїм керівництвом. Тепер і співбесіда — твоя перша демонстрація
        як tech-lead. «AI fluency» — наймана навичка, не побічна.
      </p>

      <p className="slide-footnote">
        Business Insider (травень 2026) — внутрішній документ Google, пілот допуску Gemini на раунді
        code-comprehension. {' '}
        <a href="https://www.businessinsider.com/google-job-interview-software-engineers-ai-assistant-coding-2026-5">
          businessinsider.com/google-job-interview-software-engineers-ai-assistant-coding-2026-5
        </a>
      </p>
    </>
  );
}
