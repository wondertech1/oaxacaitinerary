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
    question: "Is 5 days the ideal amount for Oaxaca?",
    answer:
      "Yes — we consider it the sweet spot. You get the full city experience (markets, food, museums, neighborhoods), Monte Albán, AND the Valles Centrales loop (Mitla, Hierve el Agua, Tule tree, mezcal distillery). You won't feel rushed, and you won't run out of things to do.",
  },
  {
    question: "Can I do the Valles Centrales loop by colectivo?",
    answer:
      "Possible but difficult. Colectivos run to individual destinations but connecting them in a loop requires waiting and luck. The easiest option is a shared tour (400-600 MXN/person) or a private driver (1,200-1,800 MXN for the car). A private driver gives you flexibility to spend more time at Hierve el Agua.",
  },
  {
    question: "How much does the Day 5 loop cost?",
    answer:
      "Shared tour: 400-600 MXN per person (includes transport, not entries). DIY by colectivo: 200-250 MXN in transport. Entry fees: Mitla 90 MXN, Hierve el Agua 50 MXN. Tule tree 10 MXN. Mezcal tastings at distilleries are usually free. Total: 350-750 MXN depending on transport choice.",
  },
  {
    question: "Is Hierve el Agua worth the bumpy road?",
    answer:
      "Yes — with caveats. The petrified waterfalls are unlike anything else in Mexico, and the natural infinity pools look straight out over the valley floor hundreds of meters below. But the road is rough (45 min unpaved), it gets crowded by noon, and the pools are cold. Go early, bring a swimsuit, and set expectations. It's worth it once.",
  },
  {
    question: "What's the difference between 4 and 5 days?",
    answer:
      "Day 5 is the Valles Centrales loop — the full circuit through Oaxaca's valley towns. You see Mitla's unique geometric mosaics, swim in natural infinity pools at Hierve el Agua, visit the world's widest tree at El Tule, and tour a mezcal distillery. It transforms the trip from 'Oaxaca City' to 'Oaxaca region.'",
  },
];

