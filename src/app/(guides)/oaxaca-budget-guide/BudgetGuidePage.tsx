"use client";

import Link from "next/link";
import { DollarSign } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import BudgetCalculator from "@/components/interactive/BudgetCalculator";
import { getGuideImage } from "@/lib/constants/guides";

function BudgetTierCard({
  tier,
  dailyTotal,
  headerColor,
  breakdown,
  description,
}: {
  tier: string;
  dailyTotal: string;
  headerColor: string;
  breakdown: { category: string; amount: string; percentage: number }[];
  description: string;
}) {
  return (
    <div className="bg-lana rounded-[6px] overflow-hidden">
      <div className={`${headerColor} px-5 py-4 flex items-center justify-between`}>
        <span className="text-white font-heading text-lg font-bold">
          {tier}
        </span>
        <span className="text-white/90 font-mono text-sm font-bold">
          {dailyTotal}
        </span>
      </div>
      <div className="px-5 py-4 space-y-3">
        {breakdown.map((item) => (
          <div key={item.category}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-copal/70">{item.category}</span>
              <span className="font-mono text-xs font-bold text-mezcal">
                {item.amount}
              </span>
            </div>
            <div className="w-full bg-copal/[0.06] rounded-full h-1.5">
              <div
                className={`${headerColor} h-1.5 rounded-full`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
        <p className="text-sm text-copal/60 leading-relaxed pt-2 border-t border-copal/[0.06]">
          {description}
        </p>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Is Oaxaca expensive for tourists?",
    answer:
      "No. Oaxaca is one of the most affordable destinations in Mexico. A backpacker can comfortably spend around 780 MXN (~$45 USD) per day, and even a mid-range traveler only needs about 1,200 MXN (~$70 USD) per day for private accommodation, sit-down meals, and activities.",
  },
  {
    question: "How much money do I need per day in Oaxaca?",
    answer:
      "It depends on your travel style. Budget travelers: ~780 MXN/day ($45 USD). Mid-range: ~1,200 MXN/day ($70 USD). Comfort: ~2,900 MXN/day ($168 USD). These are per-person costs. Couples sharing a room will pay less per person, especially at mid-range and comfort tiers.",
  },
  {
    question: "Is tipping expected in Oaxaca?",
    answer:
      "At sit-down restaurants, 10\u201315% is standard. Street food vendors, market stalls, and fondas do not expect tips. For taxis, rounding up to the nearest 10 pesos is appreciated but not required. Tour guides typically receive 50\u2013100 MXN per person.",
  },
  {
    question: "Should I bring USD or MXN to Oaxaca?",
    answer:
      "Bring a debit card and withdraw Mexican pesos from ATMs (Banorte or HSBC have the lowest fees). USD is rarely accepted outside hotels and tourist shops, and the exchange rate you\u2019ll get is poor. A no-foreign-transaction-fee card like Wise or Revolut saves the most money.",
  },
  {
    question: "Are credit cards widely accepted in Oaxaca?",
    answer:
      "Visa and Mastercard are accepted at sit-down restaurants, boutique hotels, and larger shops. However, markets, street food vendors, colectivos, and most small businesses are cash-only. Always carry enough pesos for the day — plan on paying cash for at least half your expenses.",
  },
];

export default function BudgetGuidePage() {
  const heroImage = getGuideImage("/oaxaca-budget-guide");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Budget Guide"
        kicker="Budget"
        kickerColor="text-mezcal"
        title="Oaxaca on a Budget: Realistic Daily Costs for 2026"
        subtitle="Not 'cheap travel tips' — actual price breakdowns across three budget tiers, verified in March 2026."
        pills={["3 Budget Tiers", "All Prices in MXN", "Verified March 2026"]}
        readTime="8 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="bg-lana" />

      {/* Section 1: The Bottom Line */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Overview
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Bottom Line
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca is one of the cheapest cities in Mexico for travelers. A
                backpacker eating street food and staying in hostels can get by
                on ~780 MXN/day (~$45 USD). Mid-range travelers spending on
                sit-down restaurants and boutique hotels will spend ~1,200
                MXN/day (~$70 USD). Comfort travelers who want the best mezcal
                bars and colonial-era hotel rooms are looking at ~2,900 MXN/day
                (~$168 USD). All of these are for one person.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="money">
              These are per-person costs. If you&apos;re traveling as a couple
              sharing <Link href="/where-to-stay-oaxaca" className="text-barro underline">accommodation &rarr;</Link>, your per-person daily cost drops
              significantly &mdash; especially in the mid-range and comfort
              tiers where the hotel room is the biggest expense.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: The Three Tiers */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Breakdown
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Three Tiers
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-6">
            <ScrollReveal delay={0.05}>
              <BudgetTierCard
                tier="Backpacker"
                dailyTotal="~780 MXN/day (~$45 USD)"
                headerColor="bg-nopal"
                breakdown={[
                  { category: "Hostel dorm", amount: "300 MXN", percentage: 38 },
                  {
                    category: "Street food & fondas",
                    amount: "220 MXN",
                    percentage: 28,
                  },
                  {
                    category: "Transport (walking + colectivos)",
                    amount: "60 MXN",
                    percentage: 8,
                  },
                  {
                    category: "Activities & entrance fees",
                    amount: "100 MXN",
                    percentage: 13,
                  },
                  {
                    category: "Mezcal & drinks",
                    amount: "100 MXN",
                    percentage: 13,
                  },
                ]}
                description="Sleep in dorm beds, eat at markets and street stalls, walk everywhere, and visit free museums on Sundays. This is very comfortable by backpacker standards — Oaxaca&apos;s street food is better than most cities&apos; restaurants."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <BudgetTierCard
                tier="Mid-Range"
                dailyTotal="~1,200 MXN/day (~$70 USD)"
                headerColor="bg-mezcal"
                breakdown={[
                  {
                    category: "Private room / boutique hotel",
                    amount: "520 MXN",
                    percentage: 43,
                  },
                  {
                    category: "Mix of restaurants & street food",
                    amount: "360 MXN",
                    percentage: 30,
                  },
                  {
                    category: "Transport (taxis + colectivos)",
                    amount: "100 MXN",
                    percentage: 8,
                  },
                  {
                    category: "Activities & tours",
                    amount: "120 MXN",
                    percentage: 10,
                  },
                  {
                    category: "Mezcal & drinks",
                    amount: "100 MXN",
                    percentage: 8,
                  },
                ]}
                description="A private room with your own bathroom, sit-down lunches at fondas, the occasional nice dinner, taxis when you&apos;re tired, and a mezcal tasting without guilt. The sweet spot for most travelers."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <BudgetTierCard
                tier="Comfort"
                dailyTotal="~2,900 MXN/day (~$168 USD)"
                headerColor="bg-barro"
                breakdown={[
                  {
                    category: "Boutique hotel",
                    amount: "1,300 MXN",
                    percentage: 45,
                  },
                  {
                    category: "Restaurants & mezcaler\u00edas",
                    amount: "800 MXN",
                    percentage: 28,
                  },
                  {
                    category: "Transport (DiDi/taxis)",
                    amount: "250 MXN",
                    percentage: 9,
                  },
                  {
                    category: "Private tours & experiences",
                    amount: "300 MXN",
                    percentage: 10,
                  },
                  {
                    category: "Shopping & extras",
                    amount: "250 MXN",
                    percentage: 9,
                  },
                ]}
                description="Colonial courtyard hotels, multi-course tasting menus at places like Criollo or Alfonsina, private cooking classes, and craft mezcal flights. Oaxaca&apos;s luxury scene is excellent and still cheaper than comparable experiences in Mexico City."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3: Where NOT to Waste Money */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Save Smart
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Where NOT to Waste Money
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca is cheap, but it&apos;s not immune to tourist traps.
                Knowing where <em>not</em> to spend is as important as knowing
                the daily budget numbers.
              </p>
              <p>
                Don&apos;t pay for bottled water everywhere &mdash; buy a 20L
                garraf&oacute;n (water jug) from OXXO for 50 MXN. It lasts a
                week.
              </p>
              <p>
                Skip the rooftop bars on Macedonio Alcal&aacute;. The mezcal is
                the same but costs 2&ndash;3x because of the view. The best
                mezcaler&iacute;as are side-street dives.
              </p>
              <p>
                Don&apos;t book{" "}
                <Link href="/oaxaca-cultural-experiences" className="text-barro underline">cooking classes &rarr;</Link> through your hotel &mdash; they
                take a 30&ndash;40% commission. Book directly through the
                instructor. Most have Instagram pages.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="skip">
              Guided walking tours of Centro Hist&oacute;rico are almost never
              worth 500+ MXN. The city is small, walkable, and well-signed.
              Download a free audio guide or just wander.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TipCard type="tip">
              The best free activity in Oaxaca: walk to the IAGO gallery
              (Instituto de Artes Gr&aacute;ficas de Oaxaca) on Alcal&aacute;.
              Founded by Francisco Toledo. World-class contemporary art, always
              free, never crowded.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Money-Saving Tips */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Pro Tips
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Money-Saving Tips
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 space-y-3">
              <div className="flex gap-3 items-start bg-lana rounded-[6px] p-4">
                <DollarSign
                  size={14}
                  className="text-mezcal shrink-0 mt-0.5"
                />
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">
                    Eat comida corrida at fondas between 1&ndash;3 PM.
                  </strong>{" "}
                  Full meal with drink for 70&ndash;100 MXN. This should be your
                  main meal.
                </p>
              </div>

              <div className="flex gap-3 items-start bg-lana rounded-[6px] p-4">
                <DollarSign
                  size={14}
                  className="text-mezcal shrink-0 mt-0.5"
                />
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">
                    Use DiDi instead of street taxis.
                  </strong>{" "}
                  It&apos;s 20&ndash;30% cheaper and you don&apos;t have to
                  negotiate.
                </p>
              </div>

              <div className="flex gap-3 items-start bg-lana rounded-[6px] p-4">
                <DollarSign
                  size={14}
                  className="text-mezcal shrink-0 mt-0.5"
                />
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">
                    Visit museums on Sundays.
                  </strong>{" "}
                  Most are free for Mexican residents and some are free for
                  everyone.
                </p>
              </div>

              <div className="flex gap-3 items-start bg-lana rounded-[6px] p-4">
                <DollarSign
                  size={14}
                  className="text-mezcal shrink-0 mt-0.5"
                />
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">
                    Buy mezcal at <Link href="/oaxaca-mezcal-guide" className="text-barro underline">mezcaler&iacute;as &rarr;</Link>, not tourist shops.
                  </strong>{" "}
                  Better quality, lower markup. Ask for a degustaci&oacute;n
                  (tasting) before buying.
                </p>
              </div>

              <div className="flex gap-3 items-start bg-lana rounded-[6px] p-4">
                <DollarSign
                  size={14}
                  className="text-mezcal shrink-0 mt-0.5"
                />
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">
                    Negotiate Airbnb weekly rates.
                  </strong>{" "}
                  Most hosts will give 15&ndash;20% off for 7+ nights if you
                  message them directly.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Practical Money Info */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Logistics
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Practical Money Info
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                <strong className="text-copal/90">ATMs:</strong> Use Banorte or
                HSBC ATMs &mdash; lowest foreign transaction fees. Avoid
                Santander and Scotiabank ATMs in tourist areas (higher fees). Max
                withdrawal usually 8,000&ndash;10,000 MXN. Check current USD/MXN rates
                at <a href="https://www.banxico.org.mx" target="_blank" rel="noopener" className="text-barro underline">Banco de M&eacute;xico</a>.
              </p>
              <p>
                <strong className="text-copal/90">Cards:</strong> Visa and
                Mastercard accepted at sit-down restaurants and hotels. Markets,
                street food, colectivos, and small shops are cash-only.
              </p>
              <p>
                <strong className="text-copal/90">Tipping:</strong> 10&ndash;15%
                at sit-down restaurants. Nothing expected at market stalls or
                street food. Round up taxi fares.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="money">
              Bring a no-foreign-transaction-fee debit card (like Wise or
              Revolut). Mexican ATMs charge ~30 MXN per withdrawal, but your
              bank&apos;s forex markup matters more. Withdraw large amounts less
              frequently.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: Interactive Budget Calculator */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Interactive Tool
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Calculate Your Budget
            </h2>
            <p className="mt-3 text-sm text-copal/50">
              Adjust the days and tier to estimate your total trip cost.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8">
              <BudgetCalculator />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <RelatedContent items={[
        { title: "Where to Stay", description: "Accommodation prices across four neighborhoods.", href: "/where-to-stay-oaxaca", accentColor: "anil" },
        { title: "Street Food Guide", description: "12 dishes with exact prices — the cheapest way to eat well.", href: "/oaxaca-street-food-guide", accentColor: "barro" },
        { title: "Getting Around", description: "Transport costs: colectivos, taxis, and DiDi.", href: "/getting-around-oaxaca", accentColor: "anil" },
      ]} />
    </>
  );
}
