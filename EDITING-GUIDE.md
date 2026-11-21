# Panduan Mengedit Website FEBRY (untuk pemula)

Hampir semua perubahan cukup dilakukan di **satu file**:

    src/data/portfolio.js

Buka file itu di VS Code. Ubah hanya teks **di dalam tanda kutip** ("..."). Jangan hapus tanda kutip, koma `,`, atau kurung `{ }` `[ ]`. Simpan dengan **Ctrl + S**.

Catatan: teks yang tampil di website ditulis dalam **bahasa Inggris**. Panduan ini saja yang berbahasa Indonesia.

Struktur foto:

    public/images/profile.jpg          ← foto profil (bagian atas website)
    public/images/about.jpg            ← foto bagian About
    public/images/projects/            ← gambar proyek (project-01.webp, dst.)

---

## 1. Mengganti nama dan deskripsi
Di `portfolio.js`, bagian `1. PERSONAL INFORMATION` (`export const profile`), ubah:
- `fullName` = nama lengkap, `nickname` = nama panggilan, `brand` = tulisan di pojok kiri atas
- `role`, `university`, `program` = peran, kampus, program studi
- `headline` dan `intro` = kalimat besar dan perkenalan singkat di bagian Home

Deskripsi About ada di `export const about`. Satu kalimat di dalam kutip = satu paragraf. Tulis dalam bahasa Inggris sederhana.

## 2. Mengganti foto profil
Simpan foto Anda di `public/images/` dengan nama **profile.jpg** (timpa file lama). Selesai.
Jika memakai nama lain (mis. `foto-saya.jpg`), ubah juga `photo: "/images/foto-saya.jpg"` di `portfolio.js`.

## 3. Mengganti foto About
Sama seperti di atas, tetapi namanya **about.jpg** (`aboutPhoto`). Jika tidak ingin menampilkan foto About, tulis `aboutPhoto: ""`.

## 4. Mengganti gambar proyek
Simpan gambar di `public/images/projects/` (mis. `project-01.webp`). Nama file harus sama dengan isi `image:` pada proyek tersebut di `portfolio.js`.
Tips: pakai format **.webp** atau **.jpg**, lebar sekitar 1200px, ukuran di bawah 300 KB, dengan perbandingan 4:3 agar tampil rapi.
Selama gambar belum ada, website menampilkan kotak placeholder yang rapi.

## 5. Mengubah nomor WhatsApp
Di `export const contact`, ubah:

    whatsapp: "628XXXXXXXXXX",

Tulis nomor Anda, misalnya `"6281234567890"` (awalan 62, tanpa 0, tanpa spasi). Menulis `"081234567890"` juga boleh — otomatis diubah.
Sebelum nomor asli diisi, tombol WhatsApp tampil redup (nonaktif) dan tidak membuka link rusak.
Pesan otomatis ada di baris `message` (tulis dalam bahasa Inggris).
Tombol **Contact Me** di navbar dan **Let's Talk on WhatsApp** otomatis memakai nomor ini.

Email, GitHub, Instagram, dan LinkedIn diisi di bagian yang sama. Isi dengan link lengkap diawali `https://`. Yang dikosongkan tidak akan tampil.

## 6. Menambahkan proyek baru
Di `export const projects`:
- **Tambah**: salin satu blok `{ ... },` lengkap, tempel di bawah blok terakhir, lalu ubah isinya.
- **Hapus**: hapus satu blok `{ ... },` utuh.

Contoh:

    {
      title: "My Project",
      description: "One or two sentences about the project.",
      detail: "A longer explanation (shown when 'View details' is clicked).",
      image: "/images/projects/project-04.webp",
      tech: ["HTML", "CSS"],
      github: "https://github.com/username/repo-name",
      demo: "",
    },

Kolom `detail`, `tech`, `github`, dan `demo` boleh dikosongkan (`""` atau `[]`); bagian tersebut otomatis disembunyikan.
Tiga proyek bertuliskan "Project 01–03" masih placeholder — ganti dengan proyek asli Anda.
Perjalanan belajar (Journey) diedit di `export const journey` dengan cara yang sama.

