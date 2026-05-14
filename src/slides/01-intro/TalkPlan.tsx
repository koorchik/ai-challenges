export default function TalkPlan() {
  return (
    <>
      <h2>Огляд</h2>

      <p className="lede narrow" style={{ marginTop: '0.4em' }}>
        Чотири аудиторії й їх виклики.
      </p>

      <ol className="text-lg wide" style={{ lineHeight: 1.55, marginTop: '0.6em' }}>
        <li>
          <strong>Студенти</strong> — що вчити, у що інвестувати час
        </li>
        <li>
          <strong>Розробники</strong> — як перебудувати робочий процес
        </li>
        <li>
          <strong>Бізнеси</strong> — де живуть нові можливості
        </li>
        <li>
          <strong>Україна</strong> — як не випасти з гри
        </li>
      </ol>
    </>
  );
}
