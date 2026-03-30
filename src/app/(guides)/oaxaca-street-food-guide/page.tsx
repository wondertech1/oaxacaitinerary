import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import StreetFoodGuidePage from "./StreetFoodGuidePage";

export const metadata = generateGuideMetadata({
  title: "Oaxaca Street Food: 12 Things to Eat and Where to Find Them (2026)",
  description:
    "Beyond the market — tlayuda stands, esquites carts, tamales, chapulines, and the street food tourists miss. Specific locations, prices in MXN.",
  slug: "oaxaca-street-food-guide",
  keywords: [
    "Oaxaca street food guide",
    "tlayuda where to eat",
    "what to eat in Oaxaca",
    "chapulines Oaxaca",
    "memelas Oaxaca City",
    "best street food Oaxaca",
    "tejate drink",
    "esquites Oaxaca",
  ],
  publishedTime: "2025-12-06",
  modifiedTime: "2026-03-18",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Street Food Guide", href: "/oaxaca-street-food-guide" },
        ]}
        article={{
          headline: "Oaxaca Street Food: What to Eat and Where to Find It",
          description:
            "12 essential street food dishes in Oaxaca City with locations and prices.",
          datePublished: "2025-12-06",
          dateModified: "2026-03-18",
          url: "https://oaxacaitinerary.com/oaxaca-street-food-guide",
        }}
      />
      <StreetFoodGuidePage />
    </>
  );
}
