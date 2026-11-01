# ABUTAS.COM — MASTER BLUEPRINT v3.0 (GREENFIELD + ANTI-SLOP)

**Status:** Acuan produk dan pengembangan baru dari nol.  
**Tanggal:** 1 November 2026  
**Implementasi:** Google Antigravity + Anti-Slop yang sudah dipasang oleh pemilik, bertahap per step dengan QA.
**Design source:** `DESIGN.md` di root project.
**Anti-Slop mode:** `during` untuk semua pekerjaan yang menghasilkan UI, copy, atau source code baru.  
**Domain target:** https://abutas.com  
**Bahasa website:** Bahasa Indonesia.  
**Model bisnis:** Website jasa konveksi B2B untuk mengumpulkan permintaan penawaran, bukan toko retail dengan checkout.

> **Aturan scope yang mengikat:** Ini **fresh project**, bukan perbaikan aplikasi lama. Jangan minta audit, backup, pemindahan database, migrasi WordPress, inventaris URL lama, atau redirect URL lama sebagai syarat pembangunan. Jangan membaca/menyalin desain website lama. Mulai langsung dari inisialisasi repository baru, desain, halaman, CMS, SEO/GEO, dan alur lead. Deployment hanya dengan izin eksplisit pemilik domain.

> **Kejujuran konten:** Jenis produk, MOQ, harga, kapasitas pabrik, lead time, lokasi, izin, nama klien, angka pengalaman, testimoni, dan portofolio hanya ditayangkan apabila dikonfirmasi. Data yang belum tersedia diberi status **UNVERIFIED** di CMS / dokumen kerja dan tidak boleh berubah menjadi klaim publik. Sampai terverifikasi gunakan kalimat netral atau halaman tetap draft.

---

## 01 — Visi, outcome dan positioning

**Visi:** menjadikan Abutas.com sebagai kanal pemasaran organik dan lead generation untuk layanan konveksi tas dan pakaian custom.

**North Star KPI:** jumlah *qualified RFQ leads* per bulan, yakni calon pelanggan yang punya kebutuhan produksi jelas (jenis barang, estimasi kuantitas, kontak). Pageview dan ranking hanya indikator pendukung.

**Positioning copy (usulan):**

> **Abutas — Partner Produksi Tas & Pakaian Custom untuk Bisnis, Event, dan Komunitas.**

**Dua pilar setara:**
1. **Konveksi Tas** — kategori layanan sesuai kapabilitas yang benar-benar tersedia.
2. **Konveksi Pakaian** — kategori layanan sesuai kapabilitas yang benar-benar tersedia.

**Audiens prioritas:** procurement perusahaan, tim HR/GA, event organizer, sekolah/kampus, komunitas, brand/UMKM. Fokus Jabodetabek dan pemesanan nasional adalah *hipotesis pemasaran*, bukan klaim jangkauan operasional; konfirmasikan pada bisnis.

**Tidak masuk scope awal:** marketplace, fitur checkout, pembayaran online, akun pembeli, logistik pesanan realtime, quotation otomatis berbasis harga fiktif, multi-bahasa, ekspansi ke puluhan halaman kota.

## 02 — Prinsip produk dan CTA

- Semua halaman prioritas berorientasi pada satu tujuan: mengajak pengunjung meminta penawaran.
- CTA utama **Minta Penawaran**; sekunder **Lihat Portofolio** / **Konsultasi WhatsApp**.
- Form RFQ singkat, ramah ponsel; WhatsApp merupakan jalur alternatif.
- Gambar produksi, contoh bahan, dan proses adalah aset kepercayaan paling utama jika tersedia.
- Bila harga bervariasi, jelaskan faktor penentu harga, bukan mencantumkan angka asumsi.
- Navigasi ringkas, halaman cepat, struktur informasi jelas, aksesibel, dan konten mudah dipahami oleh crawler.

## 03 — Sitemap dan aturan penerbitan

### Navigasi utama

