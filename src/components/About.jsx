import { about, aboutIntro, profile, decor } from "../data/portfolio";
import Reveal from "./Reveal";
import Photo from "./Photo";
import { ArchwayArt } from "./Ornaments";

// Desktop: foto di KIRI, judul + teks di KANAN. Mobile: foto di ATAS (urutan DOM = foto dulu).
export default function About() {
  return (
    <section id="about" className="section about">
      {decor.show && <ArchwayArt className="about-art" />}
      <div className={`about-grid ${profile.aboutPhoto ? "" : "solo"}`}>
        {profile.aboutPhoto && (
          <Reveal className="about-photo">
            <Photo src={profile.aboutPhoto} alt={`Portrait of ${profile.fullName}`} label="Photo" position={profile.aboutPhotoPosition} ratio="4 / 5" />
          </Reveal>
        )}
        <div className="about-body">
          <Reveal className="eyebrow">{aboutIntro.label}</Reveal>
          <Reveal as="h2" className="h2 h2-plain" delay={80}>{aboutIntro.heading}</Reveal>
          <div className="about-text">
            {about.map((p, i) => <Reveal as="p" key={i} delay={i * 100}>{p}</Reveal>)}
            <Reveal as="dl" className="facts" delay={300}>
              <div><dt>Role</dt><dd>{profile.role}</dd></div>
              <div><dt>University</dt><dd>{profile.university}</dd></div>
              <div><dt>Program</dt><dd>{profile.program}</dd></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
