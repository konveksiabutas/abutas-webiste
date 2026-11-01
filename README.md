# ABUTAS.COM — B2B Custom Bag & Apparel Manufacturing

Website jasa manufaktur tas dan pakaian custom B2B untuk kebutuhan korporasi, instansi, event organizer, dan komunitas di Indonesia. Proyek dibangun dari nol (*greenfield*) menggunakan Next.js App Router, TypeScript, dan Tailwind CSS, dipandu oleh **Google Antigravity** dan difilter oleh **Anti-Slop**.

---

## 1. Persyaratan Lingkungan (Environment Requirements)

- **Sistem Operasi:** Windows 10/11 (PowerShell) atau POSIX environment.
- **Node.js:** Versi >= 20.x (Terverifikasi di Node v24.22.0).
- **Package Manager:** npm (v11.x).
- **Google Antigravity:** IDE dengan plugin Anti-Slop global terpasang di `~/.gemini/config/plugins/antislop` atau `~/.gemini/config/skills`.

---

## 2. Integrasi Anti-Slop & DESIGN.md

Proyek ini menerapkan tata kelola kualitas desain dan teks yang ketat:
1. **Verifikasi Anti-Slop:** Plugin Anti-Slop telah terpasang secara global. Pada awal setiap sesi, Antigravity memverifikasi ketersediaan aturan dan mengaktifkan mode **`during`** (`antislop active: during (session override)`).
2. **DESIGN.md:** Dokumen [DESIGN.md](./DESIGN.md) di root project adalah sumber tunggal identitas visual, palet warna (`#F8F9F7`, `#14252C`, `#176B63`, `#C68A4F`), tipografi (Plus Jakarta Sans), dan liveliness dials (`ENERGY 2 / RHYTHM 3 / MOTION 1`). Anti-Slop berperan sebagai filter kualitas, bukan pengganti arahan desain.
3. **Master Blueprint:** Dokumen [docs/blueprint.md](./docs/blueprint.md) adalah acuan arsitektur produk, strategi SEO/GEO, dan model data.
4. **Kejujuran Data Bisnis:** Seluruh klaim bisnis (kontak, alamat, kapasitas, portofolio, harga, MOQ) dikelola di [docs/business-facts.md](./docs/business-facts.md) dan berstatus `UNVERIFIED` sampai dikonfirmasi oleh pemilik bisnis.

---

## 3. Skrip Proyek (Package Scripts)

Jalankan perintah berikut di PowerShell atau terminal:

```bash
# Menjalankan server pengembangan lokal (http://localhost:3000)
npm run dev

# Memeriksa kepatuhan kode dan linting
npm run lint

# Memeriksa keabsahan tipe TypeScript (strict mode)
npm run typecheck

# Menjalankan pengujian otomatis (Node native test runner)
npm run test

# Membuat bundle produksi Next.js (Turbopack)
npm run build

# Menjalankan server produksi lokal setelah build
npm run start
```

---

## 4. Struktur Direktori

```text
Abutas/
├── AGENTS.md                  # Aturan tata kelola agen dan Next.js
├── DESIGN.md                  # Arah desain visual dan token warna
├── README.md                  # Dokumentasi setup dan panduan proyek
├── .env.example               # Template environment variables
├── docs/
│   ├── blueprint.md           # Master Blueprint v3.0
│   ├── business-facts.md      # Register status fakta bisnis (UNVERIFIED)
│   ├── content-inventory.md   # Inventaris rute dan halaman
│   ├── qa-checklist.md        # Checklist QA per step
│   └── launch-checklist.md    # Checklist kesiapan peluncuran
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 theme tokens
│   │   ├── layout.tsx         # Root layout (Plus Jakarta Sans, lang="id")
│   │   └── page.tsx           # Starter app shell beranda
│   ├── components/            # Komponen UI modular
│   ├── lib/                   # Utility helpers (cn, formatting)
│   ├── styles/                # Token gaya tambahan
│   └── types/                 # Definisi tipe TypeScript
├── public/                    # Aset statis publik
└── tests/                     # Automated test suites
```

---

## 5. Menjalankan Preview Lokal

Untuk melihat preview website:
1. Buka terminal di folder project.
2. Jalankan `npm run dev`.
3. Akses `http://localhost:3000` pada peramban web.
