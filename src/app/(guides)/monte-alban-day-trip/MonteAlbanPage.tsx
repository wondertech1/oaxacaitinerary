"use client";

import Link from "next/link";
import { Clock, MapPin, DollarSign } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

function VerdictBox({
  verdict,
  title,
  children,
}: {
  verdict: "worth-it" | "skip-it" | "depends";
  title: string;
  children: React.ReactNode;
}) {
  const config = {
    "worth-it": {
      border: "border-l-nopal",
      badge: "bg-nopal/10 text-nopal",
      label: "Worth It",
    },
    "skip-it": {
      border: "border-l-barro",
      badge: "bg-barro/10 text-barro",
      label: "Skip It",
    },
    depends: {
      border: "border-l-mezcal",
      badge: "bg-mezcal/10 text-mezcal",
      label: "It Depends",
    },
  };
  const c = config[verdict];

  return (
    <div
      className={`border-l-4 ${c.border} rounded-[6px] p-5 bg-lana my-4`}
    >
      <span
        className={`inline-block text-[10px] font-mono uppercase tracking-wider ${c.badge} rounded-full px-2.5 py-0.5 mb-3`}
      >
        {c.label}
      </span>
      <h3 className="font-heading text-lg font-bold text-copal">{title}</h3>
      <div className="mt-2 text-sm text-copal/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Is Monte Albán worth visiting?",
    answer:
      "Yes — if you have any interest in history or archaeology. It's a UNESCO World Heritage Site and one of the earliest planned cities in Mesoamerica. The Zapotecs flattened a mountain ridge to build a civic center for 25,000 people. The scale alone is worth the trip. If ruins aren't your thing, though, you'll enjoy an afternoon in the markets more.",
  },
  {
    question: "How do you get to Monte Albán from Oaxaca City?",
    answer:
      "Three options: a colectivo from Hotel Rivera del Ángel on Calle Mina 518 (40 MXN each way, leaves when full), a taxi or DiDi from Centro (150–200 MXN one way), or an organized tour booked on Macedonio Alcalá (250–400 MXN including guide). The cheapest combo is colectivo up, split a taxi back with someone you meet at the site.",
  },
  {
    question: "How much time do you need at Monte Albán?",
    answer:
      "Plan for 2–3 hours at the site itself. Add 30–40 minutes each way for transport. A comfortable half-day trip leaves Oaxaca around 9 AM and returns by 1 PM, giving you the afternoon free for markets or mezcal tastings.",
  },
  {
    question: "What is the best time to visit Monte Albán?",
    answer:
      "Arrive by 9 AM. Morning light is better for photos, temperatures are cooler, and tour-bus crowds don't arrive until 10–11 AM. The site is open 8 AM to 5 PM daily, with last entry at 4:30 PM. Avoid midday in summer — the exposed plaza becomes punishingly hot.",
  },
];

