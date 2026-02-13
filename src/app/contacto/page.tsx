import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contacto — BASTER'S PROJECT",
  description:
    "Ponte en contacto con Baster's Project. Lucky Baster y Baster en Bilbao.",
};

const LUCKY_RESERVA_URL =
  "https://www.google.com/maps/reserve/v/dine/c/q7wnWHyovKs?source=pa&opi=89978449&hl=es-ES&gei=QbWNabalJb2VhbIP4fXs6QU&sourceurl=https://www.google.com/search?q%3Dlucky%2Bbaster%26rlz%3D1C1CHBF_esES997ES997%26oq%3Dlucky%2Bbaster%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8";

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-end bg-charcoal px-6 pb-16 pt-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cream/40">
            Contacto
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-[0.15em] text-cream sm:text-5xl md:text-6xl">
            Hablemos
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/50 md:text-lg">
            ¿Tienes alguna pregunta, quieres reservar o simplemente saludar?
            Estamos encantados de atenderte.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-charcoal-dark px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Lucky Baster */}
          <AnimateOnScroll>
            <div className="rounded-2xl border border-lucky/20 bg-charcoal-light/30 p-8 md:p-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-lucky">
                Lucky Baster
              </h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-cream/40">
                    Opciones de servicios
                  </dt>
                  <dd className="text-cream/70">
                    Es obligatorio reservar · Tronas
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-cream/40">Dirección</dt>
                  <dd className="text-cream/70">
                    Barraincúa Kalea, 4, Abando, 48009 Bilbao, Bizkaia
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-cream/40">Teléfono</dt>
                  <dd className="text-cream/70">946 43 85 90</dd>
                </div>
                <div>
                  <dt className="font-semibold text-cream/40">Reservas</dt>
                  <dd className="text-cream/70">covermanager.com</dd>
                </div>
                <div>
                  <dt className="font-semibold text-cream/40">Horario</dt>
                  <dd className="space-y-0.5 text-cream/70">
                    <p>jueves 12:30–16:00, 19:00–23:00</p>
                    <p>viernes 12:30–24:00</p>
                    <p>sábado 12:30–24:00</p>
                    <p>domingo 12:30–16:00</p>
                    <p className="text-red-400/70">lunes Cerrado</p>
                    <p>martes 12:30–16:00, 19:00–23:00</p>
                    <p>miércoles 12:30–16:00, 19:00–23:00</p>
                  </dd>
                </div>
              </dl>
              <a
                href={LUCKY_RESERVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full border border-lucky/30 px-7 py-3 text-xs font-bold uppercase tracking-widest text-cream transition-all hover:border-lucky/60 hover:bg-lucky/10"
              >
                Reservar
              </a>
            </div>
          </AnimateOnScroll>

          {/* Baster */}
          <AnimateOnScroll>
            <div className="rounded-2xl border border-baster/20 bg-charcoal-light/30 p-8 md:p-10">
              <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-baster">
                Baster
              </h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-cream/40">
                    Opciones de servicios
                  </dt>
                  <dd className="text-cream/70">
                    Terraza · Buenos cócteles · No se aceptan reservas
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-cream/40">Dirección</dt>
                  <dd className="text-cream/70">
                    Posta Kalea, 22, Ibaiondo, 48005 Bilbao, Bizkaia
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-cream/40">Horario</dt>
                  <dd className="space-y-0.5 text-cream/70">
                    <p>jueves 11:30–22:00</p>
                    <p>viernes 11:30–23:00</p>
                    <p>sábado 11:30–23:00</p>
                    <p>domingo 11:30–15:30</p>
                    <p className="text-red-400/70">lunes Cerrado</p>
                    <p>martes 11:30–22:00</p>
                    <p>miércoles 11:30–22:00</p>
                  </dd>
                </div>
              </dl>
              <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-cream/40">
                No se aceptan reservas
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* General */}
      <section className="bg-charcoal px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-black tracking-[0.1em] text-cream sm:text-4xl">
              Baster&apos;s Project
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/50">
              Para consultas generales, colaboraciones, eventos privados o
              prensa, escríbenos a:
            </p>
            <a
              href="mailto:hola@basterproject.com"
              className="mt-4 inline-block text-lg font-semibold text-cream underline decoration-cream/20 underline-offset-4 transition-colors hover:decoration-cream/60"
            >
              hola@basterproject.com
            </a>

            <div className="mt-10">
              <a
                href="https://instagram.com/baster_luckybaster"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/50 transition-colors hover:text-cream"
              >
                <Instagram size={18} />
                @baster_luckybaster
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
