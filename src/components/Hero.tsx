import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero-home.svg"
        alt="Interior de Baster's Project"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <h1 className="animate-fade-in text-4xl font-black tracking-[0.2em] text-cream sm:text-5xl md:text-7xl">
          BASTER&apos;S PROJECT
        </h1>

        <p className="animate-fade-in-up text-base font-light tracking-wide text-cream/70 sm:text-lg md:text-xl [animation-delay:200ms]">
          Dos conceptos. Una misma actitud.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row [animation-delay:400ms]">
          <Link
            href="/lucky-baster"
            className="group relative overflow-hidden rounded-full border border-lucky/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition-all hover:border-lucky hover:shadow-lg hover:shadow-lucky/20"
          >
            <span className="absolute inset-0 -translate-x-full bg-lucky/20 transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative">Lucky Baster</span>
          </Link>

          <Link
            href="/baster"
            className="group relative overflow-hidden rounded-full border border-baster/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition-all hover:border-baster hover:shadow-lg hover:shadow-baster/20"
          >
            <span className="absolute inset-0 -translate-x-full bg-baster/20 transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative">Baster</span>
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-cream/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-cream/50" />
        </div>
      </div>
    </section>
  );
}
