import { useState } from 'react';
import { ChartSvg } from '../charts/Svg';
import { KPI } from '../charts/KPI';

type MoatKey = 'data' | 'distribution' | 'regulation' | 'network' | 'bundling';

type Moat = {
  key: MoatKey;
  short: string;
  long: string;
  weight: number;
  accent: string;
};

const MOATS: Moat[] = [
  { key: 'data', short: 'feedback-data', long: 'Дані з петлею «використання → метрика → дотюнінг»', weight: 25, accent: '#facc15' },
  { key: 'distribution', short: 'дистрибуція', long: 'Уже у workflow клієнта (IDE / Slack / Salesforce)', weight: 20, accent: '#bfdbfe' },
  { key: 'regulation', short: 'регуляція / довіра', long: 'SOC2 / HIPAA / FedRAMP — 12–24 міс, 6-знач $', weight: 30, accent: '#86efac' },
  { key: 'network', short: 'network effects', long: 'Кожен новий користувач робить продукт ціннішим', weight: 15, accent: '#c4b5fd' },
  { key: 'bundling', short: 'bundling', long: 'AI як фіча в уже купленому не-AI продукті', weight: 10, accent: '#fda4ae' },
];

export function MoatStressTest() {
  const [active, setActive] = useState<Record<MoatKey, boolean>>({
    data: false,
    distribution: false,
    regulation: false,
    network: false,
    bundling: false,
  });

  const toggle = (k: MoatKey) => setActive((s) => ({ ...s, [k]: !s[k] }));

  const score = MOATS.filter((m) => active[m.key]).reduce((acc, m) => acc + m.weight, 0);
  const weeksToCommoditize = Math.max(2, Math.min(52, Math.round(2 + score * 0.5)));
  const cloneCost = (5 + score * 1.5).toFixed(0);

  const barW = 760;
  const barH = 38;
  const barX = 120;
  const barY = 90;
  const fillW = (score / 100) * barW;

  const scoreColor =
    score >= 70 ? '#86efac' : score >= 40 ? '#fde68a' : score >= 20 ? '#fdba74' : '#fda4ae';
  const verdict =
    score >= 70
      ? { title: 'Стартап.', body: 'Кілька рівнів захисту — клон не наздожене за тиждень.' }
      : score >= 40
        ? { title: 'Захищені вузько.', body: 'Один-два рови тримають, але концентровано — додайте ще.' }
        : score >= 20
          ? { title: 'Фіча, не продукт.', body: 'Один рів — це ефект на 1–2 квартали, потім клон наздоганяє.' }
          : { title: 'Клон за тиждень.', body: 'Жодного рову — ви побудували обгортку над API.' };

  return (
    <>
      <h2>Stress-тест рову: що залишиться, якщо завтра з'явиться 50 клонів</h2>
      <p className="lede">
        Натисніть рови, які реально є <em>у вашому</em> продукті. Тест — у нижній панелі.
      </p>

      <ChartSvg height={210} style={{ maxHeight: '5em' }}>
        {/* Score bar */}
        <text x={barX} y={barY - 14} fill="rgba(255,255,255,0.7)" fontSize={12} fontWeight={600}>
          індекс захисту від клонування
        </text>
        <rect
          x={barX}
          y={barY}
          width={barW}
          height={barH}
          rx={8}
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.12)"
        />
        <defs>
          <linearGradient id="moat-gradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#fda4ae" />
            <stop offset="35%" stopColor="#fdba74" />
            <stop offset="60%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#86efac" />
          </linearGradient>
        </defs>
        <rect
          x={barX}
          y={barY}
          width={fillW}
          height={barH}
          rx={8}
          fill="url(#moat-gradient)"
          style={{ transition: 'width 0.45s ease' }}
        />
        {[0, 25, 50, 75, 100].map((mark) => (
          <g key={mark}>
            <line
              x1={barX + (mark / 100) * barW}
              x2={barX + (mark / 100) * barW}
              y1={barY}
              y2={barY + barH + 4}
              stroke="rgba(255,255,255,0.18)"
            />
            <text
              x={barX + (mark / 100) * barW}
              y={barY + barH + 18}
              textAnchor="middle"
              fill="rgba(255,255,255,0.55)"
              fontSize={10}
            >
              {mark}
            </text>
          </g>
        ))}
        <text
          x={barX + fillW}
          y={barY - 14}
          textAnchor="end"
          fill={scoreColor}
          fontSize={16}
          fontWeight={700}
        >
          {score} / 100
        </text>
      </ChartSvg>

      <div
        className="preset-row"
        style={{ maxWidth: 1100, margin: '0.3em auto', justifyContent: 'center' }}
      >
        {MOATS.map((m) => (
          <button
            key={m.key}
            type="button"
            className={`preset-btn ${active[m.key] ? 'active' : ''}`}
            onClick={() => toggle(m.key)}
            title={m.long}
          >
            {m.short} <span style={{ opacity: 0.55, marginLeft: '0.3em' }}>+{m.weight}</span>
          </button>
        ))}
      </div>

      <div
        className="kpi-row"
        style={{ maxWidth: 1000, margin: '0.4em auto 0', gap: '0.5em' }}
      >
        <KPI value={`${score}`} label="clone-resistance" color={scoreColor} />
        <KPI
          value={`${weeksToCommoditize} тиж`}
          label="до клону на ринку"
          color={scoreColor}
        />
        <KPI value={`≈$${cloneCost}k`} label="ціна аналога" color={scoreColor} />
      </div>

      <div
        className="callout"
        style={{
          borderLeftColor: scoreColor,
          background: `${scoreColor}1a`,
          maxWidth: 1000,
          margin: '0.3em auto',
        }}
      >
        <strong style={{ color: scoreColor }}>{verdict.title}</strong> {verdict.body}
      </div>

      <p className="slide-footnote">
        Ваги ровів — оцінка автора, ілюструє <em>відносну</em> захищеність, не абсолютну. Тест — переформулювання
        вправи з{' '}
        <a
          href="https://cdixon.org/2014/01/18/full-stack-startups"
          target="_blank"
          rel="noreferrer"
        >
          Chris Dixon, «What's your moat?»
        </a>
        ; ваги 2026 наладовані під AI-first ринок.
      </p>
    </>
  );
}
