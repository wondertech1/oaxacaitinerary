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
    question: "Can you really see Oaxaca in one day?",
    answer:
      "You can experience the highlights — a market breakfast, Santo Domingo, a neighborhood walk, a tlayuda, and mezcal. You won't go deep, but you'll understand why people fall in love with this city. Most visitors who come for one day start planning a return trip.",
  },
  {
    question: "What should I prioritize with only one day?",
    answer:
      "Food. Oaxaca is first and foremost a food city. If you only do one thing, eat at Mercado 20 de Noviembre in the morning and have a tlayuda for dinner. Skip museums if time is tight — the city itself is the experience.",
  },
  {
    question: "Is it worth visiting Monte Albán with only one day?",
    answer:
      "No. Monte Albán takes a minimum of 3-4 hours including transport. With one day, you'd spend half your time on ruins and miss the best of the city — the food, the markets, the neighborhoods. Save it for a longer trip.",
  },
  {
    question: "How do I get from the airport to Centro quickly?",
    answer:
      "Official taxi counter inside the terminal. Fixed rate: 200-250 MXN (~$12-14 USD), 15-20 minute ride. Don't negotiate with drivers outside. DiDi (Mexican Uber) also works but may take longer to arrive at the airport.",
  },
  {
    question: "Where should I eat if I can only have one meal in Oaxaca?",
    answer:
      "Mercado 20 de Noviembre for the full experience — smoke-grilled tasajo, handmade tortillas, and hot chocolate. It's the single most Oaxacan meal you can have. Go before 11 AM to avoid the worst crowds.",
  },
];

