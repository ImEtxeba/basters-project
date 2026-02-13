import AnimateOnScroll from "./AnimateOnScroll";

interface ConceptReservasProps {
  name: string;
  accentColor: string;
  borderColor: string;
  hoverColor: string;
  reservaUrl?: string;
  telefono?: string;
  noReservas?: boolean;
}

export default function ConceptReservas({
  name,
  accentColor,
  borderColor,
  hoverColor,
  reservaUrl,
  telefono,
  noReservas,
}: ConceptReservasProps) {
  return (
    <section id="reservas" className="bg-charcoal-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <AnimateOnScroll>
          <p
            className={`text-xs font-bold uppercase tracking-[0.3em] ${accentColor}`}
          >
            {noReservas ? "Ven cuando quieras" : "No te quedes sin mesa"}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[0.1em] text-cream sm:text-4xl">
            {noReservas ? `Visita ${name}` : `Reserva en ${name}`}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-cream/50">
            {noReservas
              ? "No aceptamos reservas. Pásate cuando quieras y disfruta del ambiente."
              : "Llámanos o reserva online. Te esperamos con todo preparado."}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {!noReservas && reservaUrl && (
              <a
                href={reservaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border ${borderColor} px-8 py-3 text-xs font-bold uppercase tracking-widest text-cream transition-all ${hoverColor}`}
              >
                Reservar mesa
              </a>
            )}
            {telefono && (
              <a
                href={`tel:${telefono.replace(/\s/g, "")}`}
                className="text-sm text-cream/50 transition-colors hover:text-cream"
              >
                {telefono}
              </a>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