| Nama | URL | Peran |
|---|---|---|
| Beranda | `/` | Memperkenalkan dua layanan inti & CTA |
| Konveksi Tas | `/konveksi-tas/` | SEO pillar 1 |
| Konveksi Pakaian | `/konveksi-pakaian/` | SEO pillar 2 |
| Portofolio | `/portofolio/` | Bukti hasil pekerjaan |
| Tentang Kami | `/tentang-kami/` | Identitas, proses, kepercayaan |
| Artikel | `/artikel/` | Informational SEO & topical authority |
| Cara Pesan | `/cara-pesan/` | Menjawab proses order |
| Kontak | `/kontak/` | Identitas dan jalur komunikasi |
| Minta Penawaran | `/minta-penawaran/` | Form lead generation |
| Kebijakan Privasi | `/kebijakan-privasi/` | Informasi pemrosesan data lead |

### Kandidat halaman layanan (terbit **hanya** kalau faktanya valid)

**Konveksi Tas:**
- `/konveksi-tas/tas-seminar/`
- `/konveksi-tas/goodie-bag/`
- `/konveksi-tas/tote-bag/`
- `/konveksi-tas/tas-ransel/`
- `/konveksi-tas/tas-laptop/`

**Konveksi Pakaian:**
- `/konveksi-pakaian/kaos-custom/`
- `/konveksi-pakaian/polo-shirt/`
- `/konveksi-pakaian/seragam-kerja/`
- `/konveksi-pakaian/jaket-custom/`
- `/konveksi-pakaian/hoodie-custom/`

**Konten dinamis:** `/portofolio/[slug]/`, `/artikel/[slug]/`.

**Aturan:** 1 intent utama → 1 landing page yang substantif. Tidak membuat URL per variasi sinonim, warna, bahan, atau kota secara massal. Halaman kosong / belum disetujui disimpan sebagai draft dan tidak masuk sitemap.

## 04 — Keyword mapping awal (hipotesis, bukan angka volume)

| Cluster | Target intent | URL | Prioritas |
|---|---|---|---|
| konveksi tas / pembuatan tas custom | Jasa umum / komersial | `/konveksi-tas/` | P0 |
| konveksi pakaian / jasa konveksi pakaian | Jasa umum / komersial | `/konveksi-pakaian/` | P0 |
| konveksi tas seminar | Jasa spesifik | `/konveksi-tas/tas-seminar/` | P1 |
| goodie bag custom | Jasa spesifik | `/konveksi-tas/goodie-bag/` | P1 |
| konveksi tote bag | Jasa spesifik | `/konveksi-tas/tote-bag/` | P1 |
| konveksi kaos custom | Jasa spesifik | `/konveksi-pakaian/kaos-custom/` | P1 |
| konveksi polo shirt | Jasa spesifik | `/konveksi-pakaian/polo-shirt/` | P1 |
| konveksi seragam kerja | Jasa spesifik | `/konveksi-pakaian/seragam-kerja/` | P1 |
| bahan tas seminar / jenis sablon kaos | Informational → jasa | `/artikel/[slug]/` | P2 |

**Validasi setelah fondasi siap:** riset SERP dan keyword tools untuk intent, kesulitan, peluang, serta perbedaan SERP per wilayah. Jangan mengarang search volume, ranking, atau estimasi conversion rate.

## 05 — Homepage: susunan conversion-first

1. **Header sticky minimal:** logo ABUTAS, Tas, Pakaian, Portofolio, Artikel, CTA Penawaran.
2. **Hero:** H1 singkat tentang dua layanan; subjudul nilai produk; CTA utama dan sekunder; visual foto nyata produksi/hasil.
3. **Pilihan layanan:** dua kartu jelas, Tas dan Pakaian, menuju halaman pillar masing-masing.
4. **Kategori populer:** render hanya kategori yang sudah APPROVED.
5. **Kenapa memilih Abutas:** gunakan fakta terverifikasi (mis. pilihan custom, layanan konsultasi) tanpa angka kosong.
6. **Portofolio pilihan:** proyek asli, foto, jenis barang, konteks dan keterangan ringkas.
7. **Cara pemesanan:** konsultasi → detail kebutuhan → penawaran → produksi → pengiriman (konfirmasi dengan proses aktual).
8. **FAQ:** MOQ, harga, bahan, sampel, lead time, file desain — jawaban hanya dari kebijakan nyata.
9. **CTA terakhir:** buat permintaan penawaran / konsultasi WhatsApp.
10. **Footer:** tautan prioritas, kontak verified, sosial, privasi.

