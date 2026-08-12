export const metadata = { title: "About — Block 3" };

const SUBHEADING = "Or maestros of imagination.<br/>Or rulers of creative kingdoms.";

const STANZAS = [
  "We’re thinkers.<br/>We think about you.<br/>We think about the way you want the world to see you.<br/>And then we figure out how to make that exist.",
  "We believe ideas are great.<br/>But an idea sitting inside your head doesn’t really do much.<br/><strong>Ideas not executed are just hallucinations.</strong>",
  "So we build the blueprint.<br/>We shape the thought.<br/>We write the story.<br/>We design the world around it.<br/>And then we bring the whole thing to life.",
  "That’s where the three of us come in.<br/><strong>Aniket</strong> thinks about the big picture, the brand, the people and the possibilities.<br/><strong>Ishaan</strong> turns those possibilities into something you can actually see, feel and remember.<br/><strong>Addhyan</strong> finds the words, the stories and the strange little ideas that make people stop and look twice.",
  "Three heads.<br/>Three ways of looking at things.<br/>One block.",
  "Together, we’re dreamers, media creators, innovators, conceptualists, inventors, designers, brand builders, storytellers and a few other things we probably forgot to put on the list.",
  "But above everything else, we’re creatives who like to make things.<br/>Not just talk about them.",
  "Because there are already enough people following the herd.<br/>We’d rather be the <strong>Black Sheep</strong>.<br/>The ones who look different.<br/>Think different.<br/>And make things that feel like they could only have come from us.",
];

export default function AboutPage() {
  return (
    <div className="page about-page">
      <div className="eyebrow">About</div>
      <h1>We’re not passionate creatives</h1>
      <p className="lede" dangerouslySetInnerHTML={{ __html: SUBHEADING }} />

      <div className="about-body">
        {STANZAS.map((html, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </div>
    </div>
  );
}
