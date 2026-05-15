import { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { ChartSvg } from '../../components/charts/Svg';
import { Slider, Presets } from '../../components/charts/Slider';
import { KPI } from '../../components/charts/KPI';
import { Axis } from '../../components/charts/Axis';

type ElasticityKey = 'inelastic' | 'unit' | 'elastic';
const ELASTICITY: Record<ElasticityKey, { value: number; label: string }> = {
  inelastic: { value: 0.3, label: 'Низька (ε=0.3) — фіксована потреба' },
  unit: { value: 1.0, label: 'Лінійна (ε=1.0) — пропорційна' },
  elastic: { value: 2.5, label: 'Висока (ε=2.5) — софт та інновації' },
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
  const curveW = 500;
  const curveH = 200;
  const margin = { top: 15, right: 40, bottom: 35, left: 60 };
  
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

  const scenario = epsilon > 1 ? 'Праця зростає' : epsilon < 1 ? 'Праця скорочується' : 'Праця стабільна';
  const scenarioColor = epsilon > 1 ? '#10b981' : epsilon < 1 ? '#f43f5e' : '#f59e0b'; // Emerald, Rose, Amber
  const scenarioText = epsilon > 1
    ? 'Здешевлення → попит росте швидше за ціну → загальна праця ЗРОСТАЄ. Канонічний приклад — софт.'
    : epsilon < 1
    ? 'Попит майже не реагує на ціну. Дешевше виробництво → потреба у праці СКОРОЧУЄТЬСЯ.'
    : 'Здешевлення компенсує зростання попиту 1:1 — потреба у праці стала.';

  return (
    <div className="slide-body wide">
      <h2>Парадокс Джевонса</h2>
      <p className="lede" style={{ margin: 0 }}>
        Закон 1865 року: коли ціна на ресурс падає, чи компенсує попит це падіння? Залежить від еластичності — для софту та ШІ вона висока.
      </p>

      <div className="sim-grid" style={{ marginTop: '0.4em', display: 'flex', gap: '2em' }}>
        <ChartSvg height={200} style={{ flexGrow: 1 }}>
          <Axis
            scale={qScale}
            orientation="bottom"
            x={margin.left}
            y={margin.top + curveH}
            length={curveW}
            ticks={[0, 200, 400, 600, 800, 1000]}
            label="Обсяг попиту (одиниць)"
          />
          <Axis
            scale={pScale}
            orientation="left"
            x={margin.left}
            y={margin.top}
            length={curveH}
            ticks={[0, 20, 40, 60, 80, 100]}
            label="Собівартість 1 одиниці (%)"
          />
          <path d={pathD} stroke="#facc15" strokeWidth={3.5} fill="none" strokeLinecap="round" />
          
          {/* baseline marker */}
          <circle cx={qScale(100)} cy={pScale(100)} r={5} fill="rgba(255,255,255,0.5)" />
          <text x={qScale(100) + 12} y={pScale(100) - 8} fill="rgba(255,255,255,0.7)" fontSize={12} fontWeight={600}>
            Початково
          </text>

          {/* current marker */}
          <line
            x1={currentX}
            y1={pScale(120)}
            x2={currentX}
            y2={pScale(0)}
            stroke="rgba(250,204,21,0.4)"
            strokeDasharray="4 4"
          />
          <line
            x1={qScale(0)}
            y1={currentY}
            x2={qScale(1000)}
            y2={currentY}
            stroke="rgba(250,204,21,0.4)"
            strokeDasharray="4 4"
          />
          <circle cx={currentX} cy={currentY} r={7} fill="#facc15" />
          <text x={currentX + 12} y={currentY - 8} fill="#facc15" fontSize={14} fontWeight={700}>
            Після здешевлення
          </text>
        </ChartSvg>

        <div className="sim-side" style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
          <div className="kpi-stack" style={{ display: 'flex', flexDirection: 'column', gap: '0.25em' }}>
            <KPI value={`${priceIdx.toFixed(0)}%`} label="Собівартість одиниці" color="#f43f5e" />
            <KPI value={`${featuresIdx}%`} label="Обсяг попиту" color="#60a5fa" />
            <KPI
              value={`${hoursIdx}%`}
              label="Загальна праця"
              color={hoursIdx >= 100 ? '#10b981' : '#f43f5e'}
            />
          </div>

          <div
            className="callout"
            style={{ borderLeftColor: scenarioColor, background: `${scenarioColor}1a`, marginTop: 'auto' }}
          >
            <strong style={{ color: scenarioColor, display: 'block', marginBottom: '0.3em' }}>{scenario}</strong>
            {scenarioText}
          </div>
        </div>
      </div>

      <div className="sim-controls sim-controls-compact" style={{ maxWidth: 800, margin: '0.4em auto 0', display: 'flex', gap: '2em' }}>
        <div style={{ flex: 1 }}>
          <Slider
            label="Прискорення ШІ"
            min={1}
            max={10}
            step={0.1}
            value={mult}
            onChange={setMult}
            format={(v) => `${v.toFixed(1)}×`}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Presets<ElasticityKey>
            label="Тип ринку"
            value={elasticityKey}
            onChange={setElasticityKey}
            options={[
              { label: 'Ліки', value: 'inelastic' },
              { label: 'Продукти', value: 'unit' },
              { label: 'IT / Софт', value: 'elastic' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}