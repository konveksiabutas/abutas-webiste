import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Archivo } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121517",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ABUTAS — Konveksi Tas & Pakaian Custom untuk Kebutuhan Bisnis",
  description:
    "Partner produksi tas dan pakaian custom untuk kebutuhan bisnis, perusahaan, event, komunitas, dan brand di Indonesia.",
  metadataBase: new URL("https://abutas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ABUTAS — Konveksi Tas & Pakaian Custom untuk Kebutuhan Bisnis",
    description:
      "Partner produksi tas dan pakaian custom untuk kebutuhan bisnis, perusahaan, event, komunitas, dan brand di Indonesia.",
    url: "https://abutas.com",
    siteName: "ABUTAS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/hero-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "ABUTAS Creative Manufacturing Studio — Konveksi Tas & Pakaian Custom",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable} ${archivo.variable}`}>
      <body className="min-h-screen bg-canvas text-ink font-sans antialiased selection:bg-action/20 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
