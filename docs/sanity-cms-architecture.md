# ARSITEKTUR SANITY CMS & PIPELINE STATIC DEPLOYMENT ABUTAS.COM

Dokumen ini mendokumentasikan implementasi Content Management System (CMS) menggunakan **Sanity CMS** untuk website ABUTAS.COM, disesuaikan dengan arsitektur **Next.js Static Export** pada hosting cPanel (Superserver Super Host) tanpa ketergantungan runtime Node.js/VPS di sisi server.

---

## 1. Arsitektur CMS & Prinsip Kerja

```
+------------------------------------+
|  Sanity Cloud / Standalone Studio  |
|  (Input Konten: Artikel/Portofolio)|
+------------------+-----------------+
                   |
     Webhook saat konten dipublikasikan
                   v
+------------------------------------+
|         GitHub Actions CI          |
|  1. Pull Sanity published data     |
|  2. npm run build (Static Export)  |
|  3. Generate folder out/           |
+------------------+-----------------+
                   |
        FTPS Deployment ke cPanel
                   v
+------------------------------------+
|   Superserver cPanel Hosting       |
|   Directory: public_html/          |
|   Static HTML / CSS / JS / Assets  |
+------------------------------------+
```

### Mengapa Dashboard Sanity Studio Terpisah?
- **Shared Hosting Tanpa VPS**: Superserver Super Host berbasis cPanel Apache standar tanpa akses root dan tanpa runtime daemon Node.js terus-menerus.
- **Kinerja dan Keamanan Maksimal**: File yang disajikan ke publik 100% adalah file statis murni (`.html`, `.css`, `.js`), menghilangkan celah keamanan eksekusi script dinamis atau database injection di web server.
- **Pengelolaan Konten di Cloud**: Redaktur dan tim manajemen konten mengelola artikel dan portofolio melalui Sanity Studio (dapat di-host gratis di Sanity Managed Studio `abutas.sanity.studio` atau lokal).

---

## 2. Model Konten (Sanity Content Schemas)

Lokasi skema: `sanity/schemas/`

### A. Artikel & Panduan (`sanity/schemas/article.ts`)
Model untuk artikel edukasi B2B, panduan bahan, komparasi teknik sablon/bordir, dan tips procurement.
- `title`: Judul editorial (wajib, max 100 karakter).
- `slug`: Slug unik URL (wajib, format: `/artikel/[slug]/`).
- `excerpt`: Ringkasan 1–2 kalimat (wajib, max 250 karakter).
- `featuredImage`: Foto utama + alt text faktual untuk SEO & aksesibilitas (wajib).
- `category`: Pilihan radio:
  - *Panduan Konveksi Tas*
  - *Panduan Konveksi Pakaian*
  - *Material & Teknik Produksi*
  - *Tips Pemesanan Custom*
- `body`: Konten blok rich text (H2, H3, paragraph, blockquote, bullet list, numbered list, dan inline image).
- `author`: Atribusi redaksi (default: "Tim Redaksi ABUTAS").
- `publishedAt`: Tanggal publikasi resmi (datetime ISO).
- `seoTitle`: Meta title SEO (opsional, batas max 65 karakter).
- `seoDescription`: Meta description SEO (opsional, batas max 160 karakter).
- `canonicalUrl`: URL kanonikal kustom (opsional).
- `contentStatus`: Pilihan `draft` atau `published`. Data access layer hanya mengambil dokumen berstatus `published`.

### B. Portofolio Produksi (`sanity/schemas/portfolio.ts`)
Model arsip dokumentasi hasil pengerjaan pesanan nyata.
- `title`: Judul proyek (wajib, max 100 karakter).
- `slug`: Slug unik URL (wajib, format: `/portofolio/[slug]/`).
- `category`: Kategori layanan pilar (`tas` atau `pakaian`).
- `productType`: Nama jenis produk spesifik (contoh: *Ransel Laptop Cordura Bimo*, *Kemeja Drill Kantor*).
- `description`: Uraian pengerjaan dan tantangan teknis (wajib).
- `materials`: Informasi kain dan serat nyata (wajib).
- `brandingTechnique`: Metode aplikasi logo (contoh: *Bordir Komputer*, *Sablon Plastisol Doff*).
- `gallery`: Array foto dokumentasi produk disertai deskripsi alt text faktual (wajib minimal 1 foto).
- `year`: Tahun pengerjaan (default: "2026").
- `clientInfo`: Nama klien/perusahaan (opsional).
- `clientPermissionReleased`: Boolean izin rilis. Nama klien hanya ditampilkan jika field ini bernilai `true`.
- `seoTitle` & `seoDescription`: Metadata kustom untuk mesin pencari.
- `contentStatus`: Pilihan `draft` atau `published`.

