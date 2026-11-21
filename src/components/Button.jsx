import { useRef } from "react";
import useMedia from "../hooks/useMedia";

// Tombol/link dengan efek magnetik (desktop), ripple saat diklik, dan panah animasi.
export default function Button({ href, children, variant = "solid", arrow = true, icon = null, disabled = false, className = "", onClick, ...rest }) {
  const ref = useRef(null);
  const fine = useMedia("(hover: hover) and (pointer: fine)");
  const calm = useMedia("(prefers-reduced-motion: reduce)");

  const move = (e) => {
    if (!fine || calm) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  const ripple = (e) => {
    if (onClick) onClick(e);
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const s = document.createElement("span");
    s.className = "ripple";
    s.style.left = `${e.clientX - r.left}px`;
    s.style.top = `${e.clientY - r.top}px`;
    el.appendChild(s);
    setTimeout(() => s.remove(), 600);
  };

  return (
    <a ref={ref} href={href} className={`btn btn-${variant} ${disabled ? "is-disabled" : ""} ${className}`}
       onMouseMove={move} onMouseLeave={leave} onClick={ripple}
       aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : undefined} {...rest}>
      {icon}
      <span className="btn-label">{children}</span>
      {arrow && <span className="arrow" aria-hidden="true">↗</span>}
    </a>
  );
}
