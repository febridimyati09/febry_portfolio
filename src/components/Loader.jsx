import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

// Animasi pembuka singkat (±1.8 detik) dan bisa dilewati.
export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(100, ((t - t0) / 1600) * 100);
      setPct(p);
      if (p < 100) raf = requestAnimationFrame(tick); else finish();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, []);

  const finish = () => { setLeaving(true); setTimeout(onDone, 600); };

  return (
    <div className={`loader ${leaving ? "leave" : ""}`} role="status" aria-label="Loading">
      <div className="loader-logo">{profile.brand}</div>
      <div className="loader-bar"><i style={{ transform: `scaleX(${pct / 100})` }} /></div>
      <button className="loader-skip" onClick={finish}>Skip</button>
    </div>
  );
}
