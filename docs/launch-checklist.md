# ABUTAS.COM — Launch Readiness Checklist (Greenfield Site)

Target Domain: **https://abutas.com**  
Scope: **Penerbitan Website Baru dari Nol** (Bukan migrasi, bukan backup WordPress lama).

---

## 1. Verifikasi Konten & Bisnis Sebelum Rilis Publik
- [ ] Seluruh nomor kontak (WhatsApp, Telepon, Email) telah terverifikasi aktif oleh pemilik bisnis.
- [ ] Alamat fisik workshop / kantor telah terverifikasi atau dihilangkan dari publik jika belum ada kantor fisik yang melayani walk-in.
- [ ] Aset visual resmi (logo vector, foto produksi asli dengan hak rilis) telah menggantikan seluruh placeholder dev.
- [ ] Dokumen legal (Kebijakan Privasi dan Syarat Layanan) telah disetujui untuk pemrosesan data calon pelanggan.
- [ ] Seluruh halaman draft/unverified dipastikan tidak terindeks (`noindex` atau tidak masuk sitemap).

---

## 2. Technical Infrastructure & Security
- [ ] SSL / HTTPS aktif dan valid di https://abutas.com.
- [ ] Redirect otomatis HTTP -> HTTPS dan non-www -> canonical host (disepakati https://abutas.com).
- [ ] Tidak ada environment variable rahasia (API keys, admin tokens) yang bocor ke browser bundle.
- [ ] Form RFQ memiliki proteksi spam aktif (honeypot + rate limiting server-side).
- [ ] Pengiriman form RFQ berhasil menyimpan/mengirim data lead ke tujuan resmi tanpa PII logging di analytics.
- [ ] Halaman 404 (Not Found) dan 500 (Error) berfungsi dengan baik dan memiliki navigasi kembali yang jelas.

---

## 3. SEO & Indexing Readiness
- [ ] File `robots.txt` aktif di root dan mengizinkan crawling halaman publik.
- [ ] File `sitemap.xml` hanya mencantumkan halaman kanonikal berstatus `PUBLISHED`.
- [ ] Open Graph (OG) tags dan preview image valid saat di-share di WhatsApp / media sosial.
- [ ] Structured Data JSON-LD (`Organization`, `BreadcrumbList`) tervalidasi via Google Rich Results Test tanpa error.

---

## 4. Performance & Core Web Vitals (Field Target)
- [ ] Largest Contentful Paint (LCP) <= 2.5s.
- [ ] Interaction to Next Paint (INP) <= 200ms.
- [ ] Cumulative Layout Shift (CLS) <= 0.1.
- [ ] Hero images memiliki preload/priority dan aspect-ratio tetap.

---

## 5. Protokol Peluncuran (Launch Protocol)
- [ ] Dapatkan **izin tertulis eksplisit** dari pemilik domain sebelum mengubah konfigurasi DNS/hosting production.
- [ ] Lakukan verifikasi Google Search Console (GSC) segera setelah DNS terarah.
- [ ] Submit `sitemap.xml` ke GSC.
- [ ] Verifikasi penerimaan data leads pertama (uji coba pengiriman form internal).
