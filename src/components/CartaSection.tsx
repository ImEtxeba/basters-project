import AnimateOnScroll from "./AnimateOnScroll";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface Category {
  title: string;
  items: MenuItem[];
}

interface CartaSectionProps {
  categories: Category[];
  accentColor: string;
  borderColor: string;
}

export default function CartaSection({
  categories,
  accentColor,
  borderColor,
}: CartaSectionProps) {
  return (
    <section className="bg-charcoal-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h2 className="mb-14 text-center text-3xl font-black tracking-[0.15em] text-cream sm:text-4xl">
            La Carta
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-12 md:grid-cols-2">
          {categories.map((cat) => (
            <AnimateOnScroll key={cat.title}>
              <div>
                <h3
                  className={`mb-6 text-sm font-bold uppercase tracking-[0.25em] ${accentColor}`}
                >
                  {cat.title}
                </h3>
                <ul className="space-y-5">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className={`border-b ${borderColor} pb-4`}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-semibold text-cream">
                          {item.name}
                        </span>
                        <span
                          className={`shrink-0 text-sm font-bold ${accentColor}`}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-cream/50">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
