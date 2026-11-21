import { contact } from "../data/portfolio";
import { whatsapp } from "../utils/whatsapp";
import Reveal from "./Reveal";
import Button from "./Button";
import { Pediment, ColumnArt } from "./Ornaments";

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.5L3 21z"/><path d="M9 9.5c0 3 2.500 5.500 5.500 5.500l1.200-1.300-1.800-1-.9.800a4 4 0 0 1-1.800-1.800l.8-.9-1-1.800L9 9.500z"/></svg>
);

export default function Contact() {
  const links = [
    ["GitHub", contact.github],
    ["Email", contact.email && `mailto:${contact.email}`],
    ["LinkedIn", contact.linkedin],
    ["Instagram", contact.instagram],
  ].filter(([, url]) => url);

  return (
    <section id="contact" className="section contact">
      <ColumnArt className="contact-col left" />
      <ColumnArt className="contact-col right" />
      <Reveal><Pediment className="contact-pediment" /></Reveal>
      <Reveal as="h2" className="h2 big">Let’s talk.</Reveal>
      <Reveal delay={150}>
        <Button href={whatsapp.url} icon={<WaIcon />} disabled={!whatsapp.ready} {...whatsapp.linkProps}>
          Let’s Talk on WhatsApp
        </Button>
        {!whatsapp.ready && <p className="note">WhatsApp contact will be available soon.</p>}
      </Reveal>
      {links.length > 0 && (
        <Reveal as="ul" className="contact-links" delay={250}>
          {links.map(([n, u]) => (
            <li key={n}><a className="link" href={u} {...(u.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{n} <span className="arrow" aria-hidden="true">↗</span></a></li>
          ))}
        </Reveal>
      )}
    </section>
  );
}
