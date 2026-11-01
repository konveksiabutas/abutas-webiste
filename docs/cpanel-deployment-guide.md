# Panduan Deployment ABUTAS.COM ke Superserver cPanel (Shared Hosting)

Dokumen ini adalah panduan teknis langkah-demi-langkah untuk mendeploy website ABUTAS.COM hasil Next.js **Static Export** (`output: "export"`) ke hosting **Superserver (cPanel)** tanpa memerlukan VPS atau daemon Node.js aktif di server.

---

## 1. Konsep Dasar Static Hosting di cPanel

Website ABUTAS.COM diekspor secara penuh ke dalam folder `out/` yang berisi file HTML, CSS, JavaScript, gambar, dan aset statis murni.
- **Web Server:** Apache / LiteSpeed bawaan Superserver cPanel.
- **Folder Root Publik:** `public_html/` (atau direktori addon domain/subdomain jika menggunakan multi-domain).
- **Konfigurasi Server:** Ditangani secara otomatis oleh file `.htaccess` yang sudah disertakan dalam export.

---

## 2. Persiapan Sebelum Upload

1. Buka terminal di komputer lokal pada direktori proyek:
   ```bash
   npm run build
   ```
2. Pastikan proses build selesai tanpa error dan folder `out/` terisi:
   - `out/index.html` (Homepage)
   - `out/404.html` (Halaman Error 404)
   - `out/robots.txt` (File Crawl Bot)
   - `out/sitemap.xml` (Peta Situs SEO)
   - `out/.htaccess` (Aturan Apache/LiteSpeed)
   - `out/_next/` (Bundle JS & CSS)
   - `out/images/` (Aset Foto Produk)

3. Buat arsip ZIP dari seluruh **isi** folder `out/`:
   - Masuk ke dalam folder `out/`.
   - Pilih semua file dan folder di dalamnya (pastikan file tersembunyi seperti `.htaccess` ikut terpilih).
   - Klik kanan > **Compress to ZIP file** (misal beri nama `abutas-export.zip`).

---

## 3. Opsi Deployment 1: Menggunakan cPanel File Manager (Paling Mudah)

1. **Login ke cPanel Superserver:**
   - Akses URL cPanel Anda (contoh: `https://yourdomain.com:2083` atau `https://cpanel.superserver.id`).
   - Masukkan username dan password cPanel.

2. **Buka File Manager:**
   - Masuk ke menu **File Manager** (Pengelola File).
   - Masuk ke folder `public_html/`.

3. **Bersihkan Folder (Jika ada file default):**
   - Hapus file default seperti `index.php` atau `default.html` bawaan hosting baru (jangan hapus folder `cgi-bin` jika ada).

4. **Upload File ZIP:**
   - Klik tombol **Upload** di bilah atas.
   - Unggah file `abutas-export.zip` yang telah disiapkan.

5. **Ekstrak File:**
   - Kembali ke `public_html/`.
   - Klik kanan pada `abutas-export.zip` > pilih **Extract**.
   - Pastikan path target adalah `/public_html/`.
   - Hapus file `abutas-export.zip` setelah selesai diekstrak untuk menghemat kuota hosting.

6. **Pastikan File `.htaccess` Terbaca:**
   - Di cPanel File Manager, klik tombol **Settings** (pojok kanan atas).
   - Centang opsi **Show Hidden Files (dotfiles)** > klik **Save**.
   - Pastikan file `.htaccess` berada langsung di dalam `public_html/`.

---

## 4. Opsi Deployment 2: Menggunakan FTP / SFTP (FileZilla)

1. **Siapkan Akun FTP:**
   - Cek detail akun FTP utama cPanel atau buat akun baru di menu **FTP Accounts** cPanel.
   - Host: Nama domain Anda atau alamat IP server hosting.
   - Port: 21 (FTP biasa) atau 22 (jika SFTP diaktifkan).
   - Username: `username@yourdomain.com` atau username cPanel.
   - Password: Password akun Anda.

2. **Koneksi dan Upload:**
   - Buka FileZilla / WinSCP.
   - Di panel lokal (kiri), buka folder proyek `Abutas/out/`.
   - Di panel server (kanan), buka folder `/public_html/`.
   - Pilih seluruh isi folder `out/` dan drag-and-drop ke `/public_html/`.

---

## 5. Opsi Deployment 3: Otomatisasi via GitHub Actions (CI/CD Tanpa VPS)

Jika repositori proyek disimpan di GitHub, setiap kali Anda melakukan `git push` ke branch `main`, GitHub Actions dapat otomatis mem-build dan mengupload aset ke Superserver cPanel via FTP.

Contoh workflow `.github/workflows/deploy.yml`:
```yaml
name: Deploy ABUTAS to Superserver cPanel

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Next.js Static Export
        run: npm run build

      - name: Deploy to cPanel FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./out/
          server-dir: /public_html/
```

---

## 6. Konfigurasi Domain & SSL (HTTPS) di cPanel

1. **AutoSSL / Let's Encrypt:**
   - Masuk ke cPanel menu **SSL/TLS Status**.
   - Centang domain `abutas.com` dan `www.abutas.com`.
   - Klik **Run AutoSSL**. Tunggu 2-5 menit hingga gembok hijau aktif.
2. **Force HTTPS:**
   - File `.htaccess` yang sudah diekspor telah menyertakan aturan redirect otomatis dari `http://` ke `https://`.

---

## 7. Verifikasi Pasca-Deployment

Periksa hal-hal berikut di browser:
- [ ] Buka `https://abutas.com/` — pastikan halaman termuat dengan styling penuh tanpa aset 404.
- [ ] Buka `https://abutas.com/robots.txt` — pastikan mengarah ke `sitemap.xml`.
- [ ] Buka `https://abutas.com/sitemap.xml` — pastikan XML sitemap valid.
- [ ] Coba buka halaman sembarang yang tidak ada (misal `https://abutas.com/tes404`) — pastikan halaman `404.html` kustom ABUTAS muncul dengan benar.
- [ ] Uji responsivitas di smartphone untuk memastikan gambar terkompresi dan cepat dibuka.
