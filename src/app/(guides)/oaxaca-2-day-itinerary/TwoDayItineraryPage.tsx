"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import TimeBlock from "@/components/content/TimeBlock";
import GuideHero from "@/components/shared/GuideHero";
import { getGuideImage } from "@/lib/constants/guides";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import ItineraryPicker from "@/components/shared/ItineraryPicker";

const faqs = [
  {
    question: "Is a weekend enough for Oaxaca?",
    answer:
      "A weekend gives you the city essentials — markets, food, mezcal, museums, and the beautiful Jalatlaco neighborhood. You won't have time for day trips like Monte Albán, but you'll eat better than most week-long trips elsewhere, and you'll leave knowing the difference between espadín and tobalá. Most weekend visitors come back for a longer trip.",
  },
  {
    question: "Should I fly or bus from Mexico City?",
    answer:
      "Fly. It's a 1-hour flight (often 1,500–2,500 MXN round trip on Volaris or VivaAerobus). The bus is 6–7 hours through winding mountain roads with ADO (700–900 MXN one way). For a weekend, every hour counts — the flight saves you a full day of travel.",
  },
  {
    question: "What's the best area for a 2-night stay?",
    answer:
      "Centro Histórico for convenience — everything is walkable. Jalatlaco for charm — colorful streets, quieter at night, 5-minute walk to Centro. Skip Reforma (too residential) and areas south of the markets (less walkable). Budget: 300–500 MXN/night hostels, 800–1,500 MXN/night hotels.",
  },
  {
    question: "Can I fit Monte Albán into 2 days?",
    answer:
      "Technically yes, but I wouldn't recommend it. Monte Albán takes a minimum of 4 hours including transport, and you'd sacrifice either the market morning or the Jalatlaco afternoon — both of which define the Oaxaca experience more than ruins. Save Monte Albán for a 3-day trip.",
  },
  {
    question: "What food should I absolutely not miss?",
    answer:
      "Three things: (1) Smoke-grilled tasajo at Mercado 20 de Noviembre, (2) a tlayuda de tasajo from Tlayudas Libres, and (3) mole negro at Los Danzantes or Zandunga. If you hit all three, you've tasted the soul of Oaxacan cuisine.",
  },
];

