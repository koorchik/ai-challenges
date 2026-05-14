import f1Rain from '../../assets/f1-rain.jpeg';

export default function FormulaOneRain() {
  return (
    <>
      <h2>Formula 1 у дощ</h2>
      <div
        className="two-col wide"
        style={{ alignItems: 'center', gridTemplateColumns: '1.4fr 1fr', gap: '1.4em' }}
      >
        <img
          src={f1Rain}
          alt="Болід F1 наздоганяє лідера на мокрій трасі"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '12em',
            objectFit: 'cover',
            borderRadius: '0.6em',
            display: 'block',
          }}
        />
        <div className="slide-body slide-body--tight">
          <p className="lede" style={{ margin: 0 }}>
            У сухий день виграє швидший болід. У дощ — той, хто першим читає шторм і ризикує
            перебудувати стратегію між колами.
          </p>
          <ul className="checklist text-md" style={{ textAlign: 'left' }}>
            <li>Жодне лідерство не безпечне — стартова сітка не зберігається.</li>
            <li>Стейдж = реліз. Стек, що оновлюється тричі за рік — і є болідом.</li>
            <li>Інкумбент має бренд і дистрибуцію. Не має часу переадаптуватися.</li>
          </ul>
        </div>
      </div>
      <p className="slide-footnote">
        Метафора для розриву між capability і adoption: коли траса суха, виграє ресурс;
        коли мокра — рішення в реальному часі.
      </p>
    </>
  );
}
