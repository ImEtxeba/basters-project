import Image from "next/image";
import Link from "next/link";

export default function SplitSection() {
  return (
    <section className="grid min-h-[80vh] md:grid-cols-2">
      {/* Lucky Baster */}
      <Link
        href="/lucky-baster"
        className="split-card group relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-[80vh]"
      >
        <Image
          src="/images/split-lucky.svg"
          alt="Lucky Baster — Burgers"
          fill
          className="split-img object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/40 to-transparent" />

        {/* Default content */}
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lucky">
            Burgers &amp; More
          </p>
          <h2 className="text-3xl font-black tracking-[0.15em] text-cream sm:text-4xl">
            LUCKY BASTER
          </h2>
        </div>

        {/* Hover overlay */}
        <div className="split-overlay absolute inset-0 z-20 flex items-center justify-center bg-lucky/20 backdrop-blur-sm">
          <span className="rounded-full border-2 border-cream px-8 py-3 text-sm font-bold uppercase tracking-widest text-cream">
            Entrar
          </span>
        </div>
      </Link>

      {/* Baster */}
      <Link
        href="/baster"
        className="split-card group relative flex min-h-[50vh] items-center justify-center overflow-hidden md:min-h-[80vh]"
      >
        <Image
          src="/images/split-baster.svg"
          alt="Baster — Tapas"
          fill
          className="split-img object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/40 to-transparent" />

        {/* Default content */}
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-baster">
            Tapas &amp; Vino
          </p>
          <h2 className="text-3xl font-black tracking-[0.15em] text-cream sm:text-4xl">
            BASTER
          </h2>
        </div>

        {/* Hover overlay */}
        <div className="split-overlay absolute inset-0 z-20 flex items-center justify-center bg-baster/20 backdrop-blur-sm">
          <span className="rounded-full border-2 border-cream px-8 py-3 text-sm font-bold uppercase tracking-widest text-cream">
            Entrar
          </span>
        </div>
      </Link>
    </section>
  );
}
