import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-20 text-center">
      <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
        / 404 — HALAMAN TIDAK DITEMUKAN /
      </span>
      <h1 className="mt-4 text-3xl font-black tracking-tight text-ink font-display sm:text-5xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
        Halaman yang Anda cari mungkin telah dipindahkan, diubah namanya, atau belum tersedia.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-md bg-action px-6 text-sm font-bold text-white transition-colors hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
        >
          <span>Kembali ke Beranda</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/kontak/"
          className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-line-light bg-paper px-6 text-sm font-bold text-ink transition-colors hover:bg-[#F2ECE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
        >
          Hubungi Kontak
        </Link>
      </div>
    </div>
  );
}
