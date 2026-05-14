import { useMemo, useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { ChartSvg } from '../charts/Svg';
import { Slider, Presets } from '../charts/Slider';
import { KPI } from '../charts/KPI';
import { Axis } from '../charts/Axis';

type Scenario = 'current' | 'freeze' | 'restore';

const SCENARIOS: Record<Scenario, { hires: number; promotion: number; attrition: number; label: string }> = {
  current: { hires: 20, promotion: 0.12, attrition: 0.15, label: 'статус-кво' },
  freeze: { hires: 5, promotion: 0.12, attrition: 0.15, label: 'заморозити junior-ів' },
  restore: { hires: 60, promotion: 0.15, attrition: 0.12, label: 'apprenticeship-режим' },
};

const BASELINE_HIRES = 50;
const BASELINE_PROMO = 0.12;
const BASELINE_ATTR = 0.15;

function simulate(hires: number, promo: number, attr: number, years: number) {
  let J = 30;
  let M = 60;
  let S = 100;
  const series: { year: number; J: number; M: number; S: number }[] = [
    { year: 0, J, M, S },
  ];
  for (let y = 1; y <= years; y++) {
    const Jnext = J * (1 - promo - attr) + hires;
    const Mnext = M * (1 - promo - attr) + promo * J;
    const Snext = S * (1 - attr * 0.5) + promo * M;
    J = Jnext;
    M = Mnext;
    S = Snext;
    series.push({ year: y, J, M, S });
  }
  return series;
}

export function PipelineDemographer() {
  const [hires, setHires] = useState(20);
  const [promo, setPromo] = useState(12);
  const [attr, setAttr] = useState(15);
  const [horizon, setHorizon] = useState(5);

  const baseline = useMemo(
    () => simulate(BASELINE_HIRES, BASELINE_PROMO, BASELINE_ATTR, horizon),
    [horizon]
  );
  const current = useMemo(
    () => simulate(hires, promo / 100, attr / 100, horizon),
    [hires, promo, attr, horizon]
  );

  const margin = { top: 30, right: 40, bottom: 50, left: 60 };
  const chartW = 560;
  const chartH = 310;
  const xScale = scaleLinear()
    .domain([0, horizon])
    .range([margin.left, margin.left + chartW]);
  const yMax = Math.max(
    140,
    ...baseline.map((d) => d.S),
    ...current.map((d) => d.S)
  );
  const yScale = scaleLinear()
    .domain([0, yMax])
    .range([margin.top + chartH, margin.top]);

  const toPath = (series: { year: number; S: number }[]) =>
    series.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(d.year)} ${yScale(d.S)}`).join(' ');

  const baselineSlast = baseline[baseline.length - 1].S;
  const currentSlast = current[current.length - 1].S;
  const deltaPct = ((currentSlast - baselineSlast) / baselineSlast) * 100;
  const deltaColor = deltaPct >= -5 ? '#86efac' : deltaPct >= -25 ? '#fde68a' : '#fda4ae';

  // Year when current scenario falls below 50% of baseline
  let yearBelow50: number | null = null;
  for (let i = 0; i < current.length; i++) {
    if (current[i].S < baseline[i].S * 0.5) {
      yearBelow50 = current[i].year;
      break;
    }
  }

  const tickYears: number[] = [];
  for (let y = 0; y <= horizon; y++) tickYears.push(y);

  const applyScenario = (s: Scenario) => {
    setHires(SCENARIOS[s].hires);
    setPromo(Math.round(SCENARIOS[s].promotion * 100));
    setAttr(Math.round(SCENARIOS[s].attrition * 100));
  };

  return (
    <>
      <h2>Pipeline-демограф: де ваші senior-и через {horizon} років</h2>
      <p className="lede">
        Cohort-модель IT-ринку. Кожен невзятий junior — це відсутній senior через 5–7 років.
      </p>

      <div className="sim-grid">
        <ChartSvg height={400} style={{ maxHeight: '9.5em' }}>
          <Axis
            scale={xScale}
            orientation="bottom"
            x={margin.left}
            y={margin.top + chartH}
            length={chartW}
            ticks={tickYears}
            format={(v) => `+${v}р`}
            label="років від 2026"
          />
          <Axis
            scale={yScale}
            orientation="left"
            x={margin.left}
            y={margin.top}
            length={chartH}
            ticks={[0, 50, 100, 150, 200]}
            label="індекс senior-пулу (2026 = 100)"
          />

          {/* 50% baseline reference */}
          <line
            x1={margin.left}
            x2={margin.left + chartW}
            y1={yScale(50)}
            y2={yScale(50)}
            stroke="rgba(253,164,174,0.35)"
            strokeDasharray="3 4"
          />

          {/* baseline (50/yr) line */}
          <path
            d={toPath(baseline)}
            stroke="#94a3b8"
            strokeWidth={2}
            fill="none"
            strokeDasharray="5 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x={xScale(horizon) + 6}
            y={yScale(baselineSlast)}
            fill="rgba(148,163,184,0.8)"
            fontSize={11}
          >
            baseline (50/р)
          </text>

          {/* current line */}
          <path
            d={toPath(current)}
            stroke="#facc15"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x={xScale(horizon) + 6}
            y={yScale(currentSlast) + 4}
            fill="#facc15"
            fontSize={11}
            fontWeight={600}
          >
            ваш сценарій
          </text>

          {/* gap shading */}
          {currentSlast < baselineSlast && (
            <path
              d={
                toPath(current) +
                ` L ${xScale(horizon)} ${yScale(baselineSlast)} ` +
                baseline
                  .slice()
                  .reverse()
                  .map((d) => `L ${xScale(d.year)} ${yScale(d.S)}`)
                  .join(' ') +
                ' Z'
              }
              fill="rgba(248,113,113,0.12)"
              stroke="none"
            />
          )}

          <text
            x={margin.left + chartW / 2}
            y={margin.top - 8}
            textAnchor="middle"
            className="chart-title"
            fill="rgba(255,255,255,0.6)"
            fontSize={11}
          >
            Стилізована проєкція · індекс, не абсолютна кількість
          </text>
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI
              value={`${currentSlast.toFixed(0)}`}
              label={`senior-індекс @ y${horizon}`}
              color={deltaColor}
            />
            <KPI
              value={`${deltaPct > 0 ? '+' : ''}${deltaPct.toFixed(0)}%`}
              label="Δ vs baseline"
              color={deltaColor}
            />
            <KPI
              value={yearBelow50 != null ? `y${yearBelow50}` : '—'}
              label="<50% від baseline"
              color={yearBelow50 != null ? '#fda4ae' : '#86efac'}
            />
          </div>
        </div>
      </div>

      <div className="sim-controls-quad">
        <Slider
          label="junior-найм / рік"
          min={0}
          max={100}
          step={1}
          value={hires}
          onChange={setHires}
          format={(v) => `${v}`}
        />
        <Slider
          label="промоція J→M, M→S"
          min={0}
          max={30}
          step={0.5}
          value={promo}
          onChange={setPromo}
          format={(v) => `${v.toFixed(0)}%`}
        />
        <Slider
          label="відтік / рік"
          min={0}
          max={30}
          step={0.5}
          value={attr}
          onChange={setAttr}
          format={(v) => `${v.toFixed(0)}%`}
        />
        <Slider
          label="горизонт"
          min={1}
          max={10}
          step={1}
          value={horizon}
          onChange={setHorizon}
          format={(v) => `${v} р`}
        />
      </div>

      <div style={{ marginTop: '0.4em' }}>
        <Presets<Scenario>
          label="сценарій"
          value={
            hires === SCENARIOS.current.hires
              ? 'current'
              : hires === SCENARIOS.freeze.hires
                ? 'freeze'
                : hires === SCENARIOS.restore.hires
                  ? 'restore'
                  : 'current'
          }
          onChange={applyScenario}
          options={[
            { label: SCENARIOS.current.label, value: 'current' },
            { label: SCENARIOS.freeze.label, value: 'freeze' },
            { label: SCENARIOS.restore.label, value: 'restore' },
          ]}
        />
      </div>

      <p className="slide-footnote">
        Cohort-модель. Стартові ваги (J=30, M=60, S=100) і коефіцієнти — оцінка автора;
        індекс відносно 2026. Baseline 50 наймів/рік — реконструкція рівня 2022 за{' '}
        <a href="https://djinni.co/salaries/analytics/" target="_blank" rel="noreferrer">
          Djinni / DOU analytics
        </a>{' '}
        (−62% junior-вакансій 2022→2026). Проєкція стилізована, не прогноз для конкретного ринку.
      </p>
    </>
  );
}
