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
    question: "Is 3 days the right amount for Oaxaca?",
    answer:
      "Three days is the minimum to feel like you've experienced Oaxaca rather than just visited it. You get the city, the food, and one major day trip (Monte Albán). If you want Hierve el Agua and the Valles Centrales, you'll need 5 days. But 3 days leaves you satisfied.",
  },
  {
    question: "Can I add Hierve el Agua to a 3-day trip?",
    answer:
      "Not comfortably. Hierve el Agua is 1.5 hours each way on rough roads, plus time at the site. Adding it would mean sacrificing either Monte Albán or the city exploration day. Save it for a 5-day trip where it fits naturally into the Valles Centrales loop.",
  },
  {
    question: "What's the difference between 3 and 4 days?",
    answer:
      "Day 4 adds San Bartolo Coyotepec (black pottery village), a souvenir shopping morning at Mercado Benito Juárez, and a proper farewell meal. With 3 days, you combine Monte Albán with the farewell, which works but feels slightly rushed.",
  },
  {
    question: "Should I do Monte Albán on day 2 or day 3?",
    answer:
      "Day 3. Use day 2 for the markets and city exploration when you're fresh. Monte Albán on day 3 gives you the morning at the ruins and the afternoon for the local market and a farewell dinner. It's a better rhythm.",
  },
  {
    question: "Is Central de Abastos safe for tourists?",
    answer:
      "Yes, but it's a working market — not a tourist attraction. Stay aware, keep your phone in your pocket, and don't bring a big camera. The vendors are friendly but busy. It's the most authentic market experience in Oaxaca and 95% of tourists never see it.",
  },
];

