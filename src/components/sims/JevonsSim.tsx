import { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { ChartSvg, CHART_W } from '../charts/Svg';
import { Slider, Presets } from '../charts/Slider';
import { KPI } from '../charts/KPI';
import { Axis } from '../charts/Axis';

type ElasticityKey = 'inelastic' | 'unit' | 'elastic';
const ELASTICITY: Record<ElasticityKey, { value: number; label: string }> = {
  inelastic: { value: 0.3, label: 'нееластичний (ε=0.3) — ліки' },
  unit: { value: 1.0, label: 'одиничний (ε=1.0) — продукти' },
  elastic: { value: 2.5, label: 'еластичний (ε=2.5) — софт' },
};

export function JevonsSim() {
  const [mult, setMult] = useState(3);
  const [elasticityKey, setElasticityKey] = useState<ElasticityKey>('elastic');
  const epsilon = ELASTICITY[elasticityKey].value;

  // Q ∝ P^(-ε); P = P0 / mult so Q/Q0 = mult^ε
  // Total dev-hours = Q × (1/mult) ∝ mult^(ε-1)
  const priceIdx = 100 / mult;
  const hoursIdx = Math.round(Math.pow(mult, epsilon - 1) * 100);
  const featuresIdx = Math.round(Math.pow(mult, epsilon) * 100);

  // Demand curve: P vs. Q
  const curveW = 560;
  const curveH = 280;
  const margin = { top: 40, right: 40, bottom: 40, left: 60 };
  const qScale = scaleLinear()
    .domain([0, 1000])
    .range([margin.left, margin.left + curveW]);
  const pScale = scaleLinear()
    .domain([0, 120])
    .range([margin.top + curveH, margin.top]);

  const curvePts: { q: number; p: number }[] = [];
  for (let p = 4; p <= 110; p += 2) {
    const q = 100 * Math.pow(100 / p, epsilon);
    if (q <= 1000) curvePts.push({ q, p });
  }
  const pathD = curvePts.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${qScale(pt.q)} ${pScale(pt.p)}`).join(' ');

  const currentQ = 100 * Math.pow(100 / priceIdx, epsilon);
  const currentX = qScale(Math.min(currentQ, 1000));
  const currentY = pScale(priceIdx);

  const scenario = epsilon > 1 ? 'ATM-сценарій' : epsilon < 1 ? 'CAD-сценарій' : 'нейтрально';
  const scenarioColor = epsilon > 1 ? '#86efac' : epsilon < 1 ? '#fda4ae' : '#fde68a';

  return (
    <>
      <h2>Парадокс Джевонса</h2>
      <p className="lede">
        Дешевший софт ⇒ більший попит. Чи більше дев-годин залежить тільки від еластичності попиту.
      </p>

      <div className="sim-grid">
        <ChartSvg height={360}>
          <Axis
            scale={qScale}
            orientation="bottom"
            x={margin.left}
            y={margin.top + curveH}
            length={curveW}
            ticks={[0, 200, 400, 600, 800, 1000]}
            label="кількість фіч (Q)"
          />
          <Axis
            scale={pScale}
            orientation="left"
            x={margin.left}
            y={margin.top}
            length={curveH}
            ticks={[0, 20, 40, 60, 80, 100]}
            label="ціна за фічу (P)"
          />
          <path d={pathD} stroke="#facc15" strokeWidth={2.5} fill="none" />
          {/* baseline marker */}
          <circle cx={qScale(100)} cy={pScale(100)} r={5} fill="rgba(255,255,255,0.5)" />
          <text x={qScale(100) + 8} y={pScale(100) - 6} className="chart-annotation" opacity={0.7}>
            до ШІ
          </text>
          {/* current marker */}
          <line
            x1={currentX}
            y1={pScale(120)}
            x2={currentX}
            y2={pScale(0)}
            stroke="rgba(250,204,21,0.4)"
            strokeDasharray="3 3"
          />
          <line
            x1={qScale(0)}
            y1={currentY}
            x2={qScale(1000)}
            y2={currentY}
            stroke="rgba(250,204,21,0.4)"
            strokeDasharray="3 3"
          />
          <circle cx={currentX} cy={currentY} r={7} fill="#facc15" />
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI value={`${priceIdx.toFixed(0)}%`} label="ціна за фічу" color="#fda4ae" />
            <KPI value={`${featuresIdx}%`} label="попит на фічі" color="#bfdbfe" />
            <KPI
              value={`${hoursIdx}%`}
              label="зайнятість розробників"
              color={hoursIdx >= 100 ? '#86efac' : '#fda4ae'}
            />
          </div>
          <div
            className="callout"
            style={{ borderLeftColor: scenarioColor, background: `${scenarioColor}1a` }}
          >
            <strong style={{ color: scenarioColor }}>{scenario}</strong>{' '}
            {hoursIdx >= 100
              ? '— дешевший код → попит росте сильніше → більше дев-годин.'
              : '— попит не наздоганяє продуктивність → зайнятість падає.'}
          </div>
        </div>
      </div>

      <div className="sim-controls" style={{ maxWidth: CHART_W }}>
        <Slider
          label="продуктивність ШІ"
          min={1}
          max={10}
          step={0.1}
          value={mult}
          onChange={setMult}
          format={(v) => `${v.toFixed(1)}×`}
        />
        <div>
          <Presets<ElasticityKey>
            label="еластичність попиту"
            value={elasticityKey}
            onChange={setElasticityKey}
            options={[
              { label: 'ε=0.3', value: 'inelastic' },
              { label: 'ε=1.0', value: 'unit' },
              { label: 'ε=2.5', value: 'elastic' },
            ]}
          />
          <p className="preset-caption">{ELASTICITY[elasticityKey].label}</p>
        </div>
      </div>
      <p className="slide-footnote">
        Jevons, «The Coal Question» (1865). Софт історично поводився еластично: вугілля 1865, лампи (Tsao 2010),
        обчислення — всюди той самий патерн.
      </p>
    </>
  );
}
