// 13 · Загальні ідеї · Agentic engineering без quality bar
import reddit from '../assets/reddit-vibe-engineer.jpeg';

export function Slide13() {
  return (
    <>
      <h2>Agentic engineering без quality bar</h2>
      <div
        className="two-col wide"
        style={{
          alignItems: 'center',
          gridTemplateColumns: 'auto 1fr',
          gap: '1.6em',
        }}
      >
        <img
          src={reddit}
          alt="Reddit r/ClaudeCode: Inherited a 3-month old repo from a Vibe Engineer"
          style={{ height: '13em', width: 'auto', borderRadius: '0.5em', display: 'block' }}
        />
        <div className="slide-body slide-body--tight">
          <p className="lede" style={{ margin: 0 }}>
            3 місяці «vibe engineering» — наступник переписав з нуля за тиждень з тим самим
            функціоналом.
          </p>
          <ul className="checklist text-md" style={{ textAlign: 'left' }}>
            <li><strong>+10K / −3.6M</strong> рядків в одному PR.</li>
            <li><strong>309K LOC коду</strong> + <strong>240K LOC «документації»</strong> + md-логи на 1M+ рядків.</li>
            <li><strong>220 handles</strong> — використовується ≈20; <strong>40+ secrets</strong> — потрібно 2.</li>
            <li>Файли по 5K+ рядків; тести покривають «хтозна-що».</li>
          </ul>
          <div className="callout">
            Агенти прискорюють фічі. Без дисципліни — так само прискорюють bloat.
          </div>
        </div>
      </div>
      <p className="slide-footnote">
        r/ClaudeCode, «Inherited a 3-month old repo from a Vibe Engineer»{' '}
        <a href="https://www.reddit.com/r/ClaudeCode/comments/1tb7edc/inherited_a_3month_old_repo_from_a_vibe_engineer/">
          reddit.com/r/ClaudeCode/…/vibe_engineer
        </a>
      </p>
    </>
  );
}
