// 57 · Україна · Освіта
export function Slide46() {
  return (
    <>
      <h2>Освіта: що треба міняти просто зараз</h2>
      <p className="lede">
        Університети 2025-го готують випускників 2029-го до робіт 2026-го. Що конкретно мають змінити
        три рівні системи.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em', gap: '1em' }}>
        <div data-accent="yellow">
          <h3 className="accent">Університети</h3>
          <ul className="checklist">
            <li>Робота з ШІ — обов'язковий курс на 2-му році, не факультатив</li>
            <li>Evals, prompt-design, RAG — у складі CS-фундаменту</li>
            <li>Diploma-projects з реальними користувачами, не «лабораторні»</li>
            <li>Менше «теорія БД 14 тижнів», більше системного мислення</li>
            <li>Партнерства з defense-tech: реальні задачі замість абстрактних</li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Бутки / Bootcamps</h3>
          <ul className="checklist">
            <li>Bootcamp «junior за 4 міс» — мертвий формат</li>
            <li>Нова модель: domain-bootcamp (medical AI, defense AI, fintech AI)</li>
            <li>Apprenticeship-моделі з реальною роботою</li>
            <li>Сертифікація evals/safety — як CompTIA для AI</li>
          </ul>
        </div>
        <div data-accent="green">
          <h3 className="accent">Перекваліфікація</h3>
          <ul className="checklist">
            <li>Програма для ветеранів — defense-tech expertise</li>
            <li>Mid-career переходи: інженер 5+р → AI-engineer / domain expert</li>
            <li>Diia.Education має масштабуватися: цільові курси з ваучером</li>
            <li>Англійська як infra: без неї немає глобального ринку</li>
          </ul>
        </div>
      </div>

      <p className="callout callout-yellow">
        Чесно: університети змінюються повільно, частково необґрунтовано. Швидке вирішення — приватні
        партнерства, де компанії беруть на себе третину навчального плану в обмін на доступ до студентів.
        Це працює в Естонії, Польщі, Ізраїлі.
      </p>
    </>
  );
}
