type SectionHeaderProps = {
  label?: string;
  title: string;
  subtitle?: React.ReactNode;
};

// Shared header for the audience-divider slides.
export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <>
      {label && <span className="section-label">{label}</span>}
      <h1>{title}</h1>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </>
  );
}
