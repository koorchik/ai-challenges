import { useState } from 'react';
import { Slider } from '../charts/Slider';

export function MetrGuess() {
  const [guess, setGuess] = useState(20);
  return (
    <>
      <h2>Питання залу</h2>
      <p style={{ fontSize: '0.75em', maxWidth: 900, margin: '0 auto 0.4em' }}>
        У 2025 році в дослідженні METR 16 досвідчених maintainer-ів виконали{' '}
        <strong>246 реальних задач</strong> на своїх власних великих репозиторіях —
        частково зі звичайними інструментами, частково з провідними AI-агентами.
      </p>
      <p style={{ fontSize: '0.75em', maxWidth: 900, margin: '0 auto 0.6em' }}>
        Запитання: <strong>на скільки відсотків</strong> ШІ змінив швидкість їхньої роботи?
      </p>
      <div style={{ maxWidth: 720, margin: '0.4em auto' }}>
        <Slider
          label="ваша гіпотеза"
          min={-50}
          max={60}
          step={1}
          value={guess}
          onChange={setGuess}
          format={(v) => `${v > 0 ? '+' : ''}${v}%`}
        />
      </div>
      <div className="kpi-row" style={{ marginTop: '0.4em' }}>
        <div className="kpi-cell">
          <div
            className="kpi-big"
            style={{
              color: guess >= 0 ? '#86efac' : '#fda4ae',
            }}
          >
            {guess > 0 ? '+' : ''}
            {guess}%
          </div>
          <div className="kpi-label">ваша ставка</div>
        </div>
      </div>
      <p className="slide-footnote">Натисніть і потягніть повзунок. Відповідь — на наступному слайді.</p>
    </>
  );
}
