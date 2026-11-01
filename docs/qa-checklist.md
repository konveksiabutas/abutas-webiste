# ABUTAS.COM — Quality Assurance (QA) Checklist

Digunakan pada setiap langkah pengembangan (Step 00 s/d Step 08).

---

## 1. Technical Build & Code Quality Gate
- [ ] `npm run lint` menghasilkan 0 error dan 0 warning yang tidak tertangani.
- [ ] `npm run typecheck` (`tsc --noEmit`) lulus tanpa error tipe.
- [ ] `npm run test` menjalankan seluruh automated tests dan lulus 100%.
- [ ] `npm run build` berhasil membuat production bundle tanpa runtime compilation failure.

---

## 2. Anti-Slop Delivery Gate (Wajib untuk UI & Copy)
- [ ] **Hard Gate**:
  - Semua kontrol interaktif (tombol, tautan, form) memiliki kursor pointer yang jelas dan state nyata (`hover`, `active`, `focus-visible`).
  - Tidak ada tombol clickable yang mengarah ke route fiktif atau aksi pura-pura sukses.
  - Media memiliki dimensi tereservasi; gambar hero tidak di-lazy-load.
- [ ] **Purpose-Gate**:
  - Setiap section memiliki alasan editorial/konten yang jelas; tidak ada section sekadar mengisi ruang.
  - Tidak ada placeholder visual palsu yang disamarkan sebagai foto karya Abutas.
- [ ] **Liveliness Toolkit**:
  - Dials tervalidasi: ENERGY 2 / RHYTHM 3 / MOTION 1.
  - Ritme layout tidak seragam (bukan sekadar deretan 3-card sejajar dari atas ke bawah).
  - Motion hanya untuk umpan balik mikro yang halus (tidak ada scroll-jacking atau parallax).
- [ ] **Craftsmanship & Quality Locks**:
  - Zero horizontal overflow di semua ukuran layar (360px s/d 1440px).
  - Tipografi responsif dengan kontras tinggi (minimal 4.5:1 untuk teks normal).
  - Bahasa Indonesia lugas dan bebas dari gaya bahasa klise AI (hindari em dash `—` di copy buatan agent).

---

## 3. Responsive Viewport Matrix
- [ ] Mobile Extra Small (360 x 640 px)
- [ ] Mobile Standard (390 x 844 px)
- [ ] Tablet Portrait (768 x 1024 px)
- [ ] Tablet Landscape / Laptop (1024 x 768 px)
- [ ] Desktop Standard (1440 x 900 px)

---

## 4. Accessibility (a11y) & Usability
- [ ] Dokumen menggunakan `<html lang="id">`.
- [ ] Heading hierarchy runut (`h1` tunggal, diikuti `h2`, lalu `h3`).
- [ ] Touch target minimal 44x44 px pada perangkat sentuh.
- [ ] Form input memiliki `<label>` eksplisit yang terhubung secara semantik.
- [ ] Navigasi dapat dioperasikan penuh menggunakan keyboard (Tab / Shift+Tab / Enter / Space).

---

## 5. SEO & Crawlability Baseline
- [ ] Title tag dan Meta Description unik dan deskriptif per halaman.
- [ ] Self-referencing canonical URL (`https://abutas.com/...`).
- [ ] Konten utama termuat dalam initial HTML (SSR/SSG), bukan client-rendered rendering terlambat.
- [ ] Schema markup (`JSON-LD`) valid dan bebas klaim fiktif.