export default function OneDayItineraryPage() {
  const heroImage = getGuideImage("/oaxaca-1-day-itinerary");

  return (
    <>
      <GuideHero
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
        breadcrumbLabel="1-Day Itinerary"
        kicker="1-Day Itinerary"
        title="1 Day in Oaxaca City: The Essential Sprint"
        subtitle="You have exactly one day. No time for the wrong restaurant, the overhyped attraction, or the tourist-trap mezcal bar. Here's how to experience Oaxaca — not just see it."
        pills={[
          "1 Day",
          "~$25–35 budget",
          "Pace: Fast",
          "Best for: Day-trippers, Layovers",
        ]}
        readTime="6 min read"
      />

      <ZapotecDivider className="bg-lana" />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                One day in Oaxaca is a sprint — but a glorious one. You&apos;ll
                eat smoke-grilled meat at 9 AM, walk through 400 years of
                Baroque gold leaf by noon, and sip mezcal in a dimly lit bar
                by evening. It&apos;s not enough time. It never is. But
                it&apos;s enough to understand what makes this city special.
              </p>
              <p>
                This itinerary assumes you arrive by morning. If you&apos;re
                arriving in the afternoon, flip the order — start with Jalatlaco
                and end at the market the next morning before you leave.
              </p>
              <p className="text-sm text-copal/50 italic">
                Got more time?{" "}
                <Link
                  href="/oaxaca-2-day-itinerary"
                  className="text-barro underline"
                >
                  The 2-day itinerary
                </Link>{" "}
                adds museums, a mole dinner, and the rhythm that Oaxaca
                deserves. The{" "}
                <Link
                  href="/oaxaca-city-4-day-itinerary"
                  className="text-barro underline"
                >
                  4-day version
                </Link>{" "}
                is the real sweet spot.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hour-by-hour timeline header */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-barro/30 via-mezcal/20 to-anil/30" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                8 AM → 9 PM &middot; One Day
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-barro/30 via-mezcal/20 to-anil/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Morning */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl md:text-6xl font-heading font-bold text-barro/[0.10] leading-none">
                AM
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Morning
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Markets, Smoke, and 400 Years of Gold Leaf
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="8:00 AM – 10:30 AM" title="Mercado 20 de Noviembre">
              <p>
                Start here. Not at the Zócalo, not at a café —{" "}
                <strong>at the market</strong>. Go straight to the Pasillo de
                Humo (smoke corridor) in the back. Buy 200g of tasajo (dried
                beef, <strong>~60 MXN</strong>) and chorizo (
                <strong>~50 MXN</strong>) from any vendor. Sit at the communal
                grill. They&apos;ll cook it in front of you.
              </p>
              <p>
                Buy tortillas and salsa from the women walking between tables (
                <strong>20 MXN</strong>). Cross the street for Mayordomo hot
                chocolate (<strong>30 MXN</strong>).
              </p>
              <TipCard type="money">
                <strong>Total breakfast:</strong> ~160 MXN per person (~$9 USD).
                This is the single most Oaxacan meal you can have.{" "}
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
            <TimeBlock
              time="10:30 AM – 12:30 PM"
              title="Santo Domingo & the Golden Walk"
            >
              <p>
                Walk north to{" "}
                <strong>Templo de Santo Domingo de Guzmán</strong>. Free entry.
                The interior is 400 years of Baroque gold leaf — genuinely
                one of the most beautiful churches in Mexico. Spend 20 minutes
                inside.
              </p>
              <p>
                Then walk the entire{" "}
                <strong>Andador Turístico (Macedonio Alcalá)</strong> — the
                pedestrian street from Santo Domingo to the Zócalo. Look at
                everything, buy nothing. Prices here are 30–50% higher than the
                markets.
              </p>
              <p>
                <strong>At the Zócalo:</strong> Sit for 10 minutes. Watch the
                city move. This square is the compass point for everything in
                Oaxaca.
              </p>
              <TipCard type="skip">
                <strong>Skip:</strong> The Jardín Etnobotánico requires a
                guided tour on a fixed schedule. Great if you have 2+ days, but
                too time-consuming for a one-day sprint.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Afternoon */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl md:text-6xl font-heading font-bold text-mezcal/[0.10] leading-none">
                PM
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Afternoon
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Museums, Coffee, and the Colorful Neighborhood
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="12:30 PM – 2:00 PM" title="Quick Culture Hit">
              <p>
                Pick <strong>one museum</strong> — both are free and close to
                the Zócalo:
              </p>
              <ul className="list-none space-y-1.5 ml-0">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>IAGO</strong> (Instituto de Artes Gráficas): World-class
                  contemporary art in a colonial building. 30 minutes.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Museo Textil de Oaxaca:</strong> Small, exceptional.
                  Backstrap loom demonstrations. 20 minutes.
                </li>
              </ul>
              <TipCard type="tip">
                <strong>If you pick textiles:</strong> It&apos;ll make buying
                souvenirs later much more meaningful — you&apos;ll understand
                the craft and spot machine-made fakes instantly.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="2:00 PM – 4:30 PM" title="Jalatlaco & Coffee">
              <p>
                Walk 5 blocks east to{" "}
                <strong>Barrio de Jalatlaco</strong> — the colorful neighborhood
                with all the Instagram photos. The light between 2–4 PM is
                perfect for the painted walls and flower-covered streets.
              </p>
              <p>
                Get a coffee at <strong>Café Brújula</strong> — best in the
                city. Pluma Hidalgo pour-over: <strong>50 MXN</strong>. Or try{" "}
                <strong>Cafeología</strong> (Calle Reforma 401B) for
                single-origin Oaxacan beans (<strong>45 MXN</strong>).
              </p>
              <p>
                On your way back, stop at{" "}
                <strong>Mercado Benito Juárez</strong> for souvenirs: mole
                paste (<strong>80–120 MXN/kg</strong>), chocolate (
                <strong>40–60 MXN</strong>), or a small bag of chapulines (
                <strong>20 MXN</strong>).
              </p>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Evening */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl md:text-6xl font-heading font-bold text-anil/[0.10] leading-none">
                EVE
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Evening
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Your First Tlayuda and Your First Real Mezcal
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="5:30 PM – 7:30 PM" title="Tlayuda Dinner">
              <p>
                <strong>Tlayudas Libres</strong> (Calle Libres 212): Order a
                tlayuda de tasajo with quesillo and black beans.{" "}
                <strong>80–100 MXN</strong>. Wood-fired, enormous — share one
                or be ambitious.
              </p>
              <p>
                This is <em>the</em> dish of Oaxaca. A crispy tortilla the size
                of a pizza, covered in asiento (unrefined pork lard), beans,
                Oaxacan cheese, and grilled meat. If you eat one thing in
                Oaxaca, make it this.
              </p>
              <TipCard type="tip">
                <strong>Alternative:</strong> If Tlayudas Libres is closed
                (they sometimes are), try the tlayuda vendors in the Mercado 20
                de Noviembre parking lot — they fire up around 6 PM.{" "}
                <Link
                  href="/oaxaca-street-food-guide"
                  className="text-barro underline"
                >
                  More street food picks →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="7:30 PM – 9:00 PM" title="Mezcal & Goodbye">
              <p>
                <strong>In Situ Mezcalería</strong> (Morelos 511): Order an
                espadín joven (young agave) to start.{" "}
                <strong>60 MXN per pour</strong>. Don&apos;t order cocktails at
                a mezcal bar. Sip it neat — the staff will guide you if you
                ask.
              </p>
              <p>
                After your pour, walk to the{" "}
                <strong>Zócalo</strong> one last time. Street musicians,
                families, vendors selling chapulines seasoned with chile and
                lime. Try them — they taste like smoky lime chips.{" "}
                <strong>20 MXN</strong> for a small bag.
              </p>
              <TipCard type="skip">
                <strong>Skip:</strong> Mezcalería Los Amantes on Alcalá.
                Overpriced and full of tour groups. In Situ is where locals
                actually drink.{" "}
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

      <ZapotecDivider className="bg-lana" />

      <ItineraryPicker currentDays={1} />

      {/* Essential Tips */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Essential Info
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Quick reference
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Money",
                color: "border-mezcal",
                text: "Bring cash — markets don't take cards. ATMs at Banamex and BBVA are reliable. Tip 10-15% at restaurants. 1 USD ≈ 18 MXN.",
              },
              {
                title: "Getting There",
                color: "border-nopal",
                text: "OAX airport to Centro: 200-250 MXN by official taxi (15-20 min). From CDMX: 1-hour flight or 6-hour ADO bus (700-900 MXN). DiDi works in the city.",
              },
              {
                title: "Spanish Essentials",
                color: "border-anil",
                text: "¿Cuánto cuesta? (How much?) • Una tlayuda por favor • La cuenta (the check) • ¿Dónde está...? (Where is...?) • Gracias, muy amable",
              },
              {
                title: "One-Day Priorities",
                color: "border-barro",
                text: "If you're running out of time, cut museums first. The market, the tlayuda, and the mezcal are non-negotiable. Jalatlaco is beautiful but skippable if pressed.",
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
            title: "Street Food Guide",
            description:
              "12 things to eat and exactly where to find them.",
            href: "/oaxaca-street-food-guide",
            accentColor: "barro",
          },
          {
            title: "Mercado 20 de Noviembre",
            description:
              "Stall-by-stall guide to Oaxaca's legendary smoke-filled market.",
            href: "/mercado-20-de-noviembre-guide",
            accentColor: "nopal",
          },
          {
            title: "2-Day Itinerary",
            description:
              "Got another day? Add museums, mole, and the Jalatlaco rhythm.",
            href: "/oaxaca-2-day-itinerary",
            accentColor: "anil",
          },
        ]}
      />
    </>
  );
}
