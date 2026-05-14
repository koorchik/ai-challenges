export default function BusinessesChallenge() {
  return (
    <div data-accent="green" className="slide-body wide">
      <h2>Виклики для бізнесу та IT-індустрії</h2>
      <p className="lede" style={{ margin: 0 }}>
        Те, що не озвучують на нарадах, але видно у квартальному P&amp;L. Дві колонки — бо
        економіки тут дві.
      </p>

      <div className="two-col text-md">
        <div data-accent="red">
          <h3 className="accent">Послуги розробки (аутсорс)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Продаж годин знецінюється.</strong> Той самий код пишеться за хвилини.
            </li>
            <li>
              <strong>Клієнт чекає −50…70%.</strong> Знає про ШІ й вимагає делту в маржу.
            </li>
            <li>
              <strong>Арбітраж тане.</strong> $40/год vs $80/год — обидві ціни падають разом.
            </li>
            <li>
              <strong>Пайплайн рветься.</strong> −62% junior-вакансій → за 5 років не буде сеньйорів.
            </li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Стартапи / продуктові компанії</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Клієнт сам формулює ШІ-вимоги.</strong> IT-партнера прострибують напряму
              до моделі.
            </li>
            <li>
              <strong>Клон за тиждень.</strong> Якщо немає даних, мережі або розподілу —
              продукт повторюваний.
            </li>
            <li>
              <strong>Кожні 6 місяців — інший стек.</strong> Архітектура агентів, ціна токенів,
              можливості — все рухається.
            </li>
            <li>
              <strong>Frontier випереджає вашу адопцію.</strong> Моделі вже вміють те, чого ваш
              CRM не використовує.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
