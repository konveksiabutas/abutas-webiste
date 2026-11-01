# ABUTAS.COM — DESIGN.md v5
## Creative Manufacturing Studio

**Status:** Art-direction proposal for approval before implementation. **Replaces DESIGN.md v4 for visual decisions only.**

**North star:** *Website jasa konveksi dengan keberanian visual creative agency dan kejelasan komersial pabrik custom.* Saat orang membuka halaman, mereka harus langsung mengerti bahwa ABUTAS menerima kebutuhan **konveksi tas dan konveksi pakaian custom**, merasakan kualitas visual yang menarik, lalu menemukan jalur konsultasi.

**Project scope:** Greenfield website Abutas. Ini **bukan** migrasi website lama. Tidak perlu backup, audit WordPress, atau mengimplementasikan halaman lama. Master Blueprint v3 tetap berlaku untuk strategi SEO/GEO, kejujuran fakta bisnis, dan arsitektur. AGENTS.md tetap berlaku untuk engineering/keamanan. Bila arahan visual lama bentrok dengan v5, v5 menang untuk **art direction**.

## 01 — Konsep kreatif

### Creative thesis
**"Made for your next idea."** Abutas sebagai tempat ide brand, event, dan perusahaan menjadi barang yang bisa dipegang: tas dan pakaian custom. Bahasa visual memadukan energi studio kreatif dengan kejelasan penawaran manufaktur B2B.

**Bukan:** dashboard, SaaS landing page, toko diskon, web agency yang abstrak tanpa produk, katalog kecil bertumpuk, template corporate steril, atau website yang memamerkan diagram QC internal.

**Kata kunci visual:** expressive / tactile / bold / precise / human / editorial / approachable.

### Perasaan dalam 5 detik
1. Produk tas dan pakaian **menjadi tokoh utama**.
2. Terdapat 1 headline tajam dan gampang dibaca.
3. Ada elemen brand memorable, bukan sekadar latar putih dan kartu.
4. Pengunjung tahu jalan menuju layanan dan konsultasi.
5. Meski kreatif, website tetap terasa bisa dipercaya dan mudah dipakai.

### Anti-Slop Three Dials
- **ENERGY 4 / 5:** scale typography berani, kontras, visual product-led, identitas khas.
- **RHYTHM 4 / 5:** tiap section berbeda komposisi dengan grid yang tetap rasional.
- **MOTION 2 / 5:** animasi halus pada hover/transisi; pengalaman tetap cepat, reduksi gerak didukung. **Tidak** memakai scroll-jacking, animasi berat, marquee terus-menerus, atau parallax yang mengganggu.

## 02 — Identitas brand / visual grammar

### Palet eksplorasi v5
| Token | Hex | Peran |
|---|---|---|
| `charcoal` | `#171B1C` | Headline, section hero gelap, footer |
| `ivory` | `#F1EDE5` | Latar utama hangat |
| `white` | `#FFFDF8` | Alternatif ruang kosong |
| `orange` | `#E56B37` | Aksen untuk satu aksi/elemen fokal; bukan semua ikon |
| `sage` | `#96978B` | Latar editorial/penyeimbang foto |
| `line` | `#CAC5BC` | Divider fungsional |

**Komposisi:** kurang lebih 65% ivory/off-white, 25% charcoal, 7% warna netral pendukung, 3% burnt orange. Ini orientasi visual, bukan formula pixel wajib. Saat memakai orange untuk tombol, cek kontras label berdasarkan ukuran teks sebenarnya. Gunakan charcoal untuk teks di atas orange bila pasangan putihnya tidak memenuhi AA.

**Motif khas yang boleh digunakan, bila punya fungsi visual:**
- *Cut & Stitch Line:* satu garis potong seperti pola jahit, digunakan sebagai transisi SECTION tertentu atau arah visual menuju foto.
- *Oversized index:* 01 / 02 pada layanan besar, memperkuat ritme editorial.
- *Product silhouette framing:* siluet tas/polo, bentuk foto mengikuti crop yang sengaja dipilih.

Hindari melampaui 1–2 motif khas dalam satu viewport. Tidak memerlukan gradient, glass, elemen 3D, atau sticker badge hanya demi dekorasi.

### Typography
- **Display:** Archivo Black / Archivo ExtraBold (gunakan Archivo yang sudah dipasang jika bobot tersedia).
- **Body / UI:** Plus Jakarta Sans (sudah digunakan project).
- **Hero desktop:** target 76–112 px pada layar besar bila copy tetap muat, line-height 0.94–1.02; gunakan `clamp` berbasis viewport dan lebar kolom.
- **Hero mobile:** target 43–56 px, line breaks dirancang manual untuk kalimat Bahasa Indonesia, bukan mengecilkan desktop sampai tak terbaca.
- **Section titles:** desktop 42–68 px, mobile 32–42 px.
- **Body:** 16–18 px, nyaman dibaca; nav/label bukan microscopic text.
- **Microtype:** 11–13 px hanya untuk nomor indeks/caption minor, jangan pakai untuk penjelasan layanan.

