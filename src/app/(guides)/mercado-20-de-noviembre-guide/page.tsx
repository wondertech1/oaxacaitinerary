import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import MercadoGuidePage from "./MercadoGuidePage";

export const metadata = generateGuideMetadata({
  title: "Eating at Mercado 20 de Noviembre: A First-Timer's Guide (2026)",
  description:
    "Stall-by-stall guide to Oaxaca's famous food market. Grilled meats, hot chocolate, mole, and how to order like a local. Prices in MXN.",
  slug: "mercado-20-de-noviembre-guide",
  keywords: [
    "Mercado 20 de Noviembre guide",
    "Oaxaca market food stalls",
    "Pasillo de Humo Oaxaca",
    "what to eat Mercado 20 de Noviembre",
    "Oaxaca market ordering tips",
    "tasajo Oaxaca market",
    "hot chocolate Oaxaca market",
  ],
  publishedTime: "2026-01-22",
  modifiedTime: "2026-03-18",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          {
            name: "Mercado 20 de Noviembre",
            href: "/mercado-20-de-noviembre-guide",
          },
        ]}
        article={{
          headline:
            "Eating at Mercado 20 de Noviembre: A First-Timer's Guide",
          description:
            "Stall-by-stall guide to Oaxaca's famous food market with prices and ordering tips.",
          datePublished: "2026-01-22",
          dateModified: "2026-03-18",
          url: "https://oaxacaitinerary.com/mercado-20-de-noviembre-guide",
        }}
      />
      <MercadoGuidePage />
    </>
  );
}
