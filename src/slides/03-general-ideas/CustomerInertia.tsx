export default function CustomerInertia() {
  return (
    <div className="slide-body wide">
      <h2>Покупці змінюються повільно. Десятиліттями, а не циклами моделей.</h2>
      <p className="lede" style={{ margin: 0 }}>
        Технологія може бути технічно ідеальною вже сьогодні, але масове прийняття ринком (Mass Adoption) займає роки.
      </p>

      <div className="three-col wide text-md" style={{ marginTop: '0.8em', gap: '1em' }}>
        <div data-accent="blue">
          <h3 className="accent">E-commerce у США</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>
            16.4%
          </p>
          <p style={{ margin: 0 }}>
            частка онлайн-продажів у 2025 році. Навіть через 30 років після запуску Amazon (1995), 
            <strong> 83%</strong> роздрібної торгівлі досі відбувається офлайн.
          </p>
        </div>
        <div data-accent="blue">
          <h3 className="accent">Ера смартфонів</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>
            17 років
          </p>
          <p style={{ margin: 0 }}>
            Від презентації iPhone (2007) до масового насичення ринку США (91% у 2024 році) 
            знадобилося майже два десятиліття.
          </p>
        </div>
        <div data-accent="red">
          <h3 className="accent">Кейс Blockbuster</h3>
          <p style={{ fontSize: '2em', fontWeight: 700, margin: '0.15em 0', lineHeight: 1 }}>
            10 років
          </p>
          <p style={{ margin: 0 }}>
            Час, який вони змарнували. У 2000 відмовилися купити Netflix за $50M. 
            У 2004 мали пікові 9100 магазинів. У 2010 збанкрутували.
          </p>
        </div>
      </div>

      <div className="callout callout-yellow" style={{ marginTop: '1.2em' }}>
        <strong>Споживачі тримаються за старі звички дуже довго.</strong> У традиційного бізнесу є час на адаптацію, поки ШІ-стартапи шукають шлях до масового клієнта. Але цей запас часу не нескінченний — запитайте Blockbuster.
      </div>

      <p className="slide-footnote" style={{ marginTop: '1.5em' }}>
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