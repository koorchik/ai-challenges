// 61 · Закриття · Дякую · Q&A · джерела
export function Slide50() {
  return (
    <>
      <h1 style={{ marginBottom: '0.2em' }}>Дякую</h1>
      <p className="section-sub">
        Питання · обговорення · сварки про відсоткові пункти.
      </p>

      <div className="two-col wide text-sm" style={{ marginTop: '0.8em' }}>
        <div>
          <h3 style={{ fontSize: '0.7em', letterSpacing: '0.15em', opacity: 0.6, textTransform: 'uppercase' }}>
            Контакти
          </h3>
          <ul className="checklist" style={{ lineHeight: 1.6 }}>
            <li>koorchik @ всі звичні платформи</li>
            <li>github.com/koorchik · слайди + код</li>
            <li>пишіть, обговорюйте, сваріться</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '0.7em', letterSpacing: '0.15em', opacity: 0.6, textTransform: 'uppercase' }}>
            Ключові джерела
          </h3>
          <ul className="checklist" style={{ lineHeight: 1.35, fontSize: '0.85em' }}>
            <li>Bloom B.S. (1956), «Taxonomy of Educational Objectives»</li>
            <li>Turskyi V. (2026), «AI-Integrated Bloom's Taxonomy: From "Coder" to "Tech Lead"» (gist)</li>
            <li>Steinberger P. — нотатки про менеджмент AI-агентів як tech-lead роботу</li>
            <li>Becker, Rush, Barnes, Rein «METR 2025» — −19% productivity</li>
            <li>Cui, Demirer et al. (MS/MIT 2024 → Mgmt Sci 2026) — skill-leveling</li>
            <li>Brynjolfsson, Li, Raymond «Generative AI at Work» (NBER w31161, 2023)</li>
            <li>Brynjolfsson, Rock, Syverson «Productivity J-Curve» (NBER w25148, 2018)</li>
            <li>Acemoglu &amp; Restrepo (Econometrica 2022) — задачі &amp; автоматизація</li>
            <li>DORA «State of DevOps 2024» — AI &amp; team throughput</li>
            <li>SWE-bench Verified leaderboard; METR task-horizon (2024–25)</li>
            <li>David «Computer and the Dynamo» (AER 1990); Jevons (1865)</li>
            <li>a16z «cost of starting…» серії; a16z «Cost of AI» 2025; Stack Overflow Developer Survey 2024–25</li>
            <li>НБУ — балансова статистика 2017–2024</li>
            <li>IT Ukraine Association; DOU census; ITC.ua 2025; Brave1 / Мінцифра</li>
          </ul>
        </div>
      </div>

      <p className="slide-footnote" style={{ marginTop: '1em' }}>
        Усі цифри — з відкритих джерел. Усі моделі (Джевонс, Рікардо, outsourcing-erosion) — спрощені для
        дидактики. Якщо знайшли помилку — напишіть, виправлю в репозиторії.
      </p>
    </>
  );
}
