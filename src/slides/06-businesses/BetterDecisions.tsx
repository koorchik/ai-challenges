export default function BetterDecisions() {
  return (
    <div className="slide-body wide">
      <h2>Універсальний підхід до кращих рішень про ШІ</h2>
      <p className="lede">
        Три кроки, які повторюються щокварталу — і дають чесну відповідь, де ШІ приносить гроші, а де ні.
      </p>

      <div className="three-col text-md">
        <div className="tile" data-accent="blue" style={{ padding: '0.9em' }}>
          <h3 className="accent" style={{ fontSize: '1.05em', marginBottom: '0.4em' }}>
            (1) Визначити проблему
          </h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            «Яку наша найбільша проблема?» Один процес із топ-20, де AI-lift очевидний.
          </p>
        </div>

        <div className="tile" data-accent="amber" style={{ padding: '0.9em' }}>
          <h3 className="accent" style={{ fontSize: '1.05em', marginBottom: '0.4em' }}>
            (2) Знайти варіанти
          </h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            «Кілька рішень — двох достатньо». 2 підходи end-to-end з реальними користувачами, baseline без ШІ.
          </p>
        </div>

        <div className="tile" data-accent="green" style={{ padding: '0.9em' }}>
          <h3 className="accent" style={{ fontSize: '1.05em', marginBottom: '0.4em' }}>
            (3) Вибрати найкраще
          </h3>
          <p style={{ margin: 0, color: 'var(--text-dim)' }}>
            «Найкраще саме для вашої проблеми». Працює → 4× scope. Ні → закрийте, без «дайте ще місяць»..
          </p>
        </div>
      </div>

      <p className="slide-footnote">
        Цикл повторюється
      </p>
    </div>
  );
}
