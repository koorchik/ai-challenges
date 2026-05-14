// 48 · Бізнеси · Де живуть рови у 2026
export function Slide48() {
  return (
    <>
      <h2>Де <em>насправді</em> живуть рови у 2026</h2>
      <p className="lede">
        Доступ до моделі — більше не рів. Open-source (DeepSeek, Llama, Mistral) робить
        <em> модель</em> товаром. Лишається п'ять категорій, що насправді захищають продукт від клонів за тиждень.
      </p>

      <ul className="text-md wide" style={{ textAlign: 'left', lineHeight: 1.5 }}>
        <li>
          <strong className="accent" data-accent="yellow">
            1. Дані з feedback-петлею
          </strong>
          . Не «лог у S3», а <em>розмічений потік</em>, що замикає цикл «використання → метрики → дотюнінг».
          Кожен корисний клік — це data-asset. Приклади: Grammarly, GitHub, Tesla.
        </li>
        <li>
          <strong className="accent" data-accent="blue">
            2. Дистрибуція через існуючі workflow
          </strong>
          . Ваш продукт уже в IDE, у Slack, у Salesforce — куди користувач уже приходить. Конкурент
          мусить пробитися крізь зміну звички. Приклади: Copilot у VSCode, Notion AI, Apple Intelligence.
        </li>
        <li>
          <strong className="accent" data-accent="green">
            3. Довіра / регуляція
          </strong>
          . SOC2 Type II + HIPAA + ISO 27001 + FedRAMP — типово 12–24 міс і шести- до семизначні суми.
          Повільний рів, що накопичується роками. Defense-tech, fintech, healthtech, gov-tech.
        </li>
        <li>
          <strong className="accent" data-accent="purple">
            4. Network effects
          </strong>
          . Кожен новий користувач робить продукт ціннішим для попередніх — marketplace, OSS-екосистема,
          shared knowledge base.
        </li>
        <li>
          <strong className="accent" data-accent="red">
            5. Bundling із не-AI продуктом
          </strong>
          . У вас уже є щось куплене — додаєте AI як фічу, не як продукт. Тут грають великі.
          Маленьким лишається співпраця або смак: те, що <strong>не</strong> робимо, як виглядає інтерфейс, що каже бренд.
        </li>
      </ul>

      <p className="callout callout-yellow">
        Тест: <em>«якщо завтра з'явиться 50 ідентичних AI-стартапів — що в нас залишається?»</em>
        Якщо відповідь — «нічого», ви побудували функцію. Якщо хоч одна з п'яти причин — стартап.
      </p>
    </>
  );
}
