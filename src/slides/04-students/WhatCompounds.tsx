export default function WhatCompounds() {
  return (
    <div className="slide-body wide">
      <h2>Період напіврозпаду навичок: що дійсно капіталізується</h2>
      <p className="lede" style={{ margin: 0 }}>
        Головне правило: запитайте себе, ця навичка дозволяє <em>керувати</em> ШІ, чи вона просто <em>конкурує</em> з ним?
      </p>

      <div className="two-col wide text-md" style={{ marginTop: '1em', gap: '2em' }}>
        <div data-accent="green">
          <h3 className="accent">Капіталізується</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>Доменна експертиза:</strong> ШІ не знає ваших клієнтів.</li>
            <li><strong>Інженерний смак:</strong> елегантне рішення vs «зручне для LLM».</li>
            <li><strong>Фундаментальні абстракції:</strong> system design, БД, concurrency.</li>
            <li><strong>Дебагінг між шарами:</strong> аномалії на стику infra/back/front.</li>
          </ul>
        </div>
        <div data-accent="red">
          <h3 className="accent">Знецінюється</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>Фотографічна пам'ять:</strong> синтаксис, параметри API, bash-команди.</li>
            <li><strong>Boilerplate-рутина:</strong> CRUD, базові форми, регулярки.</li>
            <li><strong>Фреймворки без бази:</strong> мода без патернів під нею.</li>
            <li><strong>Tutorial Hell:</strong> 50-й «Hello World» у різних стеках.</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1em' }}>
        <strong>Судження vs виконання.</strong> Виконання застаріває за місяці; смак і системне бачення — на десятиліття.
      </div>
    </div>
  );
}