Gunakan perbedaan ukuran/berat sebagai hierarchy yang sesungguhnya, bukan semua judul sama-sama bold.

### Image / art direction
Visual produk harus mengundang perhatian: tas kanvas, laptop bag, tote bag, polo/kaos, workwear. Treatment: editorial still life, cutouts yang natural, close-up material bertekstur, warm directional lighting, bayangan nyata, komposisi asimetris. Bisa mengombinasikan **produk tas + pakaian dalam hero** agar kedua layanan tampil setara.

Urutan aset:
1. Foto produk **asli** Abutas jika ada dan izin jelas.
2. Foto generik berizin / visual AI sebagai **ilustrasi jenis produk**, tidak pernah diklaim produksi Abutas.
3. Gambar ilustratif silhouette produk jika foto generik yang layak tidak ada.

**Dilarang mengarang** workshop Abutas, klien, testimoni, kapasitas, MOQ, lokasi, sertifikasi, spesifikasi material, harga, lead time, atau portofolio.

Asset register wajib mencatat: file, sumber, lisensi/status AI ilustratif, tujuan, caption, alt. Jangan menaruh label "hasil produksi kami" pada visual buatan AI.

## 03 — Homepage composition (desktop artboard 1440px)

### Header: compact, confident
- Wordmark **ABUTAS** kuat di kiri; nav singkat: Layanan / Cara Pesan / Tentang / Kontak sesuai route yang sudah berfungsi.
- Header visual tetap tenang supaya hero punya panggung.
- Satu CTA utama, hanya jika tujuan valid (WhatsApp/form benar-benar aktif); jika belum, arahkan ke section brief yang memang berguna.

### HERO: "Two worlds. One production partner."
- Layout **high-impact editorial**; 2/5 headline, 3/5 product art **atau** headline besar di atas mosaic media; pilih berdasarkan screenshot mana paling kuat.
- Aksen burnt orange yang hanya menarik perhatian ke CTA utama atau bentuk kecil dari graphic system.
- Foto produk dominant di kanan atau bawah headline, minimal 40% first fold.
- **Copy pilihan:**
  - H1: `Konveksi Tas & Pakaian Custom untuk Bisnis Anda.`
  - Subcopy: `Dari kebutuhan perusahaan hingga merchandise event, jelajahi pilihan produksi tas dan pakaian yang bisa disesuaikan dengan brief Anda.`
  - CTA utama: `Jelajahi Layanan` (link ke rute yang benar; jika belum ada ke `#layanan`).
  - CTA kedua: `Mulai Konsultasi` hanya jika kontak valid; jika belum `Siapkan Brief` ke fitur yang betul-betul bekerja.
- **No:** overstuffed badges, panel QC, angka palsu, 2 paragraf panjang, mockup dashboard, tulisan tidak terbaca di atas foto.

### Section 02: Service artboards
- Dua komposisi besar untuk **Konveksi Tas** dan **Konveksi Pakaian**, visual dominan, arsitektur editorial **berbeda**.
- Contoh: tas dalam horizontal media bleed + headline overlapping di bidang ivory; pakaian sebagai composition foto atas + blok gelap bawah.
- Ada teks singkat dan CTA yang menuju route nyata atau anchor yang jujur, tidak tautan `/konveksi-*` yang masih 404.
- Bentuk karya visual produk, bukan dua card identik.

### Section 03: B2B use cases (max four)
- `Perusahaan`, `Event`, `Komunitas`, `Brand & UMKM`.
- Lebih menarik sebagai *oversized typography + scrollable visual language* atau daftar dengan nomor besar; gunakan media hanya jika relevan.
- Tegaskan alasan praktis; jangan mengklaim proyek/klien nyata.

### Section 04: How it starts
- Ceritakan kebutuhan → Diskusikan spesifikasi → Sepakati penawaran/rencana, ditulis sebagai **alur komunikasi awal** (bukan janji sistem produksi).
- Hanya tiga langkah. Grid/rail editorial, bukan kartu kecil berjejer.

### Section 05: Trust without fake proof
- Kredibilitas lewat **cara order yang transparan**, contoh jenis kebutuhan, kemampuan mengajukan brief, dan informasi kontak nyata yang terverifikasi.
- Jangan menampilkan "Our Clients", logo perusahaan fiktif, kapasitas pabrik, angka projek, atau section portfolio kosong.
- FAQ hanya jika ada pertanyaan dan jawaban yang memang bisa dipastikan.

### Section 06: Strong final CTA
- Full-width CHARCOAL section; headline besar, satu CTA aksen oranye **jika berfungsi**; teks singkat.
- Jika integrasi kontak belum ada, presentasikan `Siapkan Brief` dengan perilaku yang jujur (misalnya menyalin ringkasan), jangan klaim form telah dikirim.
- Footer clean dengan route hidup.

