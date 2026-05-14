export default function JaggedFrontierExplained() {
  return (
    <div className="slide-body wide">
      <h2>Парадокс «Зубчастої межі» (Jagged Frontier)</h2>
      <p className="lede" style={{ margin: 0 }}>
        Людські навички розвиваються лінійно. Межа можливостей ШІ нагадує кардіограму:
        блискуче виконує надскладні завдання, але раптово провалюється на тривіальних.
      </p>

      <div className="two-col text-md" style={{ marginTop: '0.8em' }}>
        <div data-accent="blue">
          <h3 className="accent">Чому це небезпечно?</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              <strong>Асиметрія складності:</strong> миттєво генерує складну архітектуру, але безпорадний у специфічній бізнес-логіці.
            </li>
            <li>
              <strong>Невидима межа:</strong> модель не попереджає, що вийшла за межі — галюцинації звучать з такою ж впевненістю, як і правильні відповіді.
            </li>
          </ul>
        </div>

        <div data-accent="red">
          <h3 className="accent">Дослідження Harvard / BCG</h3>
          <ul className="checklist" style={{ textAlign: 'left' }}>
            <li>
              У <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321">дослідженні (2023)</a> зафіксовано <strong>«ефект заколисування»</strong> <em>(falling asleep at the wheel)</em>.
            </li>
            <li>
              Після кількох ідеальних відповідей професіонали починають <strong>сліпо довіряти</strong> системі.
            </li>
            <li>
              Потрапивши у «провалля» межі, виконують роботу <strong>на 19% гірше</strong>, ніж група без AI.
            </li>
          </ul>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '0.8em' }}>
        <strong>Головна навичка інженера:</strong> не «писати промпти», а професійна інтуїція — відчувати, де ШІ можна довірити задачу, а де перевіряти під мікроскопом.
      </div>
    </div>
  );
}