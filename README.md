# FEBRY. — Portofolio Pribadi (React + Vite)

## Cara menjalankan
1. Pasang **Node.js** (versi LTS) dari https://nodejs.org
2. Buka folder ini di VS Code, lalu buka Terminal (Ctrl + `).
3. Jalankan: `npm install`  (cukup sekali)
4. Jalankan: `npm run dev`  → buka alamat yang muncul (biasanya http://localhost:5173)
5. Untuk versi final: `npm run build` (hasil di folder `dist/`), cek dengan `npm run preview`.

## Struktur & fungsi file
- `index.html` — halaman dasar, judul, SEO meta, dan font.
- `src/main.jsx` — titik awal React.
- `src/App.jsx` — menyusun semua bagian halaman.
- `src/data/portfolio.js` — **semua konten** (nama, skill, proyek, kontak, foto). Edit di sini.
- `src/components/` — Navbar, Hero, About, Skills, Projects, Journey, Contact, Footer, Marquee, Loader (animasi pembuka), Cursor (kursor desktop), Button (magnetik + ripple), Photo (gambar + placeholder), Reveal (animasi saat scroll).
- `src/hooks/useMedia.js` — deteksi desktop/mobile dan reduced-motion.
- `src/styles/global.css` — seluruh styling dan warna (`:root`).
- `public/images/` — foto Anda (lihat README.txt di dalamnya). `public/cv/` — file CV.

## Yang perlu Anda isi
- Foto: `public/images/profile.jpg`, `about.jpg`, `projects/project-01.webp` dst.
- CV: `public/cv/CV-Akhmad-Febri-Dimyati.pdf`
- `src/data/portfolio.js`: nomor WhatsApp, email, GitHub, LinkedIn, Instagram, proyek asli, tahun di bagian Journey.


> Panduan lengkap untuk pemula: lihat **EDITING-GUIDE.md**.
