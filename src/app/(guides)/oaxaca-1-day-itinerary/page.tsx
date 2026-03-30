import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import OneDayItineraryPage from "./OneDayItineraryPage";

export const metadata = generateGuideMetadata({
  title: "1 Day in Oaxaca City: The Essential Sprint (2026)",
  description:
    "Best one-day itinerary for Oaxaca City — morning markets, afternoon museums, evening tlayuda and mezcal. Hour-by-hour with real prices in MXN.",
  slug: "oaxaca-1-day-itinerary",
  keywords: [
    "1 day in Oaxaca",
    "Oaxaca one day itinerary",
    "Oaxaca day trip from Mexico City",
    "what to do in Oaxaca in one day",
    "Oaxaca City layover itinerary",
    "Oaxaca quick visit guide",
    "Oaxaca essential stops",
    "best things to do Oaxaca one day",
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
          { name: "1-Day Itinerary", href: "/oaxaca-1-day-itinerary" },
        ]}
        article={{
          headline: "1 Day in Oaxaca City: The Essential Sprint",
          description:
            "Best one-day itinerary for Oaxaca City — morning markets, afternoon museums, evening tlayuda and mezcal.",
          datePublished: "2026-03-30",
          dateModified: "2026-03-30",
          url: "https://oaxacaitinerary.com/oaxaca-1-day-itinerary",
        }}
      />
      <OneDayItineraryPage />
    </>
  );
}
