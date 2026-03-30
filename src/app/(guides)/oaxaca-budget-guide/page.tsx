import { generateGuideMetadata } from "@/lib/seo/metadata";
import StructuredData from "@/components/seo/StructuredData";
import BudgetGuidePage from "./BudgetGuidePage";

export const metadata = generateGuideMetadata({
  title: "Oaxaca on a Budget: Realistic Daily Costs for 2026",
  description:
    "Honest daily cost breakdowns for Oaxaca City — backpacker, mid-range, and comfort tiers with real prices in MXN. Where to save and where not to.",
  slug: "oaxaca-budget-guide",
  keywords: [
    "Oaxaca budget travel",
    "how much does Oaxaca cost",
    "Oaxaca prices in MXN",
    "Oaxaca daily budget 2026",
    "cheap travel Oaxaca City",
    "Oaxaca backpacker budget",
    "Mexico travel cost per day",
  ],
  publishedTime: "2026-01-04",
  modifiedTime: "2026-03-22",
});

export default function Page() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/" },
          { name: "Budget Guide", href: "/oaxaca-budget-guide" },
        ]}
        article={{
          headline: "Oaxaca on a Budget: Realistic Daily Costs",
          description:
            "Honest daily cost breakdowns for Oaxaca City.",
          datePublished: "2026-01-04",
          dateModified: "2026-03-22",
          url: "https://oaxacaitinerary.com/oaxaca-budget-guide",
        }}
      />
      <BudgetGuidePage />
    </>
  );
}
