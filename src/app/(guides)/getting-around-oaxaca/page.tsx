import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import GettingAroundPage from "./GettingAroundPage";

export const metadata = generateGuideMetadata({
  title: "Getting Around Oaxaca City Without a Car (2026)",
  description:
    "How to navigate Oaxaca City on foot, by taxi, DiDi, colectivo, and bus. Honest advice on what works, what doesn\u2019t, and how much each option costs.",
  slug: "getting-around-oaxaca",
  keywords: [
    "getting around Oaxaca City",
    "Oaxaca transport options",
    "Oaxaca taxi prices",
    "DiDi Oaxaca City",
    "colectivo Oaxaca how to",
    "ADO bus Oaxaca",
    "Oaxaca without a car",
    "Oaxaca airport to Centro",
  ],
  publishedTime: "2026-01-14",
  modifiedTime: "2026-03-08",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Getting Around", href: "/getting-around-oaxaca" },
        ]}
        article={{
          headline: "Getting Around Oaxaca City Without a Car",
          description:
            "How to navigate Oaxaca City by foot, taxi, DiDi, and colectivo.",
          datePublished: "2026-01-14",
          dateModified: "2026-03-08",
          url: "https://oaxacaitinerary.com/getting-around-oaxaca",
        }}
      />
      <GettingAroundPage />
    </>
  );
}
