// 17 · Концепції · AI варто знати. Користуєтесь чи ні
export function Slide16() {
  return (
    <div className="slide-body wide">
      <h2>AI варто знати. Користуєтесь чи ні</h2>
      <p className="lede" style={{ margin: 0 }}>
        Дві причини. <strong>Продуктивність:</strong> AI забирає частину роботи.{' '}
        <strong>Карта цінності:</strong> тільки так видно, де ваша цінність зараз — і куди вона рухається.
      </p>

      <div
        className="callout callout-yellow"
        style={{
          fontSize: '1.15em',
          lineHeight: 1.55,
          textAlign: 'center',
          padding: '0.55em 0.9em',
        }}
      >
        <div>Студент <strong>+ AI</strong> &gt; Студент</div>
        <div>Інженер <strong>+ AI</strong> &gt; Інженер</div>
        <div>Бізнес <strong>+ AI</strong> &gt; Бізнес</div>
        <div>Держава <strong>+ AI</strong> &gt; Держава</div>
      </div>

      <ul className="checklist text-md" style={{ textAlign: 'left' }}>
        <li><strong>Користуєтесь:</strong> виграєте час там, де AI допомагає.</li>
        <li><strong>Не користуєтесь:</strong> розумієте свою перевагу.</li>
        <li><strong>Не вивчили зовсім:</strong> здогадки на пальцях й відстутність фокусу.</li>
      </ul>
    </div>
  );
}