### C. Pengaturan Situs & Profil Bisnis (`sanity/schemas/siteSettings.ts`)
Model single document untuk identitas brand dan kontak resmi.
- `brandName`: "ABUTAS"
- `tagline`: Tagline editorial resmi.
- `description`: Deskripsi bisnis B2B.
- `whatsappNumber`: Nomor WhatsApp bisnis.
- `whatsappVerified`: Centang verifikasi WhatsApp (default: `false`).
- `officialEmail`: Email domain resmi.
- `emailVerified`: Centang verifikasi email (default: `false`).
- `businessAddress`: Alamat workshop fisik.
- `addressVerified`: Centang verifikasi alamat fisik (default: `false`).
- `socialLinks`: Array link akun media sosial resmi.
- **Klausul Tata Kelola**: Seluruh data kontak yang belum dicentang `verified: true` tidak akan ditampilkan ke publik.

---

## 3. Data Access Layer (`src/lib/sanity/`)

Integrasi Next.js dilakukan melalui modul data terisolasi:

| File | Fungsi |
|---|---|
| `config.ts` | Konfigurasi `projectId`, `dataset`, `apiVersion`, `useCdn`, serta helper `isSanityConfigured()` |
| `client.ts` | Inisialisasi `@sanity/client` dengan parameter `perspective: "published"` (hanya membaca dokumen yang terbit) |
| `image.ts` | Helper pembuat URL gambar berbasis `@sanity/image-url` dengan fallback aman |
| `queries.ts` | Query GROQ dengan filter `contentStatus == "published" && !(_id in path("drafts.**"))` |
| `data.ts` | Fungsi async `getPublishedArticles()`, `getArticleBySlug()`, `getPublishedPortfolio()`, `getPortfolioBySlug()`, dan `getSiteSettings()` |
| `types.ts` | Deklarasi tipe TypeScript untuk seluruh entitas data |

### Prinsip Ketahanan Saat Build (Build Resilience):
Jika pemilik website belum mengisi kredensial Sanity (misalnya `NEXT_PUBLIC_SANITY_PROJECT_ID` masih kosong), fungsi data layer **tidak akan melempar fatal error**. Fungsi akan mengembalikan array kosong (`[]`) atau `null`, sehingga proses `npm run build` tetap selesai dengan status sukses dan menghasilkan website statis utuh.

---

## 4. Strategi SEO, GEO, dan Sitemap Dinamis

1. **Detail Artikel (`/artikel/[slug]/`)**:
   - Menghasilkan halaman statis melalui `generateStaticParams()` hanya untuk artikel yang berstatus *published*.
   - Menyematkan metadata dinamis: title unik, meta description, canonical URL, dan Open Graph.
   - Structured Data: Schema.org `Article` dan `BreadcrumbList`.
   - Internal linking kontekstual ke layanan pilar (`/konveksi-tas/` dan `/konveksi-pakaian/`).

2. **Detail Portofolio (`/portofolio/[slug]/`)**:
   - Menghasilkan halaman statis melalui `generateStaticParams()`.
   - Metadata dinamis dan Schema.org `CreativeWork`.
   - Menampilkan spesifikasi material, teknik branding, dan tahun pengerjaan.

3. **Sitemap Dinamis (`src/app/sitemap.ts`)**:
   - Memasukkan URL statis terverifikasi (`/`, `/konveksi-tas/`, `/konveksi-pakaian/`, `/tentang-kami/`, `/cara-pesan/`, `/kontak/`).
   - Secara dinamis memeriksa konten published Sanity:
     - Jika ada artikel terbit: `/artikel/` dan setiap `/artikel/[slug]/` dimasukkan ke sitemap.
     - Jika ada portofolio terbit: `/portofolio/` dan setiap `/portofolio/[slug]/` dimasukkan ke sitemap.
     - Jika 0 konten terbit: rute dinamis tidak dimasukkan ke sitemap dan halaman indeks mempertahankan tag `robots: { index: false, follow: false }`.

