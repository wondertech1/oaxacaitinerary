import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import WhereToStayPage from "./WhereToStayPage";

export const metadata = generateGuideMetadata({
  title: "Where to Stay in Oaxaca City: Neighborhoods Compared (2026)",
  description:
    "Honest neighborhood comparison for Oaxaca City — Centro Histórico, Jalatlaco, Reforma, Xochimilco. Price ranges, walkability, and who each area is best for.",
  slug: "where-to-stay-oaxaca",
  keywords: [
    "where to stay Oaxaca City",
    "Oaxaca neighborhoods guide",
    "Oaxaca hotels 2026",
    "Jalatlaco neighborhood",
    "Centro Historico Oaxaca",
    "Oaxaca accommodation prices",
    "Xochimilco Oaxaca",
    "best area to stay Oaxaca",
  ],
  publishedTime: "2025-11-28",
  modifiedTime: "2026-03-15",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Where to Stay", href: "/where-to-stay-oaxaca" },
        ]}
        article={{
          headline: "Where to Stay in Oaxaca City: Neighborhoods Compared",
          description:
            "Honest neighborhood comparison for Oaxaca City.",
          datePublished: "2025-11-28",
          dateModified: "2026-03-15",
          url: "https://oaxacaitinerary.com/where-to-stay-oaxaca",
        }}
      />
      <WhereToStayPage />
    </>
  );
}
