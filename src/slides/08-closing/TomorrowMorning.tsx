export default function TomorrowMorning() {
  return (
    <div className="slide-body wide">
      <h2>Завтра вранці: один практичний крок</h2>
      <p className="lede">
        Перестаньте використовувати агентів як «розумну автокорекцію». Зробіть один крок до агентної інженерії у своїй ролі.
      </p>

      <div className="four-col wide" style={{ marginTop: '0.4em' }}>
        <div className="fork-node" data-accent="amber">
          <h3>Студент</h3>
          <p className="muted">правила, не код</p>
          <p>
            Створіть перший <code>CLAUDE.md</code> для пет-проєкту. Опишіть стандарти, яких агент має дотримуватися. Вчіться ставити рамки.
          </p>
        </div>

        <div className="fork-node" data-accent="blue">
          <h3>Інженер</h3>
          <p className="muted">ШІ як критик</p>
          <p>
            Покажіть агенту свій PR і попросіть: <em>«Знайди 3 причини, чому це впаде під навантаженням»</em>. Шукайте trade-offs, не бойлерплейт.
          </p>
        </div>

        <div className="fork-node" data-accent="green">
          <h3>Бізнес / Лід</h3>
          <p className="muted">evals замість LOC</p>
          <p>
            Запустіть перший LLM-as-judge тест, що перевіряє згенерований код на відповідність стандартам компанії перед мерджем.
          </p>
        </div>

        <div className="fork-node" data-accent="purple">
          <h3>Освіта / Ментор</h3>
          <p className="muted">змініть оцінювання</p>
          <p>
            Замість «напиши CRUD з нуля» — <em>«ось згенерований агентом проєкт із 5 вразливостями: проведіть Code Review»</em>.
          </p>
        </div>
      </div>

      <p className="callout callout-green" style={{ marginTop: '1em' }}>
        Делегуйте виконання — не делегуйте відповідальність. Перехід від <em>«зроби за мене»</em> до <em>«ось стандарти, запропонуй рішення, яке я жорстко рев'юю»</em>.
      </p>
    </div>
  );
}
