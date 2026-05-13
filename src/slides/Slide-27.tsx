// 27 · Студенти · Нові фундаменти
export function Slide24() {
  return (
    <>
      <h2>Чого вчитися у 2026</h2>
      <p className="lede">
        Класичні фундаменти CS — не зникають. До них додаються нові фундаменти AI-епохи.
      </p>

      <div className="two-col wide text-md">
        <div data-accent="yellow">
          <h3 className="accent">класичні фундаменти</h3>
          <ul className="checklist">
            <li>Алгоритми та структури даних (не для співбесід — для мислення)</li>
            <li>Операційні системи, конкуренція, потоки</li>
            <li>Мережі та протоколи (TCP, HTTP, TLS — без чорних скриньок)</li>
            <li>БД: транзакції, індекси, нормалізація, consistency models</li>
            <li>Безпека: OWASP, threat-models, що таке секрет</li>
            <li>Статистика та лінал — щоб читати папери</li>
          </ul>
        </div>
        <div data-accent="blue">
          <h3 className="accent">нові фундаменти AI-епохи</h3>
          <ul className="checklist">
            <li>
              <strong>Evals</strong>: як виміряти, що твоя система працює, без gut-feeling
            </li>
            <li>
              <strong>Промптинг як проєктування інтерфейсу</strong> до ймовірнісної системи
            </li>
            <li>
              <strong>RAG, embeddings, vector DBs</strong> — практично, не теоретично
            </li>
            <li>
              <strong>Cost-aware engineering</strong>: токени, латентність, fallback-и
            </li>
            <li>
              <strong>Human-in-the-loop</strong> дизайн — коли і як питати людину
            </li>
            <li>
              <strong>Безпека LLM</strong>: prompt injection, jailbreak, data exfiltration
            </li>
          </ul>
        </div>
      </div>

      <p className="callout callout-yellow">
        <strong>Що пропускаємо:</strong> N+1-й фреймворк, побудова «AI-агентів» без бенчмарка, лекції
        «promptengineering за 30 годин». Замість того — побудуйте одну річ і виміряйте її.
      </p>
    </>
  );
}
