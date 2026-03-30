import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import DayTripsPage from "./DayTripsPage";

export const metadata = generateGuideMetadata({
  title: "Day Trips from Oaxaca City: 6 Destinations Ranked (2026)",
  description:
    "Honest rankings of 6 day trips from Oaxaca City — Monte Albán, Hierve el Agua, Mitla, El Tule, Teotitlán del Valle & San Bartolo Coyotepec. Real transport prices, colectivo directions, and which to skip.",
  slug: "oaxaca-day-trips",
  keywords: [
    "day trips from Oaxaca City",
    "Oaxaca Valley destinations",
    "Hierve el Agua how to get there",
    "Mitla ruins guide",
    "El Tule tree Oaxaca",
    "Teotitlan del Valle weaving",
    "San Bartolo Coyotepec pottery",
    "colectivo day trips Oaxaca",
  ],
  publishedTime: "2026-02-12",
  modifiedTime: "2026-03-25",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Day Trips", href: "/oaxaca-day-trips" },
        ]}
        article={{
          headline: "Day Trips from Oaxaca City: 6 Destinations Ranked",
          description:
            "Honest rankings of 6 day trips from Oaxaca — with real transport prices, colectivo directions, and which ones to skip.",
          datePublished: "2026-02-12",
          dateModified: "2026-03-25",
          url: "https://oaxacaitinerary.com/oaxaca-day-trips",
        }}
      />
      <DayTripsPage />
    </>
  );
}