**Contoh H1:** `Konveksi Tas & Pakaian Custom untuk Kebutuhan Bisnis Anda`

**Contoh subjudul:** `Konsultasikan kebutuhan tas, seragam, atau merchandise custom. Ceritakan jenis produk, jumlah, dan desain yang diinginkan untuk mendapatkan penawaran.`

## 06 — Template halaman pillar

Urutan rekomendasi untuk `/konveksi-tas/` dan `/konveksi-pakaian/`:

- Breadcrumb, H1 dan penjelasan layanan yang nyata.
- CTA penawaran di atas lipatan layar pada mobile.
- Jenis produk / kategori yang dilayani.
- Pilihan bahan, model, teknik branding (jika divalidasi).
- Penggunaan umum dan audiens.
- Galeri hasil produksi asli yang relevan.
- Proses kerja dan faktor yang memengaruhi penawaran.
- FAQ spesifik pilar, artikel terkait, dan internal links ke layanan turunan.
- CTA akhir dengan konteks pilar tersimpan dalam pesan/form.

**Template detail layanan:** H1 unik, contoh bentuk/model dan material, opsi kustom, spesifikasi yang perlu dikirim pelanggan, contoh proyek relevan, proses order, pertanyaan umum, CTA RFQ. Jangan menulis 10 halaman dengan paragraf generik yang hanya berbeda nama produk.

## 07 — Portofolio dan trust

Portofolio dirancang sebagai **case study ringan**, bukan galeri dummy.

**Field kasus:** nama proyek internal; nama klien (bila ada izin); industri/jenis kebutuhan; jenis produk; jumlah (opsional terverifikasi); bahan/branding; tantangan; pendekatan; beberapa foto dengan hak penggunaan; ringkasan hasil faktual. Status `draft / approved / published`.

**Trust elements** baru muncul bila punya bukti: alamat/workshop, legalitas, foto proses, testimoni berizin, logo klien berizin, pengalaman, sertifikasi, kapasitas.

## 08 — SEO on-page dan technical SEO

**Wajib untuk halaman publik:**
- URL pendek, terbaca, stabil, dan konsisten trailing slash.
- Satu H1 utama, heading H2/H3 logis, judul halaman dan meta description unik.
- Title dan description memprioritaskan intent pengguna, bukan pengulangan keyword.
- Open Graph / share images yang valid.
- Self-referencing canonical untuk halaman utama yang indexable.
- `robots.txt` serta `sitemap.xml` hanya berisi URL final `published`, bukan drafts atau filter internal.
- Sitemap dan navigasi internal membentuk struktur pilar → detail → portofolio → konten relevan.
- HTML awal memuat konten utama untuk crawler (SSR/SSG), bukan bergantung pada interaksi client-side.
- Image optimization, dimensi gambar tetap, lazy load di bawah fold, font efficient; hindari layout shift.
- Validasi 404, 500, accessibility, broken links dan metadata melalui automated checks.
- Halaman admin/preview diatur tidak untuk indexing dan dilindungi autentikasi.

**Target kualitas pengalaman:** Core Web Vitals yang baik pada field data jika sudah tersedia; target LCP ≤2,5 detik, INP ≤200 ms, CLS ≤0,1 di p75. Hasil Lighthouse lokal hanya diagnostik, bukan bukti performa field.

## 09 — GEO / AI search readiness

**GEO adalah penguatan SEO dan kejelasan entitas, bukan jaminan dikutip AI.**

