import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import MonteAlbanPage from "./MonteAlbanPage";

export const metadata = generateGuideMetadata({
  title: "Monte Albán Day Trip from Oaxaca: Is It Worth It? (2026 Guide)",
  description:
    "Honest guide to Monte Albán — how to get there, what to see, what to skip, and whether it\u2019s actually worth a half-day. Colectivo vs taxi vs tour with prices.",
  slug: "monte-alban-day-trip",
  keywords: [
    "Monte Alban day trip",
    "Monte Alban from Oaxaca City",
    "is Monte Alban worth it",
    "Monte Alban colectivo price",
    "Zapotec ruins Oaxaca",
    "Monte Alban entrance fee",
    "Monte Alban vs Mitla",
  ],
  publishedTime: "2025-12-18",
  modifiedTime: "2026-03-10",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Monte Albán", href: "/monte-alban-day-trip" },
        ]}
        article={{
          headline: "Monte Albán: Is It Worth a Half-Day?",
          description:
            "Honest guide to Monte Albán with transport options and prices.",
          datePublished: "2025-12-18",
          dateModified: "2026-03-10",
          url: "https://oaxacaitinerary.com/monte-alban-day-trip",
        }}
      />
      <MonteAlbanPage />
    </>
  );
}
