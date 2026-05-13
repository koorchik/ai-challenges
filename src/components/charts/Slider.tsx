type SliderProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
};

export function Slider({ label, min, max, step = 1, value, onChange, format }: SliderProps) {
  return (
    <div className="slider-wrap">
      <span className="slider-label">{label}</span>
      <div className="slider-row">
        <input
          className="slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <span className="slider-readout">{format ? format(value) : value}</span>
      </div>
    </div>
  );
}

type PresetProps<T extends string | number> = {
  label?: string;
  value: T;
  options: { label: string; value: T }[];
  onChange: (v: T) => void;
};

export function Presets<T extends string | number>({ label, value, options, onChange }: PresetProps<T>) {
  return (
    <div className="slider-wrap">
      {label && <span className="slider-label">{label}</span>}
      <div className="preset-row">
        {options.map((opt) => (
          <button
            key={String(opt.value)}
            className={`preset-btn ${opt.value === value ? 'active' : ''}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
