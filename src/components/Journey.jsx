import { journey } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="section light parchment">
      <Reveal as="h2" className="h2">Education & Learning Journey</Reveal>
      <ol className="timeline">
        {journey.map((j, i) => (
          <Reveal as="li" key={i} delay={i * 80}>
            <span className="t-period">{j.period}</span>
            <div>
              <h3>{j.title}</h3>
              {j.place && <p className="t-place">{j.place}</p>}
              <p>{j.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