1. Informasi organisasi jelas: nama brand, layanan, website, kontak, lokasi *hanya jika terverifikasi*.
2. Kalimat jawaban langsung di awal section penting (apa layanan ini, bisa custom apa, bagaimana mengirim brief).
3. Data operasional orisinal: teknik produksi, material, spesifikasi, panduan desain, FAQ dari pengalaman nyata.
4. Artikel keputusan pembelian: memilih bahan, perbandingan teknik cetak, estimasi faktor biaya, checklist RFQ, tanpa angka imajinatif.
5. Structured data sesuai jenis halaman dan konten yang terlihat: `Organization`, `BreadcrumbList`, `Article`, `Service` jika relevan; `LocalBusiness` hanya jika data lokasi benar. Markup tidak boleh menyatakan rating/harga/ulasan palsu.
6. Deskripsi dan istilah konsisten antar halaman; cantumkan tanggal revisi artikel jika memang ada proses review.
7. Jangan menanam teks hanya untuk bot/AI, jangan mass-produce konten sinonim dan halaman kota.

## 10 — Local SEO (bersyarat)

Saat alamat dan jangkauan bisnis dikonfirmasi, gunakan data NAP yang konsisten di website serta Google Business Profile apabila memenuhi syarat. Jangan menampilkan alamat, pin peta, jam operasional, atau halaman lokasi fiktif. Untuk tahap awal cukup halaman kontak dengan field yang dapat dibiarkan kosong sampai valid.

## 11 — Design system & Anti-Slop direction

**Arah:** Modern Industrial Premium, minimal, tegas, banyak ruang putih, profesional, tidak terlihat seperti marketplace diskon. Arah desain detail dibakukan di `DESIGN.md`; dokumen itu harus dibaca sebelum membangun UI.

**Token sementara, bisa diganti saat aset brand resmi tersedia:**
- Background `#F8F9F7` (off-white)
- Text utama `#14252C` (deep slate)
- Primary / CTA `#176B63` (industrial teal)
- Secondary `#E5ECE9`
- Accent kecil `#C68A4F` (warm copper)
- Border `#DDE3DF`

**Tipografi (usulan di DESIGN.md):** Plus Jakarta Sans untuk heading dan body, hierarki tegas, line-height nyaman. Jika font tidak tersedia, pakai fallback sans-serif yang baik tanpa menambah dependensi berbayar. Heading tidak terlalu panjang. Gambar dominan berupa foto konveksi/produk asli; jangan pakai visual AI sebagai bukti bahwa produksi dilakukan Abutas.

**Components:** responsive navigation, hero, `ServiceCard`, `ProcessSteps`, `ProjectCard`, `FAQAccordion`, `TrustStrip`, `CTASection`, `RFQForm`, `Breadcrumbs`, `BlogCard`, `Pagination`, `Footer`.

**Responsive QA:** 360, 390, 768, 1024, 1440 px; tidak overflow horizontal; kontras, state fokus, keyboard access, ukuran tombol sentuh baik.

### Integrasi Anti-Slop (wajib)

Anti-Slop adalah **filter kualitas**, bukan sumber strategi SEO/GEO atau generator identitas brand. Gunakan versi yang sudah **terinstal di Antigravity**, jangan memasang salinan lain atau mengambil instruksi skill dari internet saat runtime. Pastikan aktif di awal sesi; apabila tidak terbaca, laporkan blocker tanpa mengaku sudah menggunakannya.

