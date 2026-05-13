// 17 · Студенти · Engineer's Playbook — де людина ще краща
export function Slide15() {
  return (
    <>
      <h2>5 точок, де людина системно випереджає ШІ</h2>
      <p className="lede">
        Якщо tech-lead — твоя нова стартова, ось 5 конкретних місць, де ШІ програє і де твоя цінність
        вимірюється у проді.
      </p>

      <ol
        className="text-md wide"
        style={{ textAlign: 'left', maxWidth: 1040, margin: '0.4em auto', lineHeight: 1.45 }}
      >
        <li style={{ margin: '0.25em 0' }}>
          <strong>Парадокс автоматизації.</strong> Фундаменти не зникли — вони стали підступними.{' '}
          <em>Race condition у concurrent-DB: у тестах зелено, у проді падає.</em>
        </li>
        <li style={{ margin: '0.25em 0' }}>
          <strong>Домен.</strong> ШІ за замовчуванням дає generic-патерн.{' '}
          <em>HIPAA, offline-first для віддалених регіонів, регуляторика — твоє.</em>
        </li>
        <li style={{ margin: '0.25em 0' }}>
          <strong>Identity рев'юера.</strong> ШІ-код = junior PR. Швидке читання коду важливіше за швидке
          писання. <em>ШІ галюцинує — ти ловиш.</em>
        </li>
        <li style={{ margin: '0.25em 0' }}>
          <strong>Ефективність.</strong> ШІ оптимізує ймовірність токена, не ресурси.{' '}
          <em>Аудит O(n²)-патернів, compute-ціни, scalability — твоє.</em>
        </li>
        <li style={{ margin: '0.25em 0' }}>
          <strong>Безпека + галюцинації.</strong> Фейкові npm/pip пакети, supply-chain ризики.{' '}
          <em>Перевірка існування — твоя обов'язкова дисципліна.</em>
        </li>
      </ol>

      <p className="callout">
        Це не «ШІ ніколи не зможе». Це «сьогодні системно не робить — і кожна з 5 точок коштує грошей
        у проді».
      </p>

      <p className="slide-footnote">
        Turskyi (2026), «AI-Integrated Bloom's Taxonomy: From "Coder" to "Tech Lead"» — Engineer's Playbook.
      </p>
    </>
  );
}
