import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import SevenDayItineraryPage from "./SevenDayItineraryPage";

export const metadata = generateGuideMetadata({
  title: "One Week in Oaxaca: The Full Immersion (2026)",
  description:
    "7-day Oaxaca itinerary for slow travelers — city, ruins, Hierve el Agua, Sierra Norte cloud forests, artisan villages, and a cooking class. The complete experience.",
  slug: "oaxaca-7-day-itinerary",
  keywords: [
    "one week in Oaxaca",
    "Oaxaca 7 day itinerary",
    "Oaxaca week itinerary",
    "7 days Oaxaca City",
    "Oaxaca slow travel",
    "Sierra Norte Oaxaca hiking",
    "Pueblos Mancomunados guide",
    "Teotitlan del Valle textiles",
    "San Martin Tilcajete alebrijes",
    "Oaxaca cooking class",
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
          { name: "7-Day Itinerary", href: "/oaxaca-7-day-itinerary" },
        ]}
        article={{
          headline: "One Week in Oaxaca: The Full Immersion",
          description:
            "7-day Oaxaca itinerary — city, ruins, Hierve el Agua, Sierra Norte cloud forests, artisan villages, and a cooking class.",
          datePublished: "2026-03-30",
          dateModified: "2026-03-30",
          url: "https://oaxacaitinerary.com/oaxaca-7-day-itinerary",
        }}
      />
      <SevenDayItineraryPage />
    </>
  );
}