- **Design Read & dials:** `ENERGY 2 / RHYTHM 3 / MOTION 1`. Ini rekomendasi desain awal yang diturunkan dari brief Modern Industrial Premium. Bila pemilik memberi brand guide baru, revisi `DESIGN.md` dan alasannya.
- **Identity motif:** garis sambungan/panel terinspirasi konstruksi tas dan pola potong pakaian. Cukup sebagai penekanan tipografi atau divider tertentu; jangan bikin grid, motif palsu, atau dekorasi semata.
- **UI composition:** section berirama editorial, bukan deretan section judul di tengah + 3/6 card identik. Pembedaan tas vs pakaian harus eksplisit dan masuk akal.
- **Copy:** Bahasa Indonesia langsung, natural, spesifik terhadap jasa. Utamakan H1 yang jelas, detail kebutuhan B2B dan CTA nyata. Hindari jargon pemasaran kosong, fake stats, serta em dash (`—`) pada copy yang ditulis agent.
- **Buttons & links:** seluruh kontrol harus menuju route/anchor yang ada atau memiliki perilaku nyata; fitur yang belum aktif ditandai **secara terlihat** sebagai belum tersedia, bukan link mati. Khusus WhatsApp, tidak boleh memakai nomor fiktif.
- **Media:** jangan membuat logo, foto workshop, logo klien, testimoni, angka produksi, atau aset yang menyiratkan klaim tanpa persetujuan. Saat foto resmi belum tersedia, gunakan layout tipografis atau placeholder dev berlabel jelas; jangan gunakan gambar stok untuk menyamar sebagai bukti pekerjaan Abutas.
- **Accessibility:** semantik HTML, bahasa dokumen `id`, keyboard, focus visible, hover/active/disabled state, kontras teks, `prefers-reduced-motion`, dan ukuran tap target.
- **Performance:** reservasi dimensi/aspect ratio media; jika ada hero `<img>`, jangan lazy load dan beri prioritas. Jangan mengutip skor kecepatan tanpa pengukuran.
- **Design reasoning:** tulis 1 kalimat alasan setiap pilihan visual utama (palet, tipografi, layout, spacing, penggunaan cards/icons).
- **QA:** di akhir setiap step yang menyentuh UI/copy, jalankan **Anti-Slop Delivery Gate** dalam 4 blok dari skill, dengan hasil berbasis bukti. Laporan itu **tambahan** dari lint/typecheck/tests/build, bukan penggantinya.
- **SEO/GEO protection:** aturan Anti-Slop tidak boleh dipakai sebagai alasan menghapus H1, breadcrumb, konten yang relevan bagi pengunjung, metadata, internal link yang bekerja, JSON-LD yang valid, atau navigasi penting.
- **Scope:** Fresh project murni. Tidak ada backup WordPress, audit URL lama, migrasi, atau redirect lama dalam pekerjaan pengembangan.


## 12 — User journeys

**Journey A (search → request):** pencarian "konveksi tas seminar" → detail tas seminar → spesifikasi yang harus disiapkan → foto portofolio → formulir penawaran.

**Journey B (homepage → WhatsApp):** homepage → klik kategori pakaian → lihat pilihan produk → CTA WhatsApp dengan draft pesan yang menyebut kategori.

**Journey C (artikel → commercial):** artikel jenis bahan tote bag → perbandingan bahan → contextual CTA ke jasa tote bag → RFQ.

## 13 — Form RFQ dan WhatsApp

**Field minimum:** nama, kontak WhatsApp/telepon, jenis layanan, produk, estimasi jumlah, kebutuhan tambahan. Opsional: perusahaan, email, tanggal dibutuhkan, unggahan desain (tahap lanjut).

**Behavior:** validasi server dan client, anti-spam/honeypot serta rate limit, privasi jelas, status sukses hanya setelah submission benar-benar disimpan/terkirim, empty/error/retry state, jangan mencatat data pribadi ke analytics.

**WhatsApp:** link `wa.me` menggunakan nomor verified, template pesan yang memuat konteks produk dan jumlah bila tersedia. Jangan hardcode nomor contoh yang bisa salah kirim; bila belum ada nomor, tombol nonaktif dengan penjelasan di environment dev.

**Analytics events:** `view_service`, `click_whatsapp`, `rfq_start`, `rfq_submit_success`, `rfq_submit_error`, `view_portfolio`; sumber halaman dan kategori tanpa PII. Pelaporan lead terpisah dari jumlah klik.

## 14 — Rekomendasi arsitektur dan data

**Frontend:** Next.js App Router + TypeScript strict + Tailwind CSS. Gunakan Server Components untuk konten utama; Client Components hanya bila interaktif.

**CMS:** Sanity untuk konten jasa, artikel, portofolio, FAQ dan site settings. Editorial workflow draft/published dengan query yang aman.

