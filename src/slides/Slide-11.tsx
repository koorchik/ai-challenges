// 11 · Концепції · Vibe coding чи Agentic engineering?
import tonyStark from '../assets/tony-stark.jpg';

export function Slide11() {
  return (
    <>
      <h2>Vibe coding чи Agentic engineering?</h2>
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
          Лабораторія Старка: Jarvis, костюм у бою, репульсори в проді.
          Це як він пише код?
        </p>
      </div>
    </>
  );
}
