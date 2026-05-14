export default function PersonalChoice() {
  return (
    <>
      <h2>Поки держава вирішує — що робиш ти</h2>
      <p className="lede">
        Чотири реалістичні стратегії українського інженера у 2026. Жодна не <em>правильна</em>; всі —
        корисні, якщо обрано свідомо. Виберіть свою, замість «якось воно буде».
      </p>

      <div className="four-col wide" style={{ marginTop: '0.4em', fontSize: '0.65em' }}>
        <div className="fork-node" data-accent="green">
          <h3>В Україні</h3>
          <p className="muted">stay-and-build</p>
          <ul style={{ paddingLeft: '1em', margin: '0.25em 0' }}>
            <li>Diia.City + AI/defense-track</li>
            <li>Brave1, dual-use, gov-tech</li>
            <li>Vet-to-defense-tech перекваліфікація</li>
          </ul>
          <p className="muted">
            Найвища концентрація унікального досвіду в світі — і найнижча конкуренція за нього всередині країни.
          </p>
        </div>
        <div className="fork-node" data-accent="blue">
          <h3>Виїхати тимчасово</h3>
          <p className="muted">learn the frontier</p>
          <ul style={{ paddingLeft: '1em', margin: '0.25em 0' }}>
            <li>2–4 роки в US/EU AI-команді</li>
            <li>Remittances + знання, не просто зарплата</li>
            <li>Контракт із собою — назад через X років</li>
          </ul>
          <p className="muted">
            Європа та США платять за expertise, який Україна може окупити в 5-річній перспективі.
          </p>
        </div>
        <div className="fork-node" data-accent="purple">
          <h3>Виїхати назавжди</h3>
          <p className="muted">node in diaspora</p>
          <ul style={{ paddingLeft: '1em', margin: '0.25em 0' }}>
            <li>Менторство, data partnerships, due diligence</li>
            <li>Інвестиції в українські стартапи</li>
            <li>Залишити українську ідентичність активною, не сентиментальною</li>
          </ul>
          <p className="muted">
            Польща й Ізраїль виросли на діаспорі, яка не повернулася. Це валідний внесок.
          </p>
        </div>
        <div className="fork-node" data-accent="yellow">
          <h3>Бути в обох</h3>
          <p className="muted">amphibian model</p>
          <ul style={{ paddingLeft: '1em', margin: '0.25em 0' }}>
            <li>Квартальні візити, постійна резидентура за кордоном</li>
            <li>Локальна команда + іноземні клієнти</li>
            <li>Партнерства Diia + EU/US акселератори</li>
          </ul>
          <p className="muted">
            Найскладніше операційно — найбільший важіль на обидва ринки одночасно.
          </p>
        </div>
      </div>

      <p className="callout callout-yellow">
        Помилка не в тому, який варіант обрати. Помилка — обрати «нічого не вирішувати» і дрейфувати п'ять
        років. Через десять — ринок виглядатиме інакше, і ваш скіл буде відповідати тому, де ви свідомо стояли.
      </p>

      <p className="slide-footnote">
        Реалістичність репатріації: ITC.ua / Kyiv International Institute of Sociology (2025) — близько
        37% спеціалістів за кордоном не планують повертатися. Цей слайд не радить — він робить чотири
        варіанти видимими.
      </p>
    </>
  );
}
