import { nav, profile } from "../data/portfolio";
import { whatsapp } from "../utils/whatsapp";
import useActiveSection from "../hooks/useActiveSection";
import Button from "./Button";

// Navbar DESKTOP (disembunyikan di layar ≤ 800px; di HP dipakai MobileNav).
export default function Navbar() {
  const active = useActiveSection(nav.map((n) => n.id));
  return (
    <header className="nav">
      <a href="#home" className="brand" aria-label="Back to top">{profile.brand}</a>
      <nav className="menu" aria-label="Main navigation">
        {nav.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "true" : undefined}>
            {label}
          </a>
        ))}
        <Button href={whatsapp.url} className="btn-sm" arrow={false} {...whatsapp.linkProps}>Contact Me</Button>
      </nav>
    </header>
  );
}
