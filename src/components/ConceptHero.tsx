import Image from "next/image";

interface ConceptHeroProps {
  image: string;
  title: string;
  subtitle: string;
  accentColor: string;
}

export default function ConceptHero({
  image,
  title,
  subtitle,
  accentColor,
}: ConceptHeroProps) {
  return (
    <section className="relative flex h-[70vh] items-end overflow-hidden sm:h-[80vh]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 w-full px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <p
            className={`text-xs font-bold uppercase tracking-[0.3em] ${accentColor}`}
          >
            {subtitle}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[0.15em] text-cream sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
