export default function KnowAiRegardless() {
  return (
    <div className="slide-body wide">
      <h2>ШІ варто розуміти. Користуєтесь ви ним чи ні</h2>
      <p className="lede" style={{ margin: 0 }}>
        Межа можливостей ШІ постійно рухається — потрібна <strong>карта цінності</strong>:
        де ШІ забирає рутину, а де ваша унікальна перевага.
      </p>

      <div
        className="callout callout-yellow"
        style={{
          fontSize: '0.7em',
          lineHeight: 1.5,
          textAlign: 'center',
          padding: '0.5em 1em',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '2em'
        }}
      >
        <div>Студент <strong>+ AI</strong> <span style={{ color: '#aaa', margin: '0 8px' }}>&gt;</span> Студент</div>
        <div>Бізнес <strong>+ AI</strong> <span style={{ color: '#aaa', margin: '0 8px' }}>&gt;</span> Бізнес</div>
        <div>Інженер <strong>+ AI</strong> <span style={{ color: '#aaa', margin: '0 8px' }}>&gt;</span> Інженер</div>
        <div>Держава <strong>+ AI</strong> <span style={{ color: '#aaa', margin: '0 8px' }}>&gt;</span> Держава</div>
      </div>

      <ul className="checklist text-md" style={{ textAlign: 'left' }}>
        <li>
          <strong>Користуєтесь:</strong> масштабуєте продуктивність там, де ШІ справляється краще.
        </li>
        <li>
          <strong>Принципово НЕ користуєтесь:</strong> чітко розумієте свою «людську» преміальну нішу поза межею ШІ.
        </li>
        <li>
          <strong>Ігноруєте і не вивчаєте:</strong> сліпа зона — дієте наосліп і втрачаєте конкурентність.
        </li>
      </ul>
    </div>
  );
}