import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BASTER'S PROJECT — Bilbao",
  description:
    "Dos conceptos, una misma actitud. Lucky Baster (burgers) y Baster (tapas) en el corazón de Bilbao.",
  keywords: [
    "Baster's Project",
    "Lucky Baster",
    "Baster",
    "Bilbao",
    "restaurante",
    "burgers",
    "tapas",
  ],
  openGraph: {
    title: "BASTER'S PROJECT — Bilbao",
    description:
      "Dos conceptos, una misma actitud. Lucky Baster y Baster en Bilbao.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-charcoal-dark text-cream font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
