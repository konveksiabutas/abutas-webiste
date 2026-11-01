# ANTIGRAVITY PROMPT — STEP 01A: DESIGN CONCEPT ONLY

Kita akan mengubah arah visual ABUTAS.COM menjadi **CREATIVE MANUFACTURING STUDIO** (Modern Creative Agency × Industrial Craftsmanship).

**Penting: Jangan langsung redesign aplikasi Next.js saat ini.** Homepage yang sudah ada tetap utuh sampai desain v5 disetujui pemilik.

## Reference files
1. `AGENTS.md`
2. `DESIGN.md` (pastikan sudah diganti dengan v5)
3. `docs/blueprint.md`
4. Laporan audit Anti-Slop sebelumnya, jika tersedia

## WAJIB: skill usage traceable
Baca file-file nyata yang sudah diinstal secara eksplisit:
- `antislop/SKILL.md`
- `antislop-ui/SKILL.md`
- `antislop-copywriting/SKILL.md`
- `antislop-human/SKILL.md`
- `antislop-layoutmobile/SKILL.md`
- `antislop-code/SKILL.md`

Gunakan mode `during`. Sebutkan path yang benar-benar dibaca. Jangan menyatakan kepatuhan hanya berdasarkan banner "active". Jika skill tidak ditemukan, laporkan, jangan pasang ulang.

## TASK: VISUAL DIRECTION + REAL PREVIEW
1. Pelajari `DESIGN.md v5` dan pertahankan strategi SEO/GEO master blueprint.
2. Buat **satu konsep homepage kreatif yang matang**, bukan 5 template setengah jadi.
3. Wujudkan mockup desktop **1440px** dan mobile **390px** sebagai screenshot dari prototype mandiri. Prototype boleh berupa `design-previews/v5/index.html` + CSS terisolasi dan media di `design-previews/v5/assets/`. Jangan edit `/src/app/page.tsx` dan komponen production, jangan ubah `package.json`, dan jangan membuat backend/CMS.
4. Konsep harus menampilkan: header, hero berdampak kuat, dua pilar layanan, kebutuhan customer, langkah konsultasi singkat, final CTA, footer. FAQ boleh ringkas/hilang bila konten belum siap.
5. Gunakan hero dengan tas dan pakaian jelas. Fotografi/ilustrasi produk harus punya asal yang sah dan tidak boleh diposisikan sebagai hasil produksi Abutas. Catat sumber di `design-previews/v5/asset-notes.md`.
6. Pastikan tampilan bukan SaaS, bukan dashboard, bukan minimalis steril. Uji hierarki tipografi, negative space yang berfungsi, image crop, dan variasi komposisi.
7. Gunakan burnt-orange secara selektif. Ikuti design tokens v5; bukan sekadar mengganti warna v4.
8. Tulis copy berbahasa Indonesia, fokus B2B, singkat, natural, tanpa klaim palsu.

## DESIGN REQUIREMENTS
- Typography Archivo yang expressive, body Plus Jakarta Sans yang mudah dibaca.
- Hero berani, distinctive brand moment, tanpa teks kecil berlebihan.
- Material & product storytelling yang relevan.
- Mobile dibuat sebagai layout sendiri; bukan mengecilkan desktop.
- Interaksi prototype boleh minimal, tetapi jangan membuat link seolah aktif padahal tidak bisa digunakan. Label konsep boleh dibuat noninteractive.
- Hindari video berat, efek scroll-jacking, animasi tanpa fungsi, dan dekorasi berlebihan.
- Jaga navigasi, fokus, kontras, dan reduced-motion jika ada interaksi.

## OUTPUT REQUIRED
- Screenshot full-page desktop 1440px.
- Screenshot full-page mobile 390px.
- Screenshot first-fold desktop dan mobile bila perlu.
- List perubahan visual dan alasan tiap keputusan.
- Audit Anti-Slop spesifik, tunjukkan bukti file skill yang dibaca.
- Daftar aset gambar dan status AI/izin.
- Status: **PENDING DESIGN APPROVAL**, bukan otomatis PASS.

**STOP after Step 01A. Jangan implementasikan kode production atau lanjut ke Step 02.**
