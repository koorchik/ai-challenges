// 53 · Бізнеси · Часті пастки
import type { ReactNode } from 'react';
import { FlipCard } from '../components/FlipCard';

type Accent = 'yellow' | 'blue' | 'green' | 'red' | 'purple' | 'amber';

type Pitfall = {
  accent: Accent;
  title: string;
  symptom: ReactNode;
  fix: ReactNode;
};

const pitfalls: Pitfall[] = [
  {
    accent: 'red',
    title: 'POC-пастка',
    symptom: <>Demo на двох прикладах вражає; прод провалюється.</>,
    fix: <>Eval-set з 50+ кейсами до релізу. Без evals — не релізите.</>,
  },
  {
    accent: 'amber',
    title: 'Wrapper-пастка',
    symptom: <>API ≠ продукт. Платформа додала вашу фічу — ви зникли.</>,
    fix: <>Власні дані / інтеграція / domain — або продавайте як фічу, не стартап.</>,
  },
  {
    accent: 'yellow',
    title: 'Hallucination-сертифікат',
    symptom: <>ШІ-бот пообіцяв знижку — і суд каже «платіть». <em>Moffatt v. Air Canada</em>, BCCRT 2024 (CA$812).</>,
    fix: <>Structured outputs + людська верифікація на high-stakes відповідях. Жодних обіцянок без людини.</>,
  },
  {
    accent: 'red',
    title: 'Prompt-injection',
    symptom: <>Агент із доступом до даних читає вхід без sanitization. CWE-77 з LLM-присмаком.</>,
    fix: <>Sanitize inputs. Tool-use whitelist. Least-privilege для агентів. Аудит ланцюга викликів.</>,
  },
  {
    accent: 'purple',
    title: 'Скоротили команду рано',
    symptom: <>Ще нема evals — а 7 людей з контекстом пішли. Бага рятуєте тиждень.</>,
    fix: <>Eval-set + runbooks + wiki до офбордінгу. Контекст-фон → документ, а не голова.</>,
  },
  {
    accent: 'blue',
    title: 'AI-pivot заради AI',
    symptom: <>Зміна продукту під моду; користувачі не просили.</>,
    fix: <>Roadmap → користувачі → AI як засіб. ШІ — інструмент під задачу, не задача сам по собі.</>,
  },
  {
    accent: 'green',
    title: 'Інференс без бюджету',
    symptom: <>$50k/міс, бо нема rate-limit. Виправляється за день, після першого рахунку.</>,
    fix: <>Rate-limit + token-budget + per-user quota + observability на токени з дня один.</>,
  },
];

export function Slide40() {
  return (
    <>
      <h2>Часті пастки 2024–2026</h2>
      <p className="lede">
        Кожна — у кожного третього AI-проєкту, що зупинився. Натисніть на картку, щоб побачити, як її уникнути.
      </p>

      <div className="flip-grid">
        {pitfalls.map((p) => (
          <FlipCard
            key={p.title}
            accent={p.accent}
            front={
              <>
                <h4>{p.title}</h4>
                <p>{p.symptom}</p>
                <span className="flip-card-hint">клік → як уникнути</span>
              </>
            }
            back={
              <>
                <h4>Як уникнути</h4>
                <p>{p.fix}</p>
                <span className="flip-card-hint">клік → назад</span>
              </>
            }
          />
        ))}
      </div>

      <p className="callout">
        У 2026 рішення йде у прод тільки з evals, бюджетом, security-перевіркою і human-in-loop планом.
      </p>
    </>
  );
}
