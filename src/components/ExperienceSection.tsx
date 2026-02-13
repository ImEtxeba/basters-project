import AnimateOnScroll from "./AnimateOnScroll";

interface ExperienceSectionProps {
  title: string;
  description: string;
  accentColor: string;
}

export default function ExperienceSection({
  title,
  description,
  accentColor,
}: ExperienceSectionProps) {
  return (
    <section className="bg-charcoal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <AnimateOnScroll>
          <p
            className={`text-xs font-bold uppercase tracking-[0.3em] ${accentColor}`}
          >
            La experiencia
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[0.1em] text-cream sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/60 md:text-lg">
            {description}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
