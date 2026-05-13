// 16 · Концепції · AI варто знати. Користуєтесь чи ні
export function Slide16() {
  return (
    <>
      <h2>AI варто знати. Користуєтесь чи ні</h2>
      <p className="lede">
        Дві причини. <strong>Продуктивність:</strong> AI забирає частину роботи.{' '}
        <strong>Карта цінності:</strong> тільки так видно, де ваша цінність зараз — і куди вона рухається.
        Друга працює, навіть якщо ви ним не користуєтесь у щоденній роботі.
      </p>

      <div
        className="callout callout-yellow"
        style={{
          fontSize: '1.4em',
          lineHeight: 1.7,
          marginTop: '0.6em',
          textAlign: 'center',
          padding: '0.7em 0.9em',
        }}
      >
        <div>Студент <strong>+ AI</strong> &gt; Студент</div>
        <div>Інженер <strong>+ AI</strong> &gt; Інженер</div>
        <div>Бізнес <strong>+ AI</strong> &gt; Бізнес</div>
        <div>Держава <strong>+ AI</strong> &gt; Держава</div>
      </div>

      <ul className="checklist text-md wide" style={{ textAlign: 'left', marginTop: '0.5em' }}>
        <li><strong>Користуєтесь:</strong> виграєте час там, де AI допомагає.</li>
        <li><strong>Не користуєтесь:</strong> все одно бачите конкурентів — і де з ними не варто змагатись.</li>
        <li><strong>Не вивчили зовсім:</strong> здогадки на пальцях. Ринок уже перерахував ваші ціни.</li>
      </ul>
    </>
  );
}
