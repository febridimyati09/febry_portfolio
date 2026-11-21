// Hiasan garis klasik Yunani (SVG, ringan). Hanya dekoratif -> aria-hidden.
// Kolom bergaya Ionic: kapital bergulung, batang beralur, dan alas.
export function ColumnArt({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 80 420" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" focusable="false">
      <rect x="2" y="0" width="76" height="8" />
      <path d="M8 8v14a10 10 0 1 0 0 0M72 8v14a10 10 0 1 1 0 0" />
      <circle cx="14" cy="26" r="9" /><circle cx="14" cy="26" r="3.5" />
      <circle cx="66" cy="26" r="9" /><circle cx="66" cy="26" r="3.5" />
      <path d="M18 35h44l-4 9H22z" />
      <path d="M20 44v320M60 44v320M30 44v320M40 44v320M50 44v320" />
      <rect x="14" y="364" width="52" height="10" />
      <rect x="6" y="374" width="68" height="12" />
      <rect x="0" y="386" width="80" height="14" />
    </svg>
  );
}

// Bintang empat sudut (hiasan)
export function Sparkle({ className = "" }) {
  return (
    <svg className={`sparkle ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" fill="currentColor" />
    </svg>
  );
}

// Pembatas: garis tipis dengan bintang di tengah
export function StarDivider() {
  return <div className="star-divider" aria-hidden="true"><span /><Sparkle /><span /></div>;
}

// ---------- ILUSTRASI ORISINAL (SVG) — kuil Doric, lengkungan, entablature, karangan laurel ----------
const STONE = [["0", "#9a8870"], ["1", "#4f4034"]];
const Defs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-stone`} x1="0" y1="0" x2="0" y2="1">{STONE.map(([o, c]) => <stop key={o} offset={o} stopColor={c} />)}</linearGradient>
    <linearGradient id={`${id}-shaft`} x1="0" y1="0" x2="1" y2="0">
      {[["0", "#3a2f27"], [".3", "#8c7a64"], [".55", "#b7a38b"], [".82", "#6d5b49"], ["1", "#352a22"]].map(([o, c]) => <stop key={o} offset={o} stopColor={c} />)}
    </linearGradient>
  </defs>
);

// Fragmen kuil: entablature (arsitrave, fris triglif-metop, korniche) dan dua kolom Doric beralur.
export function TempleFragment({ className = "" }) {
  const col = (x) => (
    <g key={x}>
      <rect x={x - 8} y="150" width="136" height="22" fill="url(#tf-stone)" />
      <path d={`M${x + 2} 172Q${x - 6} 190 ${x + 8} 196H${x + 112}Q${x + 126} 190 ${x + 118} 172Z`} fill="url(#tf-stone)" />
      <rect x={x + 8} y="196" width="104" height="620" fill="url(#tf-shaft)" />
      {[1, 2, 3, 4, 5, 6, 7].map((k) => <path key={k} d={`M${x + 8 + (104 * k) / 8} 196V816`} stroke="#292521" strokeOpacity=".4" />)}
      <rect x={x - 30} y="816" width="180" height="24" fill="url(#tf-stone)" />
      <rect x={x - 46} y="840" width="212" height="30" fill="url(#tf-stone)" />
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 360 900" preserveAspectRatio="xMaxYMin slice" aria-hidden="true" focusable="false">
      <Defs id="tf" />
      <rect y="0" width="360" height="26" fill="url(#tf-stone)" />
      <rect y="26" width="360" height="74" fill="#2d2621" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x={12 + i * 60} y="30" width="22" height="66" fill="url(#tf-stone)" />
          <path d={`M${19 + i * 60} 30V96M${27 + i * 60} 30V96`} stroke="#292521" strokeWidth="2" />
          {[0, 1, 2].map((g) => <rect key={g} x={14 + g * 8 + i * 60} y="140" width="5" height="8" fill="#8c7a64" />)}
        </g>
      ))}
      <rect y="100" width="360" height="40" fill="url(#tf-stone)" />
      {col(40)}{col(200)}
    </svg>
  );
}

