export default function WhatCompounds() {
  return (
    <div className="slide-body wide">
      <h2>Період напіврозпаду навичок: що дійсно капіталізується</h2>
      <p className="lede" style={{ margin: 0 }}>
        Головне правило: запитайте себе, ця навичка дозволяє <em>керувати</em> ШІ, чи вона просто <em>конкурує</em> з ним?
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1.5em', gap: '2em' }}>
        <div data-accent="green">
          <h3 className="accent">Капіталізується (Інвестуйте)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Доменна експертиза:</strong> глибоке розуміння бізнесу (фінанси, медицина, логістика). ШІ не знає ваших клієнтів.
            </li>
            <li>
              <strong>Інженерний смак:</strong> здатність відрізнити справді елегантне та безпечне рішення від «зручного для LLM».
            </li>
            <li>
              <strong>Фундаментальні абстракції:</strong> системний дизайн, мережі, бази даних, багатопоточність (concurrency).
            </li>
            <li>
              <strong>Дебагінг між шарами:</strong> пошук складних аномалій на стику інфраструктури, бекенду та клієнта.
            </li>
          </ul>
        </div>
        <div data-accent="red">
          <h3 className="accent">Знецінюється (Не марнуйте час)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Фотографічна пам'ять:</strong> зазубрювання синтаксису, параметрів API чи bash-команд.
            </li>
            <li>
              <strong>Boilerplate-рутина:</strong> механічне написання CRUD-операцій, базових форм чи регулярних виразів.
            </li>
            <li>
              <strong>Знання фреймворків без бази:</strong> сліпе слідування моді без розуміння патернів, які ці фреймворки реалізують.
            </li>
            <li>
              <strong>Tutorial Hell:</strong> написання 50-го «Hello World» у різних технологіях.
            </li>
          </ul>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1.5em' }}>
        <strong>Судження (Judgment) vs Виконання (Execution).</strong> <br/>
        Усе, що стосується механічного <em>виконання</em>, застаріває за місяці. Усе, що стосується <em>судження, смаку та системного бачення</em>, залишається з вами на десятиліття.
      </div>
    </div>
  );
}