export default function ThreeDayItineraryPage() {
  const heroImage = getGuideImage("/oaxaca-3-day-itinerary");

  return (
    <>
      <GuideHero
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
        breadcrumbLabel="3-Day Itinerary"
        kicker="3-Day Itinerary"
        title="3 Days in Oaxaca City: The Long Weekend Sweet Spot"
        subtitle="The first itinerary length where you can actually breathe. Markets and mole, Monte Albán without rushing, and the real local market that 95% of tourists never find."
        pills={[
          "3 Days",
          "~$45–65/day",
          "Pace: Relaxed",
          "Best for: First-timers, Long Weekenders",
        ]}
        readTime="12 min read"
      />

      <ZapotecDivider className="bg-lana" />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Three days is where Oaxaca starts to click. You&apos;re not
                sprinting anymore. Day one is arrival and first tastes. Day two
                is the food deep-dive and neighborhood exploration. Day three
                takes you outside the city to the 2,500-year-old Zapotec ruins
                of Monte Albán and then to the market where actual Oaxaqueños
                shop — not the tourist one.
              </p>
              <p>
                This is the itinerary for a long weekend. Fly in Thursday
                evening, leave Sunday night. You&apos;ll eat extraordinarily
                well, see the essential sights, and leave with a genuine
                understanding of the city.
              </p>
              <p className="text-sm text-copal/50 italic">
                Only have a weekend?{" "}
                <Link
                  href="/oaxaca-2-day-itinerary"
                  className="text-barro underline"
                >
                  See the 2-day itinerary
                </Link>
                . Got an extra day?{" "}
                <Link
                  href="/oaxaca-city-4-day-itinerary"
                  className="text-barro underline"
                >
                  The 4-day version
                </Link>{" "}
                adds an artisan village and a proper souvenir morning.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Progress tracker */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-stretch gap-0">
              {[
                { day: 1, label: "Centro + Food", color: "bg-barro" },
                { day: 2, label: "Markets + Culture", color: "bg-mezcal" },
                { day: 3, label: "Ruins + Local Life", color: "bg-nopal" },
              ].map((step, i) => (
                <div key={step.day} className="flex-1 flex flex-col items-center">
                  <div className="flex items-center w-full">
                    {i > 0 && <div className="flex-1 h-px bg-copal/10" />}
                    <div
                      className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center shrink-0`}
                    >
                      <span className="text-lana font-mono text-xs font-bold">
                        {step.day}
                      </span>
                    </div>
                    {i < 2 && <div className="flex-1 h-px bg-copal/10" />}
                  </div>
                  <span className="mt-2 text-[10px] font-mono uppercase tracking-wider text-copal/40 text-center">
                    {step.label}
                  </span>
                </div>
              ))}
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
            <TimeBlock time="Morning → Early Afternoon" title="Arrival">
              <p>
                <strong>Airport to Centro:</strong> Official taxi counter inside
                the terminal. <strong>200–250 MXN (~$12–14 USD)</strong>, 15–20
                minute ride.
              </p>
              <p>
                Drop your bags and walk to the <strong>Zócalo</strong>. This is
                your compass point — every direction from here has something
                worth seeing within 10 blocks.
              </p>
              <TipCard type="tip">
                <strong>Where to stay:</strong> Centro Histórico or Jalatlaco.
                Both walkable. Hostels: 300–500 MXN/night. Hotels: 800–1,500
                MXN/night.{" "}
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
            <TimeBlock time="2:00 PM – 5:00 PM" title="Santo Domingo & the Walk">
              <p>
                <strong>Templo de Santo Domingo:</strong> Free. Stunning
                400-year-old Baroque church, gold leaf interior. 20 minutes.
              </p>
              <p>
                <strong>Jardín Etnobotánico:</strong>{" "}
                <strong>30 MXN</strong>, guided tour only. Worth it if a tour
                is starting. Skip if not — your time is better spent walking.
              </p>
              <p>
                <strong>Andador Turístico</strong> (Macedonio Alcalá): Walk it
                end-to-end. Browse, don&apos;t buy — prices 30–50% higher than
                markets.
              </p>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="6:00 PM – 9:00 PM" title="First Tlayuda & First Mezcal">
              <p>
                <strong>Tlayudas Libres</strong> (Calle Libres 212): Tlayuda de
                tasajo. <strong>80–100 MXN</strong>. The defining Oaxacan
                street food.
              </p>
              <p>
                <strong>In Situ Mezcalería</strong> (Morelos 511): Espadín
                joven, <strong>60 MXN per pour</strong>. Sip neat.
              </p>
              <TipCard type="skip">
                <strong>Skip:</strong> Los Amantes on Alcalá — overpriced, tour
                groups. In Situ is the local pick.{" "}
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
                  The Legendary Market, Free Museums, and Mole
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="8:00 AM – 11:30 AM" title="Mercado 20 de Noviembre">
              <p>
                Go early — <strong>by 11 AM it&apos;s packed</strong>. Pasillo
                de Humo: tasajo (<strong>~60 MXN/200g</strong>), chorizo (
                <strong>~50 MXN</strong>), tortillas and salsa (
                <strong>20 MXN</strong>). Mayordomo chocolate across the
                street: <strong>30 MXN</strong>.
              </p>
              <TipCard type="money">
                <strong>Total breakfast:</strong> 150–200 MXN per person
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
            <TimeBlock time="12:00 PM – 5:00 PM" title="Museums, Jalatlaco & Coffee">
              <p>
                <strong>IAGO:</strong> Free. Contemporary art in a colonial
                building. 30 minutes.
              </p>
              <p>
                <strong>Museo Textil de Oaxaca:</strong> Free. Backstrap loom
                demonstrations. Understanding the craft helps you spot
                machine-made fakes when shopping.
              </p>
              <p>
                <strong>Jalatlaco:</strong> Best light 3–5 PM. Coffee at{" "}
                <strong>Cafeología</strong>: <strong>45 MXN</strong>.
              </p>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="7:00 PM – 10:00 PM" title="Mole Negro Dinner">
              <p>
                <strong>Los Danzantes</strong> (Macedonio Alcalá 403):{" "}
                <strong>Mole negro, 220–280 MXN</strong>. 30+ ingredients, 3
                days to make. This is the dish Oaxaca is famous for.
              </p>
              <TipCard type="tip">
                <strong>Budget option:</strong> Zandunga (García Vigil 512).
                Mole: <strong>130 MXN</strong>. Start with garnachas istmeñas.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 3 */}
      <section id="day-3" className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                03
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Three
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Ancient Ruins and the Market Tourists Never Find
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="8:00 AM – 1:00 PM" title="Monte Albán">
              <p>
                <strong>Getting there:</strong> Colectivo from Hotel Rivera del
                Ángel (Calle Mina 518). <strong>80 MXN round trip</strong>,
                departs 8:30 AM. 2.5 hours at the ruins — enough for
                everything.
              </p>
              <p>
                <strong>Entry: 90 MXN</strong>. Bring water, sunscreen, hat —
                zero shade on the main plaza. The views of the Oaxaca valley
                are the real highlight. The ruins are impressive for scale, not
                detail.
              </p>
              <TipCard type="skip">
                <strong>Skip on-site guides</strong> — 500+ MXN, repetitive
                scripts. Download the free INAH audio guide instead. Better
                researched, your own pace.{" "}
                <Link
                  href="/monte-alban-day-trip"
                  className="text-barro underline"
                >
                  Full Monte Albán guide →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock
              time="2:00 PM – 5:00 PM"
              title="Central de Abastos — The Real Market"
            >
              <p>
                This is where Oaxaqueños actually shop. It&apos;s{" "}
                <strong>Mexico&apos;s third-largest market</strong> — sprawling,
                chaotic, and completely authentic. No English menus. No tourist
                prices. Just the real thing.
              </p>
              <p>
                <strong>What to find:</strong> Mole paste at wholesale prices (
                <strong>50–80 MXN/kg</strong> vs. 100–120 at Benito Juárez),
                dried chiles, Oaxacan chocolate in bulk, and the best
                empanadas de amarillo you&apos;ll ever eat (
                <strong>15–20 MXN each</strong>).
              </p>
              <TipCard type="tip">
                <strong>Getting there:</strong> Taxi from Centro:{" "}
                <strong>40–50 MXN</strong>, 10 minutes. Or walk south from
                Mercado 20 de Noviembre — it&apos;s about 15 minutes. Keep
                your phone in your pocket and bring a bag for purchases.
              </TipCard>
              <TipCard type="money">
                <strong>Saturday is the biggest day</strong> — the surrounding
                tianguis (open-air market) doubles in size with vendors from
                surrounding villages. If your trip includes a Saturday, aim for
                it.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="7:00 PM – Late" title="Farewell Dinner">
              <p>
                <strong>Splurge:</strong> Casa Oaxaca El Restaurante for a
                contemporary Oaxacan tasting menu.{" "}
                <strong>~800 MXN</strong>. Chef&apos;s-choice, changes daily.
                Reservations recommended.
              </p>
              <p>
                <strong>Budget:</strong> Any comedor in Centro for a comida
                corrida — soup, main, agua fresca, tortillas.{" "}
                <strong>70–90 MXN</strong>.
              </p>
              <p>
                One last walk around the Zócalo. Chapulines from a street
                vendor (<strong>20 MXN</strong>). Street musicians. The city at
                its most beautiful.
              </p>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      <ItineraryPicker currentDays={3} />

      {/* Essential Tips */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Essential Info
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Before you go
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Money",
                color: "border-mezcal",
                text: "Budget ~$45-65 USD/day. Cash is king at markets. ATMs at Banamex and BBVA. Tip 10-15% at restaurants. 1 USD ≈ 18 MXN.",
              },
              {
                title: "Transport",
                color: "border-nopal",
                text: <>Colectivos are the cheapest way to Monte Albán (80 MXN round trip). Taxis within Centro: 40-60 MXN. DiDi works. Walking covers 90% of city sights. <Link href="/getting-around-oaxaca" className="text-barro underline">Transport guide →</Link></>,
              },
              {
                title: "Monte Albán Tips",
                color: "border-anil",
                text: "Go early (8:30 AM colectivo). Bring water, sunscreen, hat — no shade. Entry 90 MXN. 2.5 hours is enough. Download the free INAH audio guide.",
              },
              {
                title: "Souvenirs",
                color: "border-barro",
                text: "Mole paste (vacuum sealed) is the best thing to bring home. Mezcal: ask for artesanal, not industrial. Chocolate from Mayordomo. Central de Abastos has the best prices.",
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
            title: "Monte Albán Day Trip",
            description:
              "Is it actually worth a half-day? An honest verdict with transport costs.",
            href: "/monte-alban-day-trip",
            accentColor: "nopal",
          },
          {
            title: "4-Day Itinerary",
            description:
              "Got an extra day? Add an artisan village and a proper souvenir morning.",
            href: "/oaxaca-city-4-day-itinerary",
            accentColor: "barro",
          },
          {
            title: "Budget Guide",
            description:
              "Realistic daily costs for 2026 across three budget tiers.",
            href: "/oaxaca-budget-guide",
            accentColor: "mezcal",
          },
        ]}
      />
    </>
  );
}
