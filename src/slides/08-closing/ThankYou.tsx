export default function ThankYou() {
  return (
    <div className="slide-body wide">
      <h1 style={{ marginBottom: '0.1em' }}>Дякую</h1>
      <p className="section-sub" style={{ margin: 0 }}>
        Питання · обговорення · сварки про відсоткові пункти.
      </p>

      <div className="two-col text-sm" style={{ marginTop: '0.3em' }}>
        <div>
          <h3 style={{ fontSize: '0.7em', letterSpacing: '0.15em', opacity: 0.6, textTransform: 'uppercase' }}>
            Контакти
          </h3>
          <ul className="checklist" style={{ lineHeight: 1.5 }}>
            <li>koorchik @ всі звичні платформи</li>
            <li>github.com/koorchik · слайди + код</li>
            <li>пишіть, обговорюйте, сваріться</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '0.7em', letterSpacing: '0.15em', opacity: 0.6, textTransform: 'uppercase' }}>
            Ключові джерела
          </h3>
          <ul className="checklist" style={{ lineHeight: 1.3, fontSize: '0.8em' }}>
            <li>Bloom (1956); Anderson &amp; Krathwohl (2001) — таксономія</li>
            <li>Karpathy «Verifiability» (2025) — verifiability + agentic</li>
            <li>Becker et al. «METR 2025» — −19% productivity</li>
            <li>Cui, Demirer et al. (MS/MIT 2024) — skill-leveling</li>
            <li>Brynjolfsson, Li, Raymond (NBER 2023) — Generative AI at Work</li>
            <li>Brynjolfsson, Rock, Syverson (NBER 2018) — J-Curve</li>
            <li>Acemoglu &amp; Restrepo (Econometrica 2022) — задачі + автоматизація</li>
            <li>DORA «State of DevOps 2024»; SWE-bench Verified; METR task-horizon</li>
            <li>David (AER 1990); Jevons (1865); a16z «Cost of AI» 2025</li>
            <li>НБУ; IT Ukraine Association; DOU census; Brave1 / Мінцифра</li>
          </ul>
        </div>
      </div>

      <p className="slide-footnote" style={{ marginTop: '0.4em' }}>
        Усі цифри — з відкритих джерел. Усі моделі (Джевонс, Рікардо, outsourcing-erosion) — спрощені для дидактики.
      </p>
    </div>
  );
}