export default function FiveDayItineraryPage() {
  const heroImage = getGuideImage("/oaxaca-5-day-itinerary");

  return (
    <>
      <GuideHero
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
        breadcrumbLabel="5-Day Itinerary"
        kicker="5-Day Itinerary"
        kickerColor="text-nopal"
        title="5 Days in Oaxaca: The Ideal Trip"
        subtitle="Our recommended duration. Four days in the city — markets, mezcal, mole, Monte Albán — plus a full day exploring the valley: Mitla's geometric ruins, Hierve el Agua's petrified waterfalls, and a mezcal distillery."
        pills={[
          "5 Days",
          "~$50–70/day",
          "Pace: Perfect",
          "Best for: Deep Divers, Foodies",
          "★ Recommended",
        ]}
        readTime="16 min read"
      />

      <ZapotecDivider className="bg-lana" />

      {/* Recommended callout */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="bg-nopal/[0.06] border border-nopal/20 rounded-[6px] p-4 md:p-5 flex items-start gap-3">
              <span className="text-nopal text-lg mt-0.5">★</span>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-nopal">
                  Our recommended duration
                </span>
                <p className="mt-1 text-sm text-copal/60 leading-relaxed">
                  Five days gives you the city at a comfortable pace{" "}
                  <em>plus</em> the Valles Centrales day trip that transforms
                  Oaxaca from a city visit into a regional experience. If
                  you&apos;re choosing between 4 and 5 days, add the extra day.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Days 1 through 4 follow our{" "}
                <Link
                  href="/oaxaca-city-4-day-itinerary"
                  className="text-barro underline"
                >
                  4-day itinerary
                </Link>{" "}
                — arrival, markets, Monte Albán, artisan villages, and the food
                that makes Oaxaca the culinary capital of Mexico. Day 5 takes
                you out of the city on the Valles Centrales loop: a circuit
                through Oaxaca&apos;s surrounding valley that hits four
                essential stops.
              </p>
              <p className="text-sm text-copal/50 italic">
                Short on time?{" "}
                <Link
                  href="/oaxaca-city-4-day-itinerary"
                  className="text-barro underline"
                >
                  The 4-day itinerary
                </Link>{" "}
                covers the city beautifully. Want to go deeper?{" "}
                <Link
                  href="/oaxaca-7-day-itinerary"
                  className="text-barro underline"
                >
                  The 7-day version
                </Link>{" "}
                adds Sierra Norte cloud forests and artisan village deep-dives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Days 1-4 Summary */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Days 1–4
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The City Days
            </h2>
            <p className="mt-3 text-sm text-copal/50">
              Full details in our{" "}
              <Link
                href="/oaxaca-city-4-day-itinerary"
                className="text-barro underline"
              >
                4-day itinerary →
              </Link>
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            {[
              {
                day: "01",
                title: "Arrive, Settle & First Tastes",
                summary:
                  "Airport to Centro, Zócalo orientation, Santo Domingo, Andador Alcalá walk, first tlayuda at Tlayudas Libres, first mezcal at In Situ.",
              },
              {
                day: "02",
                title: "The Legendary Market & Mole",
                summary:
                  "Mercado 20 de Noviembre smoke grill breakfast, IAGO and Textile Museum, Jalatlaco neighborhood, mole negro dinner at Los Danzantes.",
              },
              {
                day: "03",
                title: "Monte Albán & Black Pottery",
                summary:
                  "Morning at the Zapotec ruins (80 MXN colectivo, 90 MXN entry), afternoon at San Bartolo Coyotepec for barro negro pottery at village prices.",
              },
              {
                day: "04",
                title: "Souvenirs & Last Coffee",
                summary:
                  "Mercado Benito Juárez for mole paste, mezcal, and chocolate. Café Brújula pour-over. Final Centro walk in the perfect 10 AM light.",
              },
            ].map((day, i) => (
              <ScrollReveal key={day.day} delay={0.05 + i * 0.04}>
                <div className="flex gap-4 items-start">
                  <span className="text-3xl font-heading font-bold text-copal/[0.08] leading-none shrink-0 w-10">
                    {day.day}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-copal">
                      {day.title}
                    </h3>
                    <p className="mt-1 text-sm text-copal/55 leading-relaxed">
                      {day.summary}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Day 5 — The Valley Loop */}
      <section id="day-5" className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                05
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Five
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  The Valles Centrales Loop: Ruins, Waterfalls, and Mezcal
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Route overview */}
          <ScrollReveal delay={0.05}>
            <div className="mb-8 bg-lana-dark rounded-[6px] border border-copal/[0.06] p-4 md:p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mezcal">
                Day 5 Route
              </span>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-copal/60">
                <span className="font-heading font-bold text-copal">Oaxaca</span>
                <span className="text-copal/20">→</span>
                <span>El Tule</span>
                <span className="text-copal/20">→</span>
                <span>Mitla</span>
                <span className="text-copal/20">→</span>
                <span>Hierve el Agua</span>
                <span className="text-copal/20">→</span>
                <span>Santiago Matatlán</span>
                <span className="text-copal/20">→</span>
                <span className="font-heading font-bold text-copal">Oaxaca</span>
              </div>
              <p className="mt-2 text-xs text-copal/40">
                ~5–6 hours driving total. Leave by 8 AM, back by 6–7 PM.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="8:00 AM – 8:30 AM" title="Árbol del Tule">
              <p>
                <strong>First stop, 20 minutes from Oaxaca.</strong> The Árbol
                del Tule is a Montezuma cypress with the{" "}
                <strong>widest trunk of any tree on Earth</strong> — 14 meters
                in diameter, over 2,000 years old. It&apos;s in the churchyard
                of Santa María del Tule.
              </p>
              <p>
                <strong>Entry: 10 MXN</strong>. Spend 15 minutes here. It&apos;s
                a quick stop but worth it. The trunk is wider than the church
                behind it — your brain can&apos;t process the scale.
              </p>
              <TipCard type="tip">
                <strong>Photo tip:</strong> The tree is hard to photograph due
                to its size. Stand at the far corner of the churchyard for the
                best perspective. Morning light is ideal.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="9:30 AM – 11:30 AM" title="Mitla">
              <p>
                <strong>Mitla is the anti-Monte Albán.</strong> Where Monte
                Albán impresses with scale, Mitla impresses with{" "}
                <em>detail</em>. The geometric stone mosaics (grecas) are
                unique in Mesoamerica — thousands of individually cut stone
                pieces fitted together without mortar. It&apos;s like Zapotec
                pixel art.
              </p>
              <p>
                <strong>Entry: 90 MXN</strong>. Budget 1.5 hours. The Hall of
                the Columns is the highlight — look up at the lintels and down
                at the floor patterns.
              </p>
              <TipCard type="money">
                <strong>Lunch near Mitla:</strong> The restaurants along the
                main road serve excellent comida corrida for{" "}
                <strong>60–80 MXN</strong>. Better food than anything
                you&apos;ll find at Hierve el Agua.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="12:30 PM – 3:00 PM" title="Hierve el Agua">
              <p>
                <strong>The petrified waterfalls.</strong> Mineral-laden water
                has cascaded over cliffs for thousands of years, leaving behind
                rock formations that look exactly like frozen waterfalls. At
                the top: natural infinity pools overlooking the valley. The
                views stretch across the entire valley to the Sierra Norte mountains.
              </p>
              <p>
                <strong>Entry: 50 MXN</strong>. The road is rough — 45 minutes
                of unpaved switchbacks. The pools are cold but swimmable. Bring
                a swimsuit and towel.
              </p>
              <TipCard type="tip">
                <strong>Go early.</strong> By 1 PM the pools are packed and the
                parking lot is chaos. The trail down to the base of the
                &quot;waterfalls&quot; takes 20 minutes — worth it for photos.
              </TipCard>
              <TipCard type="skip">
                <strong>Skip the food stalls</strong> at Hierve el Agua —
                overpriced and mediocre. Eat at Mitla before or Santiago
                Matatlán after.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <TimeBlock
              time="4:00 PM – 5:30 PM"
              title="Santiago Matatlán — World Capital of Mezcal"
            >
              <p>
                <strong>The road from Hierve el Agua passes through Santiago
                Matatlán</strong> — the self-proclaimed &quot;world capital of
                mezcal,&quot; and they&apos;re not wrong. Dozens of palenques
                (distilleries) line the highway, most offering free tastings.
              </p>
              <p>
                <strong>Stop at any palenque with smoke rising.</strong>{" "}
                That means they&apos;re actively roasting agave. You&apos;ll
                see the full process: roasting in underground pits, crushing
                with a stone tahona, fermenting in wooden vats, and distilling
                in clay or copper stills.
              </p>
              <p>
                <strong>Buying mezcal here:</strong> Artesanal bottles start at{" "}
                <strong>150–200 MXN</strong>. Ancestral (clay-distilled) starts
                at <strong>250–400 MXN</strong>. These are 30–50% cheaper than
                Oaxaca City shops.
              </p>
              <TipCard type="tip">
                <strong>What to taste:</strong> Start with espadín (smooth,
                approachable), then try tobalá (wild agave, complex floral
                notes). Skip arroqueño if you&apos;re new — it&apos;s intense.{" "}
                <Link
                  href="/oaxaca-mezcal-guide"
                  className="text-barro underline"
                >
                  Full mezcal guide →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <TimeBlock time="6:30 PM – Late" title="Return & Farewell Dinner">
              <p>
                Back in Oaxaca by 6:30–7:00 PM. For your last night, consider a
                place you haven&apos;t tried yet:
              </p>
              <ul className="list-none space-y-1.5 ml-0">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Criollo</strong> — Contemporary Oaxacan, prix fixe menu
                  (600–900 MXN). Intimate, reservation-only.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Expendio Tradición</strong> — Mezcal bar with excellent
                  Oaxacan snacks. The perfect final mezcal.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Street tacos</strong> — The taco stands on Calle
                  Porfirio Díaz light up after 7 PM. Tacos de cecina:{" "}
                  <strong>15 MXN each</strong>.
                </li>
              </ul>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      <ItineraryPicker currentDays={5} />

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
                text: "Budget ~$50-70 USD/day. The valley loop day costs 350-750 MXN in transport + entries depending on shared vs private. ATMs in Oaxaca City — none in valley towns.",
              },
              {
                title: "Valley Transport",
                color: "border-nopal",
                text: <>Shared tour: 400-600 MXN/person. Private driver: 1,200-1,800 MXN/car (split with others). Colectivos: cheap but slow and no loop. Book at your hotel or ask us. <Link href="/oaxaca-day-trips" className="text-barro underline">Day trips guide →</Link></>,
              },
              {
                title: "Packing for Day 5",
                color: "border-anil",
                text: "Swimsuit + towel for Hierve el Agua. Sunscreen and hat. Water (buy a big bottle before leaving). Cash in MXN for entries and mezcal. Comfortable shoes for ruins.",
              },
              {
                title: "Mezcal Buying",
                color: "border-barro",
                text: "Buy at distilleries (cheapest), not city shops. Ask for artesanal or ancestral. Espadín is the safe starting choice. Avoid anything labeled 'industrial.' Bottles pack well in checked luggage.",
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
            title: "Day Trips Guide",
            description:
              "Hierve el Agua, Mitla, El Tule, and textile villages — with honest verdicts.",
            href: "/oaxaca-day-trips",
            accentColor: "nopal",
          },
          {
            title: "Mezcal Guide",
            description:
              "What to drink, where to drink it, and which distilleries to visit.",
            href: "/oaxaca-mezcal-guide",
            accentColor: "mezcal",
          },
          {
            title: "7-Day Itinerary",
            description:
              "Want to go deeper? Add Sierra Norte hiking and artisan village immersions.",
            href: "/oaxaca-7-day-itinerary",
            accentColor: "barro",
          },
        ]}
      />
    </>
  );
}
