import { contact } from "../data/portfolio";

// Mengubah nomor apa pun ("0812-..", "+62 812..", "62812..") menjadi format internasional 62xxxx.
export function normalizeNumber(raw) {
  let d = String(raw || "").replace(/\D/g, "");
  if (d.startsWith("0")) d = "62" + d.slice(1);
  else if (d.startsWith("8")) d = "62" + d;
  return d.length >= 10 && d.length <= 15 ? d : ""; // placeholder / nomor terlalu pendek dianggap belum diisi
}

const number = normalizeNumber(contact.whatsapp);

export const whatsapp = {
  ready: number !== "",
  // Jika nomor belum diisi, link diarahkan ke bagian Contact (bukan nomor palsu).
  url: number ? `https://wa.me/${number}?text=${encodeURIComponent(contact.message)}` : "#contact",
  linkProps: number ? { target: "_blank", rel: "noopener noreferrer" } : {},
};
