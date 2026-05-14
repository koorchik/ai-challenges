import { useState } from 'react';
import { ChartSvg } from '../charts/Svg';
import { Slider, Presets } from '../charts/Slider';
import { KPI } from '../charts/KPI';

type Role = 'junior' | 'senior' | 'lead';

type Segment = { key: keyof Baseline; label: string; color: string };

type Baseline = {
  code: number;
  design: number;
  review: number;
  debug: number;
  integ: number;
  coord: number;
};

const SEGMENTS: Segment[] = [
  { key: 'code', label: 'писати код', color: '#facc15' },
  { key: 'design', label: 'дизайн', color: '#bfdbfe' },
  { key: 'review', label: 'ревʼю', color: '#fde68a' },
  { key: 'debug', label: 'відлагодження', color: '#fda4ae' },
  { key: 'integ', label: 'інтеграція', color: '#86efac' },
  { key: 'coord', label: 'координація', color: '#c4b5fd' },
];

const BASELINES: Record<Role, Baseline> = {
  junior: { code: 60, design: 5, review: 10, debug: 15, integ: 5, coord: 5 },
  senior: { code: 45, design: 10, review: 15, debug: 15, integ: 10, coord: 5 },
  lead: { code: 25, design: 15, review: 25, debug: 10, integ: 10, coord: 15 },
};

const REDIST = { review: 0.3, debug: 0.2, design: 0.25, integ: 0.1, coord: 0.15 };

function compute(role: Role, share: number): { before: Baseline; after: Baseline } {
  const before = BASELINES[role];
  const codeNew = before.code * (1 - share * 0.7);
  const freed = before.code - codeNew;
  const after: Baseline = {
    code: codeNew,
    design: before.design + freed * REDIST.design,
    review: before.review + freed * REDIST.review,
    debug: before.debug + freed * REDIST.debug,
    integ: before.integ + freed * REDIST.integ,
    coord: before.coord + freed * REDIST.coord,
  };
  return { before, after };
}

function StackedBar({
  x,
  y,
  width,
  height,
  values,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  values: Baseline;
}) {
  let offset = 0;
  return (
    <g transform={`translate(${x}, ${y})`}>
      {SEGMENTS.map((s) => {
        const v = values[s.key];
        const h = (v / 100) * height;
        const rect = (
          <g key={s.key} transform={`translate(0, ${offset})`}>
            <rect
              width={width}
              height={h}
              fill={s.color}
              opacity={0.9}
              style={{ transition: 'height 0.35s ease' }}
            />
            {v >= 7 && (
              <text
                x={width / 2}
                y={h / 2 + 4}
                textAnchor="middle"
                fill="rgba(0,0,0,0.85)"
                fontSize={12}
                fontWeight={600}
              >
                {s.label} · {Math.round(v)}%
              </text>
            )}
          </g>
        );
        offset += h;
        return rect;
      })}
    </g>
  );
}

export function TimeShiftSim() {
  const [share, setShare] = useState(67);
  const [role, setRole] = useState<Role>('senior');
  const { before, after } = compute(role, share / 100);

  const codeShare = Math.round(after.code);
  const reviewShare = Math.round(after.review);
  const coordShare = Math.round(after.coord);

  return (
    <>
      <h2>Куди зсувається час — підкрутіть під свою команду</h2>
      <p className="lede">
        ШІ стискає саме кодування. Усе, що не код, росте у відносній вазі. Перетягніть слайдер —
        подивіться, як перерозподіляється тиждень.
      </p>

      <ChartSvg height={420}>
        <text x={300} y={36} textAnchor="middle" className="chart-title">
          до ШІ
        </text>
        <text x={700} y={36} textAnchor="middle" className="chart-title">
          з ШІ
        </text>
        <StackedBar x={200} y={60} width={200} height={340} values={before} />
        <StackedBar x={600} y={60} width={200} height={340} values={after} />

        <text x={500} y={230} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize={28}>
          →
        </text>
      </ChartSvg>

      <div className="sim-controls" style={{ maxWidth: 1000 }}>
        <Slider
          label="частка коду, що пише ШІ"
          min={0}
          max={100}
          step={1}
          value={share}
          onChange={setShare}
          format={(v) => `${v}%`}
        />
        <div>
          <Presets<Role>
            label="ваша роль"
            value={role}
            onChange={setRole}
            options={[
              { label: 'junior', value: 'junior' },
              { label: 'senior', value: 'senior' },
              { label: 'lead', value: 'lead' },
            ]}
          />
        </div>
      </div>

      <div
        className="kpi-row"
        style={{ maxWidth: 900, margin: '0.3em auto 0', gap: '0.4em' }}
      >
        <KPI value={`${codeShare}%`} label="час на код" color="#facc15" />
        <KPI value={`${reviewShare}%`} label="час на ревʼю" color="#fde68a" />
        <KPI value={`${coordShare}%`} label="час на координацію" color="#c4b5fd" />
      </div>

      <p className="slide-footnote">
        Ілюстративний перерозподіл. Стартові ваги ролей — оцінка автора; редистрибуція 30/25/20/15/10
        між review/design/debug/coord/integ. Напрямок підтверджують{' '}
        <a href="https://dora.dev/publications/2024-accelerate-state-of-devops/" target="_blank" rel="noreferrer">
          DORA 2024
        </a>{' '}
        і{' '}
        <a
          href="https://gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality"
          target="_blank"
          rel="noreferrer"
        >
          GitClear (2024)
        </a>
        ; точні відсотки не виміряні.
      </p>
    </>
  );
}
