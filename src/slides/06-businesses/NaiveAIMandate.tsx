export default function NaiveAIMandate() {
  return (
    <div className="slide-body wide">
      <h2>Наївна вказівка: «Купіть їм ШІ, нехай кодять удвічі швидше»</h2>
      <p className="lede" style={{ margin: 0 }}>
        Це найпоширеніша ілюзія топ-менеджменту. Дані з полів доводять: просте додавання 
        AI-інструментів поверх старих процесів руйнує метрики, а не покращує їх.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '2em', gap: '1.5em' }}>
        {/* Колонка 1 */}
        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Ілюзія швидкості</h3>
          <p style={{ fontSize: '3.5em', fontWeight: 800, color: '#f43f5e', margin: '0.2em 0', lineHeight: 1 }}>
            −19%
          </p>
          <p style={{ flexGrow: 1, margin: 0, marginTop: '1em' }}>
            <strong>METR (2025):</strong> Досвідчені розробники <em>відчували</em>, що працюють на 20% швидше. 
            Фактичний замір: вони здали роботу на 19% повільніше через виснажливий дебагінг згенерованого коду.
          </p>
        </div>

        {/* Колонка 2 */}
        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Деградація якості</h3>
          <p style={{ fontSize: '3.5em', fontWeight: 800, color: '#f43f5e', margin: '0.2em 0', lineHeight: 1 }}>
            −7.2%
          </p>
          <p style={{ flexGrow: 1, margin: 0, marginTop: '1em' }}>
            <strong>DORA (2024):</strong> Падіння стабільності продакшену. ШІ генерує величезні пулл-реквести 
            (batch size росте), рев'ю не встигає за генерацією, тестування слабне — система ламається частіше.
          </p>
        </div>

        {/* Колонка 3 */}
        <div className="tile" data-accent="red" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 className="accent">Парадокс ROI</h3>
          <p style={{ fontSize: '3.5em', fontWeight: 800, color: '#f43f5e', margin: '0.2em 0', lineHeight: 1 }}>
            60%
          </p>
          <p style={{ flexGrow: 1, margin: 0, marginTop: '1em' }}>
            <strong>BCG (2025):</strong> 60% компаній отримали нульовий фінансовий результат від впровадження ШІ. 
            Усі купили інструменти, але лише 5% змогли їх ефективно масштабувати.
          </p>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '2em' }}>
        Сильна інженерна культура стає сильнішою, слабка — колапсує (DORA). 
        McKinsey зазначає: фундаментальна перебудова процесів корелює зі зростанням прибутку (EBIT) у <strong>3 рази сильніше</strong>, 
        ніж проста закупівля ліцензій на Copilot.
      </div>
    </div>
  );
}