// Lengkungan batu dengan pilar dan batu kunci; di dalamnya tampak siluet kuil di kejauhan.
export function ArchwayArt({ className = "" }) {
  const pt = (r, deg) => [150 - r * Math.cos((deg * Math.PI) / 180), 240 - r * Math.sin((deg * Math.PI) / 180)];
  const rays = Array.from({ length: 13 }, (_, i) => i * 15).filter((d) => d > 0 && d < 180);
  return (
    <svg className={className} viewBox="0 0 300 520" preserveAspectRatio="xMaxYMin slice" aria-hidden="true" focusable="false">
      <Defs id="aw" />
      <defs>
        <linearGradient id="aw-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6a5646" /><stop offset=".7" stopColor="#b7a38b" /><stop offset="1" stopColor="#d3c5b2" /></linearGradient>
        <clipPath id="aw-clip"><path d="M70 470V240A80 80 0 0 1 230 240V470Z" /></clipPath>
      </defs>
      <g clipPath="url(#aw-clip)">
        <rect x="60" y="150" width="180" height="330" fill="url(#aw-sky)" />
        <path d="M60 400Q110 372 150 392T240 380V470H60Z" fill="#6d5b49" opacity=".6" />
        <g fill="#3a2f27" opacity=".85">
          <rect x="100" y="396" width="100" height="6" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => <rect key={i} x={105 + i * 14} y="362" width="5" height="34" />)}
          <rect x="100" y="354" width="100" height="8" />
          <path d="M100 354L150 328L200 354Z" />
        </g>
        <rect x="60" y="402" width="180" height="70" fill="#3a2f27" />
      </g>
      <path d="M40 240A110 110 0 0 1 260 240H230A80 80 0 0 0 70 240Z" fill="url(#aw-stone)" />
      {rays.map((d) => { const [x1, y1] = pt(80, d), [x2, y2] = pt(110, d); return <path key={d} d={`M${x1} ${y1}L${x2} ${y2}`} stroke="#292521" strokeOpacity=".55" />; })}
      <path d={`M${pt(80, 82)[0]} ${pt(80, 82)[1]}L${pt(120, 82)[0]} ${pt(120, 82)[1]}L${pt(120, 98)[0]} ${pt(120, 98)[1]}L${pt(80, 98)[0]} ${pt(80, 98)[1]}Z`} fill="url(#aw-stone)" stroke="#292521" strokeOpacity=".6" />
      {[40, 230].map((x) => (
        <g key={x}>
          <rect x={x - 6} y="232" width="42" height="12" fill="url(#aw-stone)" />
          <rect x={x - 2} y="244" width="34" height="6" fill="url(#aw-stone)" />
          <rect x={x} y="250" width="30" height="222" fill="url(#aw-shaft)" />
          {[1, 2, 3, 4].map((k) => <path key={k} d={`M${x + k * 6} 250V472`} stroke="#292521" strokeOpacity=".4" />)}
          <rect x={x - 8} y="470" width="46" height="14" fill="url(#aw-stone)" />
        </g>
      ))}
      <rect x="10" y="484" width="280" height="16" fill="url(#aw-stone)" />
      <rect x="0" y="500" width="300" height="20" fill="url(#aw-stone)" />
    </svg>
  );
}

// Frontispis (pediment) segitiga sebagai hiasan atas judul Contact.
export function Pediment({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 400 92" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">
      <path d="M4 86L200 8L396 86Z" /><path d="M32 80L200 21L368 80" strokeOpacity=".6" />
      <path d="M0 88H400M10 91H390" />
      <path d="M200 44c0 8 6 14 14 14c-8 0-14 6-14 14c0-8-6-14-14-14c8 0 14-6 14-14Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Karangan laurel (dua cabang daun), dibuat dari rumus agar ringan.
export function Laurel({ className = "" }) {
  const R = 34, C = 50;
  const side = (sgn) => Array.from({ length: 10 }, (_, i) => {
    const f = (i / 9) * 2.5;
    const x = C + sgn * R * Math.sin(f), y = C + R * Math.cos(f);
    const ang = (Math.atan2(-Math.sin(f), sgn * Math.cos(f)) * 180) / Math.PI;
    return { x, y, ang };
  });
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      {[-1, 1].map((sgn) => {
        const pts = side(sgn);
        return (
          <g key={sgn}>
            <path d={pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join("")} fill="none" stroke="currentColor" strokeWidth="1" />
            {pts.map((p, i) => [-38, 38].map((o) => (
              <ellipse key={`${i}${o}`} cx="5" cy="0" rx="6" ry="2.3" fill="currentColor" opacity=".85" transform={`translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${(p.ang + o).toFixed(1)})`} />
            )))}
          </g>
        );
      })}
    </svg>
  );
}
