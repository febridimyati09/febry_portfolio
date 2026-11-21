import { marquee } from "../data/portfolio";

// Teks berjalan tanpa akhir (CSS murni). Daftar diduplikasi agar loop mulus.
export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}