**RFQ storage:** pilih server-side managed service setelah kebutuhan disetujui (Supabase atau provider form/email yang sesuai), tidak wajib dibuat pada Step 00. Hindari dependensi infrastruktur berbayar tanpa konfirmasi.

**Deploy:** managed hosting Next.js atau alternatif yang sesuai anggaran. Jangan menyentuh DNS/hosting live sebelum owner memberi izin eksplisit.

**Data content models:**

- `siteSettings`: companyName, logo, colors, legalContacts, address (optional), socials, businessHours, siteMetadata, primaryCTA.
- `servicePillar`: title, slug, shortDescription, hero, sections, relatedServices, SEO fields, publishStatus.
- `service`: pillarRef, title, slug, description, materials, customizationOptions, gallery, FAQs, relatedProjects, SEO, publishStatus.
- `portfolioProject`: title, slug, serviceRefs, clientPermission, summary, facts, imageGallery, SEO, publishStatus.
- `article`: title, slug, excerpt, sections, citations/sources, author/reviewer, media, relatedServices, publishStatus.
- `faq`: question, answer, relatedService, approvalStatus.
- `quoteLead`: server-side collection only, access controlled, retention policy and consent.

**Environment:** `.env.example`; server-only secrets; never commit `.env.local`; status environment checked at runtime; secure server validation.

## 15 — Project folder design (contoh)

```text
abutas/
├── AGENTS.md
├── DESIGN.md                  # brand/design direction for anti-slop
├── README.md
├── .env.example
├── docs/
│   ├── blueprint.md
│   ├── business-facts.md
│   ├── content-inventory.md
│   ├── qa-checklist.md
│   └── launch-checklist.md
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   ├── api/quote/
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   ├── lib/
│   ├── sanity/
│   ├── styles/
│   └── types/
├── public/
└── tests/
```

Tidak wajib persis seperti di atas; sesuaikan dengan versi framework dan kerumitan proyek.

## 16 — Content & editorial plan (12 minggu, bersyarat)

| Prioritas | Konten | Tujuan |
|---|---|---|
| Minggu 1–2 | Homepage, dua pillar, cara pesan, kontak, RFQ | Fondasi conversion & struktur SEO |
| Minggu 3–5 | 3–6 layanan yang benar-benar tersedia | Intent komersial yang spesifik |
| Minggu 6–8 | 3–5 portofolio asli, jika ada izin foto | Trust & experiential proof |
| Minggu 9–12 | 4–6 artikel helpful + FAQ terverifikasi | Topical relevance dan contextual links |

Ini urutan prioritas editorial, bukan janji estimasi pekerjaan atau hasil ranking. Bila konten valid tidak ada, jangan membuat fakta untuk memenuhi jumlah.

**Contoh artikel:**
- Cara memilih bahan tas seminar sesuai kebutuhan event.
- Tote bag spunbond vs kanvas: pertimbangan ketahanan dan tampilan.
- Checklist brief produksi seragam kerja untuk tim procurement.
- Perbedaan sablon dan bordir untuk polo shirt perusahaan.
- Faktor yang memengaruhi harga produksi tas custom.

## 17 — Acceptance criteria dan QA

**Project foundation:** repository baru bisa install/run/build; TypeScript strict, lint dan test command jelas; `AGENTS.md` mengatur pengembangan satu step per kali; `.env.example`; assets faktual belum dibuat-buat.

**Frontend:** seluruh link valid, komponen reusable, accessible, responsive, dan pesan copy tidak mengandung lorem ipsum pada route yang akan publish.

**CMS:** perubahan satu konten draft→published tampil sesuai workflow; draft tidak dapat diindeks; error API ditangani; alt text tersedia.

**SEO:** URL, H1, title, description, canonical, sitemap, robots, JSON-LD, breadcrumbs terverifikasi otomatis/manually; setiap halaman pilar tertaut dari header.

**RFQ:** validasi, captcha/rate-limit yang wajar, privasi, sukses/error berdasarkan hasil backend; analytics tidak membawa PII; nomor WA valid.

**Production launch:** semua konten publik approved; halaman noindex hanya yang memang privat; HTTPS dan domain canonical benar; 404 bekerja; performa dan security diuji; sitemap diajukan ke Search Console setelah live.