---

## 5. Pipeline GitHub Actions & Deployment ke cPanel

File workflow: `.github/workflows/deploy-superserver.yml.example`

### A. Environment Variables & Secrets yang Dibutuhkan

Tambahkan ke repository GitHub Anda pada menu **Settings > Secrets and variables > Actions**:

| Secret Key | Sumber | Keterangan |
|---|---|---|
| `SANITY_PROJECT_ID` | Sanity Manage | ID unik proyek Sanity Anda |
| `SANITY_DATASET` | Sanity Manage | Nama dataset (contoh: `production`) |
| `SANITY_API_READ_TOKEN` | Sanity Manage (API Tokens) | Token viewer/read-only jika dataset bersifat private |
| `CPANEL_FTP_SERVER` | Superserver cPanel | Host FTP server (contoh: `ftp.abutas.com` atau IP server) |
| `CPANEL_FTP_USERNAME` | Superserver cPanel | Akun FTP cPanel |
| `CPANEL_FTP_PASSWORD` | Superserver cPanel | Password akun FTP cPanel |

### B. Mekanisme Pembaruan Konten Otomatis (Webhook)
1. Di Sanity Manage (`https://www.sanity.io/manage`), buka tab **API > Webhooks**.
2. Buat webhook baru:
   - **URL**: `https://api.github.com/repos/<OWNER>/<REPO>/dispatches`
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type in ["article", "portfolio"] && contentStatus == "published"`
   - **HTTP method**: `POST`
   - **Headers**:
     - `Authorization`: `Bearer <GITHUB_PERSONAL_ACCESS_TOKEN>`
     - `Accept`: `application/vnd.github.v3+json`
   - **Payload**:
     ```json
     {
       "event_type": "sanity-content-published"
     }
     ```
3. Setiap kali redaktur mempublikasikan artikel atau portofolio baru di Sanity Studio, Sanity mengirim webhook ke GitHub Actions.
4. GitHub Actions secara otomatis menjalankan:
   `npm ci` -> `npm run lint` -> `npm run typecheck` -> `npm run test` -> `npm run build` -> sinkronisasi folder `out/` ke cPanel `public_html/`.

### C. Penanganan Kegagalan (Failure Handling)
- Jika linting, typecheck, atau test gagal, proses build langsung dihentikan sebelum file di-upload ke server cPanel. Website yang sedang aktif di hosting tidak akan terpengaruh atau mengalami downtime.
- Log error GitHub Actions tidak menampilkan token atau password karena seluruh kredensial dilindungi masking rahasia (`${{ secrets.* }}`).
- Upload FTP menggunakan flag sinkronisasi aman (`dangerous-clean-slate: false`) untuk mencegah penghapusan file sistem penting di server cPanel.

### D. Perlindungan Kredensial & Anti-Leak
- JANGAN memasukkan `SANITY_API_READ_TOKEN` dengan prefix `NEXT_PUBLIC_` karena prefix tersebut akan mengekspos token ke dalam bundle JavaScript browser klien.
- Repository Git hanya menyimpan file konfigurasi template `.env.example`. File `.env.local` diabaikan oleh `.gitignore`.

---

## 5. Sanity Studio Setup (Step 03B Implementation)

Direktori Studio terletak secara terpisah dan terisolasi pada `studio/` dengan dependency resmi Sanity v6:

### A. Struktur Menu Desk Structure
Sanity Studio dikonfigurasi dengan `structureTool` kustom (`studio/structure/index.ts`) yang membagi navigasi menjadi 3 menu utama:
1. **Artikel & Panduan**: Menampilkan daftar dokumen bertipe `article` untuk konten edukasi B2B, panduan bahan, dan tips pemesanan.
2. **Portofolio Produksi**: Menampilkan daftar dokumen bertipe `portfolio` untuk portofolio hasil produksi riil dengan filter hak rilis klien (`clientPermissionReleased`).
3. **Pengaturan Website**: Singleton editor untuk dokumen `siteSettings` (informasi brand, nomor WhatsApp resmi, email resmi, dan alamat fisik ber-lock verifikasi).

### B. Perintah Operasional Studio
Perintah npm berikut telah diintegrasikan pada root `package.json`:
- `npm run studio:dev`: Menjalankan Sanity Studio secara lokal pada port 3333 (`http://localhost:3333`).
- `npm run studio:build`: Mem-build bundle statis Sanity Studio ke dalam direktori `studio/dist/`.
- `npm run studio:typecheck`: Menjalankan validasi TypeScript untuk seluruh konfigurasi Studio.

