import type { Metadata } from "next";
import ConceptHero from "@/components/ConceptHero";
import ExperienceSection from "@/components/ExperienceSection";
import CartaSection from "@/components/CartaSection";
import ConceptReservas from "@/components/ConceptReservas";
import UbicacionSection from "@/components/UbicacionSection";

export const metadata: Metadata = {
  title: "Baster — Tapas de Autor en Bilbao | BASTER'S PROJECT",
  description:
    "Tapas de autor, vinos naturales y un ambiente cálido en el corazón de Bilbao.",
};

const categories = [
  {
    title: "Vinos blancos",
    items: [
      { name: "Godello", description: "Valdeorras", price: "" },
      { name: "Albariño", description: "Rías Baixas", price: "" },
      { name: "Hondarribi Zuri", description: "Bizkaiko Txakolina", price: "" },
      { name: "Saint Bris Sauvignon", description: "Chablis", price: "" },
      { name: "Amiott Et Fils Chardonnay", description: "Bourgogne", price: "" },
    ],
  },
  {
    title: "Tintos",
    items: [
      { name: "4mones", description: "Garnacha, cariñena, syrah, sierra de Gredos", price: "" },
      { name: "Siete Calles", description: "Tempranillo, Rioja", price: "" },
      { name: "Del Moro", description: "Graciano-garnacha, Valencia", price: "" },
      { name: "Raisins Gaulois", description: "Gamay, Bourgogne", price: "" },
    ],
  },
  {
    title: "Otros",
    items: [
      { name: "Tortillita Exprés", description: "", price: "3,20 €" },
      { name: "Ensaladilla Bolchevique", description: "", price: "7,00 €" },
      { name: "Ración Jamón, Jamón", description: "", price: "19,50 €" },
      { name: "Bocata Calamares y Mayonesa Picante", description: "", price: "9,00 €" },
      { name: "Crazy Patatas Bravas", description: "", price: "7,00 €" },
      { name: "Piparritas Fritas", description: "", price: "8,50 €" },
      { name: "Huevos Fritos, Patatas y Jamón", description: "", price: "14,00 €" },
    ],
  },
  {
    title: "Destacado",
    items: [
      { name: "DOMINGO DE RABAS", description: "", price: "" },
    ],
  },
];

export default function BasterPage() {
  return (
    <>
      <ConceptHero
        image="/images/baster-hero.svg"
        title="BASTER"
        subtitle="Tapas & Vino"
        accentColor="text-baster"
      />

      <ExperienceSection
        title="Sabor con raíces"
        description="Tapas de autor que nacen del producto de cercanía y la creatividad de barra. Vinos naturales seleccionados con mimo. Un espacio cálido donde cada plato cuenta una historia."
        accentColor="text-baster"
      />

      <CartaSection
        categories={categories}
        accentColor="text-baster"
        borderColor="border-baster/10"
      />

      <ConceptReservas
        name="Baster"
        accentColor="text-baster"
        borderColor="border-baster/30"
        hoverColor="hover:bg-baster/10 hover:border-baster/50"
        noReservas
      />

      <UbicacionSection
        name="Baster"
        servicios="Terraza · Buenos cócteles · No se aceptan reservas"
        direccion="Posta Kalea, 22, Ibaiondo, 48005 Bilbao, Bizkaia"
        schedule={[
          { day: "jueves", hours: "11:30–22:00" },
          { day: "viernes", hours: "11:30–23:00" },
          { day: "sábado", hours: "11:30–23:00" },
          { day: "domingo", hours: "11:30–15:30" },
          { day: "lunes", hours: "Cerrado" },
          { day: "martes", hours: "11:30–22:00" },
          { day: "miércoles", hours: "11:30–22:00" },
        ]}
        mapsUrl="https://maps.google.com/?q=Posta+Kalea+22+Bilbao"
        accentColor="text-baster"
        borderColor="border-baster/30"
        hoverColor="hover:bg-baster/10 hover:border-baster/50"
      />
    </>
  );
}
