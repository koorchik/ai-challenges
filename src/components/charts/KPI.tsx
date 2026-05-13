type KPIProps = {
  value: string;
  label: string;
  color?: string;
};

export function KPI({ value, label, color }: KPIProps) {
  return (
    <div className="kpi-cell">
      <div className="kpi-big" style={color ? { color } : undefined}>
        {value}
      </div>
      <div className="kpi-label">{label}</div>
    </div>
  );
}