export default function MonteAlbanPage() {
  const heroImage = getGuideImage("/monte-alban-day-trip");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Monte Albán"
        kicker="Day Trip"
        kickerColor="text-nopal"
        title="Monte Albán: Is It Actually Worth a Half-Day?"
        subtitle="The honest answer depends on what kind of traveler you are."
        pills={["Half-Day Trip", "90 MXN Entry", "30 Min from Centro"]}
        readTime="6 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="bg-lana" />

      {/* Section 1: The Honest Answer */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              The Honest Answer
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Should you actually go?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <VerdictBox verdict="worth-it" title="Go if...">
              <p>
                You&apos;re interested in pre-Columbian history, love open-air
                archaeological sites, or want to understand why the Zapotecs
                chose this mountaintop 2,500 years ago. The scale of the main
                plaza alone is worth the trip &mdash; it&apos;s a <a href="https://whc.unesco.org/en/list/415" target="_blank" rel="noopener" className="text-barro underline">UNESCO World Heritage Site</a> and one of the
                earliest planned cities in Mesoamerica. The Zapotecs literally
                flattened a mountain ridge to build a civic-ceremonial center
                for 25,000 people. That engineering feat is staggering when
                you&apos;re standing in the middle of it.
              </p>
            </VerdictBox>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <VerdictBox verdict="skip-it" title="Skip it if...">
              <p>
                You&apos;ve already visited Teotihuac&aacute;n or
                Chich&eacute;n Itz&aacute; and feel like &ldquo;if you&apos;ve
                seen one ruin, you&apos;ve seen them all.&rdquo; Monte
                Alb&aacute;n is less restored and less dramatic than those
                sites. There are no towering pyramids, no jungle canopy. If
                ruins aren&apos;t your thing, spend the half-day eating your
                way through the markets instead &mdash; you&apos;ll have a
                better time.
              </p>
            </VerdictBox>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <VerdictBox verdict="depends" title="Weigh it carefully if...">
              <p>
                You have 3 days or fewer in Oaxaca. The half-day at Monte
                Alb&aacute;n means you&apos;re giving up an afternoon of
                markets, mezcal tastings, or neighborhood walking. If you have
                4+ days, go &mdash; it fits comfortably on Day 2 or 3. If you
                have 3, weigh it against what you&apos;d miss. The food scene,
                the textile villages, the mezcal palenques &mdash; those are
                things you can&apos;t do anywhere else. Monte Alb&aacute;n,
                while unique, is one of many excellent archaeological sites in
                Mexico.
              </p>
            </VerdictBox>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: How to Get There */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Getting There
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              How to get there (3 options)
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Colectivo */}
              <div className="relative bg-lana border-t-4 border-nopal rounded-[6px] p-5 overflow-hidden">
                <div className="absolute inset-0 weave-diagonal opacity-[0.02]" />
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-nopal/10 text-nopal rounded-full px-2.5 py-0.5 mb-3">
                    Cheapest
                  </span>
                  <h3 className="font-heading text-lg font-bold text-copal">
                    Colectivo
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-copal/70">
                    <div className="flex items-center gap-2">
                      <DollarSign size={13} className="text-mezcal shrink-0" />
                      <span>40 MXN each way (80 MXN round trip)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={13} className="text-anil shrink-0 mt-0.5" />
                      <span>
                        Hotel Rivera del Ángel, Calle Mina 518
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={13} className="text-anil shrink-0 mt-0.5" />
                      <span>
                        Leaves when full (every 20&ndash;30 min)
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-copal/50 border-t border-copal/[0.06] pt-3">
                    Shared van, 30&ndash;40 min ride. Tell the driver
                    &ldquo;Monte Alb&aacute;n&rdquo; &mdash; they&apos;ll
                    drop you at the gate. Last return around 5 PM.
                  </p>
                </div>
              </div>

              {/* Taxi / DiDi */}
              <div className="relative bg-lana border-t-4 border-mezcal rounded-[6px] p-5 overflow-hidden">
                <div className="absolute inset-0 weave-diagonal opacity-[0.02]" />
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-mezcal/10 text-mezcal rounded-full px-2.5 py-0.5 mb-3">
                    Most Flexible
                  </span>
                  <h3 className="font-heading text-lg font-bold text-copal">
                    Taxi / DiDi
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-copal/70">
                    <div className="flex items-center gap-2">
                      <DollarSign size={13} className="text-mezcal shrink-0" />
                      <span>150&ndash;200 MXN one way</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={13} className="text-anil shrink-0 mt-0.5" />
                      <span>Anywhere in Centro</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={13} className="text-anil shrink-0 mt-0.5" />
                      <span>On your schedule</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-copal/50 border-t border-copal/[0.06] pt-3">
                    Ask the driver to wait (add ~200 MXN for 2 hours). Or take a
                    colectivo up and taxi back. DiDi availability at the site is
                    unreliable &mdash; have cash for a taxi.
                  </p>
                </div>
              </div>

              {/* Organized Tour */}
              <div className="relative bg-lana border-t-4 border-anil rounded-[6px] p-5 overflow-hidden">
                <div className="absolute inset-0 weave-diagonal opacity-[0.02]" />
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-anil/10 text-anil rounded-full px-2.5 py-0.5 mb-3">
                    Guided
                  </span>
                  <h3 className="font-heading text-lg font-bold text-copal">
                    Organized Tour
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-copal/70">
                    <div className="flex items-center gap-2">
                      <DollarSign size={13} className="text-mezcal shrink-0" />
                      <span>250&ndash;400 MXN per person</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={13} className="text-anil shrink-0 mt-0.5" />
                      <span>Book on Macedonio Alcal&aacute;</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={13} className="text-anil shrink-0 mt-0.5" />
                      <span>Usually 9 AM &ndash; 1 PM</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-copal/50 border-t border-copal/[0.06] pt-3">
                    Includes transport + guide. The guide adds context you
                    won&apos;t get on your own, but you&apos;re on their
                    schedule and can&apos;t linger.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="money">
              The move: take the{" "}
              <Link href="/getting-around-oaxaca" className="text-barro underline">colectivo</Link>{" "}
              up (40 MXN), explore at your own
              pace, then split a taxi back with someone you meet at the site
              (100 MXN each). Total: 140 MXN vs 400 MXN for a tour.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: What to See */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              What to See
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              5-stop walking route
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-6">
            <ScrollReveal delay={0.05}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-nopal/10 text-nopal font-mono text-sm font-bold flex items-center justify-center">
                    1
                  </span>
                  <div className="w-px flex-1 bg-copal/[0.08] mt-2" />
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-lg font-bold text-copal">
                    Main Plaza (Gran Plaza)
                  </h3>
                  <p className="mt-1 text-sm text-copal/70 leading-relaxed">
                    The massive central platform is 300m long. Walk to the
                    center and stand still. You&apos;re looking at a city that
                    was home to 25,000 people 1,500 years ago. The scale is
                    what makes Monte Alb&aacute;n, not individual buildings.
                    No photographs capture it &mdash; you have to be there,
                    turning in a slow circle, to understand why the Zapotecs
                    leveled a mountaintop for this.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-nopal/10 text-nopal font-mono text-sm font-bold flex items-center justify-center">
                    2
                  </span>
                  <div className="w-px flex-1 bg-copal/[0.08] mt-2" />
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-lg font-bold text-copal">
                    Building J (The Observatory)
                  </h3>
                  <p className="mt-1 text-sm text-copal/70 leading-relaxed">
                    The arrow-shaped building at an odd angle to everything
                    else. Aligned with stars, not with the plaza grid. Scholars
                    still argue about exactly what it tracked. The carved stones
                    on the sides are conquest records &mdash; lists of cities
                    the Zapotecs defeated. It&apos;s the one structure that
                    makes you realize these weren&apos;t just builders, they
                    were astronomers and military strategists.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-nopal/10 text-nopal font-mono text-sm font-bold flex items-center justify-center">
                    3
                  </span>
                  <div className="w-px flex-1 bg-copal/[0.08] mt-2" />
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-lg font-bold text-copal">
                    The Danzantes
                  </h3>
                  <p className="mt-1 text-sm text-copal/70 leading-relaxed">
                    Stone carvings of contorted human figures. Originally
                    thought to be dancers (hence the name), now believed to
                    depict tortured or sacrificed captives. They&apos;re the
                    oldest thing at the site &mdash; 500 BCE. The gallery is
                    on the west side of the plaza. Look for the closed eyes and
                    open mouths &mdash; signs of death. Unsettling, powerful,
                    and completely unlike the sanitized version of
                    pre-Columbian history you get in textbooks.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-nopal/10 text-nopal font-mono text-sm font-bold flex items-center justify-center">
                    4
                  </span>
                  <div className="w-px flex-1 bg-copal/[0.08] mt-2" />
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-lg font-bold text-copal">
                    North Platform
                  </h3>
                  <p className="mt-1 text-sm text-copal/70 leading-relaxed">
                    The highest point on the site. Climb the steps for a
                    360&deg; panorama of the Oaxaca Valley. On a clear day you
                    can see the Sierra Norte to the north and the Sierra Madre
                    del Sur to the south. This is your{" "}
                    <Link href="/oaxaca-photography-spots" className="text-barro underline">photo spot</Link>
                    {" "}&mdash; the
                    one image that actually conveys the scale of Monte
                    Alb&aacute;n. Morning light is dramatically better than
                    afternoon.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-nopal/10 text-nopal font-mono text-sm font-bold flex items-center justify-center">
                    5
                  </span>
                </div>
                <div className="pb-2">
                  <h3 className="font-heading text-lg font-bold text-copal">
                    Tomb 104
                  </h3>
                  <p className="mt-1 text-sm text-copal/70 leading-relaxed">
                    One of the few accessible tombs with original painted
                    murals. The entrance is small and dimly lit. The paintings
                    depict a figure dressed as Cocijo, the Zapotec rain god.
                    Often missed because it&apos;s away from the main loop
                    &mdash; ask a guard to point you in the right direction.
                    The polychrome murals are remarkably well-preserved and
                    worth the short detour.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4: What to Skip */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              What to Skip
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Save your time
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6">
              <TipCard type="skip">
                Skip the site museum if you&apos;re short on time &mdash; the
                Museo de las Culturas de Oaxaca in Santo Domingo has better
                artifacts from Monte Alb&aacute;n anyway, and you&apos;ll
                probably visit it during your{" "}
                <Link
                  href="/oaxaca-city-4-day-itinerary"
                  className="underline underline-offset-2 text-barro hover:text-barro/80 transition-colors"
                >
                  4-day itinerary
                </Link>
                .
              </TipCard>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="skip">
              Skip the souvenir vendors outside the gate &mdash; same items are
              cheaper in Oaxaca City markets. Alebrijes, black pottery, woven
              textiles &mdash; you&apos;ll find all of it for 40&ndash;60% less
              at Mercado de Abastos or the artisan shops on Macedonio
              Alcal&aacute;.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Monte Albán vs Mitla */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Comparison
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Monte Alb&aacute;n vs. Mitla
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-sm text-copal/70 leading-relaxed space-y-4">
              <p>
                They&apos;re completely different experiences, so comparing them
                head-to-head is a bit misleading &mdash; but everyone asks, so
                here&apos;s the honest version.
              </p>
              <p>
                <strong className="text-copal">Monte Alb&aacute;n</strong> is a
                mountaintop fortress city. Massive scale, panoramic views of the
                entire Oaxaca Valley, and the raw power of a Zapotec political
                capital that controlled the region for centuries. The structures
                themselves are modest, but the engineering &mdash; leveling a
                mountain ridge, building a 300-meter plaza &mdash; is what
                stuns you.
              </p>
              <p>
                <strong className="text-copal">Mitla</strong> is a valley-floor
                temple complex with the finest stone mosaics (grecas) in
                Mesoamerica. Smaller, more intimate, architecturally more
                detailed. Mixtec-influenced rather than purely Zapotec. Where
                Monte Alb&aacute;n overwhelms with scale, Mitla captivates with
                craft &mdash; thousands of individually cut stone pieces fitted
                together without mortar to create geometric patterns that still
                look sharp after 1,000 years.
              </p>
              <p>
                If you have time for both, do Monte Alb&aacute;n first
                (morning) and{" "}
                <Link href="/oaxaca-day-trips" className="text-barro underline">Mitla as a separate half-day</Link>.
                {" "}If you only have
                time for one: Monte Alb&aacute;n for the &ldquo;wow&rdquo;
                factor, Mitla for the craft.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: Practical Info */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Practical Info
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Quick reference
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 bg-lana border border-copal/[0.06] rounded-[6px] p-5 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <DollarSign
                    size={14}
                    className="text-anil shrink-0 mt-0.5"
                  />
                  <div>
                    <strong className="text-copal">Entrance Fee</strong>
                    <p className="text-copal/60">
                      90 MXN, managed by <a href="https://www.inah.gob.mx" target="_blank" rel="noopener" className="text-barro underline">INAH</a>. Free on Sundays for Mexican residents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-anil shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-copal">Hours</strong>
                    <p className="text-copal/60">
                      8 AM &ndash; 5 PM daily. Last entry at 4:30 PM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-anil shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-copal">Best Time</strong>
                    <p className="text-copal/60">
                      Arrive by 9 AM to avoid heat and crowds. Morning light
                      is also better for photos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-anil shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-copal">What to Bring</strong>
                    <p className="text-copal/60">
                      Water (at least 1 liter), sunscreen, hat. There&apos;s
                      zero shade on the main plaza. A light rain jacket in
                      summer (June&ndash;Sept).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin size={14} className="text-anil shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-copal">Don&apos;t Bring</strong>
                    <p className="text-copal/60">
                      Drones (prohibited). Tripods need a separate permit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="skip">
              There are <strong>no food vendors or restaurants</strong> inside
              the archaeological zone. The small caf&eacute; near the entrance
              gate sells overpriced snacks and drinks, but nothing substantial.
              Eat a proper breakfast before you go and bring at least 1 liter
              of water per person &mdash; more in summer. The nearest real food
              is back in Oaxaca City.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TipCard type="tip">
              Wear shoes you can climb in. The North Platform stairs are steep
              and uneven. Sandals will slow you down &mdash; and on a hot day,
              the stone gets scorching.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <RelatedContent
        items={[
          {
            title: "4-Day Itinerary",
            description:
              "Full day-by-day plan including Monte Albán on Day 3.",
            href: "/oaxaca-city-4-day-itinerary",
            accentColor: "barro",
          },
          {
            title: "Getting Around",
            description:
              "Colectivos, taxis, and DiDi — how to move without a car.",
            href: "/getting-around-oaxaca",
            accentColor: "anil",
          },
          {
            title: "Budget Guide",
            description:
              "How Monte Albán fits into your daily budget.",
            href: "/oaxaca-budget-guide",
            accentColor: "mezcal",
          },
        ]}
      />
    </>
  );
}
