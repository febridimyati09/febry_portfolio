import { profile, contact } from "../data/portfolio";
import { Laurel } from "./Ornaments";

export default function Footer() {
  const socials = [["GitHub", contact.github], ["LinkedIn", contact.linkedin], ["Instagram", contact.instagram]].filter(([, u]) => u);
  return (
    <footer className="footer">
      <Laurel className="footer-laurel" />
      <div>
        <p className="brand">{profile.brand}</p>
        <p className="small-text">{profile.tagline}</p>
      </div>
      <ul>{socials.map(([n, u]) => <li key={n}><a className="link" href={u} target="_blank" rel="noopener noreferrer">{n}</a></li>)}</ul>
      <div className="footer-end">
        <p className="small-text">© {new Date().getFullYear()} {profile.fullName}</p>
        <a href="#home" className="link">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
