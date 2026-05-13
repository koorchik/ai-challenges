// 60 · Закриття · Завтра вранці — один крок
import type { ReactNode } from 'react';
import { useStorageBool } from '../components/hooks/useStorageBool';

type AccentColor = 'yellow' | 'blue' | 'green' | 'purple';

type Card = {
  storageKey: string;
  accent: AccentColor;
  title: string;
  body: ReactNode;
  meta: string;
};

export function Slide49() {
  const [doneStudent, setDoneStudent] = useStorageBool('tomorrow:student');
  const [doneDev, setDoneDev] = useStorageBool('tomorrow:dev');
  const [doneBiz, setDoneBiz] = useStorageBool('tomorrow:biz');
  const [doneState, setDoneState] = useStorageBool('tomorrow:state');

  const cards: Array<Card & { done: boolean; onToggle: (v: boolean) => void }> = [
    {
      storageKey: 'tomorrow:student',
      accent: 'yellow',
      title: 'Студент',
      done: doneStudent,
      onToggle: setDoneStudent,
      body: (
        <>
          Випишіть 3 прогалини у фундаменті. Виберіть одну і завтра ж почніть її закривати —
          підручник, не туторіал.
        </>
      ),
      meta: 'міра: «через місяць я знаю X».',
    },
    {
      storageKey: 'tomorrow:dev',
      accent: 'blue',
      title: 'Розробник',
      done: doneDev,
      onToggle: setDoneDev,
      body: (
        <>
          Заплануйте 4-тижневу калібрацію продуктивності. Заведіть spreadsheet з типами задач і часом.
          Завтра — перша задача без ШІ.
        </>
      ),
      meta: 'міра: «через місяць у мене власна крива».',
    },
    {
      storageKey: 'tomorrow:biz',
      accent: 'green',
      title: 'Бізнес',
      done: doneBiz,
      onToggle: setDoneBiz,
      body: (
        <>
          Виберіть один процес з вашого топ-20 трудозатратних. Знайдіть власника. Поставте baseline-eval
          до пілоту. Запустіть пілот, не презентацію.
        </>
      ),
      meta: 'міра: «через 30 днів у нас є дані».',
    },
    {
      storageKey: 'tomorrow:state',
      accent: 'purple',
      title: 'Держава',
      done: doneState,
      onToggle: setDoneState,
      body: (
        <>
          Якщо ви в кабміні / комітеті — оберіть один пункт із пропозицій для держави. Якщо ви виборець — напишіть
          про нього своєму депутату. Один. Сьогодні.
        </>
      ),
      meta: 'міра: «через 90 днів є офіційна відповідь».',
    },
  ];

  const doneCount = cards.filter((c) => c.done).length;

  return (
    <>
      <h2>Завтра вранці — один крок</h2>
      <p className="lede">
        По одній дії для кожної з чотирьох аудиторій. Якщо ви в двох — почніть з однієї.
      </p>

      <div className="four-col wide" style={{ marginTop: '0.3em' }}>
        {cards.map((c) => (
          <div
            key={c.storageKey}
            className={`quad-cell tomorrow-card ${c.done ? 'is-done' : ''}`}
            data-accent={c.accent}
            style={{ borderRadius: 8 }}
          >
            <label className="tomorrow-toggle">
              <input
                type="checkbox"
                checked={c.done}
                onChange={(e) => c.onToggle(e.target.checked)}
                aria-label={`Позначити «${c.title}» виконаним`}
              />
              <span>зроблено</span>
            </label>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <p className="muted">{c.meta}</p>
          </div>
        ))}
      </div>

      <div className="tomorrow-progress" aria-live="polite">
        <span>
          Виконано: <strong>{doneCount}</strong> / 4
        </span>
        <span className="tomorrow-bar" aria-hidden="true">
          <span
            className="tomorrow-bar-fill"
            style={{ width: `${(doneCount / 4) * 100}%` }}
          />
        </span>
      </div>

      <p className="callout callout-green">
        Якщо забрати все інше — пам'ятайте одну річ: <strong>розрив між відчутою і реальною продуктивністю</strong>{' '}
        у вас, у вашій команді, у вашій галузі. Закривайте його даними, не вірою.
      </p>
    </>
  );
}
