import { useEffect, useRef } from "react";

// Memunculkan elemen saat masuk layar (Intersection Observer).
// Jika prop `force` diberikan (true/false), muncul sesuai nilainya (dipakai di Hero setelah loader).
export default function Reveal({ as: Tag = "div", delay = 0, force, className = "", children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    if (force !== undefined) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [force]);
  return (
    <Tag ref={ref} className={`reveal ${className} ${force ? "in" : ""}`} style={{ "--d": `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

// Memecah teks menjadi kata-kata yang naik satu per satu (staggered).
export function Words({ text, start = 0 }) {
  return text.split(" ").map((w, i) => (
    <span className="w" key={i}><span style={{ "--i": i + start }}>{w}&nbsp;</span></span>
  ));
}
