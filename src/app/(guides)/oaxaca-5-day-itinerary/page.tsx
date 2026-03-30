import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import FiveDayItineraryPage from "./FiveDayItineraryPage";

export const metadata = generateGuideMetadata({
  title: "5 Days in Oaxaca: The Ideal Trip (2026)",
  description:
    "The recommended Oaxaca itinerary — 5 days covering the city, Monte Albán, Mitla, Hierve el Agua, and mezcal distilleries. Full Valles Centrales day trip loop with prices.",
  slug: "oaxaca-5-day-itinerary",
  keywords: [
    "5 days in Oaxaca",
    "Oaxaca 5 day itinerary",
    "ideal Oaxaca itinerary",
    "Oaxaca recommended trip length",
    "Valles Centrales day trip loop",
    "Mitla Hierve el Agua day trip",
    "Oaxaca mezcal distillery day trip",
    "Santiago Matatlan mezcal",
    "Arbol del Tule Oaxaca",
  ],
  publishedTime: "2026-03-30",
  modifiedTime: "2026-03-30",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "5-Day Itinerary", href: "/oaxaca-5-day-itinerary" },
        ]}
        article={{
          headline: "5 Days in Oaxaca: The Ideal Trip",
          description:
            "The recommended Oaxaca itinerary — city, Monte Albán, Mitla, Hierve el Agua, and mezcal distilleries.",
          datePublished: "2026-03-30",
          dateModified: "2026-03-30",
          url: "https://oaxacaitinerary.com/oaxaca-5-day-itinerary",
        }}
      />
      <FiveDayItineraryPage />
    </>
  );
}
