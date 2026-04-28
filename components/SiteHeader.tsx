"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader({ showBack = false }: { showBack?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#games", label: "Games" },
    { href: "/#vision", label: "Vision" },
    { href: "/#careers", label: "Careers" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-70 transition">
          <Image
            src="/aro_logo_black.png"
            alt=""
            width={800}
            height={399}
            className="h-7 w-auto invert"
            priority
          />
          <span className="text-lg font-bold tracking-wide">AROTECH</span>
        </Link>

        {showBack ? (
          <Link
            href="/"
            className="flex items-center gap-2 text-base text-white/40 border border-white/10 rounded-full px-5 py-2 hover:text-white hover:border-white/30 transition duration-200"
          >
            <span className="text-sm">←</span>
            홈으로
          </Link>
        ) : (
          <>
            {/* Desktop nav */}
            <nav className="hidden md:flex gap-10 text-base text-white/70">
              {navLinks.map(({ href, label }) => (
                <a key={label} href={href} className="hover:text-white transition">{label}</a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </>
        )}
      </div>

      {/* Mobile menu panel */}
      {!showBack && menuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 px-8 py-6 flex flex-col gap-6 text-lg">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white transition"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
