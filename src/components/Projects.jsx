import { useState } from "react";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import Photo from "./Photo";

const toRoman = (n) => { const m = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]; let r = ""; for (const [v, s] of m) while (n >= v) { r += s; n -= v; } return r; };

function Project({ p, i }) {
  const [open, setOpen] = useState(false);
  const num = toRoman(i + 1);
  return (
    <Reveal as="article" className={`project ${i % 2 ? "flip" : ""}`}>
      <div className="project-img"><Photo src={p.image} alt={`Preview of ${p.title}`} label="Preview coming soon" position="50% 50%" ratio="4 / 3" /></div>
      <div className="project-body">
        <span className="project-index st" style={{ "--i": 0 }}>Plate {num}</span>
        <h3 className="st" style={{ "--i": 1 }}>{p.title}</h3>
        <p className="st" style={{ "--i": 2 }}>{p.description}</p>
        {p.detail && <div className={`project-detail ${open ? "open" : ""}`} id={`d-${i}`}><div><p>{p.detail}</p></div></div>}
        {p.tech?.length > 0 && <ul className="tags st" style={{ "--i": 3 }}>{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>}
        {(p.detail || p.github || p.demo) && (
          <div className="project-links st" style={{ "--i": 4 }}>
            {p.detail && (
              <button className="link" aria-expanded={open} aria-controls={`d-${i}`} onClick={() => setOpen(!open)}>
                {open ? "Hide details" : "View details"} <span className="arrow" aria-hidden="true">↗</span>
              </button>
            )}
            {p.github && <a className="link" href={p.github} target="_blank" rel="noopener noreferrer">GitHub <span className="arrow" aria-hidden="true">↗</span></a>}
            {p.demo && <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo <span className="arrow" aria-hidden="true">↗</span></a>}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal as="h2" className="h2">Featured Projects</Reveal>
      <div className="project-list">{projects.map((p, i) => <Project key={p.title + i} p={p} i={i} />)}</div>
    </section>
  );
}
