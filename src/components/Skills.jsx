import { skills } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section light marble">
      <Reveal as="h2" className="h2">Skills & Technologies</Reveal>
      <Reveal as="p" className="note">A starting point that keeps growing as I learn.</Reveal>
      <div className="skills">
        {skills.map((g, gi) => (
          <Reveal key={g.group} delay={gi * 120} className="skill-group">
            <h3><span className="group-num" aria-hidden="true">{["I", "II", "III", "IV", "V", "VI"][gi]}</span>{g.group}</h3>
            <ul>
              {g.items.map((s) => (
                <li key={s.name}><span className="ico" aria-hidden="true">{s.icon}</span>{s.name}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
