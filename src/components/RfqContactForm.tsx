"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG } from "@/lib/constants";

interface RfqContactFormProps {
  whatsappNumeric?: string;
  whatsappDisplay?: string;
  officialEmail?: string;
}

export function RfqContactForm({
  whatsappNumeric = BUSINESS_CONFIG.whatsapp.numeric,
  whatsappDisplay = BUSINESS_CONFIG.whatsapp.display,
  officialEmail = BUSINESS_CONFIG.email.address,
}: RfqContactFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    category: "Konveksi Tas Custom",
    quantity: "",
    notes: "",
  });

  const [generatedSummary, setGeneratedSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateSummary = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      "Halo ABUTAS, saya ingin mengajukan rincian kebutuhan produksi custom:",
      `• Nama Lengkap: ${formData.name || "-"}`,
      formData.company ? `• Perusahaan/Organisasi: ${formData.company}` : null,
      `• Kontak Pemesan: ${formData.contact || "-"}`,
      `• Kategori Layanan: ${formData.category}`,
      `• Perkiraan Kuantitas: ${formData.quantity ? formData.quantity + " pcs" : "-"}`,
      `• Rincian Spesifikasi & Desain: ${formData.notes || "-"}`,
    ].filter(Boolean);

    const summary = parts.join("\n");
    setGeneratedSummary(summary);
    setCopied(false);
  };

  const handleCopyClipboard = async () => {
    if (!generatedSummary) return;
    try {
      await navigator.clipboard.writeText(generatedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
    }
  };

  return (
    <div className="rounded-2xl border border-line-light bg-paper p-6 sm:p-8 shadow-sm">
      <div className="mb-6 border-b border-line-light pb-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-1">
          / FORMULIR KONSULTASI &amp; RFQ /
        </span>
        <h2 className="text-xl font-black text-ink font-display sm:text-2xl">
          Rincian Kebutuhan Produksi
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Susun spesifikasi rencana pesanan tas atau pakaian custom Anda untuk mempermudah perhitungan penawaran harga.
        </p>

        {/* Consultation Flow Notice */}
        <div className="mt-4 rounded-lg border border-action/20 bg-action-subtle/10 p-3.5 text-xs text-ink/90 flex items-start gap-2.5">
          <span className="text-action font-bold shrink-0 mt-0.5">ℹ</span>
          <p className="leading-relaxed">
            <strong>Alur Konsultasi &amp; Penawaran:</strong> Susun spesifikasi pesanan Anda melalui formulir di bawah ini. Setelah draf ringkasan tersusun, Anda dapat langsung meneruskannya ke WhatsApp resmi Abutas ({whatsappDisplay}), mengirimkannya via Email ({officialEmail}), atau menyalinnya ke clipboard.
          </p>
        </div>
      </div>

      <form onSubmit={handleGenerateSummary} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-ink mb-1.5">
              Nama Lengkap <span className="text-action">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Contoh: Budi Pratama"
              className="w-full min-h-[44px] rounded-md border border-line-light bg-canvas px-3.5 py-2 text-xs sm:text-sm text-ink placeholder:text-[#959E9F] focus:border-action focus:outline-none focus:ring-1 focus:ring-action transition-colors"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-bold text-ink mb-1.5">
              Perusahaan / Organisasi (Opsional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Contoh: PT Sumber Makmur"
              className="w-full min-h-[44px] rounded-md border border-line-light bg-canvas px-3.5 py-2 text-xs sm:text-sm text-ink placeholder:text-[#959E9F] focus:border-action focus:outline-none focus:ring-1 focus:ring-action transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact" className="block text-xs font-bold text-ink mb-1.5">
              Nomor WhatsApp / Telepon <span className="text-action">*</span>
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              placeholder="0812-xxxx-xxxx"
              className="w-full min-h-[44px] rounded-md border border-line-light bg-canvas px-3.5 py-2 text-xs sm:text-sm text-ink placeholder:text-[#959E9F] focus:border-action focus:outline-none focus:ring-1 focus:ring-action transition-colors"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-xs font-bold text-ink mb-1.5">
              Kategori Layanan <span className="text-action">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full min-h-[44px] rounded-md border border-line-light bg-canvas px-3 py-2 text-xs sm:text-sm text-ink focus:border-action focus:outline-none focus:ring-1 focus:ring-action transition-colors cursor-pointer"
            >
              <option value="Konveksi Tas Custom">Konveksi Tas Custom</option>
              <option value="Konveksi Pakaian &amp; Seragam">Konveksi Pakaian &amp; Seragam</option>
              <option value="Paket Keduanya (Tas &amp; Pakaian)">Paket Keduanya (Tas &amp; Pakaian)</option>
              <option value="Konsultasi Lainnya">Konsultasi Lainnya</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-xs font-bold text-ink mb-1.5">
            Perkiraan Kuantitas (Pcs) <span className="text-action">*</span>
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            required
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Contoh: 100 pcs (atau kisaran 50-200 pcs)"
            className="w-full min-h-[44px] rounded-md border border-line-light bg-canvas px-3.5 py-2 text-xs sm:text-sm text-ink placeholder:text-[#959E9F] focus:border-action focus:outline-none focus:ring-1 focus:ring-action transition-colors"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-xs font-bold text-ink mb-1.5">
            Rincian Kebutuhan &amp; Spesifikasi Produk
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tuliskan model produk, jenis bahan yang diinginkan, jumlah warna sablon / bordir, atau batas tanggal acara jika ada."
            className="w-full rounded-md border border-line-light bg-canvas px-3.5 py-2.5 text-xs sm:text-sm text-ink placeholder:text-[#959E9F] focus:border-action focus:outline-none focus:ring-1 focus:ring-action transition-colors"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-action px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 cursor-pointer"
          >
            <span>Susun Draf Rincian Pesanan</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
          <span className="block mt-2 text-center text-[11px] text-muted">
            Sistem akan menyusun draf teks terstruktur berdasarkan isian di atas tanpa mengirimkan data ke pihak ketiga.
          </span>
        </div>
      </form>

      {/* Structured Draft Output */}
      {generatedSummary && (
        <div className="mt-8 rounded-xl border border-action/30 bg-[#FFFBF8] p-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-3 border-b border-line-light pb-2.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-action">
              Pratinjau Draf Rincian Pesanan
            </span>
            <span className="rounded bg-action-subtle/20 px-2 py-0.5 text-[10px] font-bold text-action">
              Tersusun Lokal
            </span>
          </div>

          <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-ink bg-white p-4 rounded-lg border border-line-light leading-relaxed">
            {generatedSummary}
          </pre>

          <div className="mt-4 flex flex-wrap gap-3 items-center">
            {/* Opsi Utama: WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumeric}?text=${encodeURIComponent(generatedSummary)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-md bg-action px-5 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-action-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action cursor-pointer"
            >
              <span>Kirim via WhatsApp ({whatsappDisplay})</span>
              <span aria-hidden="true">↗</span>
            </a>

            {/* Opsi Alternatif: Email */}
            <a
              href={`mailto:${officialEmail}?subject=${encodeURIComponent("Permintaan Penawaran (RFQ) Konveksi Custom — ABUTAS")}&body=${encodeURIComponent(generatedSummary)}`}
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-md border border-line-light bg-paper px-4 text-xs font-bold uppercase tracking-wider text-ink hover:bg-[#F2ECE3] hover:border-[#D0C9BD] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Kirim via Email</span>
            </a>

            {/* Opsi Salin Clipboard */}
            <button
              type="button"
              onClick={handleCopyClipboard}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-line-light bg-paper px-4 text-xs font-bold uppercase tracking-wider text-ink hover:bg-[#F2ECE3] hover:border-[#D0C9BD] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              <span>{copied ? "✓ Draf Berhasil Disalin" : "Salin Draf ke Clipboard"}</span>
            </button>
          </div>

          <div className="mt-3.5 rounded-md bg-canvas/80 p-3 border border-line-light/80 text-[11px] text-muted leading-relaxed">
            <strong className="text-ink">Pemberitahuan Transparansi:</strong> Menekan tombol &quot;Kirim via WhatsApp&quot; atau &quot;Kirim via Email&quot; akan membuka aplikasi WhatsApp atau aplikasi email Anda dengan draf rincian pesanan yang telah terisi otomatis. Silakan periksa kembali isi pesan lalu tekan tombol Send di aplikasi untuk menyelesaikan pengiriman. Tidak ada data pribadi yang disimpan di server kami.
          </div>
        </div>
      )}
    </div>
  );
}
