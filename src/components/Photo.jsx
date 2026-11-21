import { useState } from "react";

// Gambar dengan placeholder rapi jika file belum ada. Ukuran tetap -> tidak ada layout shift.
// `label` = teks kecil pada placeholder (bahasa Inggris).
export default function Photo({ src, alt, label = "Photo", position = "50% 50%", ratio = "4 / 5", eager = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio }}>
      {src && !failed ? (
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" style={{ objectPosition: position }} onError={() => setFailed(true)} />
      ) : (
        <div className="photo-ph" role="img" aria-label={alt}><span>{label}</span></div>
      )}
    </div>
  );
}
