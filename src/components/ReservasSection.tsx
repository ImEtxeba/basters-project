import AnimateOnScroll from "./AnimateOnScroll";

interface VenueCardProps {
  name: string;
  accent: string;
  description: string;
  horario: string;
  direccion: string;
  borderColor: string;
  hoverColor: string;
  reservaUrl?: string;
}

function VenueCard({
  name,
  accent,
  description,
  horario,
  direccion,
  borderColor,
  hoverColor,
  reservaUrl,
}: VenueCardProps) {
  return (
    <AnimateOnScroll>
      <div
        className={`rounded-2xl border ${borderColor} bg-charcoal-light/50 p-8 transition-colors hover:border-opacity-50 md:p-10`}
      >
        <p
          className={`text-xs font-bold uppercase tracking-[0.3em] ${accent}`}
        >
          {name}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-cream/60">
          {description}
        </p>

        <div className="mt-6 space-y-2">
          <div className="flex items-start gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-cream/30">
              Horario
            </span>
            <span className="text-sm text-cream/60">{horario}</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-cream/30">
              Dirección
            </span>
            <span className="text-sm text-cream/60">{direccion}</span>
          </div>
        </div>

        {reservaUrl ? (
          <a
            href={reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-block rounded-full border ${borderColor} px-7 py-3 text-xs font-bold uppercase tracking-widest text-cream transition-all ${hoverColor}`}
          >
            Reservar
          </a>
        ) : (
          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-cream/40">
            No se aceptan reservas
          </p>
        )}
      </div>
    </AnimateOnScroll>
  );
}

const LUCKY_RESERVA_URL =
  "https://www.google.com/maps/reserve/v/dine/c/q7wnWHyovKs?source=pa&opi=89978449&hl=es-ES&gei=QbWNabalJb2VhbIP4fXs6QU&sourceurl=https://www.google.com/search?q%3Dlucky%2Bbaster%26rlz%3D1C1CHBF_esES997ES997%26oq%3Dlucky%2Bbaster%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8";

export default function ReservasSection() {
  return (
    <section id="reservas" className="bg-charcoal-dark px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h2 className="mb-14 text-center text-3xl font-black tracking-[0.15em] text-cream sm:text-4xl">
            Reservas
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          <VenueCard
            name="Lucky Baster"
            accent="text-lucky"
            description="Smash burgers, craft beer y buen rollo en el corazón de Bilbao."
            horario="Mar–Dom: 12:30 – 24:00"
            direccion="Barraincúa Kalea, 4, Abando, 48009 Bilbao, Bizkaia"
            borderColor="border-lucky/20"
            hoverColor="hover:bg-lucky/5 hover:border-lucky/40"
            reservaUrl={LUCKY_RESERVA_URL}
          />
          <VenueCard
            name="Baster"
            accent="text-baster"
            description="Tapas de autor, vinos naturales y ambiente cálido."
            horario="Mar–Dom: 11:30 – 23:00"
            direccion="Posta Kalea, 22, Ibaiondo, 48005 Bilbao, Bizkaia"
            borderColor="border-baster/20"
            hoverColor="hover:bg-baster/5 hover:border-baster/40"
          />
        </div>
      </div>
    </section>
  );
}
