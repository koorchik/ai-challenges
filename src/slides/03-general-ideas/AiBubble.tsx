export default function AiBubble() {
  return (
    <div className="slide-body wide">
      <h2>AI — це нова «бульбашка доткомів»?</h2>
      <p className="lede" style={{ margin: 0 }}>
        Коротка відповідь: <strong>Так. І це чудово.</strong>
      </p>

      <div className="two-col text-md" style={{ marginTop: '1.5em' }}>
        <div data-accent="red">
          <h3 className="accent">Урок 2000 року (Доткоми)</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>Хайп:</strong> Будь-яка компанія з приставкою ".com" отримувала мільйони без бізнес-плану.</li>
            <li><strong>Крах:</strong> Бульбашка луснула, інвестори втратили трильйони, 80% "туристів" збанкрутували.</li>
            <li><strong>Фундамент:</strong> <em>Інтернет нікуди не зник.</em> Залишилася прокладена інфраструктура, а ті, хто вижив (Amazon, Google), стали правити світом.</li>
          </ul>
        </div>

        <div data-accent="blue">
          <h3 className="accent">Реальність штучного інтелекту</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li><strong>Хайп:</strong> Будь-який стартап додає до назви ".ai", щоб підняти раунд інвестицій.</li>
            <li><strong>Що «лусне»:</strong> Тисячі компаній-«обгорток» (ті, хто просто перепродає чужий API через гарний інтерфейс) зникнуть.</li>
            <li><strong>Фундамент:</strong> Нейромережі та побудовані дата-центри залишаться. AI стане такою ж невидимою базовою технологією, як електрика чи Wi-Fi.</li>
          </ul>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1.5em' }}>
        <strong>Фінансова бульбашка ≠ Технологічна ілюзія.</strong> Історично найбільші фінансові бульбашки виникали саме там, де технологія <em>дійсно</em> змінювала світ (залізниці, телеком, інтернет). Шалені гроші інвесторів зараз оплачують надзвичайно дорогу AI-інфраструктуру, на якій ми будемо будувати економіку наступні 20 років.
      </div>
    </div>
  );
}