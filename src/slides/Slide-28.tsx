// 28 · Розробники · Що компонується, а що знецінюється
export function Slide30() {
  return (
    <>
      <h2>Навички: що компонується, а що знецінюється</h2>
      <p className="lede">
        Те саме питання, що й для студентів — але для розробника зі стажем відповідь жорсткіша:{' '}
        час оновитися «вчора», бо саме ваші навички — у фокусі автоматизації.
      </p>

      <div className="two-col wide text-md">
        <div data-accent="green">
          <h3 className="accent">ростуть у ціні</h3>
          <ul className="checklist">
            <li>
              <strong>Архітектура й декомпозиція</strong> великих систем
            </li>
            <li>
              <strong>Code review</strong> — особливо для AI-генерованого коду
            </li>
            <li>
              <strong>Дебагінг через шари</strong> — те, чого ШІ ще не вміє
            </li>
            <li>
              <strong>Дизайн контрактів та API</strong>
            </li>
            <li>
              <strong>Технічна комунікація</strong>: RFC, ADR, post-mortem
            </li>
            <li>
              <strong>Менторинг та найм</strong> — людської експертизи
            </li>
            <li>
              <strong>Продуктове мислення</strong> та домен
            </li>
          </ul>
        </div>
        <div data-accent="red">
          <h3 className="accent">знецінюються</h3>
          <ul className="checklist">
            <li>
              <strong>Швидке написання boilerplate</strong> — ваша конкурентна перевага зникає
            </li>
            <li>
              <strong>Запамʼятовування API</strong> — ваш досвід менш цінний за актуальну документацію в RAG
            </li>
            <li>
              <strong>«Знаю фреймворк X»</strong> — фреймворки прискорено амортизуються
            </li>
            <li>
              <strong>Швидке гугління без верифікації</strong>
            </li>
            <li>
              <strong>«Стек 2015 року»</strong> без оновлень
            </li>
            <li>
              <strong>Унікальні «трюки»</strong>, що ШІ розповість за 2 секунди
            </li>
          </ul>
        </div>
      </div>

      <p className="callout callout-yellow">
        Перевірте себе чесно: якщо ваш повсякденний труд — це 70% «нагадайте мені синтаксис», 20% «зробіть
        мені CRUD» і 10% реальних рішень — у вас проблема. У іншому бік: 70% рішень, 20% перевірок, 10%
        набирання тексту — добре.
      </p>
    </>
  );
}
