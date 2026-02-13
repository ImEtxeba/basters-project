import AnimateOnScroll from "./AnimateOnScroll";

interface ScheduleItem {
  day: string;
  hours: string;
}

interface UbicacionSectionProps {
  name: string;
  servicios: string;
  direccion: string;
  telefono?: string;
  reservas?: string;
  reservaUrl?: string;
  schedule: ScheduleItem[];
  mapsUrl: string;
  accentColor: string;
  borderColor: string;
  hoverColor: string;
}

export default function UbicacionSection({
  name,
  servicios,
  direccion,
  telefono,
  reservas,
  reservaUrl,
  schedule,
  mapsUrl,
  accentColor,
  borderColor,
  hoverColor,
}: UbicacionSectionProps) {
  return (
    <section className="bg-charcoal px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <div className="text-center">
            <p
              className={`text-xs font-bold uppercase tracking-[0.3em] ${accentColor}`}
            >
              Ubicación &amp; Info
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[0.1em] text-cream sm:text-4xl">
              {name}
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {/* Left column: Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">
                  Opciones de servicios
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {servicios}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">
                  Dirección
                </h3>
                <p className="mt-2 text-sm text-cream/70">{direccion}</p>
              </div>

              {telefono && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">
                    Teléfono
                  </h3>
                  <p className="mt-2 text-sm text-cream/70">{telefono}</p>
                </div>
              )}

              {reservas && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">
                    Reservas
                  </h3>
                  <p className="mt-2 text-sm text-cream/70">{reservas}</p>
                </div>
              )}
            </div>

            {/* Right column: Schedule */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/40">
                Horario
              </h3>
              <ul className="mt-3 space-y-1.5">
                {schedule.map((item) => (
                  <li
                    key={item.day}
                    className="flex items-baseline justify-between text-sm"
                  >
                    <span className="font-medium capitalize text-cream/70">
                      {item.day}
                    </span>
                    <span
                      className={`text-cream/50 ${
                        item.hours === "Cerrado" ? "text-red-400/70" : ""
                      }`}
                    >
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border ${borderColor} px-8 py-3 text-xs font-bold uppercase tracking-widest text-cream transition-all ${hoverColor}`}
            >
              Ver en Google Maps
            </a>
            {reservaUrl && (
              <a
                href={reservaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border ${borderColor} px-8 py-3 text-xs font-bold uppercase tracking-widest text-cream transition-all ${hoverColor}`}
              >
                Reservar mesa
              </a>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
