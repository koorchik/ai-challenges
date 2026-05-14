import { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { ChartSvg } from '../charts/Svg';
import { Slider, Presets } from '../charts/Slider';
import { KPI } from '../charts/KPI';
import { Axis } from '../charts/Axis';

type Semester = 1 | 2 | 3 | 4;

function retention(o: number, s: number) {
  return Math.pow(1 - o, 0.35 * s);
}

function whiteboard(o: number, s: number) {
  const score = 100 * (0.4 + 0.6 * retention(o, s)) - 25 * o * (s / 4);
  return Math.max(0, Math.min(100, score));
}

export function CognitiveOffloadingSim() {
  const [offload, setOffload] = useState(50);
  const [semester, setSemester] = useState<Semester>(4);
  const o = offload / 100;

  const margin = { top: 30, right: 60, bottom: 50, left: 60 };
  const chartW = 540;
  const chartH = 310;
  const xScale = scaleLinear()
    .domain([1, 4])
    .range([margin.left, margin.left + chartW]);
  const yScale = scaleLinear()
    .domain([0, 100])
    .range([margin.top + chartH, margin.top]);

  const semSamples = [1, 1.5, 2, 2.5, 3, 3.5, 4];
  const baselinePts = semSamples.map((s) => ({
    x: xScale(s),
    y: yScale(whiteboard(0, s)),
    s,
  }));
  const currentPts = semSamples.map((s) => ({
    x: xScale(s),
    y: yScale(whiteboard(o, s)),
    s,
  }));

  const toPath = (pts: { x: number; y: number }[]) =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  const currentR = retention(o, semester);
  const currentW = whiteboard(o, semester);
  const baselineW = whiteboard(0, semester);
  const delta = currentW - baselineW;
  const deltaColor = delta >= -5 ? '#86efac' : delta >= -20 ? '#fde68a' : '#fda4ae';

  // mark current semester
  const markerX = xScale(semester);
  const markerY = yScale(currentW);

  return (
    <>
      <h2>Когнітивне делегування: що відчуєш на whiteboard-інтерв'ю</h2>
      <p className="lede">
        Ілюстративна модель. Кожен семестр на ChatGPT-милицях компаундується — фундамент тоншає швидше,
        ніж здається, поки ШІ за плечем.
      </p>

      <div className="sim-grid">
        <ChartSvg height={400} style={{ maxHeight: '9.5em' }}>
          <Axis
            scale={xScale}
            orientation="bottom"
            x={margin.left}
            y={margin.top + chartH}
            length={chartW}
            ticks={[1, 2, 3, 4]}
            format={(v) => `сем ${v}`}
            label="семестр"
          />
          <Axis
            scale={yScale}
            orientation="left"
            x={margin.left}
            y={margin.top}
            length={chartH}
            ticks={[0, 25, 50, 75, 100]}
            label="індекс whiteboard-результату"
          />

          {/* danger zone <40 */}
          <rect
            x={margin.left}
            y={yScale(40)}
            width={chartW}
            height={margin.top + chartH - yScale(40)}
            fill="rgba(248,113,113,0.08)"
          />

          {/* baseline (no offload) */}
          <path
            d={toPath(baselinePts)}
            stroke="#94a3b8"
            strokeWidth={2}
            fill="none"
            strokeDasharray="5 4"
            strokeLinecap="round"
          />
          <text
            x={baselinePts[baselinePts.length - 1].x + 6}
            y={baselinePts[baselinePts.length - 1].y + 4}
            fill="rgba(148,163,184,0.8)"
            fontSize={11}
          >
            без ШІ
          </text>

          {/* current */}
          <path
            d={toPath(currentPts)}
            stroke="#facc15"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
          />
          <text
            x={currentPts[currentPts.length - 1].x + 6}
            y={currentPts[currentPts.length - 1].y + 4}
            fill="#facc15"
            fontSize={11}
            fontWeight={600}
          >
            ваш сценарій
          </text>

          {/* current semester marker */}
          <line
            x1={markerX}
            x2={markerX}
            y1={margin.top}
            y2={margin.top + chartH}
            stroke="rgba(250,204,21,0.3)"
            strokeDasharray="3 4"
          />
          <circle cx={markerX} cy={markerY} r={6} fill="#facc15" />

          <text
            x={margin.left + chartW / 2}
            y={margin.top - 8}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize={11}
          >
            Стилізована модель · індекс, не %
          </text>
        </ChartSvg>

        <div className="sim-side">
          <div className="kpi-stack">
            <KPI
              value={`${currentW.toFixed(0)}`}
              label={`whiteboard @ сем ${semester}`}
              color={deltaColor}
            />
            <KPI
              value={`${(currentR * 100).toFixed(0)}%`}
              label="утримання фундаменту"
              color={currentR > 0.5 ? '#86efac' : currentR > 0.25 ? '#fde68a' : '#fda4ae'}
            />
            <KPI
              value={`${delta > 0 ? '+' : ''}${delta.toFixed(0)} в.п.`}
              label="Δ vs «без ШІ»"
              color={deltaColor}
            />
          </div>
        </div>
      </div>

      <div className="sim-controls" style={{ maxWidth: 1000 }}>
        <Slider
          label="делеговано ШІ"
          min={0}
          max={100}
          step={1}
          value={offload}
          onChange={setOffload}
          format={(v) => `${v}%`}
        />
        <div>
          <Presets<Semester>
            label="семестр"
            value={semester}
            onChange={setSemester}
            options={[
              { label: '1', value: 1 },
              { label: '2', value: 2 },
              { label: '3', value: 3 },
              { label: '4', value: 4 },
            ]}
          />
        </div>
      </div>

      <p className="slide-footnote">
        Стилізовано за{' '}
        <a
          href="https://www.mdpi.com/2076-0760/14/1/6"
          target="_blank"
          rel="noreferrer"
        >
          Gerlich (Societies 2025, n=666)
        </a>
        : кореляція r=−0.68 між AI-tool use і critical-thinking scores. Точні криві ілюстративні —
        напрямок ефекту з даних, не його магнітуда.
      </p>
    </>
  );
}