### C. Panduan Menghubungkan Proyek Sanity Asli (Tindakan Pemilik)
Untuk mengaktifkan sinkronisasi konten riil:
1. Login ke Sanity CLI dari terminal:
   ```bash
   npx sanity login
   ```
2. Buat project baru atau pilih project yang sudah ada:
   ```bash
   npx sanity init
   # atau catat Project ID dari https://www.sanity.io/manage
   ```
3. Konfigurasikan `.env.local` pada root project Next.js:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=id_project_asli_anda
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=token_viewer_jika_dataset_private
   ```
4. Konfigurasikan `studio/.env`:
   ```env
   SANITY_STUDIO_PROJECT_ID=id_project_asli_anda
   SANITY_STUDIO_DATASET=production
   ```
5. Deploy Studio ke cloud gratis Sanity (opsional):
   ```bash
   npm --prefix studio run build
   cd studio && npx sanity deploy
   # Studio akan live di: https://abutas.sanity.studio
   ```

---

## 6. Keputusan Arsitektur Admin CMS: Sanity Studio Mandiri pada admin.abutas.com (Opsi A)

Sesuai keputusan pemilik proyek pada Step 03C.2B, panel admin konten untuk ABUTAS.COM menggunakan **Opsi A: Sanity Studio dengan branding Abutas yang di-host mandiri pada subdomain `admin.abutas.com`**.

Tidak ada dashboard admin kustom yang dibangun dari nol. Studio memanfaatkan keandalan, keamanan, dan fitur kolaboratif bawaan Sanity dengan tata kelola teknis sebagai berikut:

### A. Rencana Teknis & Spesifikasi Implementasi
1. **Branding Sanity Studio**:
   - Judul workspace dan antarmuka Studio menggunakan identitas resmi "ABUTAS Studio".
   - Warna aksen dan logo diselaraskan dengan palet modern industrial per `DESIGN.md`.
2. **Deploy Static Build ke Subdomain cPanel (`admin.abutas.com`)**:
   - Kompilasi static studio dijalankan via `npm run studio:build` menghasilkan berkas statis di `studio/dist/`.
   - Berkas statis diunggah ke document root subdomain cPanel (misal: `public_html/admin/` atau direktori terpisah `admin.abutas.com/`).
3. **Autentikasi Pengguna**:
   - Menggunakan mekanisme autentikasi resmi bawaan Sanity Cloud (SSO Google, GitHub, atau e-mail terdaftar).
   - Menghilangkan risiko keamanan manajemen password dan penyimpanan sesi di shared hosting.
4. **Konfigurasi CORS Sanity API**:
   - Diatur melalui dashboard Sanity (`https://www.sanity.io/manage` -> Project -> API -> CORS Origins):
     - `https://admin.abutas.com` (Credentials: Enabled)
     - `https://abutas.com` (Credentials: Disabled/Enabled sesuai kebutuhan fetch)
     - `http://localhost:3333` (Pengembangan lokal)
     - `http://localhost:3000` (Next.js development)
5. **SPA Routing & SSL pada cPanel**:
   - Disediakan berkas `.htaccess` di document root subdomain admin untuk penanganan client-side routing SPA (Single Page Application):
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```
   - SSL aktif secara otomatis melalui cPanel AutoSSL / Sectigo / Let's Encrypt.
6. **Pengelolaan Konten Sesuai Skema**:
   - Menggunakan 3 pilar skema terverifikasi:
     - *Artikel & Panduan* (`article.ts`)
     - *Portofolio Produksi* (`portfolio.ts` dengan perlindungan hak rilis klien)
     - *Pengaturan Website* (`siteSettings.ts` dengan perlindungan verifikasi kontak)

*Catatan Tata Kelola: Deployment subdomain admin saat ini masih dalam status tertunda (non-aktif) dan akan dieksekusi bersamaan dengan deployment hosting resmi.*


