import { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { ChartSvg } from '../charts/Svg';
import { KPI } from '../charts/KPI';
import { Axis } from '../charts/Axis';

type LeverKey = 'rdCredit' | 'procurement' | 'defenseFund' | 'diiaAI' | 'talentVisa' | 'itArmy';

type Lever = {
  key: LeverKey;
  label: string;
  short: string;
  retentionW: number;
  exportW: number;
};

const LEVERS: Lever[] = [
  { key: 'rdCredit', label: 'R&D tax credit 250%', short: 'R&D 250%', retentionW: 5, exportW: 0.04 },
  { key: 'procurement', label: 'Procurement-квота для <3р startups', short: 'квота', retentionW: 0, exportW: 0.03 },
  { key: 'defenseFund', label: 'Brave1 + EU defense-fund експорт', short: 'defense fund', retentionW: 0, exportW: 0.05 },
  { key: 'diiaAI', label: 'Diia.AI як infrastructure (дані для команд)', short: 'Diia.AI', retentionW: 3, exportW: 0.02 },
  { key: 'talentVisa', label: 'Visa fast-track для спеціалістів', short: 'visa', retentionW: 8, exportW: 0 },
  { key: 'itArmy', label: '«IT-армія» → структурований pipeline', short: 'IT-army pipeline', retentionW: 6, exportW: 0 },
];

const HORIZON = 5;
const BASELINE_EXPORT_B = 7.5;
const BASELINE_RETENTION = 50;

export function PolicyLeverSim() {
  const [active, setActive] = useState<Record<LeverKey, boolean>>({
    rdCredit: false,
    procurement: false,
    defenseFund: false,
    diiaAI: false,
    talentVisa: false,
    itArmy: false,
  });

  const toggle = (k: LeverKey) =>
    setActive((s) => ({ ...s, [k]: !s[k] }));

  const retentionBonus = LEVERS.filter((l) => active[l.key]).reduce(
    (acc, l) => acc + l.retentionW,
    0
  );
  const retentionIdx = Math.min(100, BASELINE_RETENTION + retentionBonus);

  const exportGrowth = LEVERS.filter((l) => active[l.key]).reduce(
    (acc, l) => acc + l.exportW,
    0
  );

  const baselineSeries: { year: number; v: number }[] = [];
  const currentSeries: { year: number; v: number }[] = [];
  for (let y = 0; y <= HORIZON; y++) {
    baselineSeries.push({ year: y, v: BASELINE_EXPORT_B * Math.pow(1.0, y) });
    currentSeries.push({ year: y, v: BASELINE_EXPORT_B * Math.pow(1 + exportGrowth, y) });
  }

  const exportAt5 = currentSeries[HORIZON].v;
  const baselineAt5 = baselineSeries[HORIZON].v;
  const exportDelta = exportAt5 - baselineAt5;

  const margin = { top: 30, right: 60, bottom: 50, left: 50 };
  const chartW = 540;
  const chartH = 230;
  const xScale = scaleLinear()
    .domain([0, HORIZON])
    .range([margin.left, margin.left + chartW]);
  const yScale = scaleLinear()
    .domain([6, Math.max(11, exportAt5 + 0.5)])
    .range([margin.top + chartH, margin.top]);

  const toPath = (series: { year: number; v: number }[]) =>
    series.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d.year)} ${yScale(d.v)}`).join(' ');

  const retentionColor =
    retentionIdx >= 75 ? '#86efac' : retentionIdx >= 60 ? '#fde68a' : '#fda4ae';
  const exportColor =
    exportDelta >= 1.5 ? '#86efac' : exportDelta >= 0.5 ? '#fde68a' : '#fda4ae';

  const activeCount = Object.values(active).filter(Boolean).length;

  return (
    <>
      <h2>Симулятор державних важелів</h2>
      <p className="lede">
        Кожен важіль — окрема поправка до існуючої рамки. Жоден не вистачає одного; 3+ у комбінації
        починають змінювати траєкторію.
      </p>

      <div className="sim-grid">
        <ChartSvg height={310} style={{ maxHeight: '7em' }}>
          <Axis
            scale={xScale}
            orientation="bottom"
            x={margin.left}
            y={margin.top + chartH}
            length={chartW}
            ticks={[0, 1, 2, 3, 4, 5]}
            format={(v) => `+${v}р`}
            label="років від 2026"
          />
          <Axis
            scale={yScale}
            orientation="left"
            x={margin.left}
            y={margin.top}
            length={chartH}
            ticks={[6, 8, 10, 12]}
            format={(v) => `≈$${v}B`}
            label="індекс IT-експорту"
          />

          {/* baseline */}
          <path
            d={toPath(baselineSeries)}
            stroke="#94a3b8"
            strokeWidth={2}
            fill="none"
            strokeDasharray="5 4"
          />
          <text
            x={xScale(HORIZON) + 4}
            y={yScale(baselineAt5) + 4}
            fill="rgba(148,163,184,0.85)"
            fontSize={11}
          >
            status quo
          </text>

          {/* current */}
          <path
            d={toPath(currentSeries)}
            stroke="#facc15"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
          <text
            x={xScale(HORIZON) + 4}
            y={yScale(exportAt5)}
            fill="#facc15"
            fontSize={11}
            fontWeight={600}
          >
            з важелями
          </text>

          <text
            x={margin.left + chartW / 2}
            y={margin.top - 8}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize={11}
          >
            Стилізована проєкція · індекс, не бюджетний прогноз
          </text>
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI
              value={`${retentionIdx}`}
              label="індекс утримання талантів"
              color={retentionColor}
            />
            <KPI
              value={`≈$${exportAt5.toFixed(1)}B`}
              label="експорт @ y5"
              color={exportColor}
            />
            <KPI
              value={`${exportDelta > 0 ? '+' : ''}≈$${exportDelta.toFixed(1)}B`}
              label="Δ vs status quo"
              color={exportColor}
            />
          </div>
        </div>
      </div>

      <div
        className="preset-row"
        style={{ maxWidth: 1000, margin: '0.3em auto', justifyContent: 'center' }}
      >
        {LEVERS.map((l) => (
          <button
            key={l.key}
            className={`preset-btn ${active[l.key] ? 'active' : ''}`}
            onClick={() => toggle(l.key)}
          >
            {l.short}
          </button>
        ))}
      </div>

      <p
        className="preset-caption"
        style={{ textAlign: 'center', marginTop: '0.1em' }}
      >
        активовано {activeCount} / 6 важелів
      </p>

      <p className="slide-footnote">
        Стилізована модель. Коефіцієнти — оцінка автора за аналогами Польщі (Ulga B+R), Естонії
        (Startup Visa), Ізраїлю (IIA). Базовий рівень експорту ≈$7.5B — рівень 2024 за{' '}
        <a
          href="https://itukraine.org.ua/en/news/ukraine-it-services-export-2024"
          target="_blank"
          rel="noreferrer"
        >
          IT Ukraine Association
        </a>
        . Не прогноз бюджетного ефекту.
      </p>
    </>
  );
}
