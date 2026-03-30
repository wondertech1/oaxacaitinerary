"use client";

import Link from "next/link";
import { DollarSign, Clock, MapPin, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

function StallCard({
  name,
  what,
  order,
  price,
  tip,
  color = "border-barro",
}: {
  name: string;
  what: string;
  order: string;
  price: string;
  tip?: string;
  color?: string;
}) {
  return (
    <div
      className={`relative bg-lana border-t-4 ${color} rounded-[6px] p-5 overflow-hidden`}
    >
      <div className="absolute inset-0 weave-diagonal opacity-[0.02]" />
      <div
        className="absolute bottom-0 right-0 w-6 h-6"
        style={{
          clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          backgroundColor: "var(--lana-dark)",
        }}
      />
      <div className="relative z-10">
        <h3 className="font-heading text-lg font-bold text-copal">{name}</h3>
        <p className="mt-1 text-sm text-copal/50">{what}</p>
        <div className="mt-3 flex items-start gap-2">
          <DollarSign size={13} className="text-mezcal shrink-0 mt-0.5" />
          <p className="text-sm text-copal/70">
            <strong>Order:</strong> {order}
          </p>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="font-mono text-xs text-mezcal font-bold">
            {price}
          </span>
        </div>
        {tip && (
          <p className="mt-3 text-xs text-copal/50 italic border-t border-copal/[0.06] pt-3">
            {tip}
          </p>
        )}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What is Mercado 20 de Noviembre?",
    answer:
      "It is Oaxaca's most famous food market, located two blocks south of the Zócalo. The market has a crafts side and a food side. The food side includes the Pasillo de Humo (Smoke Corridor), hot chocolate vendors, empanada stalls, and tamale makers. It has been operating since 1978 and is named after the date the Mexican Revolution began.",
  },
  {
    question: "What time should I go?",
    answer:
      "For the Pasillo de Humo, arrive between 8:30 and 10:30 AM. After that the smoke gets thick, the lines grow, and waits can exceed 20 minutes. For lunch specials like comida corrida, 1–3 PM is ideal. The market opens at 7 AM and food stalls begin closing around 7 PM.",
  },
  {
    question: "How does Pasillo de Humo work?",
    answer:
      "Walk through the corridor and choose any meat vendor — they all display cuts with prices. Point at what you want, they weigh it and tell you the price. Pay the vendor, then sit at any table in the communal grilling area. Your meat is cooked on the grill nearest your table. Women circulate selling tortillas, salsa, nopales, and drinks separately.",
  },
  {
    question: "How much money should I bring?",
    answer:
      "Budget 150–250 MXN ($8–14 USD) per person for a full market breakfast or lunch including a drink. The market is cash only — no stall accepts cards. Bring small bills; vendors sometimes struggle with 500 MXN notes early in the morning.",
  },
];

export default function MercadoGuidePage() {
  const heroImage = getGuideImage("/mercado-20-de-noviembre-guide");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Mercado Guide"
        kicker="Market Guide"
        kickerColor="text-nopal"
        title="Eating at Mercado 20 de Noviembre: A First-Timer's Guide"
        subtitle="Stall-by-stall breakdown of what to eat, what to skip, and how the Pasillo de Humo actually works."
        pills={["Stall-by-Stall", "All Prices in MXN", "Ordering Phrases"]}
        readTime="9 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="bg-lana" />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Mercado 20 de Noviembre is not a tourist market with a food
                court bolted on. It&apos;s a working market that happens to
                have one of the greatest concentrations of affordable{" "}
                <Link href="/oaxaca-street-food-guide" className="text-barro underline">street food &rarr;</Link> in
                Mexico. It&apos;s also intimidating if you don&apos;t know how
                it works.
              </p>
              <p>
                Here&apos;s exactly what to do, where to sit, what to order,
                and how much it should cost.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How the Market Works */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              How It Works
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Understanding the layout
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 text-sm text-copal/70 leading-relaxed space-y-4">
              <p>
                The market has two main sections: the{" "}
                <strong>crafts/goods side</strong> (textiles, pottery, kitchen
                supplies — skip this for food) and the{" "}
                <strong>food side</strong> (the entire back half). You want the
                food side.
              </p>
              <p>
                The most famous section is the{" "}
                <strong>Pasillo de Humo (Smoke Corridor)</strong> — a row of
                charcoal grills where vendors cook meat to order. The system
                works like this:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>
                  Walk through the corridor. Choose any meat vendor (they all
                  have displayed cuts with prices).
                </li>
                <li>
                  Point at what you want. They&apos;ll weigh it and tell you
                  the price. Pay them.
                </li>
                <li>
                  Sit at any table in the communal grilling area. They&apos;ll
                  bring your meat to the grill nearest your table.
                </li>
                <li>
                  Women walk between tables selling tortillas, salsa, nopales
                  (cactus), and drinks. Buy from them separately.
                </li>
              </ol>

              <div className="flex gap-3 border border-nopal/20 bg-nopal/[0.04] rounded-[6px] p-4 mt-4">
                <MapPin
                  size={14}
                  className="text-nopal shrink-0 mt-0.5"
                />
                <p>
                  <strong>Etiquette:</strong> You can buy meat from any vendor
                  and sit at any table. The grilling area is communal — there
                  are no assigned seats. Just find an empty spot and sit down.
                  If you&apos;re confused, just point and smile — the vendors
                  are used to confused tourists.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What to Eat */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              What to Eat
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The essential stalls
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            <ScrollReveal delay={0.05}>
              <StallCard
                name="Pasillo de Humo (Smoke Corridor)"
                what="Grilled meats — tasajo, cecina, chorizo, costilla"
                order="200g tasajo + 100g chorizo + tortillas + salsa"
                price="~130 MXN total (~$7 USD)"
                tip="Go before 10:30 AM. After that, the smoke is suffocating and the wait is 20+ minutes. Early morning, you'll have the corridor almost to yourself."
                color="border-barro"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <StallCard
                name="The Hot Chocolate Ladies"
                what="Oaxacan chocolate de agua or chocolate de leche — near the main entrance"
                order="Chocolate de agua, medio. It's lighter and more traditional than the milk version."
                price="30 MXN per cup"
                tip="Ask for Mayordomo or La Soledad brand. The taste difference is subtle but real. Mayordomo is slightly sweeter."
                color="border-mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <StallCard
                name="Empanadas de Amarillo"
                what="Yellow mole empanadas, fried to order"
                order="Two empanadas de amarillo. They're small — two is a snack, four is a meal."
                price="15–20 MXN each"
                tip="Look for the woman at the stall with no name sign near the east corridor. The empanadas should be fried when you order them — don't buy pre-made ones sitting on the counter."
                color="border-nopal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <StallCard
                name="Tamales Oaxaqueños"
                what="Banana-leaf wrapped tamales with mole fillings"
                order="Tamal de mole negro. Get the mole negro, not the rajas."
                price="25–30 MXN each"
                tip="The rajas (pepper strips) tamales are fine everywhere in Mexico. Nobody does mole negro tamales like Oaxaca. This is your chance."
                color="border-anil"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <StallCard
                name="Tejate"
                what="Pre-Hispanic drink made from corn, cacao, mamey seed, and flor de cacao"
                order="Un tejate, por favor. It comes in a jícara (gourd bowl) or a plastic cup."
                price="30 MXN"
                tip="Looks like dirty dishwater. Tastes like nothing you've ever had — earthy, nutty, slightly sweet, and refreshing. It's served at room temperature. Just try it."
                color="border-barro"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What to Skip */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              What to Skip
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Save your money and stomach space
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 space-y-3">
              {[
                {
                  skip: "Quesillo stands near the front entrance",
                  why: "Overpriced by 30–40%. Buy quesillo (Oaxacan string cheese) at Mercado Benito Juárez next door instead.",
                },
                {
                  skip: "Mezcal vendors inside the market",
                  why: <>Low quality, tourist-priced. Go to a proper <Link href="/oaxaca-mezcal-guide" className="text-barro underline">mezcaler&iacute;a &rarr;</Link> (In Situ, Mezcaloteca) where you can taste before buying.</>,
                },
                {
                  skip: "The sit-down restaurants on the periphery",
                  why: "You're paying for chairs and a menu in English, not better food. The stalls in the center are better and a fraction of the price.",
                },
              ].map((item) => (
                <div
                  key={item.skip}
                  className="flex gap-3 border border-barro/15 bg-barro/[0.03] rounded-[6px] p-4"
                >
                  <AlertTriangle
                    size={14}
                    className="text-barro shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-copal/70">
                    <strong>{item.skip}</strong> — {item.why}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Practical Info
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Quick reference
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 bg-lana-dark border border-copal/[0.06] rounded-[6px] p-5 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-anil shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-copal">Hours</strong>
                    <p className="text-copal/60">
                      7 AM – 9 PM daily. Food stalls start closing ~7 PM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-anil shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-copal">Location</strong>
                    <p className="text-copal/60">
                      Calle Aldama & Mina, 2 blocks south of the Zócalo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign
                    size={14}
                    className="text-anil shrink-0 mt-0.5"
                  />
                  <div>
                    <strong className="text-copal">Payment</strong>
                    <p className="text-copal/60">
                      Cash only. No cards accepted at any stall. See our{" "}
                      <Link href="/oaxaca-budget-guide" className="text-barro underline">budget guide &rarr;</Link> for ATM tips.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-anil shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-copal">Best Time</strong>
                    <p className="text-copal/60">
                      8:30–10:30 AM for smoke corridor. 1–3 PM for lunch
                      specials.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-copal/[0.06] text-xs text-copal/40">
                Bathrooms: Pay restrooms near the west entrance (5 MXN). Bring
                your own tissues.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <RelatedContent items={[
        { title: "Street Food Guide", description: "12 dishes beyond the market, with locations and prices.", href: "/oaxaca-street-food-guide", accentColor: "barro" },
        { title: "4-Day Itinerary", description: "The market features on Day 2 morning.", href: "/oaxaca-city-4-day-itinerary", accentColor: "barro" },
        { title: "Budget Guide", description: "How a market breakfast fits your daily budget.", href: "/oaxaca-budget-guide", accentColor: "mezcal" },
      ]} />
    </>
  );
}
