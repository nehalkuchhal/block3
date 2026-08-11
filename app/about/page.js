export const metadata = { title: "About — Pentagram" };

const STATS = [
  ["1972", "Founded, London"],
  ["25", "Partners"],
  ["5", "Offices"],
  ["300+", "Designers & makers"],
];

const PARTNERS = [
  ["Marina Voss", "Graphics & Identity"],
  ["Theo Almeida", "Digital & Products"],
  ["Ruth Okafor", "Editorial & Type"],
  ["Daniel Reyes", "Environments"],
  ["Hana Sato", "Packaging & Brand"],
  ["Oliver Grant", "Motion & Sound"],
];

export default function AboutPage() {
  return (
    <div className="page">
      <div className="eyebrow">About</div>
      <h1>The world&apos;s largest independent design consultancy.</h1>
      <p className="lede">Owned and run by its partners.</p>

      <div className="stats">
        {STATS.map(([n, l]) => (
          <div className="stat" key={l}>
            <div className="n">{n}</div>
            <div className="l">{l}</div>
          </div>
        ))}
      </div>

      <p>
        Pentagram is a multidisciplinary studio spanning graphics and identity, products and packaging,
        exhibitions and installations, websites and digital experiences, advertising and communications,
        sound and motion. What connects the work is not a house style but a shared commitment to substance
        over surface.
      </p>
      <p>
        There are no shareholders and no CEO. Each partner is a working designer who leads their own team and
        answers directly to the clients they serve. That structure keeps the studio small in feel and
        independent in judgment, even as the work reaches a global scale.
      </p>

      <div className="eyebrow" style={{ marginTop: 52 }}>Selected partners</div>
      <div className="partners">
        {PARTNERS.map(([pn, pr]) => (
          <div className="partner" key={pn}>
            <div className="pn">{pn}</div>
            <div className="pr">{pr}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
