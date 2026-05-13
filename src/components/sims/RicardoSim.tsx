import { useState } from 'react';
import { ChartSvg } from '../charts/Svg';
import { Slider } from '../charts/Slider';
import { KPI } from '../charts/KPI';
import { Bar } from '../charts/Bar';

// Fixed inputs to keep the slide presentable:
//   Each actor has T = 100 hours.
//   Defaults chosen so Ricardo gives a clean win.
const T = 100;
// Hours per unit:
const hC_human = 4; // human: code
const hR_human = 1; // human: review (human is *relatively* better at review)
const hC_ai_base = 1; // AI: code
const hR_ai_base = 2; // AI: review (AI is *relatively* better at code)

export function RicardoSim() {
  const [advantage, setAdvantage] = useState(1);

  // AI absolute advantage multiplier — divides AI hours-per-unit
  const hC_ai = hC_ai_base / advantage;
  const hR_ai = hR_ai_base / advantage;

  // No specialization: each splits time 50/50
  const noSpec = {
    code: T / 2 / hC_human + T / 2 / hC_ai,
    review: T / 2 / hR_human + T / 2 / hR_ai,
  };

  // With specialization (Ricardo): given defaults, human → review, AI → code
  const spec = {
    code: T / hC_ai,
    review: T / hR_human,
  };

  // Human's "wage" / share — what fraction of total output the human contributes,
  // measured as the human's specialized output as fraction of total.
  // As AI absolute advantage rises, AI output grows; human output is flat → share drops.
  const humanOutput = T / hR_human; // reviews
  const totalOutput = spec.code + spec.review;
  const humanShare = humanOutput / totalOutput;

  // Layout
  const panelW = 280;
  const gap = 20;
  const margin = 30;
  const panelTop = 70;
  const panelH = 220;

  // Bar scaling — find max across both no-spec and spec at *current* advantage
  const maxBar = Math.max(noSpec.code, noSpec.review, spec.code, spec.review);
  const barMaxH = 150;
  const scale = barMaxH / maxBar;

  return (
    <>
      <h2>Порівняльна перевага — і чому її замало</h2>
      <p className="lede">
        Рікардо: обидва виграють від спеціалізації. Питання — <strong>що зі ставкою людини</strong>?
      </p>

      <ChartSvg height={340}>
        {/* Panel 1: no specialization */}
        <text x={margin + panelW / 2} y={40} textAnchor="middle" className="chart-title">
          без спеціалізації
        </text>
        <Bar
          x={margin + 40}
          y={panelTop + (barMaxH - noSpec.code * scale)}
          width={70}
          height={noSpec.code * scale}
          fill="#bfdbfe"
          valueLabel={noSpec.code.toFixed(0)}
          label="код"
        />
        <Bar
          x={margin + 140}
          y={panelTop + (barMaxH - noSpec.review * scale)}
          width={70}
          height={noSpec.review * scale}
          fill="#86efac"
          valueLabel={noSpec.review.toFixed(0)}
          label="ревʼю"
        />
        <text
          x={margin + panelW / 2}
          y={panelTop + panelH - 5}
          textAnchor="middle"
          className="chart-annotation"
          opacity={0.7}
        >
          разом: {(noSpec.code + noSpec.review).toFixed(0)} одиниць
        </text>

        {/* Panel 2: specialization */}
        <text x={margin + panelW + gap + panelW / 2} y={40} textAnchor="middle" className="chart-title">
          зі спеціалізацією (Рікардо)
        </text>
        <Bar
          x={margin + panelW + gap + 40}
          y={panelTop + (barMaxH - spec.code * scale)}
          width={70}
          height={spec.code * scale}
          fill="#bfdbfe"
          valueLabel={spec.code.toFixed(0)}
          label="код · ШІ"
        />
        <Bar
          x={margin + panelW + gap + 140}
          y={panelTop + (barMaxH - spec.review * scale)}
          width={70}
          height={spec.review * scale}
          fill="#86efac"
          valueLabel={spec.review.toFixed(0)}
          label="ревʼю · людина"
        />
        <text
          x={margin + panelW + gap + panelW / 2}
          y={panelTop + panelH - 5}
          textAnchor="middle"
          className="chart-annotation"
          opacity={0.7}
        >
          разом: {(spec.code + spec.review).toFixed(0)} одиниць
        </text>

        {/* Panel 3: the Acemoglu caveat — human share */}
        <text
          x={margin + 2 * (panelW + gap) + panelW / 2}
          y={40}
          textAnchor="middle"
          className="chart-title"
        >
          частка людини в результаті
        </text>
        <g transform={`translate(${margin + 2 * (panelW + gap) + 40}, ${panelTop})`}>
          {/* Stacked bar */}
          <rect x={50} y={0} width={120} height={barMaxH} fill="#bfdbfe" opacity={0.85} rx={6} />
          <rect
            x={50}
            y={barMaxH - humanShare * barMaxH}
            width={120}
            height={humanShare * barMaxH}
            fill="#86efac"
            rx={6}
          />
          <text
            x={110}
            y={barMaxH - humanShare * barMaxH - 8}
            textAnchor="middle"
            fill="#86efac"
            fontWeight={700}
          >
            людина: {(humanShare * 100).toFixed(1)}%
          </text>
          <text
            x={110}
            y={barMaxH + 18}
            textAnchor="middle"
            className="chart-annotation"
            opacity={0.7}
          >
            ШІ: {((1 - humanShare) * 100).toFixed(1)}%
          </text>
        </g>
      </ChartSvg>

      <div className="sim-controls-single">
        <Slider
          label="абсолютна перевага ШІ"
          min={1}
          max={10}
          step={0.1}
          value={advantage}
          onChange={setAdvantage}
          format={(v) => `${v.toFixed(1)}×`}
        />
        <div className="kpi-row" style={{ margin: 0 }}>
          <KPI value={`${totalOutput.toFixed(0)}`} label="загальний випуск" color="#facc15" />
          <KPI
            value={`${(humanShare * 100).toFixed(1)}%`}
            label="частка людини"
            color={humanShare > 0.3 ? '#86efac' : '#fda4ae'}
          />
        </div>
      </div>

      <p
        className="callout"
        style={{
          borderLeftColor: humanShare < 0.2 ? '#e63946' : '#facc15',
          background: humanShare < 0.2 ? 'rgba(230,57,70,0.1)' : 'rgba(250,204,21,0.08)',
        }}
      >
        Рікардо гарантує роботу — <strong>не</strong> зарплату. Acemoglu &amp; Restrepo (Econometrica 2022):
        порівняльна перевага визначає обсяги торгівлі, не ставки.
      </p>
    </>
  );
}
