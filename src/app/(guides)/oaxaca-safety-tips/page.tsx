import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import SafetyTipsPage from "./SafetyTipsPage";

export const metadata = generateGuideMetadata({
  title: "Oaxaca Safety Guide: What Tourists Actually Need to Know (2026)",
  description:
    "Honest neighborhood safety ratings, common scams, health tips, emergency contacts, and practical advice for visiting Oaxaca City in 2026.",
  slug: "oaxaca-safety-tips",
  keywords: [
    "is Oaxaca safe for tourists",
    "Oaxaca safety 2026",
    "Oaxaca common scams",
    "Oaxaca health tips travelers",
    "Oaxaca emergency numbers",
    "Oaxaca neighborhood safety",
    "Oaxaca tap water",
    "Oaxaca tipping guide",
  ],
  publishedTime: "2026-03-08",
  modifiedTime: "2026-03-27",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Safety Tips", href: "/oaxaca-safety-tips" },
        ]}
        article={{
          headline:
            "Oaxaca Safety Guide: What Tourists Actually Need to Know",
          description:
            "Honest neighborhood safety ratings, common scams, health tips, and practical advice for Oaxaca City.",
          datePublished: "2026-03-08",
          dateModified: "2026-03-27",
          url: "https://oaxacaitinerary.com/oaxaca-safety-tips",
        }}
      />
      <SafetyTipsPage />
    </>
  );
}
