import { useEffect, useRef } from "react";
import { profile, decor } from "../data/portfolio";
import Reveal, { Words } from "./Reveal";
import Photo from "./Photo";
import Button from "./Button";
import useMedia from "../hooks/useMedia";
import { TempleFragment, Sparkle } from "./Ornaments";

export default function Hero({ ready }) {
  const imgRef = useRef(null);
  const desktop = useMedia("(min-width: 900px) and (hover: hover) and (prefers-reduced-motion: no-preference)");

  // Parallax ringan — hanya desktop
  useEffect(() => {
    if (!desktop) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.08}px, 0)`;
      });
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [desktop]);

  return (
    <section id="home" className="hero">
      {decor.show && <TempleFragment className="hero-temple" />}
      <Sparkle className="hero-spark" />
      <div className={`hero-photo ${ready ? "in" : ""}`}>
        <div ref={imgRef} className="hero-frame">
          <Photo src={profile.photo} alt={`Portrait of ${profile.fullName}`} label="" position={profile.photoPosition} ratio="4 / 5" eager />
        </div>
      </div>
      <div className="hero-text">
        <Reveal force={ready} className="small hello">{profile.greeting}</Reveal>
        <h1 className={`hero-name reveal-words ${ready ? "in" : ""}`}>
          <span className="sr-only">{profile.fullName} — </span><Words text={profile.displayName} />
        </h1>
        <Reveal force={ready} delay={350} className="hero-id">{profile.fullName}</Reveal>
        <Reveal force={ready} delay={420} className="hero-meta">
          <span>{profile.role}</span><span>{profile.university}</span><span>{profile.location}</span>
        </Reveal>
        <Reveal force={ready} delay={550} as="p" className="hero-headline">“{profile.headline}”</Reveal>
        <Reveal force={ready} delay={680} as="p" className="hero-intro">{profile.intro}</Reveal>
        <Reveal force={ready} delay={800} className="hero-actions">
          <Button href="#projects">Explore My Work</Button>
          <Button href={profile.cv} variant="ghost" download arrow={false}>Download My CV</Button>
        </Reveal>
      </div>
      <a href="#about" className="scroll-ind" aria-label="Scroll down"><i /></a>
    </section>
  );
}
