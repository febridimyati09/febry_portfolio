import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { nav } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import useMedia from "../hooks/useMedia";

const HIT = 40;            // lebar area sentuh indikator (px) — harus sama dengan .pill-dot di CSS
const DRAG_THRESHOLD = 4;  // gerak minimal (px) agar dihitung sebagai geseran, bukan ketukan

// Navigasi MOBILE: pill melayang dengan INDIKATOR bulat putih yang bisa digeser.
// - Label diam di tempat; hanya indikator yang bergerak (geser dengan jari/mouse).
// - Lepas jari: indikator menempel ke tengah item terdekat, halaman menggulir ke section itu.
// - Klik/ketuk label: indikator meluncur ke item itu dan halaman menggulir.
// - Saat halaman di-scroll, indikator mengikuti section yang terlihat (IntersectionObserver).
export default function MobileNav() {
  const mobile = useMedia("(max-width: 800px)");
  const links = nav.filter((n) => n.mobile !== false);
  const allIds = nav.map((n) => n.id);
  const active = useActiveSection(allIds);

  const [open, setOpen] = useState(() => window.scrollY <= 40);
  const [width, setWidth] = useState(0);
  const [ready, setReady] = useState(false);
  const [edge, setEdge] = useState(() => (window.scrollY <= 40 ? "top" : null)); // paling atas / paling bawah halaman
  const [locked, setLocked] = useState(null);    // item yang baru dipilih (menahan deteksi scroll sampai scroll halus selesai)
  const [preview, setPreview] = useState(null);  // item di bawah indikator saat digeser
  const [dragging, setDragging] = useState(false);

  const listRef = useRef(null);
  const dotRef = useRef(null);
  const centers = useRef([]);       // posisi tengah tiap item (px, relatif ke daftar)
  const drag = useRef(null);
  const lastY = useRef(0);
  const lockUntil = useRef(0);
  const lockedRef = useRef(null);
  const lockTimer = useRef(0);
  const lockMax = useRef(0);
  const collapseTimer = useRef(0);
  const focusFirst = useRef(false);

  // Item Journey (tidak ada di pill) dipetakan ke item pill sebelumnya (Projects)
  const toPill = (id) => {
    let i = allIds.indexOf(id);
    while (i > 0 && !links.some((l) => l.id === allIds[i])) i--;
    return allIds[i];
  };
  const spy = edge === "bottom" ? links[links.length - 1].id : edge === "top" ? links[0].id : toPill(active);
  const shown = locked ?? spy;
  const selId = preview != null ? links[preview].id : shown;
  const idx = Math.max(0, links.findIndex((l) => l.id === selId));
  const idxRef = useRef(idx);
  idxRef.current = idx;

  const place = useCallback((x) => {
    if (dotRef.current && x != null) dotRef.current.style.transform = `translate3d(${x - HIT / 2}px,0,0)`;
  }, []);
  const nearest = (pos) => centers.current.reduce((b, c, i) => (Math.abs(c - pos) < Math.abs(centers.current[b] - pos) ? i : b), 0);

  // Ukur daftar link & posisi tengah tiap item
  useLayoutEffect(() => {
    if (!mobile) return;
    const el = listRef.current;
    if (!el) return;
    const measure = () => {
      centers.current = [...el.children].map((li) => li.offsetLeft + li.offsetWidth / 2);
      setWidth(Math.min(el.offsetWidth, window.innerWidth - 34));
      if (!drag.current) place(centers.current[idxRef.current]);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); cancelAnimationFrame(raf); setReady(false); };
  }, [mobile, place]);

  // Indikator mengikuti item terpilih (kecuali sedang digeser)
  useLayoutEffect(() => {
    if (!mobile || drag.current) return;
    place(centers.current[idx]);
  }, [mobile, idx, width, place]);

  const release = useCallback(() => {
    clearTimeout(lockTimer.current); clearTimeout(lockMax.current);
    lockedRef.current = null; setLocked(null);
  }, []);
  const armRelease = () => { clearTimeout(lockTimer.current); lockTimer.current = setTimeout(release, 160); };
  const scheduleCollapse = () => { clearTimeout(collapseTimer.current); collapseTimer.current = setTimeout(() => setOpen(false), 1000); };

  // Scroll: deteksi paling atas/bawah, tahan penanda saat scroll halus, kecilkan pill saat scroll ke bawah
  useEffect(() => {
    if (!mobile) return;
    lastY.current = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const dy = y - lastY.current;
      lastY.current = y;
      const e = y <= 40 ? "top" : y + window.innerHeight >= document.documentElement.scrollHeight - 4 ? "bottom" : null;
      setEdge((p) => (p === e ? p : e));
      if (lockedRef.current) armRelease();
      if (drag.current || performance.now() < lockUntil.current) return;
      if (y <= 40) setOpen(true);
      else if (y > 80 && dy > 8) setOpen(false);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
    // eslint-disable-next-line
  }, [mobile]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); clearTimeout(collapseTimer.current); clearTimeout(lockTimer.current); clearTimeout(lockMax.current); };
  }, []);

  useEffect(() => {
    if (open && focusFirst.current) {
      focusFirst.current = false;
      listRef.current?.querySelector("a")?.focus({ preventScroll: true });
    }
  }, [open]);

  // Pilih item: kunci penanda sampai scroll selesai, lalu pill mengecil setelah animasi indikator
  const select = (id) => {
    lockedRef.current = id; setLocked(id);
    clearTimeout(lockMax.current); lockMax.current = setTimeout(release, 2500);
    armRelease();
    lockUntil.current = performance.now() + 1200;
    scheduleCollapse();
  };
  const goTo = (i) => {
    const id = links[i].id;
    select(id);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "start" });
  };

  // ----- Geser indikator (Pointer Events: sentuhan + mouse) -----
  const onDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    clearTimeout(collapseTimer.current);
    const dot = dotRef.current;
    dot.setPointerCapture(e.pointerId);
    dot.style.transition = "none";              // saat digeser: ikuti jari tanpa jeda
    const start = centers.current[idxRef.current];
    drag.current = { startX: e.clientX, startPos: start, pos: start, moved: false };
    setDragging(true);
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) < DRAG_THRESHOLD) return;
    d.moved = true;
    const c = centers.current;
    d.pos = Math.min(c[c.length - 1], Math.max(c[0], d.startPos + dx)); // tidak pernah keluar dari pill
    place(d.pos);
    const n = nearest(d.pos);
    setPreview((p) => (p === n ? p : n));
  };
  const onUp = (e) => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    const dot = dotRef.current;
    try { dot.releasePointerCapture(e.pointerId); } catch { /* sudah dilepas */ }
    dot.style.transition = "";                  // kembalikan transisi -> indikator menempel dengan halus
    const target = d.moved ? nearest(d.pos) : idxRef.current;
    setDragging(false); setPreview(null);
    place(centers.current[target]);
    goTo(target);
  };
  const onCancel = () => {
    if (!drag.current) return;
    drag.current = null;
    dotRef.current.style.transition = "";
    setDragging(false); setPreview(null);
    place(centers.current[idxRef.current]);
  };
  const onKey = (e) => {
    const k = e.key;
    const n = k === "ArrowRight" ? Math.min(idx + 1, links.length - 1) : k === "ArrowLeft" ? Math.max(idx - 1, 0)
      : k === "Home" ? 0 : k === "End" ? links.length - 1 : k === "Enter" || k === " " ? idx : null;
    if (n == null) return;
    e.preventDefault();
    goTo(n);
  };

  const expand = () => {
    clearTimeout(collapseTimer.current);
    lockUntil.current = performance.now() + 700;
    focusFirst.current = true;
    setOpen(true);
  };

  if (!mobile) return null;

  return (
    <div className="pill-wrap">
      <nav className={`pill ${open ? "open" : ""} ${ready ? "ready" : ""}`} aria-label="Main navigation">
        <div className="pill-links" id="pill-links" style={{ width: open ? width : 0 }}>
          <ul ref={listRef}>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} draggable="false" className={selId === id ? "active" : ""} aria-current={selId === id ? "true" : undefined} onClick={() => select(id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div ref={dotRef} className={`pill-dot ${dragging ? "is-dragging" : ""}`} role="slider" tabIndex={open ? 0 : -1}
            aria-label="Section selector" aria-orientation="horizontal" aria-valuemin={1} aria-valuemax={links.length} aria-valuenow={idx + 1} aria-valuetext={links[idx].label}
            onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onCancel} onKeyDown={onKey} />
        </div>
        <button className="pill-btn" type="button" aria-label="Open navigation menu" aria-expanded={open} aria-controls="pill-links" onClick={expand}>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 6h12M3 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>
        </button>
      </nav>
    </div>
  );
}
