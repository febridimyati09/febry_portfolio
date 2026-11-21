import { useEffect, useState } from "react";

// Mengembalikan id section yang sedang terlihat di tengah layar (untuk menandai link aktif).
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
    // eslint-disable-next-line
  }, []);
  return active;
}
