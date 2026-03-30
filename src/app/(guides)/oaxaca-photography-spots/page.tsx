import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import PhotographySpotsPage from "./PhotographySpotsPage";

export const metadata = generateGuideMetadata({
  title: "12 Best Photography Spots in Oaxaca City (2026 Guide)",
  description:
    "A photographer's guide to Oaxaca City — 12 locations with optimal light times, specific directions, crowd tips, and practical camera advice. From Santo Domingo's golden facade at 8 AM to the Zócalo's string lights at night.",
  slug: "oaxaca-photography-spots",
  keywords: [
    "Oaxaca photography spots guide",
    "best photo locations Oaxaca City",
    "Santo Domingo Church golden hour",
    "Jalatlaco colorful streets photos",
    "Oaxaca street photography tips",
    "Monte Albán photography",
    "Oaxaca Instagram locations",
  ],
  publishedTime: "2026-03-22",
  modifiedTime: "2026-03-29",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Photography Spots", href: "/oaxaca-photography-spots" },
        ]}
        article={{
          headline: "12 Best Photography Spots in Oaxaca City",
          description:
            "A photographer's guide to 12 locations in Oaxaca with optimal light times, directions, and crowd tips.",
          datePublished: "2026-03-22",
          dateModified: "2026-03-29",
          url: "https://oaxacaitinerary.com/oaxaca-photography-spots",
        }}
      />
      <PhotographySpotsPage />
    </>
  );
}
