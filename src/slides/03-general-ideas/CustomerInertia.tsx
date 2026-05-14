export default function CustomerInertia() {
  return (
    <div className="slide-body wide">
      <h2>Покупці змінюються повільно. На декадах, не на циклах моделей.</h2>
      <p className="lede" style={{ margin: 0 }}>
        Технологія може бути на місці десятиліттями раніше, ніж її приймає більшість.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.4em', gap: '1em' }}>
        <div data-accent="blue">
          <h3 className="accent">E-commerce США</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>
            16.4%
          </p>
          <p style={{ margin: 0 }}>
            частка роздрібного обороту США онлайн у 2025. 30 років після запуску Amazon (1995) —
            84% продажів досі офлайн.
          </p>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Смартфон у дорослих США</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>
            17 років
          </p>
          <p style={{ margin: 0 }}>
            Pew: 35% у 2011, 91% у 2024. Від iPhone (2007) до майже-насичення — два десятиліття.
          </p>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Blockbuster</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>
            10 років
          </p>
          <p style={{ margin: 0 }}>
            2000: відмова купити Netflix за $50M. 2004: пік 9 100 магазинів. 2010: банкрутство.
          </p>
        </div>
      </div>

      <div className="callout">
        <strong>Покупці тримаються старих звичок десятиліттями.</strong> Інкумбент має час — поки
        гравець з кращим продуктом дозріває до маси.
      </div>

      <p className="slide-footnote">
        US Census Bureau, Quarterly E-Commerce Retail Sales 2025 ·{' '}
        <a href="https://www.census.gov/retail/ecommerce.html">census.gov/retail/ecommerce</a>
        {' · '}
        Pew Research Center, Mobile Fact Sheet ·{' '}
        <a href="https://www.pewresearch.org/internet/fact-sheet/mobile/">
          pewresearch.org/internet/fact-sheet/mobile
        </a>
        {' · '}
        Blockbuster timeline ·{' '}
        <a href="https://en.wikipedia.org/wiki/Blockbuster_(retailer)">
          en.wikipedia.org/wiki/Blockbuster
        </a>
      </p>
    </div>
  );
}
