import { useEffect, useRef } from "react";
import useMedia from "../hooks/useMedia";

// Kursor kustom — hanya aktif di desktop (mouse) dan bila animasi tidak dikurangi.
export default function Cursor() {
  const ref = useRef(null);
  const fine = useMedia("(hover: hover) and (pointer: fine)");
  const calm = useMedia("(prefers-reduced-motion: reduce)");
  const on = fine && !calm;

  useEffect(() => {
    if (!on) return;
    document.documentElement.classList.add("has-cursor");
    const el = ref.current;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      el.classList.toggle("big", !!e.target.closest("a, button"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => { window.removeEventListener("mousemove", move); document.documentElement.classList.remove("has-cursor"); };
  }, [on]);

  return on ? <div ref={ref} className="cursor" aria-hidden="true"><i /></div> : null;
}
