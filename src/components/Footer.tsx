import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-black tracking-[0.2em]">
              BASTER&apos;S PROJECT
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/50">
              Dos conceptos. Una misma actitud.
              <br />
              Bilbao.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/40">
              Navegar
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-cream/60 transition-colors hover:text-cream"
              >
                Inicio
              </Link>
              <Link
                href="/lucky-baster"
                className="text-sm text-cream/60 transition-colors hover:text-cream"
              >
                Lucky Baster
              </Link>
              <Link
                href="/baster"
                className="text-sm text-cream/60 transition-colors hover:text-cream"
              >
                Baster
              </Link>
              <Link
                href="/contacto"
                className="text-sm text-cream/60 transition-colors hover:text-cream"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/40">
              Contacto
            </p>
            <address className="flex flex-col gap-2 not-italic">
              <p className="text-sm text-cream/60">
                Barraincúa Kalea, 4, Abando, 48009 Bilbao
              </p>
              <p className="text-sm text-cream/60">946 43 85 90</p>
              <p className="text-sm text-cream/60">hola@basterproject.com</p>
              <a
                href="https://instagram.com/baster_luckybaster"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
              >
                <Instagram size={16} />
                @baster_luckybaster
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-cream/10 pt-6 text-center">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Baster&apos;s Project. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
