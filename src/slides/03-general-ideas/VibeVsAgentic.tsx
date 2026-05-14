import tonyStark from '../../assets/tony-stark.jpg';

export default function VibeVsAgentic() {
  return (
    <>
      <h2>The greatest vibe coder?</h2>
      <div
        className="two-col wide"
        style={{ alignItems: 'center', gridTemplateColumns: 'auto 1fr', gap: '1.6em' }}
      >
        <img
          src={tonyStark}
          alt="Тоні Старк у лабораторії з Jarvis"
          style={{ width: '14em', height: 'auto', borderRadius: '0.5em', display: 'block' }}
        />
        <p className="lede" style={{ margin: 0 }}>
          Чим займається Тоні Старк? Vibe coding чи agentic engineering?
        </p>
      </div>
    </>
  );
}
