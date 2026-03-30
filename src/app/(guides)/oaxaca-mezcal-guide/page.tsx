import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import MezcalGuidePage from "./MezcalGuidePage";

export const metadata = generateGuideMetadata({
  title: "Oaxaca Mezcal Guide: What to Drink, Where to Drink It (2026)",
  description:
    "A no-nonsense guide to mezcal in Oaxaca — espadín vs tobalá vs wild agaves, the 5 best mezcalerías with prices in MXN, distillery day trips to Santiago Matatlán, and what to buy to take home. Written by someone who has done the hangovers for you.",
  slug: "oaxaca-mezcal-guide",
  keywords: [
    "Oaxaca mezcal guide",
    "best mezcalerías Oaxaca City",
    "mezcal tasting Oaxaca prices",
    "Santiago Matatlán distillery",
    "espadín vs tobalá mezcal",
    "buy mezcal Oaxaca",
    "mezcal distillery tour Oaxaca",
    "artesanal vs ancestral mezcal",
    "In Situ mezcalería",
  ],
  publishedTime: "2026-02-03",
  modifiedTime: "2026-03-20",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Mezcal Guide", href: "/oaxaca-mezcal-guide" },
        ]}
        article={{
          headline:
            "Oaxaca Mezcal Guide: What to Drink, Where to Drink It",
          description:
            "Complete guide to mezcal in Oaxaca — agave varieties, the best bars and distilleries, prices, and what to buy.",
          datePublished: "2026-02-03",
          dateModified: "2026-03-20",
          url: "https://oaxacaitinerary.com/oaxaca-mezcal-guide",
        }}
      />
      <MezcalGuidePage />
    </>
  );
}