export default function TwoDayItineraryPage() {
  const heroImage = getGuideImage("/oaxaca-2-day-itinerary");

  return (
    <>
      <GuideHero
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
        breadcrumbLabel="2-Day Itinerary"
        kicker="2-Day Itinerary"
        title="2 Days in Oaxaca City: A Perfect Weekend"
        subtitle="A weekend that covers the essential markets, the mole you'll dream about, the neighborhood you'll photograph endlessly, and enough mezcal to understand why everyone's obsessed."
        pills={[
          "2 Days",
          "~$40–60/day",
          "Pace: Moderate",
          "Best for: Couples, Weekenders",
        ]}
        readTime="10 min read"
      />

      <ZapotecDivider className="bg-lana" />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Two days in Oaxaca is the minimum to actually{" "}
                <em>feel</em> the city rather than just sprint through it. Day
                one is about orientation and first tastes — finding your
                bearings, eating your first tlayuda, drinking your first real
                mezcal. Day two is where the city opens up: the legendary
                market, the free museums, the colorful neighborhood, and the
                mole that takes three days to make.
              </p>
              <p>
                You won&apos;t have time for ruins or day trips — that&apos;s
                what the{" "}
                <Link
                  href="/oaxaca-3-day-itinerary"
                  className="text-barro underline"
                >
                  3-day itinerary
                </Link>{" "}
                adds. But you&apos;ll eat better in two days here than in a
                week most places.
              </p>
              <p className="text-sm text-copal/50 italic">
                Only have one day?{" "}
                <Link
                  href="/oaxaca-1-day-itinerary"
                  className="text-barro underline"
                >
                  See the 1-day sprint
                </Link>
                . Got a long weekend?{" "}
                <Link
                  href="/oaxaca-3-day-itinerary"
                  className="text-barro underline"
                >
                  The 3-day version
                </Link>{" "}
                adds Monte Albán and the real local market.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 1 vs Day 2 mood card */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-0 rounded-[6px] overflow-hidden border border-copal/[0.06]">
              <div className="bg-barro/[0.06] border-r border-copal/[0.06] p-4 md:p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-barro">
                  Day 1
                </span>
                <h3 className="font-heading text-base md:text-lg font-bold text-copal mt-1">
                  First Tastes
                </h3>
                <p className="text-xs text-copal/50 mt-1.5 leading-relaxed">
                  Arrive, orient, explore Centro, first tlayuda, first mezcal
                </p>
              </div>
              <div className="bg-anil/[0.06] p-4 md:p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-anil">
                  Day 2
                </span>
                <h3 className="font-heading text-base md:text-lg font-bold text-copal mt-1">
                  Deep Dives
                </h3>
                <p className="text-xs text-copal/50 mt-1.5 leading-relaxed">
                  Market feast, museums, Jalatlaco, mole negro dinner
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 1 */}
      <section id="day-1" className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                01
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day One
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Arrive, Orient, and Eat Your First Tlayuda
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="Morning → Early Afternoon" title="Arrival & Settling In">
              <p>
                <strong>Airport to Centro:</strong> Official taxi counter inside
                the terminal. <strong>200–250 MXN (~$12–14 USD)</strong>, fixed
                rate, 15–20 minute ride.
              </p>
              <p>
                Drop your bags and walk to the <strong>Zócalo</strong> — main
                square, your compass point for everything. Grab a coffee at one
                of the cafés on the square if you need to decompress, but
                don&apos;t eat here — the tourist-facing restaurants are
                mediocre.
              </p>
              <TipCard type="tip">
                <strong>Where to stay:</strong> Centro Histórico or Jalatlaco.
                Both walkable to everything. Hostels: 300–500 MXN/night.
                Hotels: 800–1,500 MXN/night. Airbnbs: 600–1,200 MXN/night.{" "}
                <Link
                  href="/where-to-stay-oaxaca"
                  className="text-barro underline"
                >
                  Full neighborhood guide →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="2:00 PM – 5:00 PM" title="Santo Domingo & the Pedestrian Walk">
              <p>
                <strong>Templo de Santo Domingo:</strong> Free. 400 years of
                gold leaf and Baroque excess. One of the most beautiful churches
                in Mexico. 20–30 minutes inside.
              </p>
              <p>
                <strong>Andador Turístico</strong> (Macedonio Alcalá): Walk the
                entire pedestrian street from Santo Domingo to the Zócalo.
                Browse but don&apos;t buy — prices are 30–50% higher than
                markets. Just absorb the energy.
              </p>
              <p>
                <strong>Jardín Etnobotánico:</strong> If a tour is starting (
                <strong>30 MXN</strong>), it&apos;s worth joining. The guides
                explain the connection between Oaxacan culture and its plants.
                If no tour is available, skip it.
              </p>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="6:00 PM – 9:00 PM" title="First Tlayuda & First Mezcal">
              <p>
                <strong>Tlayudas Libres</strong> (Calle Libres 212): Tlayuda de
                tasajo with quesillo and black beans.{" "}
                <strong>80–100 MXN</strong>. Wood-fired and enormous.
              </p>
              <p>
                <strong>In Situ Mezcalería</strong> (Morelos 511): Espadín
                joven to start. <strong>60 MXN per pour</strong>. Sip neat —
                don&apos;t order cocktails at a mezcal bar. The staff will
                guide you.
              </p>
              <TipCard type="skip">
                <strong>Skip:</strong> Mezcalería Los Amantes on Alcalá.
                Overpriced, full of tour groups. In Situ is where locals drink.{" "}
                <Link
                  href="/oaxaca-mezcal-guide"
                  className="text-barro underline"
                >
                  Full mezcal guide →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 2 */}
      <section id="day-2" className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                02
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Two
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  The Day You Understand Why People Come Here for the Food
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="8:00 AM – 11:30 AM" title="Mercado 20 de Noviembre">
              <p>
                Go early. <strong>By 11 AM it&apos;s packed</strong>. Head to
                the Pasillo de Humo (smoke corridor) in the back. Buy tasajo (
                <strong>~60 MXN/200g</strong>) and chorizo (
                <strong>~50 MXN</strong>). Sit at the communal grill. Tortillas
                and salsa from the walking vendors: <strong>20 MXN</strong>.
              </p>
              <p>
                Cross the street for <strong>Mayordomo hot chocolate</strong>:{" "}
                <strong>30 MXN</strong>. Buy a bag for home — half the price of
                the airport.
              </p>
              <TipCard type="money">
                <strong>Total market breakfast:</strong> 150–200 MXN per person
                (~$8–11 USD).{" "}
                <Link
                  href="/mercado-20-de-noviembre-guide"
                  className="text-barro underline"
                >
                  Full market guide →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="12:00 PM – 4:30 PM" title="Museums & Jalatlaco">
              <p>
                <strong>IAGO</strong> (Instituto de Artes Gráficas): Free.
                Contemporary art in a colonial building. Rotating exhibitions.
                30–45 minutes.
              </p>
              <p>
                <strong>Museo Textil de Oaxaca:</strong> Free. Backstrap loom
                technique demonstrations. Understanding the craft makes buying
                textiles later much more meaningful.
              </p>
              <p>
                <strong>Walk through Jalatlaco:</strong> Best between{" "}
                <strong>3–5 PM</strong> when the light hits the painted walls.
                Coffee at <strong>Cafeología</strong> (Calle Reforma 401B):
                single-origin Oaxacan beans, <strong>45 MXN</strong>.
              </p>
              <TipCard type="tip">
                <strong>Photo tip:</strong> The intersection of Calles Reforma
                and Constitución in Jalatlaco has the best light mid-afternoon.{" "}
                <Link
                  href="/oaxaca-photography-spots"
                  className="text-barro underline"
                >
                  More photo spots →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="7:00 PM – 10:00 PM" title="Mole Negro Dinner & Farewell">
              <p>
                <strong>Los Danzantes</strong> (Macedonio Alcalá 403): Order the{" "}
                <strong>mole negro</strong>. Three days to make, 30+ ingredients
                including chocolate. <strong>220–280 MXN</strong>. Tourist-priced
                but the mole negro is worth every peso — complex, smoky, and nothing like what you get outside Oaxaca.
              </p>
              <p>
                <strong>Budget alternative:</strong>{" "}
                <strong>Zandunga</strong> (García Vigil 512). Isthmus-style
                Oaxacan food. Mole: <strong>130 MXN</strong>. Start with
                garnachas istmeñas — crispy tortilla cups with beef and pickled
                onion.
              </p>
              <p>
                After dinner, walk the <strong>Zócalo</strong> one last time.
                Buy chapulines from a street vendor (
                <strong>20 MXN</strong>) and watch the city at night.
              </p>
              <TipCard type="money">
                <strong>Souvenir stop:</strong> If you didn&apos;t shop
                yesterday, hit <strong>Mercado Benito Juárez</strong> before
                dinner. Mole paste: 80–120 MXN/kg. Mezcal: 150–400 MXN/bottle.
                Chocolate: 40–60 MXN.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      <ItineraryPicker currentDays={2} />

      {/* Essential Tips */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Essential Info
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Weekend essentials
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Packing for a Weekend",
                color: "border-mezcal",
                text: "Comfortable walking shoes (cobblestones everywhere). Light layers — mornings are cool (15°C), afternoons warm (25-28°C). Sunscreen and hat for the Zócalo. Cash in MXN.",
              },
              {
                title: "Money",
                color: "border-nopal",
                text: "Budget ~$40-60 USD/day. ATMs at Banamex and BBVA. Markets are cash only. Restaurants take cards. Tip 10-15%. 1 USD ≈ 18 MXN.",
              },
              {
                title: "Where to Stay",
                color: "border-anil",
                text: <>Centro Histórico for convenience. Jalatlaco for charm (5-min walk to Centro). Both excellent for a 2-night stay. <Link href="/where-to-stay-oaxaca" className="text-barro underline">Full guide →</Link></>,
              },
              {
                title: "When to Go",
                color: "border-barro",
                text: "Oct-Nov for Día de los Muertos. Dec-Mar for perfect weather. July for Guelaguetza. Avoid June-August unless you like afternoon downpours.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={0.05 + i * 0.04}>
                <div
                  className={`relative bg-lana border-t-4 ${card.color} rounded-[6px] p-5`}
                >
                  <div className="absolute inset-0 weave-diagonal opacity-[0.02]" />
                  <div className="relative z-10">
                    <h3 className="font-heading text-base font-bold text-copal">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-copal/60 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedContent
        items={[
          {
            title: "Where to Stay",
            description:
              "Four neighborhoods compared with real prices and walkability scores.",
            href: "/where-to-stay-oaxaca",
            accentColor: "anil",
          },
          {
            title: "3-Day Itinerary",
            description:
              "Got a long weekend? Add Monte Albán and the real local market.",
            href: "/oaxaca-3-day-itinerary",
            accentColor: "nopal",
          },
          {
            title: "Mezcal Guide",
            description:
              "What to drink, where to drink it, and which distilleries to visit.",
            href: "/oaxaca-mezcal-guide",
            accentColor: "mezcal",
          },
        ]}
      />
    </>
  );
}