## 18 — Roadmap Antigravity, satu step per sesi

| Step | Scope | Definition of Done |
|---|---|---|
| **00** — New project initialization | Scaffold Next.js, TypeScript, Tailwind, AGENTS.md, DESIGN.md, docs, test baseline; verify Anti-Slop plugin detection | Dev server, lint, typecheck, build lulus; desain terdokumentasi |
| **01** — Design system & homepage | DESIGN.md-driven UI, komponen, homepage responsive, anti-slop during | QA mobile/desktop, semua kontrol berfungsi, Delivery Gate lulus |
| **02** — Core pages | Pillar tas/pakaian, detail service, portfolio, tentang, cara pesan, kontak, artikel, RFQ shell, privasi | Semua route dan internal links valid |
| **03** — Sanity CMS | Models, draft/publish, queries, preview aman | Test edit konten→render sukses |
| **04** — SEO & GEO | Metadata, schema, sitemap, robots, canonicals, semantic content | Checklist teknis SEO pass |
| **05** — Lead capture | Form RFQ, backend storage, WhatsApp, analytics | Test form dan error states pass |
| **06** — Real content & performance | Tinjau fakta layanan, foto, portfolio, copy, CWV, a11y | Tidak ada klaim palsu/dummy pada publish |
| **07** — Greenfield launch readiness | Production env, domain/HTTPS approval, final QA, release checklist | Siap rilis; tidak deploy tanpa izin |
| **08** — Postlaunch monitoring | Indexing, GSC, GA4, error, leads, iteration | Baseline dashboard dan backlog optimasi |

## 19 — Product decision log (belum final)

| Keputusan | Status awal |
|---|---|
| Tas dan pakaian sama-sama pillar | Rekomendasi proyek |
| CTA RFQ + WhatsApp | Rekomendasi proyek |
| Next.js + TS + Tailwind | Rekomendasi teknis |
| Sanity CMS | Rekomendasi teknis |
| Supabase/form backend | Opsional, keputusan Step 05 |
| Foto produksi asli | Wajib untuk klaim faktual |
| Domain target abutas.com | Sudah ditetapkan |
| Warna brand final | Token DESIGN.md merupakan konsep awal, menunggu logo/identitas resmi |
| Anti-Slop | Terinstal di Antigravity menurut pemilik; agent harus verifikasi aktif |
| DESIGN.md | Acuan visual awal yang perlu dibaca sebelum pengerjaan UI |
| Alamat dan jangkauan | UNVERIFIED |
| Daftar produk, MOQ, harga, lead time | UNVERIFIED |

## 20 — Panduan kerja Antigravity (wajib)

1. Baca blueprint ini, `AGENTS.md`, dan untuk UI/copy juga `DESIGN.md` sebelum mengubah kode. Pastikan Anti-Slop sudah dimuat di Antigravity dan gunakan mode `during`.
2. Kerjakan **hanya satu Step** setiap perintah; jangan lompat ke CMS saat user minta homepage.
3. Mulai dengan visual yang layak dilihat pada preview tanpa mengarang bukti produksi.
4. Jangan mengklaim PASS tanpa menjalankan tes; tulis command dan hasil nyata.
5. Jangan menyisipkan testimoni, proyek, logo klien, angka MOQ, harga, atau alamat rekaan.
6. Jangan menyalakan deployment production, DNS/domain, notifikasi eksternal berbayar, atau layanan yang menimbulkan biaya tanpa izin.
7. Setiap akhir Step kirim `Ringkasan`, `File diubah`, `Test PASS/FAIL`, `Screenshot/preview`, `Limitasi`, `Next Step`, dan **Anti-Slop Delivery Gate** untuk step UI/copy (keempat blok beserta bukti).

---

**Instruksi pertama:** buka `ABUTAS_ANTIGRAVITY_BUILD_PROMPTS_v3_ANTISLOP.md` dan jalankan *Starter Prompt — Step 00*. Jangan mengerjakan Step lain sebelum user menilai hasilnya.
