// 27 · Студенти · Що компонується, а що знецінюється
export function Slide23() {
  return (
    <>
      <h2>Що залишиться важливим — а що ні</h2>
      <p className="lede">
        Запитайте себе: цей навик ШІ <em>підсилить</em> чи <em>замінить</em>?
      </p>

      <div className="two-col wide text-md">
        <div data-accent="green">
          <h3 className="accent">компонується (інвестуй)</h3>
          <ul className="checklist">
            <li>
              <strong>Фундаменти</strong>: алгоритми, системи, мережі, БД, конкуренція
            </li>
            <li>
              <strong>Читання чужого коду</strong> й чужих специфікацій
            </li>
            <li>
              <strong>Дебагінг між шарами</strong> — мережа ↔ застосунок ↔ БД
            </li>
            <li>
              <strong>Смак</strong>: відрізнити елегантне рішення від «згенерованого»
            </li>
            <li>
              <strong>Домен</strong>: фінанси, медицина, оборонка, енергія
            </li>
            <li>
              <strong>Evals і виміри</strong> — як знати, що ця версія краща за попередню
            </li>
            <li>
              <strong>Комунікація</strong>, листи, наративи — обʼєм важить
            </li>
          </ul>
        </div>
        <div data-accent="red">
          <h3 className="accent">знецінюється (не інвестуй понад потребу)</h3>
          <ul className="checklist">
            <li>
              <strong>Запамʼятовування синтаксису</strong> та API напамʼять
            </li>
            <li>
              <strong>Boilerplate</strong>: CRUD, форми, регекси
            </li>
            <li>
              <strong>«Швидкий google»</strong> без перевірки
            </li>
            <li>
              <strong>Туторіали ради туторіалів</strong> — 50 «hello world» різними мовами
            </li>
            <li>
              <strong>Сліпе слідування модним фреймворкам</strong> без розуміння, що вони вирішують
            </li>
            <li>
              <strong>Швидкість друку</strong> — справді не вузьке місце
            </li>
          </ul>
        </div>
      </div>

      <p className="slide-footnote">
        Орієнтир: half-life навичок розширюється для тих, що пов'язані з <em>судженням</em>, і скорочується
        для тих, що пов'язані з <em>виконанням</em>.
      </p>
    </>
  );
}
