import LoomHero from "@/components/home/LoomHero";
import OaxacaIntro from "@/components/home/OaxacaIntro";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import GuideGrid from "@/components/home/GuideGrid";
import QuickFacts from "@/components/home/QuickFacts";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";

export default function HomePage() {
  return (
    <>
      <LoomHero />
      <ZapotecDivider className="my-0" />
      <OaxacaIntro />
      <FeaturedArticle />
      <GuideGrid />
      <QuickFacts />
      <NewsletterCTA />
    </>
  );
}
