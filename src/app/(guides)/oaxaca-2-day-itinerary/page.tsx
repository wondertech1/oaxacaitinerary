import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import TwoDayItineraryPage from "./TwoDayItineraryPage";

export const metadata = generateGuideMetadata({
  title: "2 Days in Oaxaca City: A Perfect Weekend (2026)",
  description:
    "Weekend itinerary for Oaxaca City with day-by-day schedule. Markets, museums, mole negro, mezcal, and Jalatlaco. Specific times and prices in MXN.",
  slug: "oaxaca-2-day-itinerary",
  keywords: [
    "2 days in Oaxaca",
    "Oaxaca weekend itinerary",
    "Oaxaca weekend trip",
    "Oaxaca 2 day itinerary 2026",
    "weekend in Oaxaca City",
    "Oaxaca short trip",
    "two days Oaxaca what to do",
    "Oaxaca couples weekend",
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
          { name: "2-Day Itinerary", href: "/oaxaca-2-day-itinerary" },
        ]}
        article={{
          headline: "2 Days in Oaxaca City: A Perfect Weekend",
          description:
            "Weekend itinerary for Oaxaca City — markets, museums, mole negro, mezcal, and Jalatlaco.",
          datePublished: "2026-03-30",
          dateModified: "2026-03-30",
          url: "https://oaxacaitinerary.com/oaxaca-2-day-itinerary",
        }}
      />
      <TwoDayItineraryPage />
    </>
  );
}
