import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import FourDayItineraryPage from "./FourDayItineraryPage";

export const metadata = generateGuideMetadata({
  title: "4 Days in Oaxaca City: A Local-Feeling Itinerary (2026)",
  description:
    "Day-by-day Oaxaca City itinerary with specific times, restaurants, prices in MXN, and honest opinions. Markets, mezcal, Monte Albán, and mole negro.",
  slug: "oaxaca-city-4-day-itinerary",
  keywords: [
    "Oaxaca 4 day itinerary",
    "4 days in Oaxaca",
    "Oaxaca City itinerary 2026",
    "what to do in Oaxaca",
    "Oaxaca day by day",
    "Oaxaca mole negro",
    "Monte Alban day trip",
    "Mercado 20 de Noviembre",
    "things to do in Oaxaca City",
  ],
  publishedTime: "2025-11-15",
  modifiedTime: "2026-03-22",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "4-Day Itinerary", href: "/oaxaca-city-4-day-itinerary" },
        ]}
        article={{
          headline: "4 Days in Oaxaca City: A Local-Feeling Itinerary",
          description:
            "Day-by-day Oaxaca City itinerary with specific times, restaurants, prices in MXN, and honest opinions.",
          datePublished: "2025-11-15",
          dateModified: "2026-03-22",
          url: "https://oaxacaitinerary.com/oaxaca-city-4-day-itinerary",
        }}
      />
      <FourDayItineraryPage />
    </>
  );
}
