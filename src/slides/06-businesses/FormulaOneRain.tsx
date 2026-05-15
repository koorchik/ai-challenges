import f1Rain from '../../assets/f1-rain.jpeg';

export default function FormulaOneRain() {
  return (
    <div className="slide-body wide">
      <h2>Ефект дощу у Формулі-1: чому шторм вирівнює шанси</h2>
      
      <div
        className="two-col wide text-md"
        style={{ alignItems: 'stretch', gridTemplateColumns: '1.4fr 1fr', gap: '2em', marginTop: '1.5em' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img
            src={f1Rain}
            alt="Болід F1 наздоганяє лідера на мокрій трасі"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              display: 'block',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          />
        </div>

        <div className="tile" data-accent="blue" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1.5em' }}>
          <p className="lede" style={{ margin: 0, marginBottom: '1em', color: '#fff' }}>
            У суху перемагає бюджет; у зливу — той, хто швидше читає трасу і міняє стратегію по ходу.
          </p>
          <ul className="checklist" style={{ textAlign: 'left', margin: 0, padding: 0 }}>
            <li style={{ marginBottom: '0.6em' }}>
              <strong>Стартова сітка обнуляється.</strong> Бренд і бюджети безпеки не гарантують.
            </li>
            <li style={{ marginBottom: '0.6em' }}>
              <strong>Швидкість ітерацій — ваш болід.</strong> Стартап переписує AI-стек за місяць.
            </li>
            <li>
              <strong>Пастка корпорацій.</strong> Бренд є, але «перевзутися за 3 секунди» — ні.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}