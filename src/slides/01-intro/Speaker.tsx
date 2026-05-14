import speakerPhoto from '../../assets/speaker.png';

export default function Speaker() {
  return (
    <>
      <h2>Про мене</h2>
      <div
        className="two-col wide"
        style={{ alignItems: 'center', gridTemplateColumns: 'auto 1fr', gap: '1.6em' }}
      >
        <img
          src={speakerPhoto}
          alt="Спікер"
          style={{
            width: '8em',
            height: '8em',
            objectFit: 'cover',
            borderRadius: '50%',
            display: 'block',
          }}
        />
        <ul className="checklist text-lg" style={{ textAlign: 'left', margin: 0 }}>
          <li>20 років в IT</li>
          <li>14 років у software-бізнесі</li>
          <li>Понад 80 проєктів різного масштабу</li>
          <li>15 проєктів для 5 компаній зі списку Fortune 500</li>
          <li>4 роки в Google</li>
          <li><a href='https://youtube.com/@AboutProgramming'>youtube.com/@AboutProgramming</a></li>
        </ul>
      </div>
    </>
  );
}
