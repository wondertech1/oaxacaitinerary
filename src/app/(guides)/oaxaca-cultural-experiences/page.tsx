import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import CulturalExperiencesPage from "./CulturalExperiencesPage";

export const metadata = generateGuideMetadata({
  title:
    "Oaxaca Cultural Experiences: Cooking Classes, Workshops & Festivals (2026)",
  description:
    "Hands-on cultural experiences in Oaxaca — the best cooking classes with prices, artisan workshops in Zapotec villages, festival dates worth planning around, and what to skip. Verified pricing in MXN and USD.",
  slug: "oaxaca-cultural-experiences",
  keywords: [
    "Oaxaca cooking classes compared",
    "artisan workshops Oaxaca villages",
    "Guelaguetza festival dates",
    "alebrijes workshop San Martín Tilcajete",
    "barro negro pottery San Bartolo",
    "Teotitlán del Valle weaving lessons",
    "Día de los Muertos Oaxaca",
    "Casa de los Sabores cooking class",
  ],
  publishedTime: "2026-02-21",
  modifiedTime: "2026-03-25",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          {
            name: "Cultural Experiences",
            href: "/oaxaca-cultural-experiences",
          },
        ]}
        article={{
          headline:
            "Oaxaca Cultural Experiences: Cooking Classes, Workshops & Festivals",
          description:
            "Complete guide to cultural experiences in Oaxaca — cooking classes, artisan workshops, and festivals with verified prices.",
          datePublished: "2026-02-21",
          dateModified: "2026-03-25",
          url: "https://oaxacaitinerary.com/oaxaca-cultural-experiences",
        }}
      />
      <CulturalExperiencesPage />
    </>
  );
}
