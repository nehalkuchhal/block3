export const metadata = { title: "About — Block 3" };

const SUBHEADING = "Or maestros of imagination.<br/>Or rulers of creative kingdoms.";

const STANZAS = [
  "We’re thinkers.",
  "We believe ideas are great.<br/>But ideas not executed are just hallucinations.",
  "Aniket thinks about the big picture, the brand, the people and the possibilities. Ishaan turns those possibilities into something you can actually see, feel and remember. Addhyan finds the words, the stories and the strange little ideas that make people stop and look twice.",
  "Three heads.<br/>Three ways of looking at things.<br/>One block.",
  "Together, we’re dreamers, media creators, innovators, conceptualists, inventors, designers, brand builders, storytellers and a few other things we probably forgot to put on the list. But above everything else, we’re creatives who like to make things.",
  "Not just talk about them. Because there are already enough people following the herd.",
  "We’d rather be the Black Sheep.<br/>The ones who look different.<br/>Think different.<br/>And make things that feel like they could only have come from us.",
];

export default function AboutPage() {
  return (
    <div className="page about-page">
      <div className="eyebrow">About</div>
      <h1>We’re not passionate creatives</h1>
      <p className="lede" dangerouslySetInnerHTML={{ __html: SUBHEADING }} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="about-sheep" src="/black-sheeps.jpg" alt="Four white sheep and one black sheep" />

      <div className="about-body">
        {STANZAS.map((html, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </div>
    </div>
  );
}
