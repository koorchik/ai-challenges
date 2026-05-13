import { useState, type ReactNode } from 'react';

type Props = {
  front: ReactNode;
  back: ReactNode;
  accent?: 'yellow' | 'blue' | 'green' | 'red' | 'purple' | 'amber';
  className?: string;
};

// 3D-flip card. Click toggles front/back. Used on Slide 40 (7 pitfalls →
// front: name + symptom; back: mitigation). The wrapper is a <button> so
// it's keyboard-accessible.
export function FlipCard({ front, back, accent = 'red', className }: Props) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={['flip-card', flipped && 'is-flipped', className].filter(Boolean).join(' ')}
      data-accent={accent}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
    >
      <span className="flip-card-inner">
        <span className="flip-card-face flip-card-front">{front}</span>
        <span className="flip-card-face flip-card-back">{back}</span>
      </span>
    </button>
  );
}
