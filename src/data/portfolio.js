/* ==========================================================================
   FILE UTAMA UNTUK MENGEDIT ISI WEBSITE  →  src/data/portfolio.js
   Semua teks, foto, link, dan proyek diatur dari sini.
   Aturan penting:
   - Ubah hanya teks di dalam tanda kutip "..." — jangan hapus tanda kutip, koma, atau kurung.
   - Teks yang tampil di website ditulis dalam bahasa Inggris.
   - Kolom yang dikosongkan ("") akan otomatis disembunyikan di website.
   - Path foto diawali "/" artinya mengarah ke folder  public/
   ========================================================================== */

/* ---------------- 1. PERSONAL INFORMATION ---------------- */
export const profile = {
  fullName: "Akhmad Febri Dimyati",
  nickname: "Febri",
  brand: "febry",                      // Nama di navbar, loader, dan footer (huruf kecil)
  displayName: "febry",                // Judul besar di Home (tetap huruf kecil)
  greeting: "HELLO, I'M",              // Teks kecil di atas nama
  role: "Informatics Student",         // Peran / status
  university: "UIN Siber Syekh Nurjati Cirebon",
  program: "Informatics",              // Program studi
  location: "Indonesia",
  headline: "Building ideas, exploring technology, and creating meaningful digital experiences.",
  intro: "An Informatics student with an interest in programming, technology, and continuous learning.",
  tagline: "Designed with curiosity and built with purpose.",

  // FOTO — ganti file di folder public/images/ (nama sama), atau ubah path di bawah.
  photo: "/images/profile.jpg",        // Foto profil (Hero)
  aboutPhoto: "/images/about.jpg",     // Foto About — disarankan foto santai/candid ("" = disembunyikan)
  // Titik fokus foto saat dipotong (x% y%). Kecilkan angka kedua agar wajah lebih ke atas/terlihat.
  photoPosition: "50% 20%",
  aboutPhotoPosition: "50% 30%",
  cv: "/cv/CV-Akhmad-Febri-Dimyati.pdf",
};

/* Judul di bagian About */
export const aboutIntro = { label: "About Me", heading: "A little story about me." };

/* ---------------- ILUSTRASI DEKORASI YUNANI ----------------
   Kuil, lengkungan, kolom, dan karangan laurel dibuat sendiri dengan SVG/CSS (src/components/Ornaments.jsx).
   show: false = semua ilustrasi besar disembunyikan (pola kecil tetap tampil). */
export const decor = { show: true };

/* About: satu teks di dalam kutip = satu paragraf. Tambah/hapus baris sesukanya. */
export const about = [
  "Hi, I'm Febri. I'm studying Informatics at UIN Siber Syekh Nurjati Cirebon.",
  "I'm interested in programming and technology, and I'm learning to build small, useful things — from the way a website looks to the logic behind it.",
  "My goal is simple: keep learning, build real projects, and grow into a developer who thinks and works with care.",
];

/* ---------------- 2. CONTACT & SOCIAL LINKS ---------------- */
export const contact = {
  // Nomor WhatsApp: boleh "0812..." atau "62812..." (otomatis menjadi format 62 tanpa 0).
  // Nilai di bawah hanya PLACEHOLDER — ganti dengan nomor Anda agar tombol WhatsApp aktif.
  whatsapp: "6281461156552",
  message: "Hello Febri, I visited your portfolio website and would like to get in touch.",
  email: "febridimyati09@gmail.com",       // contoh: "name@email.com"
  github: "https://github.com/febridimyati09",      // contoh: "https://github.com/username"
  instagram: "https://instagram.com/afydm_",   // contoh: "https://instagram.com/username"
  linkedin: "https://linkedin.com/in/akhmadfebridimyati",    // contoh: "https://linkedin.com/in/username"
};

/* ---------------- 3. SKILLS ----------------
   "icon" = singkatan 1–3 huruf pada kotak kecil. */
export const skills = [
  { group: "Programming Languages", items: [
    { name: "HTML", icon: "H" }, { name: "CSS", icon: "C" },
    { name: "JavaScript", icon: "JS" }, { name: "Python", icon: "Py" },
  ]},
  { group: "Tools", items: [
    { name: "Git", icon: "Gi" }, { name: "GitHub", icon: "Gh" }, { name: "Visual Studio Code", icon: "VS" },
  ]},
  { group: "Currently Learning", items: [
    { name: "Frontend Development", icon: "Fe" },
    { name: "Object-Oriented Programming", icon: "OOP" },
    { name: "Software Development", icon: "SD" },
  ]},
];

/* ---------------- 4. PROJECTS ----------------
   Tambah proyek : salin satu blok { ... }, tempel di bawahnya (jangan lupa koma), lalu ubah isinya.
   Hapus proyek  : hapus satu blok { ... } beserta komanya.
   Tiga blok di bawah masih PLACEHOLDER ("Coming soon") — ganti dengan proyek asli Anda.
   Kolom kosong ("" atau []) otomatis disembunyikan: detail, tech, github, demo. */
export const projects = [
  {
    title: "Project 01",
    description: "Details for this project will be added soon.",
    detail: "",                                   // Teks panjang (muncul lewat tombol "View details")
    image: "/images/projects/project-01.webp",
    tech: [],                                      // contoh: ["HTML", "CSS", "JavaScript"]
    github: "",
    demo: "",
  },
  {
    title: "Project 02",
    description: "Details for this project will be added soon.",
    detail: "",
    image: "/images/projects/project-02.webp",
    tech: [],
    github: "",
    demo: "",
  },
  {
    title: "Project 03",
    description: "Details for this project will be added soon.",
    detail: "",
    image: "/images/projects/project-03.webp",
    tech: [],
    github: "",
    demo: "",
  },
];

/* ---------------- 5. EDUCATION & LEARNING JOURNEY ----------------
   Tambahkan tahun, sertifikat, atau pencapaian HANYA jika benar-benar Anda miliki.
   "place" boleh dikosongkan. */
export const journey = [
  { period: "Present", title: "Informatics Student", place: "UIN Siber Syekh Nurjati Cirebon", text: "Pursuing a degree in Informatics and building a foundation in programming." },
  { period: "Soon", title: "More to come", place: "", text: "This timeline will grow as I learn and build more." },
];

/* ---------------- 6. OTHER ---------------- */
export const marquee = ["Frontend Development", "Continuous Learning", "Informatics", "Curiosity", "Clean Code"];

// mobile: false = item tidak ditampilkan di pill HP (tetap ada di navbar desktop). Saat Journey terlihat, indikator tetap di Projects.
export const nav = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" }, { id: "journey", label: "Journey", mobile: false }, { id: "contact", label: "Contact" },
];
