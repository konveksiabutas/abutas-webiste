"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "./icons";

interface NavSubItem {
  title: string;
  href: string;
  description: string;
  badge: string;
}

const SERVICE_ITEMS: NavSubItem[] = [
  {
    title: "Konveksi Tas Custom",
    href: "/konveksi-tas/",
    description: "Tote bag, goodie bag, ransel, tas laptop, pouch & waist bag custom.",
    badge: "Pilar 01",
  },
  {
    title: "Konveksi Pakaian & Seragam",
    href: "/konveksi-pakaian/",
    description: "Kemeja kerja, polo shirt bordir, kaos sablon, jaket & seragam pabrik.",
    badge: "Pilar 02",
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && dropdownOpen) {
        setDropdownOpen(false);
        dropdownButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dropdownOpen]);

  const isHome = pathname === "/" || pathname === "";
  const isTas = pathname?.startsWith("/konveksi-tas");
  const isPakaian = pathname?.startsWith("/konveksi-pakaian");
  const isServicesActive = isTas || isPakaian;
  const isCaraPesan = pathname?.startsWith("/cara-pesan");
  const isTentangKami = pathname?.startsWith("/tentang-kami");
  const isKontak = pathname?.startsWith("/kontak");

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-dark text-white shadow-sm">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Wordmark with Orange Slash Mark */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-display text-2xl font-black tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm"
          aria-label="ABUTAS Beranda"
        >
          <span>ABUTAS</span>
          <span
            className="inline-block w-0 h-0 border-l-[9px] border-l-transparent border-b-[15px] border-b-action -skew-x-[15deg] ml-0.5"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden items-center gap-7 text-sm font-semibold text-[#D4D8DA] md:flex"
        >
          {/* Beranda Link */}
          <Link
            href="/"
            className={`inline-flex items-center py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm ${
              isHome
                ? "text-white border-b-2 border-action pb-0.5"
                : "text-[#D4D8DA]"
            }`}
          >
            Beranda
          </Link>

          {/* Layanan Dropdown Menu Container */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              ref={dropdownButtonRef}
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" && !dropdownOpen) {
                  e.preventDefault();
                  setDropdownOpen(true);
                }
              }}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              className={`inline-flex items-center gap-1.5 py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm cursor-pointer ${
                isServicesActive
                  ? "text-white border-b-2 border-action pb-0.5"
                  : "text-[#D4D8DA]"
              }`}
            >
              <span>Layanan</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-action" : "opacity-70"
                }`}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown Panel */}
            {dropdownOpen && (
              <div
                id="services-menu"
                role="menu"
                aria-label="Submenu Layanan ABUTAS"
                className="absolute left-0 top-full pt-2 z-50"
                style={{ width: "360px", minWidth: "360px" }}
              >
                <div
                  className="rounded-xl border border-[#343D40] p-4 shadow-2xl"
                  style={{ backgroundColor: "#14191B", width: "100%" }}
                >
                  <div className="px-2 py-1 mb-2 text-[11px] font-extrabold uppercase tracking-widest text-action">
                    / DUA PILAR MANUFAKTUR /
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {SERVICE_ITEMS.map((service) => {
                      const isActive = pathname === service.href;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                          className={`group flex flex-col rounded-lg p-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action ${
                            isActive
                              ? "bg-dark-surface border-l-2 border-action pl-3"
                              : "hover:bg-dark-surface"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-white group-hover:text-action transition-colors">
                              {service.title}
                            </span>
                            <span className="text-[10px] font-bold text-action bg-action-subtle/10 px-1.5 py-0.5 rounded whitespace-nowrap ml-2">
                              {service.badge}
                            </span>
                          </div>
                          <span className="mt-1 text-xs text-[#959E9F] leading-snug">
                            {service.description}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nav Links ke Halaman Pendukung */}
          <Link
            href={isHome ? "#cara-pesan" : "/cara-pesan/"}
            className={`inline-flex items-center py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm ${
              isCaraPesan ? "text-white border-b-2 border-action pb-0.5" : "text-[#D4D8DA]"
            }`}
          >
            Cara Pesan
          </Link>

          <Link
            href="/tentang-kami/"
            className={`inline-flex items-center py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm ${
              isTentangKami ? "text-white border-b-2 border-action pb-0.5" : "text-[#D4D8DA]"
            }`}
          >
            Tentang Kami
          </Link>

          <Link
            href="/kontak/"
            className={`inline-flex items-center py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm ${
              isKontak ? "text-white border-b-2 border-action pb-0.5" : "text-[#D4D8DA]"
            }`}
          >
            Kontak
          </Link>

          <Link
            href={isHome ? "#faq" : "/#faq"}
            className="inline-flex items-center py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm text-[#D4D8DA]"
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/kontak/"
            className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-md bg-action px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            <span>Konsultasi Produksi</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm p-2 text-white hover:bg-dark-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-line-dark bg-dark-surface px-6 py-6 md:hidden">
          <nav aria-label="Navigasi Mobile" className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex min-h-[44px] items-center rounded-md px-3 text-base font-medium transition-colors ${
                isHome ? "bg-dark text-action font-bold" : "text-white hover:bg-dark"
              }`}
            >
              Beranda
            </Link>

            {/* Mobile Layanan Accordion */}
            <div className="border-y border-line-dark/60 py-2 my-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                className="flex min-h-[44px] w-full items-center justify-between rounded-md px-3 text-base font-semibold text-white hover:bg-dark transition-colors cursor-pointer"
              >
                <span className={isServicesActive ? "text-action" : ""}>
                  Layanan Custom
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-action" : "text-muted"
                  }`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 flex flex-col space-y-1 pl-3 pt-1">
                  {SERVICE_ITEMS.map((service) => {
                    const isActive = pathname === service.href;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className={`flex min-h-[44px] flex-col justify-center rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-dark text-action font-bold"
                            : "text-[#D4D8DA] hover:bg-dark hover:text-white"
                        }`}
                      >
                        <span className="font-bold">{service.title}</span>
                        <span className="text-[11px] text-muted leading-tight mt-0.5">
                          {service.description}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/cara-pesan/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex min-h-[44px] items-center rounded-md px-3 text-base font-medium transition-colors ${
                isCaraPesan ? "bg-dark text-action font-bold" : "text-white hover:bg-dark"
              }`}
            >
              Cara Pesan
            </Link>

            <Link
              href="/tentang-kami/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex min-h-[44px] items-center rounded-md px-3 text-base font-medium transition-colors ${
                isTentangKami ? "bg-dark text-action font-bold" : "text-white hover:bg-dark"
              }`}
            >
              Tentang Kami
            </Link>

            <Link
              href="/kontak/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex min-h-[44px] items-center rounded-md px-3 text-base font-medium transition-colors ${
                isKontak ? "bg-dark text-action font-bold" : "text-white hover:bg-dark"
              }`}
            >
              Kontak
            </Link>

            <Link
              href={isHome ? "#faq" : "/#faq"}
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium transition-colors text-white hover:bg-dark"
            >
              FAQ
            </Link>

            <div className="pt-4">
              <Link
                href="/kontak/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[46px] w-full items-center justify-center gap-1.5 rounded-md bg-action px-5 text-sm font-bold text-white shadow-sm hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
              >
                <span>Konsultasi Produksi</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
