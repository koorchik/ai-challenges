import tweet from '../../assets/tweet-prompt-injection.png';

export default function AgentPromptInjection() {
  return (
    <>
      <h2>Агенти виконують те, що читають</h2>
      <div
        className="two-col wide"
        style={{
          alignItems: 'center',
          gridTemplateColumns: 'auto 1fr',
          gap: '1.6em',
        }}
      >
        <img
          src={tweet}
          alt="Тред у X: prompt-injection через публічний tweet, що просить агента надіслати .env"
          style={{ height: '13em', width: 'auto', borderRadius: '0.5em', display: 'block' }}
        />
        <div className="slide-body slide-body--tight">
          <p className="lede" style={{ margin: 0 }}>
            Будь-який публічний текст — потенційна пастка. Хто пише першим, той пише
            інструкцію для агента.
          </p>
          <ul className="checklist text-md" style={{ textAlign: 'left' }}>
            <li>Будь-який зовнішній текст = ненадійний ввід.</li>
            <li>Агент із tool-доступом виконає те, що прочитає.</li>
            <li>Secrets у середовищі агента = secrets у одному tweet-і.</li>
          </ul>
          <div className="callout">
            Це і є «✓ checkpoint: чи це безпечно для прода?» — на людському боці.
          </div>
        </div>
      </div>
      <p className="slide-footnote">
        Gil Pinsky (@gilpinskyy), X, 12 травня 2026{' '}
        <a href="https://x.com/gilpinskyy/status/2054254470595330363">
          x.com/gilpinskyy/status/2054254470595330363
        </a>
      </p>
    </>
  );
}
