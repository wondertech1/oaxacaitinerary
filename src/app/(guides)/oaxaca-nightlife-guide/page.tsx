import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import NightlifeGuidePage from "./NightlifeGuidePage";

export const metadata = generateGuideMetadata({
  title: "Oaxaca Nightlife: Mezcal Bars, Live Music & Rooftop Spots (2026)",
  description:
    "A real guide to going out in Oaxaca — the best mezcalerías with prices, live music venues playing son istmeño and cumbia, rooftop bars worth the markup, and where to eat tlayudas at 2 AM. Addresses, hours, cover charges, and honest takes on what's overrated.",
  slug: "oaxaca-nightlife-guide",
  keywords: [
    "Oaxaca nightlife guide",
    "best mezcal bars Oaxaca City",
    "Oaxaca live music venues",
    "Oaxaca rooftop bars",
    "Txalaparta Oaxaca",
    "Candela live music Oaxaca",
    "late night food Oaxaca",
    "Oaxaca bars hours prices",
  ],
  publishedTime: "2026-03-15",
  modifiedTime: "2026-03-27",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Nightlife Guide", href: "/oaxaca-nightlife-guide" },
        ]}
        article={{
          headline:
            "Oaxaca Nightlife: Mezcal Bars, Live Music & Rooftop Spots",
          description:
            "Complete guide to nightlife in Oaxaca City — mezcalerías, live music venues, rooftop bars, late-night eats, and practical tips for going out safely.",
          datePublished: "2026-03-15",
          dateModified: "2026-03-27",
          url: "https://oaxacaitinerary.com/oaxaca-nightlife-guide",
        }}
      />
      <NightlifeGuidePage />
    </>
  );
}
