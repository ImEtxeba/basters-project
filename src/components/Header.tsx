"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-dark/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/lucky-baster"
            className="text-sm font-medium tracking-wide text-cream/70 transition-colors hover:text-lucky"
          >
            Lucky Baster
          </Link>
          <span className="text-cream/20">|</span>
          <Link
            href="/baster"
            className="text-sm font-medium tracking-wide text-cream/70 transition-colors hover:text-baster"
          >
            Baster
          </Link>
        </nav>

        {/* Center logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="text-lg font-black tracking-[0.25em] text-cream md:text-xl">
            BASTER&apos;S PROJECT
          </span>
        </Link>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <a
            href="https://www.google.com/maps/reserve/v/dine/c/q7wnWHyovKs?source=pa&opi=89978449&hl=es-ES&gei=QbWNabalJb2VhbIP4fXs6QU&sourceurl=https://www.google.com/search?q%3Dlucky%2Bbaster%26rlz%3D1C1CHBF_esES997ES997%26oq%3Dlucky%2Bbaster%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-cream/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-cream transition-all hover:border-cream/50 hover:bg-cream/5 sm:inline-block"
          >
            Reservas
          </a>
          <a
            href="https://instagram.com/baster_luckybaster"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Baster's Project"
            className="text-cream/60 transition-colors hover:text-cream"
          >
            <Instagram size={20} />
          </a>

          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menú"
        className="flex flex-col gap-1.5 p-1"
      >
        <span
          className={`block h-0.5 w-5 bg-cream transition-transform ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-cream transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-cream transition-transform ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-cream/10 bg-charcoal-dark/95 backdrop-blur-lg">
          <nav className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="/lucky-baster"
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide text-cream/80 hover:text-lucky"
            >
              Lucky Baster
            </Link>
            <Link
              href="/baster"
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide text-cream/80 hover:text-baster"
            >
              Baster
            </Link>
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide text-cream/80 hover:text-cream"
            >
              Contacto
            </Link>
            <a
              href="https://www.google.com/maps/reserve/v/dine/c/q7wnWHyovKs?source=pa&opi=89978449&hl=es-ES&gei=QbWNabalJb2VhbIP4fXs6QU&sourceurl=https://www.google.com/search?q%3Dlucky%2Bbaster%26rlz%3D1C1CHBF_esES997ES997%26oq%3Dlucky%2Bbaster%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-wide text-cream hover:text-lucky"
            >
              Reservas
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
