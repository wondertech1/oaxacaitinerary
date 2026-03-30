import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import ThreeDayItineraryPage from "./ThreeDayItineraryPage";

export const metadata = generateGuideMetadata({
  title: "3 Days in Oaxaca City: The Long Weekend Sweet Spot (2026)",
  description:
    "3-day Oaxaca itinerary covering markets, Monte Albán, Jalatlaco, and the real Central de Abastos. Day-by-day with times and prices in MXN.",
  slug: "oaxaca-3-day-itinerary",
  keywords: [
    "3 days in Oaxaca",
    "Oaxaca 3 day itinerary",
    "Oaxaca long weekend",
    "3 day Oaxaca trip",
    "Oaxaca City three days",
    "Oaxaca itinerary with Monte Alban",
    "long weekend Oaxaca",
    "Oaxaca first time visitor itinerary",
    "Central de Abastos Oaxaca",
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
          { name: "3-Day Itinerary", href: "/oaxaca-3-day-itinerary" },
        ]}
        article={{
          headline:
            "3 Days in Oaxaca City: The Long Weekend Sweet Spot",
          description:
            "3-day Oaxaca itinerary covering markets, Monte Albán, Jalatlaco, and Central de Abastos.",
          datePublished: "2026-03-30",
          dateModified: "2026-03-30",
          url: "https://oaxacaitinerary.com/oaxaca-3-day-itinerary",
        }}
      />
      <ThreeDayItineraryPage />
    </>
  );
}
