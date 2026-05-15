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
          <li>20 років в IT · понад 80 проєктів</li>
          <li>15 проєктів для 5 компаній з Fortune 500</li>
          <li>4 роки в Google Cloud</li>
          <li>CEO / CTO · виростив команду з 0 до 150 людей</li>
          <li>Інтерес в AI з 2011: від Stanford «Intro to AI» до PhD дослідження: LLM + knowledge graphs</li>
          <li>Visiting Lecturer · American University Kyiv (AI-driven development)</li>
          <li>YouTube <a href="https://youtube.com/@AboutProgramming">@AboutProgramming</a></li>
        </ul>
      </div>
    </>
  );
}
