// 03 · Intro · Питання залу (METR hook)
export function Slide03() {
  return (
    <>
      <h2>Питання залу</h2>
      <p className="lede narrow">
        У 2025 році в дослідженні METR 16 досвідчених maintainer-ів виконали{' '}
        <strong>246 реальних задач</strong> на своїх власних великих репозиторіях —
        частково зі звичайними інструментами, частково з провідними AI-агентами.
      </p>

      <p className="text-md narrow" style={{ marginTop: '0.6em' }}>
        Запитання: <strong>на скільки відсотків</strong> ШІ змінив швидкість їхньої роботи?
      </p>

      <p className="callout callout-yellow narrow">
        Спробуйте назвати число подумки — зі знаком. Відповідь — на наступному слайді.
      </p>

      <p className="slide-footnote">
        Becker, Rush, Barnes, Rein. METR, 2025. n=16 maintainer-ів, 246 задач, реальні репозиторії.
      </p>
    </>
  );
}
