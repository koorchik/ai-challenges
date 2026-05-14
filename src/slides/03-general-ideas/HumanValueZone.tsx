export default function HumanValueZone() {
  const humanFill = 'rgba(120, 180, 220, 0.22)';
  const humanStroke = '#7ab4dc';
  const humanLabel = '#9bd4ff';
  const aiFill = 'rgba(220, 180, 80, 0.22)';
  const aiStroke = '#dcb450';
  const aiLabel = '#ffd770';

  const cellStyle = { textAlign: 'center' as const };
  const captionStyle = { margin: '0.3em 0 0' };
  const svgStyle = { width: '100%', maxHeight: '8em', display: 'block' };

  return (
    <>
      <h2>Де живе людська цінність? Ми не знаємо</h2>

      <div className="four-col wide" style={{ marginTop: '0.5em', alignItems: 'start', gap: '0.9em' }}>
        <div style={cellStyle}>
          <svg viewBox="0 0 200 130" style={svgStyle}>
            <circle cx="100" cy="68" r="55" fill={humanFill} stroke={humanStroke} strokeWidth="1.5" />
            <circle cx="118" cy="72" r="22" fill={aiFill} stroke={aiStroke} strokeWidth="1.5" />
            <text x="55" y="35" fontSize="11" fill={humanLabel} textAnchor="middle">Людина</text>
            <text x="150" y="72" fontSize="10" fill={aiLabel} textAnchor="middle">AI</text>
          </svg>
          <p className="text-sm" style={captionStyle}>
            <strong>Помічник.</strong> AI бере вузький зріз.
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
            <strong>AI робить майже все.</strong> Тонкий шар людини згори.
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
            <strong>Аугментація.</strong> Великий спільний центр + свої краї.
          </p>
        </div>

        <div style={cellStyle}>
          <svg viewBox="0 0 200 130" style={svgStyle}>
            <circle cx="80" cy="68" r="45" fill="rgba(120, 180, 220, 0.16)" stroke={humanStroke} strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="120" cy="68" r="45" fill="rgba(220, 180, 80, 0.16)" stroke={aiStroke} strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="100" y="82" fontSize="40" fill="#ffffff" textAnchor="middle" fontWeight="bold" opacity="0.75">?</text>
          </svg>
          <p className="text-sm" style={captionStyle}>
            <strong>Jagged frontier.</strong> Невідомо. Рухається щомісяця.
          </p>
        </div>
      </div>

      <div className="slide-footnote" style={{ marginTop: '0.6em' }}>
        Dell'Acqua, Mollick et al. (Harvard/BCG 2023): 758 консультантів із GPT-4.
        <ul style={{ paddingLeft: '1em', margin: '0.2em 0' }}>
          <li>В зоні AI: <strong>+40%</strong> до якості.</li>
          <li>Поза зоною: <strong>−19 п.п.</strong> правильних відповідей.</li>
        </ul>
        Заздалегідь межу вгадати неможливо.{' '}
        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321">papers.ssrn.com/abstract=4573321</a>
      </div>
    </>
  );
}