## 7. Menjalankan website di VS Code
1. Pasang **Node.js** (versi LTS) dari nodejs.org.
2. Buka folder proyek di VS Code, lalu buka Terminal (Ctrl + `).
3. Pertama kali saja, ketik: `npm install`
4. Jalankan: `npm run dev`, lalu buka alamat yang muncul (biasanya http://localhost:5173).
5. Setiap kali Anda menyimpan perubahan, halaman otomatis ter-refresh. Jika muncul error, baca pesannya di Terminal — biasanya ada tanda kutip atau koma yang terhapus.
6. Untuk versi final: `npm run build` (hasil di folder `dist/`).

## Tambahan: navigasi di HP
Di layar HP, menu berbentuk "pill" melayang di tengah atas (otomatis mengecil saat scroll, ketuk untuk membuka lagi). Navbar desktop tidak berubah.
Link yang tampil di pill diatur di `export const nav` pada `portfolio.js`. Baris `Journey` memakai `mobile: false` supaya pill tetap ringkas; hapus `, mobile: false` jika ingin menampilkannya di HP.
Letak foto: di desktop foto Home dan About berada di kiri, sedangkan di HP foto berada di atas teks.

## Tema Greek Classical: yang perlu Anda tahu
- **Nama "febry"** ditulis huruf kecil. Ubah di `portfolio.js`: `displayName` (judul besar di Home) dan `brand` (navbar, loader, footer). Teks kecil di atasnya ada di `greeting`.
- **Foto Home** (`profile.jpg`): pakai foto formal. Di desktop foto tampil berbentuk lengkung di sebelah kiri. Di HP foto menjadi latar penuh dengan teks di atasnya.
- **Foto About** (`about.jpg`): pakai foto santai/candid (suasana kafe, perpustakaan, atau luar ruangan dengan cahaya alami).
- **Wajah terpotong?** Ubah `photoPosition` (Home) atau `aboutPhotoPosition` (About) di `portfolio.js`. Format `"x% y%"`: makin kecil angka kedua, makin ke atas bagian foto yang ditampilkan. Contoh: `"50% 10%"`.
- **Warna emas** (`--gold`) dan gaya hiasan ada di `src/styles/classical.css`. Tema ini dimuat setelah `global.css`, sehingga menimpa gaya dasarnya.
- Hiasan kolom, lengkungan, dan pola meander dibuat dari garis SVG/CSS, bukan foto patung. Jika ingin foto patung asli, siapkan gambarnya sendiri dan beri tahu saya.

## Ilustrasi Yunani (kuil, lengkungan, kolom, laurel)
Semua hiasan dibuat sendiri dengan SVG dan CSS, tanpa file gambar tambahan:
- Kuil Doric di sisi kanan Home, lengkungan batu dengan siluet kuil di sisi kanan About, frontispis dan kolom di Contact, serta karangan laurel di footer. Kodenya ada di `src/components/Ornaments.jsx`.
- Pola meander dan fris ada di `src/styles/classical.css` (variabel `--meander` dan `--frieze`).

Ilustrasi besar hanya tampil di layar lebar. Untuk menyembunyikannya, ubah `decor = { show: false }` di `portfolio.js`.
Section Skills dan Journey sengaja dibuat terang (marmer dan perkamen) agar seimbang dengan section gelap. Kelasnya `light marble` dan `light parchment`.
Label "About Me" dan "A little story about me." diubah di `export const aboutIntro`.

## Navigasi HP: pill dengan indikator putih yang bisa digeser
Di layar HP (≤ 800px), menu berbentuk pill melayang di tengah atas. Di dalamnya ada titik putih kecil di bawah label:
- **Geser** titik dengan jari atau mouse. Label yang dilewati ikut terpilih. Saat dilepas, titik menempel ke tengah item terdekat dan halaman menggulir ke section itu.
- **Ketuk label** langsung: titik meluncur ke item itu dan halaman menggulir.
- **Scroll halaman**: titik otomatis mengikuti section yang sedang terlihat. Saat Journey terlihat, titik tetap di Projects karena Journey tidak ada di pill.
- Titik juga bisa dikendalikan dengan keyboard: fokus ke titik, lalu tekan panah kiri/kanan.
- Pill mengecil menjadi ikon menu saat Anda scroll ke bawah, dan ketuk ikon untuk membuka lagi.

Item pill diatur di `export const nav` pada `portfolio.js`. Baris dengan `mobile: false` (Journey) tidak muncul di pill. Kode ada di `src/components/MobileNav.jsx`, tampilannya di `src/styles/global.css` (bagian "Navigasi MOBILE").
