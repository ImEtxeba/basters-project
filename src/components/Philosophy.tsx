import AnimateOnScroll from "./AnimateOnScroll";

const bullets = [
  "Ingredientes de cercanía, proveedores de confianza.",
  "Arraigo al barrio, identidad de Bilbao.",
  "Sin pretensiones, con personalidad.",
];

export default function Philosophy() {
  return (
    <section className="bg-charcoal px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-black tracking-[0.15em] text-cream sm:text-4xl md:text-5xl lg:text-6xl">
            Producto. Barrio. Actitud.
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {bullets.map((text, i) => (
            <AnimateOnScroll key={i}>
              <div className="flex flex-col items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-xs font-bold text-cream/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-xs text-sm leading-relaxed text-cream/60">
                  {text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
