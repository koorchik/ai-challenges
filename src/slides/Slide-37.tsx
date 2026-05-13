// 37 · Розробники · Карʼєрні розгалуження
export function Slide32() {
  return (
    <>
      <h2>Карʼєрні шляхи з 2026 — чотири розгалуження</h2>
      <p className="lede">
        «Залишитися просто розробником» — теж шлях, але вузький. Чотири усталеніші напрямки,
        кожен з власною компонентою «що ШІ не вміє».
      </p>

      <div className="fork wide">
        <div className="fork-node" data-accent="yellow">
          <h3>Domain expert</h3>
          <p className="muted">медицина · фінанси · оборонка · енергія · geo</p>
          <ul style={{ paddingLeft: '1em', margin: '0.2em 0' }}>
            <li>Глибина домену &gt; широта стеку</li>
            <li>Регуляція, ліцензії, ризик</li>
            <li>Працюєте з не-розробниками</li>
          </ul>
          <p className="muted">ШІ не має «років у домені»</p>
        </div>
        <div className="fork-node" data-accent="green">
          <h3>Tech / staff lead</h3>
          <p className="muted">архітектура · координація</p>
          <ul style={{ paddingLeft: '1em', margin: '0.2em 0' }}>
            <li>Дизайн систем, RFC</li>
            <li>Mentoring &amp; найм</li>
            <li>Cross-team координація</li>
          </ul>
          <p className="muted">ШІ не несе відповідальності</p>
        </div>
        <div className="fork-node" data-accent="blue">
          <h3>Founder / solo product</h3>
          <p className="muted">сам собі продукт</p>
          <ul style={{ paddingLeft: '1em', margin: '0.2em 0' }}>
            <li>1–3 людини, ШІ як «команда»</li>
            <li>Дистрибуція &gt; код</li>
            <li>Готовність до невизначеності</li>
          </ul>
          <p className="muted">найбільший upside, найбільший ризик</p>
        </div>
        <div className="fork-node" data-accent="purple">
          <h3>AI infra / platform</h3>
          <p className="muted">той, хто будує інструменти</p>
          <ul style={{ paddingLeft: '1em', margin: '0.2em 0' }}>
            <li>RAG, evals, observability, агенти</li>
            <li>ML-ops, vector DB, serving</li>
            <li>Security для LLM</li>
          </ul>
          <p className="muted">найвища премія, найшвидша гонитва</p>
        </div>
      </div>

      <p className="callout callout-yellow">
        Жодне з цих розгалужень не <em>гарантоване</em>. Усі — це інвестиція в навичку, яку ШІ не закриває.
        Виберіть одне і йдіть глибоко, замість трохи від усіх.
      </p>
    </>
  );
}
