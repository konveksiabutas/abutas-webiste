# Strategi Arsitektur Statis, CMS, & Form RFQ Tanpa VPS (ABUTAS.COM)

Dokumen ini mendefinisikan strategi arsitektur teknis ABUTAS.COM untuk berjalan di lingkungan **Shared Hosting (cPanel / Apache)** menggunakan Next.js **Static Export** (`output: "export"`).

---

## 1. Fondasi Arsitektur Statis

### A. Konfigurasi Next.js
- `output: "export"`: Menginstruksikan Next.js untuk merender seluruh halaman menjadi file HTML statis saat `next build`.
- `images: { unoptimized: true }`: Menghilangkan ketergantungan pada endpoint server `/ _next/image?url=...`. Elemen Next.js `<Image>` merender tag `<img>` standar yang langsung mengambil gambar statis dari folder `/images/`.
- `trailingSlash: true`: Menghasilkan folder direktori untuk setiap rute (misalnya `/layanan/index.html`). Hal ini menjamin routing halaman bekerja sempurna di web server Apache/LiteSpeed tanpa memerlukan aturan rewrite URL yang rumit.

### B. Struktur Multipage (Persiapan Step 02)
Pada Step 02, pembuatan halaman multipage akan mengikuti pola statis App Router:
```text
src/app/
├── page.tsx                  -> out/index.html
├── not-found.tsx             -> out/404.html
├── robots.ts                 -> out/robots.txt
├── sitemap.ts                -> out/sitemap.xml
├── layanan/
│   ├── page.tsx              -> out/layanan/index.html
│   ├── konveksi-tas/
│   │   └── page.tsx          -> out/layanan/konveksi-tas/index.html
│   └── konveksi-pakaian/
│       └── page.tsx          -> out/layanan/konveksi-pakaian/index.html
├── cara-pesan/
│   └── page.tsx              -> out/cara-pesan/index.html
├── portofolio/
│   └── page.tsx              -> out/portofolio/index.html
├── tentang-kami/
│   └── page.tsx              -> out/tentang-kami/index.html
└── kontak/
    └── page.tsx              -> out/kontak/index.html
```
Semua halaman ini di-prerender secara statis pada saat build sehingga tidak ada latensi server, tidak ada proses Node.js yang menggantung, dan beban server hosting mendekati nol.

---

## 2. Strategi CMS Tanpa VPS

Karena server hosting adalah shared cPanel tanpa daemon Node.js, pengelolaan konten dinamis (seperti artikel, studi kasus, atau katalog produk) dapat dilakukan menggunakan salah satu dari 2 pendekatan terbaik berikut:

### Opsi A (Rekomendasi Utama): Git-based Static CMS (Markdown / Contentlayer / Keystatic)
- **Cara Kerja:** Konten artikel dan portofolio disimpan dalam format Markdown / MDX di folder `content/` dalam repositori Git.
- **Antarmuka Edit:** Menggunakan antarmuka visual gratis seperti **Keystatic** atau **Decap CMS** yang langsung menyimpan commit ke GitHub saat admin menyimpan tulisan.
- **Alur Pembaruan Konten:**
  1. Penulis/Admin mengedit konten via dashboard Keystatic/Decap.
  2. Perubahan tersimpan sebagai commit Markdown di Git.
  3. GitHub Actions otomatis terpicu -> menjalankan `npm run build` -> mengupload file HTML hasil generate ke cPanel via FTP.
- **Keunggulan:**
  - 100% gratis, aman dari serangan hacking database.
  - Backup konten tersimpan rapi di riwayat Git.
  - Kecepatan akses halaman setara file statis murni.

### Opsi B: Headless CMS Eksternal (Sanity / Strapi Cloud / Contentful)
- **Cara Kerja:** Admin mengelola konten di cloud CMS terpisah (misal Sanity free tier).
- **Alur Build:** Next.js mengambil data konten via API pada saat `next build` dijalankan. Ketika ada konten baru diterbitkan di Sanity, webhook memicu GitHub Actions untuk rebuild dan deploy ulang ke cPanel.

---

## 3. Strategi Form RFQ (Request for Quotation) Tanpa VPS

Pada website B2B manufaktur, formulir RFQ atau konsultasi produksi adalah titik konversi utama. Karena tidak ada server API Node.js aktif di Next.js, ada 3 solusi yang terbukti andal untuk shared hosting:

### Solusi 1: Direct WhatsApp B2B Lead Generator (Sudah Aktif)
- **Implementasi:** Pengunjung mengisi spesifikasi dasar (jenis barang, estimasi jumlah, nama), lalu sistem secara instan membuat link `https://wa.me/62xxx?text=...` dengan format rapi dan langsung membuka percakapan WhatsApp Business.
- **Kelebihan:** Tingkat respon tercepat di Indonesia, tidak memerlukan backend apa pun, bebas spam bot.

### Solusi 2: Serverless Form API (Web3Forms / Formspree / Basin)
- **Implementasi:** Form RFQ di Next.js mengirimkan request AJAX (POST) ke endpoint pihak ketiga:
  ```typescript
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: "YOUR_ACCESS_KEY",
      nama,
      perusahaan,
      email,
      telepon,
      produk: "Tas Kanvas",
      jumlah: "500 pcs",
      pesan
    })
  });
  ```
- **Kelebihan:**
  - Data langsung terkirim ke email sales/manajemen ABUTAS.
  - Terdapat filter spam honeypot dan proteksi reCAPTCHA/Turnstile bawaan.
  - Tidak ada dependensi server lokal.

### Solusi 3: Native PHP Mailer Script di cPanel (`public_html/api/rfq.php`)
- **Implementasi:** Karena hosting Superserver cPanel mendukung PHP secara native, kita dapat menyertakan satu file PHP sederhana di folder `public/api/rfq.php`.
- File ini menerima request JSON POST dari formulir Next.js, memvalidasi input, memeriksa field honeypot (anti-spam), lalu mengirimkan email notifikasi menggunakan fungsi `mail()` atau SMTP cPanel.
- **Kelebihan:** 100% independen di dalam domain Anda sendiri tanpa bergantung pada layanan formulir pihak ketiga.

---

## 4. Batasan Teknis yang Dihindari

Sesuai aturan static export, kode ABUTAS.COM dilarang menggunakan fitur-fitur dinamis server berikut:
- ❌ `Server Actions` (`"use server"` dengan mutasi backend).
- ❌ Runtime SSR seperti `headers()` atau `cookies()` di Server Components.
- ❌ Incremental Static Regeneration (ISR) dengan `export const revalidate = 60`.
- ❌ Next.js dynamic Route Handlers (`app/api/...`) yang memerlukan runtime Node.js aktif.
- ❌ Next.js default Image Optimization (`/_next/image`).

Semua interaksi dinamis di client (accordion FAQ, navigasi mobile, filter katalog, kalkulator estimasi MOQ) menggunakan React Client Components (`"use client"`) yang berjalan lancar di browser pengguna.
