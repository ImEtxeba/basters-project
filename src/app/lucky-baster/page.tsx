import type { Metadata } from "next";
import ConceptHero from "@/components/ConceptHero";
import ExperienceSection from "@/components/ExperienceSection";
import CartaSection from "@/components/CartaSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ConceptReservas from "@/components/ConceptReservas";
import UbicacionSection from "@/components/UbicacionSection";

export const metadata: Metadata = {
  title: "Lucky Baster — Smash Burgers en Bilbao | BASTER'S PROJECT",
  description:
    "Smash burgers de autor, craft beer y rollo urbano en el corazón de Bilbao.",
};

const categories = [
  {
    title: "Para compartir",
    items: [
      {
        name: "Croquetas caseras (4 uds.)",
        description: "",
        price: "12,00 €",
      },
      {
        name: "Ensalada de tomate, salmorejo, nectarina a la brasa y atún marinado",
        description: "",
        price: "19,00 €",
      },
      {
        name: "Ensaladilla rusa y tartar de atún",
        description: "",
        price: "18,00 €",
      },
      {
        name: "Berenjena asada, tomates aliñados, yogur, aceituna negra y aliño de remolacha",
        description: "",
        price: "18,00 €",
      },
      {
        name: "Vieira, panceta hoisin, crema de apionabo trufado y salsa de vermut Baster",
        description: "",
        price: "22,00 €",
      },
      {
        name: "Mejillones a la brasa",
        description: "",
        price: "21,00 €",
      },
      {
        name: "Gamba blanca de Huelva a la brasa y limón quemado",
        description: "",
        price: "24,00 €",
      },
      {
        name: "Hongos a la brasa, crema de huevo frito, migas de txistorra y jugo de cocido",
        description: "",
        price: "22,00 €",
      },
      {
        name: "Steak tartar sobre tuétano a la brasa",
        description: "",
        price: "26,00 €",
      },
    ],
  },
  {
    title: "De comer",
    items: [
      {
        name: "Ratatouille de verduras a la brasa",
        description: "",
        price: "18,60 €",
      },
      {
        name: "Bonito con tomate",
        description:
          "Bonito a la brasa, sofrito de tomate y pimiento verde reducido +++, jugo de pimiento rojo y polvo de ajo/perejil",
        price: "22,00 €",
      },
      {
        name: "Bikini de rabo XXL",
        description: "Mayonesa trufada, crème fraîche y cebolla encurtida",
        price: "16,00 €",
      },
      {
        name: "Presa a la llama",
        description:
          "Patata rota y ahumada, pimiento rojo asado y chimichurri casero",
        price: "25,00 €",
      },
      {
        name: "Lingote de cochinillo",
        description: "Crema de boniato y terrina de patata crujiente",
        price: "28,00 €",
      },
      {
        name: "Cachopo",
        description:
          "Con queso Idiazábal ahumado y cecina (700/800 gr)",
        price: "Consultar",
      },
    ],
  },
  {
    title: "De dulce",
    items: [
      {
        name: "Tarta de limón",
        description: "",
        price: "8,80 €",
      },
      {
        name: "Cremoso de chocolate",
        description: "Brownie y helado de chocolate",
        price: "8,50 €",
      },
      {
        name: "Crema de calabaza",
        description: "Pipas garrapiñadas y helado de pistacho",
        price: "8,50 €",
      },
      {
        name: "Torrija caramelizada",
        description: "Con helado de caramelo",
        price: "9,00 €",
      },
      {
        name: "Tatin de pera",
        description:
          "Infusionada en txakoli Itsasmendi con crema diplomática",
        price: "9,00 €",
      },
    ],
  },
];

const degustacionCourses = [
  "Croqueta casera, patata hojaldrada y brioche de steak tartar",
  "Ensalada de tomate, salmorejo, nectarina a la brasa y atún marinado",
  "Mejillones a la brasa",
  "Hongos a la brasa, crema de huevo frito, migas de txistorra y jugo de cocido",
  "Bonito a la brasa, sofrito de tomate y pimiento verde reducido +++, jugo de pimiento rojo y polvo de ajo/perejil",
  "Bikini de rabo XXL, mayonesa trufada, crème fraîche y cebolla encurtida",
  "Torrija caramelizada con helado de caramelo",
  "Petit fours, agua y pan",
];

export default function LuckyBasterPage() {
  return (
    <>
      <ConceptHero
        image="/images/lucky-hero.svg"
        title="LUCKY BASTER"
        subtitle="Bilbao contemporáneo. Y punto."
        accentColor="text-lucky"
      />

      <ExperienceSection
        title="Cocina contemporánea, raciones para compartir y una forma informal de entender la gastronomía."
        description="Producto de calidad, brasa, técnica y platos pensados para disfrutar en grupo."
        accentColor="text-lucky"
      />

      <CartaSection
        categories={categories}
        accentColor="text-lucky"
        borderColor="border-lucky/10"
      />

      {/* Menú degustación */}
      <section className="bg-charcoal px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2 className="mb-14 text-center text-3xl font-black tracking-[0.15em] text-cream sm:text-4xl">
              Menú degustación
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <ol className="space-y-5">
              {degustacionCourses.map((course, i) => (
                <li
                  key={i}
                  className="border-b border-lucky/10 pb-4 text-sm leading-relaxed text-cream/70"
                >
                  <span className="mr-3 text-xs font-bold text-lucky">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {course}
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </div>
      </section>

      <ConceptReservas
        name="Lucky Baster"
        accentColor="text-lucky"
        borderColor="border-lucky/30"
        hoverColor="hover:bg-lucky/10 hover:border-lucky/50"
        reservaUrl="https://www.google.com/maps/reserve/v/dine/c/q7wnWHyovKs?source=pa&opi=89978449&hl=es-ES&gei=QbWNabalJb2VhbIP4fXs6QU&sourceurl=https://www.google.com/search?q%3Dlucky%2Bbaster%26rlz%3D1C1CHBF_esES997ES997%26oq%3Dlucky%2Bbaster%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8"
        telefono="946 43 85 90"
      />

      <UbicacionSection
        name="Lucky Baster"
        servicios="Es obligatorio reservar · Tronas"
        direccion="Barraincúa Kalea, 4, Abando, 48009 Bilbao, Bizkaia"
        telefono="946 43 85 90"
        reservas="covermanager.com"
        reservaUrl="https://www.google.com/maps/reserve/v/dine/c/q7wnWHyovKs?source=pa&opi=89978449&hl=es-ES&gei=QbWNabalJb2VhbIP4fXs6QU&sourceurl=https://www.google.com/search?q%3Dlucky%2Bbaster%26rlz%3D1C1CHBF_esES997ES997%26oq%3Dlucky%2Bbaster%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8"
        schedule={[
          { day: "jueves", hours: "12:30–16:00, 19:00–23:00" },
          { day: "viernes", hours: "12:30–24:00" },
          { day: "sábado", hours: "12:30–24:00" },
          { day: "domingo", hours: "12:30–16:00" },
          { day: "lunes", hours: "Cerrado" },
          { day: "martes", hours: "12:30–16:00, 19:00–23:00" },
          { day: "miércoles", hours: "12:30–16:00, 19:00–23:00" },
        ]}
        mapsUrl="https://maps.google.com/?q=Barraincúa+Kalea+4+Bilbao"
        accentColor="text-lucky"
        borderColor="border-lucky/30"
        hoverColor="hover:bg-lucky/10 hover:border-lucky/50"
      />
    </>
  );
}
