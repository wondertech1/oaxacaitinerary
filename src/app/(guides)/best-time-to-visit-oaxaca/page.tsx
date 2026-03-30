import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import BestTimeToVisitPage from "./BestTimeToVisitPage";

export const metadata = generateGuideMetadata({
  title: "Best Time to Visit Oaxaca: Month-by-Month Guide (2026)",
  description:
    "Month-by-month Oaxaca weather, festivals, crowds, and prices. Find the perfect window for your trip — from dry-season sunshine to Guelaguetza and Día de los Muertos.",
  slug: "best-time-to-visit-oaxaca",
  keywords: [
    "best time to visit Oaxaca City",
    "Oaxaca weather by month",
    "Oaxaca rainy season travel",
    "Guelaguetza festival dates 2026",
    "Día de los Muertos Oaxaca",
    "Oaxaca dry season",
    "when to go to Oaxaca",
  ],
  publishedTime: "2026-02-28",
  modifiedTime: "2026-03-12",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Best Time to Visit", href: "/best-time-to-visit-oaxaca" },
        ]}
        article={{
          headline: "Best Time to Visit Oaxaca: Month-by-Month Guide",
          description:
            "Month-by-month Oaxaca weather, festivals, crowds, and prices for planning your trip.",
          datePublished: "2026-02-28",
          dateModified: "2026-03-12",
          url: "https://oaxacaitinerary.com/best-time-to-visit-oaxaca",
        }}
      />
      <BestTimeToVisitPage />
    </>
  );
}
