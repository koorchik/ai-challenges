export default function HumanValueZone() {
  const humanFill = 'rgba(120, 180, 220, 0.22)';
  const humanStroke = '#7ab4dc';
  const humanLabel = '#9bd4ff';
  const aiFill = 'rgba(220, 180, 80, 0.22)';
  const aiStroke = '#dcb450';
  const aiLabel = '#ffd770';

  const cellStyle = { textAlign: 'center' as const };
  const captionStyle = { margin: '0.3em 0 0', lineHeight: 1.3 };
  const svgStyle = { width: '100%', maxHeight: '8em', display: 'block' };

  return (
    <div className="slide-body wide">
      <h2>Де межа людської цінності? Ми не знаємо</h2>

      <div className="four-col wide" style={{ marginTop: '0.8em', alignItems: 'start', gap: '0.9em' }}>
        <div style={cellStyle}>
          <svg viewBox="0 0 200 130" style={svgStyle}>
            <circle cx="100" cy="68" r="55" fill={humanFill} stroke={humanStroke} strokeWidth="1.5" />
            <circle cx="118" cy="72" r="22" fill={aiFill} stroke={aiStroke} strokeWidth="1.5" />
            <text x="55" y="35" fontSize="11" fill={humanLabel} textAnchor="middle">Людина</text>
            <text x="150" y="72" fontSize="10" fill={aiLabel} textAnchor="middle">AI</text>
          </svg>
          <p className="text-sm" style={captionStyle}>
            <strong>AI-помічник.</strong> ШІ забирає лише рутину.
          </p>
        </div>

        <div style={cellStyle}>
          <svg viewBox="0 0 200 130" style={svgStyle}>
            <circle cx="100" cy="68" r="55" fill={aiFill} stroke={aiStroke} strokeWidth="1.5" />
            <circle cx="115" cy="72" r="22" fill={humanFill} stroke={humanStroke} strokeWidth="1.5" />
            <text x="60" y="35" fontSize="11" fill={aiLabel} textAnchor="middle">AI</text>
            <text x="148" y="72" fontSize="10" fill={humanLabel} textAnchor="middle">Людина</text>
          </svg>
          <p className="text-sm" style={captionStyle}>
            <strong>Людина як фільтр.</strong> ШІ генерує, людина лише валідує.
          </p>
        </div>

        <div style={cellStyle}>
          <svg viewBox="0 0 200 130" style={svgStyle}>
            <circle cx="80" cy="68" r="45" fill={humanFill} stroke={humanStroke} strokeWidth="1.5" />
            <circle cx="120" cy="68" r="45" fill={aiFill} stroke={aiStroke} strokeWidth="1.5" />
            <text x="48" y="22" fontSize="11" fill={humanLabel} textAnchor="middle">Людина</text>
            <text x="152" y="22" fontSize="11" fill={aiLabel} textAnchor="middle">AI</text>
          </svg>
          <p className="text-sm" style={captionStyle}>
            <strong>Аугментація.</strong> Глибока інтеграція (Copilot).
          </p>
        </div>

        <div style={cellStyle}>
          <svg viewBox="0 0 200 130" style={svgStyle}>
            <circle cx="80" cy="68" r="45" fill="rgba(120, 180, 220, 0.16)" stroke={humanStroke} strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="120" cy="68" r="45" fill="rgba(220, 180, 80, 0.16)" stroke={aiStroke} strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="100" y="82" fontSize="40" fill="#ffffff" textAnchor="middle" fontWeight="bold" opacity="0.75">?</text>
          </svg>
          <p className="text-sm" style={captionStyle}>
            <strong>Jagged frontier.</strong> Зубчаста межа. Рухається щомісяця.
          </p>
        </div>
      </div>

      <div className="slide-footnote callout callout-blue" style={{ marginTop: '1.2em', textAlign: 'left' }}>
        Дослідження Harvard/BCG (758 консультантів із GPT-4):
        <ul style={{ paddingLeft: '1.2em', margin: '0.3em 0' }}>
          <li>В межах компетенції AI: <strong>+40%</strong> до якості роботи.</li>
          <li>Поза межею (де AI галюцинує): <strong>−19 п.п.</strong> правильних рішень, бо люди сліпо довіряють.</li>
        </ul>
        <em>Заздалегідь межу вгадати неможливо.</em>
      </div>
    </div>
  );
}