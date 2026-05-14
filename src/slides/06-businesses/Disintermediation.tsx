export default function Disintermediation() {
  return (
    <>
      <h2>Клієнт обходить вас і йде прямо до моделі</h2>
      <p className="lede">
        Найтихіший виклик 2026 — disintermediation. Покупець, що раніше платив вам за інтеграцію,
        тепер бере API напряму. Три патерни, які вже видно у даних.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em' }}>
        <div data-accent="red">
          <h3 className="accent">Enterprise → API напряму</h3>
          <p style={{ margin: '0.2em 0' }}>
            Klarna зекономила на support-ОПЕХ, замінивши частину tier-1 на GPT-агента. Shopify і
            Atlassian роздають LLM-доступ розробникам без посередників.
          </p>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Контрхід:</strong> власні дані з feedback-петлею. Те, що OpenAI не бачить.
          </p>
        </div>
        <div data-accent="amber">
          <h3 className="accent">ISV-покупець → прямо до моделі</h3>
          <p style={{ margin: '0.2em 0' }}>
            Команда, що раніше підписувалася на ваш AI-CRM, тепер пише власну обгортку над Claude /
            GPT за вечір. Особливо якщо ваша цінність була у «промтуванні від експертів».
          </p>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Контрхід:</strong> інтеграція у workflow клієнта — там, куди користувач уже приходить.
          </p>
        </div>
        <div data-accent="purple">
          <h3 className="accent">Споживач → ChatGPT desktop</h3>
          <p style={{ margin: '0.2em 0' }}>
            B2C-обгортки над чатом — найкоротша смерть. ChatGPT, Claude і Gemini тепер мають десктоп-апи,
            voice, memory; «зручніший інтерфейс над тим самим API» — функція, не продукт.
          </p>
          <p className="muted" style={{ margin: '0.2em 0' }}>
            <strong>Контрхід:</strong> регуляція / довіра — там, де ChatGPT юридично не може жити (HIPAA,
            financial compliance, gov-tech).
          </p>
        </div>
      </div>

      <p className="callout callout-yellow">
        Тест: <em>якщо клієнт прочитає API-docs провайдера моделі — він ще потребує вас?</em>{' '}
        Якщо «ні» — ваша роль = тимчасова обгортка. Купують у вас час до того, як вони самі набʼють руку.
      </p>

      <p className="slide-footnote">
        Klarna AI-агент — заявка про економію еквіваленту 700 FTE (Q1 2024 letter to shareholders).
        Atlassian Rovo, Shopify Sidekick — приклади платформ, що дають LLM напряму девелоперам.
        Картина — структурний тренд 2024–2026, не одне дослідження.
      </p>
    </>
  );
}
