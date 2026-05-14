export default function Title() {
  return (
    <>
      <div style={{ marginTop: '1.5em' }}>
        <span className="section-label">DOU Day · 2026</span>
        <h1 style={{ fontSize: '2.6em', lineHeight: 1.05, margin: '0.2em 0 0.3em' }}>
          Що робити <br />
          <span style={{ color: '#facc15' }}>в часи ШІ?</span>
        </h1>
        <p style={{ fontSize: '0.7em', opacity: 0.7, maxWidth: 760, margin: '0.6em auto' }}>
          Практичні кроки —
          для студента, розробника, бізнесу й держави.
        </p>
      </div>

      <svg
        viewBox="0 0 600 60"
        style={{ width: '60%', maxWidth: 600, opacity: 0.5, marginTop: '0.8em' }}
        aria-hidden="true"
      >
        <line x1="0" y1="30" x2="600" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {[60, 180, 300, 420, 540].map((x, i) => (
          <circle key={i} cx={x} cy={30} r={4} fill={i === 2 ? '#facc15' : 'rgba(255,255,255,0.4)'} />
        ))}
      </svg>

      <p className="slide-footnote">Турський Віктор · koorchik · DOU Day, травень 2026</p>
    </>
  );
}
