import tweet from '../../assets/tweet-tokens-kpi.png';

export default function TokenmaxxingInPractice() {
  return (
    <>
      <h2>Tokenmaxxing у дикій природі</h2>
      <img
        src={tweet}
        alt="Тред у X (@ghaiklor): компанія ввела KPI на використання токенів"
        style={{
          display: 'block',
          margin: '0 auto',
          maxHeight: '14em',
          width: 'auto',
          borderRadius: '0.5em',
        }}
      />
      <p className="slide-footnote" style={{ textAlign: 'center' }}>
        Eugene Obrezkov (@ghaiklor), X, 13 травня 2026{' '}
        <a href="https://x.com/ghaiklor">x.com/ghaiklor</a>
      </p>
    </>
  );
}
