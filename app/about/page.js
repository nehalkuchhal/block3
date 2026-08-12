export const metadata = { title: "About — Block 3" };

const SUBHEADING = "Or maestros of imagination. Or rulers of creative kingdoms.";

const BODY = [
  "We’re thinkers.",
  "We believe ideas are great.",
  "But <strong>ideas not executed are just hallucinations</strong>.",
  "<strong>Aniket</strong> thinks about the big picture, the brand, the people and the possibilities. <strong>Ishaan</strong> turns those possibilities into something you can actually see, feel and remember. <strong>Addhyan</strong> finds the words, the stories and the strange little ideas that make people stop and look twice.",
  "Three heads.",
  "Three ways of looking at things.",
  "One block.",
  "Together, we’re dreamers, media creators, innovators, conceptualists, inventors, designers, brand builders, storytellers and a few other things we probably forgot to put on the list. But above everything else, we’re creatives who like to make things.",
  "Not just talk about them. Because there are already enough people following the herd.",
  "We’d rather be the <strong>Black Sheep</strong>.",
  "The ones who look different.",
  "Think different.",
  "And make things that feel like they could only have come from us.",
].join("<br/>");

export default function AboutPage() {
  return (
    <div className="page about-page">
      <div className="eyebrow">About</div>
      <h1>We’re not passionate creatives</h1>
      <p className="lede" dangerouslySetInnerHTML={{ __html: SUBHEADING }} />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="about-sheep" src="/black-sheeps.jpg" alt="Four white sheep and one black sheep" />

      <p className="about-body" dangerouslySetInnerHTML={{ __html: BODY }} />
    </div>
  );
}