**Ritme visual:** hero high-energy → photoservice full bleed → editorial typography → process sequence → dark final CTA. Tidak perlu semua section latar berbeda. Jangan mengisi halaman dengan banyak konten hanya demi panjang.

## 04 — Mobile artboard 390px

- Hero H1 43–56 px dengan line breaks yang sengaja dikontrol; foto tas/pakaian muncul cepat setelah copy, bukan turun 3 layar.
- Menu drawer accessible, no trapped focus, 44px tap targets.
- Section jasa ditumpuk dengan gambar dominant; hindari card stack UI.
- Kontras visual dijaga. Ornamen brand yang rumit boleh disederhanakan.
- Tidak ada horizontal overflow pada 360, 390, 768, 1024, dan 1440px.
- Atur fokus gambar (`object-position`) agar tas dan pakaian tidak terpotong merusak komposisi.
- Ukuran body tetap dapat dibaca; jangan mengejar screenshot estetis dengan font teks kecil.

## 05 — Quality bar & creative scorecard

Gunakan **dua gate**:

### Technical (terukur)
- `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`.
- Semantic HTML, satu H1, metadata SEO benar, `next/image`, alt, ukuran gambar stabil, navigasi hidup, form jujur.
- LCP, keyboard, fokus, mobile tap target, reduced-motion.

### Visual (harus dinilai dari screenshot)
Masing-masing dinilai 1–5, target minimal **4** kecuali bila materi aset benar-benar belum cukup:
1. **First-fold impact:** bisa mengenali tas/pakaian dan memahami bisnis dalam lima detik.
2. **Brand character:** punya ciri khas yang tidak terasa template.
3. **Editorial rhythm:** layout terasa disengaja, bukan ulang-ulang card.
4. **Photography & composition:** media jadi protagonist dan crop tepat.
5. **Typography hierarchy:** headline kuat, body tetap terbaca.
6. **Mobile craft:** komposisi mobile bukan desktop diringkas.
7. **Conversion clarity:** tindakan berikutnya terlihat dan benar-benar bekerja.

**Step 01A adalah konsep desain, bukan implementation sign-off.** Status `DESIGN APPROVED` hanya dapat diberikan oleh pemilik setelah melihat **desktop & mobile**. Jangan mengklaim PASS desain sendiri. Kode boleh lulus build namun desain tetap FAIL.

## 06 — Anti-Slop execution contract

Sebelum desain/preview, agent harus membaca file skill nyata (bukan hanya mengaku mode aktif):
- `antislop/SKILL.md`
- `antislop-ui/SKILL.md`
- `antislop-copywriting/SKILL.md`
- `antislop-human/SKILL.md`
- `antislop-layoutmobile/SKILL.md`
- `antislop-code/SKILL.md`

Tunjukkan path file, aturan yang digunakan, dan contoh keputusan design. Terapkan **during** sehingga pemeriksaan terjadi saat eksplorasi/produksi, bukan hanya pernyataan setelah selesai.

## 07 — Workflow (anti-boros-token, design-first)

**Step 01A — Visual concept (NOW):** buat 1 coherent visual direction dan mockup desktop + mobile di lingkungan terpisah / non-production preview. **Jangan menimpa homepage yang sedang berjalan**. Format yang disarankan `design-previews/v5/index.html` dengan CSS isolated atau artefak mockup lokal lain; lampirkan screenshot 1440px dan 390px tanpa DevTools. Boleh gunakan ilustrasi/asset generik berizin dengan catatan. Jelaskan rationale 5–8 poin. Hentikan sampai user approve.

**Step 01B — Implement after approval (LATER):** baru migrasikan komposisi visual yang disetujui ke Next.js components dan revisi `DESIGN.md` bila perlu. Jangan membuat navigasi multipage dulu (Step 02).

**Step 02+:** membangun multipage layanan SEO, portofolio bila aset asli tersedia, artikel, kontak, CMS, schema, dan konversi mengikuti roadmap blueprint.

## 08 — Final acceptance tests for v5 visual concept

- [ ] Tidak ada nuansa dashboard atau tiny microcopy.
- [ ] Tas + pakaian hadir di first fold atau visual utama dengan jelas.
- [ ] Komposisi berani tetapi tidak mempersulit pembaca.
- [ ] CTA fungsional (atau dengan jujur dinonaktifkan dalam mockup).
- [ ] Copy tidak mengarang klaim bisnis.
- [ ] Font body readable minimal ~16px.
- [ ] Layout desktop dan mobile punya rancangan terpisah.
- [ ] Asset sources dicatat, AI illustration tidak disamarkan sebagai bukti produksi.
- [ ] Anti-Slop skills benar-benar dibaca saat proses.
- [ ] User sudah melihat dan menyetujui visual sebelum implementasi.
