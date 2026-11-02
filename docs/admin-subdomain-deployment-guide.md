# PANDUAN DEPLOYMENT SANITY STUDIO: ADMIN.ABUTAS.COM

Dokumen ini adalah panduan teknis langkah demi langkah bagi pemilik website untuk mempersiapkan, mengunggah, dan mengoperasikan **ABUTAS Content Studio** pada subdomain:

**https://admin.abutas.com**

---

## 1. Ringkasan Arsitektur

ABUTAS Content Studio dibangun menggunakan Sanity Studio v3 sebagai **Single Page Application (SPA) statis murni**. 

Keunggulan arsitektur ini:
- **Zero Node.js di Server Hosting**: Tidak membutuhkan runtime Node.js, PM2, daemon proses, atau akses root VPS pada hosting Superserver cPanel.
- **Keamanan Total**: File yang berada di server cPanel murni berupa file statis (`.html`, `.css`, `.js`, `.htaccess`). Tidak ada script dinamis backend yang dapat disusupi.
- **Autentikasi Terpusat**: Seluruh manajemen login, sesi, token, dan penyimpanan basis data dikelola langsung oleh infrastruktur cloud Sanity (`api.sanity.io`) dengan enkripsi TLS.
- **Terpisah dari Website Utama**: Subdomain `admin.abutas.com` ditempatkan pada document root terpisah dari website publik `abutas.com`, sehingga pembaruan admin tidak akan mengganggu website utama.

---

## 2. Langkah 1: Membuat Subdomain di cPanel

1. Login ke dashboard **cPanel Superserver** Anda.
2. Cari dan klik menu **Domains** (atau **Subdomains**).
3. Klik tombol **Create A New Domain**.
4. Masukkan konfigurasi berikut:
   - **Domain**: `admin.abutas.com`
   - **Share document root**: Hapus centang (uncheck) opsi "Share document root with abutas.com".
   - **Document Root**: Tentukan folder terpisah, contohnya: `admin.abutas.com` (atau `public_html/admin/`).
     > **PENTING**: Jangan gunakan `public_html/` sebagai document root agar file admin tidak bercampur dengan file static export website publik.
5. Klik **Submit**.

---

## 3. Langkah 2: Mengaktifkan Sertifikat HTTPS / SSL

1. Di cPanel, cari dan buka menu **SSL/TLS Status**.
2. Cari domain `admin.abutas.com` pada daftar domain.
3. Pastikan domain tercentang, lalu klik tombol **Run AutoSSL**.
4. Tunggu beberapa menit hingga status berubah menjadi hijau (DV Certificate aktif).
5. Verifikasi bahwa `https://admin.abutas.com` dapat diakses dengan koneksi aman (HTTPS).

---

## 4. Langkah 3: Mengatur CORS Origin di Sanity Manage

Agar browser diizinkan menghubungkan `admin.abutas.com` ke basis data Sanity Cloud, domain admin wajib didaftarkan pada whitelist CORS:

1. Buka browser dan login ke dashboard Sanity:  
   **https://www.sanity.io/manage**
2. Pilih proyek **ABUTAS** (Project ID: `0ahnrkj4`).
3. Klik tab **API** pada menu navigasi atas.
4. Gulir ke bagian **CORS Origins**, lalu klik tombol **Add CORS Origin**.
5. Isi formulir dengan data berikut:
   - **Origin**: `https://admin.abutas.com`
   - **Allow credentials**: **Centang (Yes)**.  
     *(Wajib dicentang agar cookie sesi login Sanity dapat dikirimkan secara aman).*
6. Klik tombol **Save**.

---

## 5. Langkah 4: Kompilasi Build Sanity Studio Lokal

Kompilasi bundle statis dilakukan secara lokal di komputer pengembang/admin:

1. Pastikan file konfigurasi `.env` pada folder `studio` (`studio/.env`) memuat ID proyek dan dataset yang benar:
   ```env
   SANITY_STUDIO_PROJECT_ID=0ahnrkj4
   SANITY_STUDIO_DATASET=production
   ```
2. Jalankan pemeriksaan tipe data TypeScript:
   ```bash
   npm run studio:typecheck
   ```
3. Jalankan build produksi:
   ```bash
   npm run studio:build
   ```
4. Output build statis akan tersimpan di folder `studio/dist/`.  
   Proses build otomatis menyalin file `.htaccess` ke dalam `studio/dist/.htaccess` untuk memastikan sistem routing SPA Apache aktif.

---

## 6. Langkah 5: Mengunggah Hasil Build ke Server cPanel

Terdapat 2 metode yang dapat dipilih:

### Metode A: Menggunakan cPanel File Manager (Direkomendasikan)
1. Buka **File Manager** di cPanel.
2. Di pojok kanan atas, klik **Settings** dan pastikan opsi **Show Hidden Files (dotfiles)** aktif, lalu klik Save.
3. Masuk ke folder document root `admin.abutas.com` yang dibuat pada Langkah 1.
4. Kompresi seluruh isi folder lokal `studio/dist/` menjadi file zip (misal: `studio-dist.zip`).
   > *Catatan: Kompresi isi di dalam folder dist, bukan folder dist-nya.*
5. Upload file zip tersebut melalui cPanel File Manager, lalu klik **Extract**.
6. Pastikan struktur file di document root subdomain adalah:
   - `index.html`
   - `.htaccess`
   - `favicon.ico`
   - folder `static/` (berisi file js dan css)

### Metode B: Menggunakan FTPS (FileZilla / WinSCP)
1. Hubungkan FTPS client ke server Superserver cPanel.
2. Navigasikan sisi remote ke document root `admin.abutas.com`.
3. Upload seluruh file dan folder dari `studio/dist/`.
4. Pastikan file tersembunyi `.htaccess` ikut ter-upload dengan sempurna.

---

## 7. Langkah 6: Verifikasi Akses & Uji Fungsi CMS

1. Buka browser dan navigasikan ke:  
   **https://admin.abutas.com**
2. Layar selamat datang **ABUTAS Content Studio** akan muncul dengan logo monogram Abutas (hitam, ivory, dan oranye bata).
3. Klik tombol login dan masuk menggunakan akun Sanity Anda (Google, GitHub, atau Email).
4. Setelah login berhasil, periksa 3 menu operasional utama:
   - **Artikel & Panduan**: Kelola artikel edukasi, panduan bahan tas/pakaian, dan SEO metadata.
   - **Portofolio Produksi**: Dokumentasikan foto hasil produksi, spesifikasi kain, teknik sablon/bordir, serta toggle izin rilis nama klien (`clientPermissionReleased`).
   - **Pengaturan Website**: Kelola profil identitas bisnis dan nomor kontak resmi ber-lock verifikasi.
5. Uji pembuatan dokumen draft:
   - Simpan dokumen tanpa mempublikasikan (status: draft).
   - Pastikan dokumen berstatus draft tidak muncul di website publik `abutas.com`.

---

## 8. Prosedur Pembaruan Studio di Masa Depan

Bila terdapat penambahan field skema baru, update visual Studio, atau penambahan plugin:

1. Lakukan perubahan kode pada folder `studio/`.
2. Jalankan verifikasi lokal:
   ```bash
   npm run studio:typecheck
   npm run studio:build
   ```
3. Upload ulang file hasil build dari `studio/dist/` ke document root `admin.abutas.com` di cPanel (timpa file lama).
4. Selesai. Pengguna Studio cukup me-refresh browser untuk mendapatkan versi terbaru.
