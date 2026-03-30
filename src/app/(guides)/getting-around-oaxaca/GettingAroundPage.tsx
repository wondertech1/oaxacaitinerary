"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

function TransportModeSection({
  mode,
  tagline,
  iconColor,
  letter,
  children,
}: {
  mode: string;
  tagline: string;
  iconColor: string;
  letter: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <ScrollReveal>
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-full ${iconColor} flex items-center justify-center shrink-0`}
          >
            <span className="text-white font-mono text-lg font-bold">
              {letter}
            </span>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-copal">
              {mode}
            </h2>
            <p className="text-sm text-copal/50 italic">{tagline}</p>
          </div>
        </div>
      </ScrollReveal>
      <div className="mt-6">{children}</div>
    </div>
  );
}

const faqs = [
  {
    question: "Do you need a car in Oaxaca?",
    answer:
      "No. Oaxaca City is compact and walkable, and colectivos, taxis, and DiDi cover everything else — including day trips to Monte Albán, Mitla, and Hierve el Agua. A rental car adds parking headaches with no real benefit.",
  },
  {
    question: "How much do taxis cost in Oaxaca?",
    answer:
      "Most trips within Centro cost 40–60 MXN. To the airport expect 200–250 MXN with DiDi or 300 MXN from the official airport taxi stand. Always agree on the price before getting in — taxis don't use meters.",
  },
  {
    question: "How do you get from Oaxaca airport to Centro?",
    answer:
      "The easiest option is the official airport taxi stand inside arrivals — it's a fixed 300 MXN to Centro. For the trip to the airport, use DiDi for 200–250 MXN. The airport is about 8 km south of the city center, a 20–30 minute drive.",
  },
];

export default function GettingAroundPage() {
  const heroImage = getGuideImage("/getting-around-oaxaca");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Getting Around"
        kicker="Transport"
        kickerColor="text-anil"
        title="Getting Around Oaxaca City Without a Car"
        subtitle="Walking, taxis, DiDi, and colectivos — everything you need to move around the city and to day trips."
        pills={["5 Transport Modes", "Costs Compared", "Day Trip Routes"]}
        readTime="7 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="bg-lana" />

      {/* Section 1: The Short Version */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Overview
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Short Version
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 text-sm text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca City&apos;s historic core is roughly 1.5 km across. You
                can walk from the Z&oacute;calo to Jalatlaco in 12 minutes, to
                Xochimilco in 15, and to the bus station in 20. For anything
                within Centro, Jalatlaco, or Xochimilco, walking is faster than
                waiting for a taxi. For longer trips &mdash; Monte Alb&aacute;n,
                Mitla, the airport &mdash; you&apos;ll use colectivos or taxis.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TipCard type="tip">
              Google Maps works well for walking directions in Oaxaca. For
              taxi/DiDi pricing, the apps give accurate estimates. For
              colectivos, ask locals &mdash; schedules are flexible and routes
              aren&apos;t on any app.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Walking */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <TransportModeSection
            mode="Walking"
            tagline="The default for everything in Centro"
            iconColor="bg-nopal"
            letter="W"
          >
            <ScrollReveal delay={0.05}>
              <div className="text-sm text-copal/70 leading-relaxed space-y-4">
                <p>
                  Walking is the default. The Centro Hist&oacute;rico is flat,
                  the sidewalks are mostly intact (watch for uneven cobblestones
                  at night), and everything is close together. Most travelers
                  walk 8&ndash;12 km/day in Oaxaca without trying.
                </p>
                <p>
                  The pedestrian-priority streets help &mdash; Macedonio
                  Alcal&aacute; from Santo Domingo to the Z&oacute;calo is
                  car-free and the best walk in the city. Garc&iacute;a Vigil is
                  semi-pedestrian and equally good.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 bg-lana border border-copal/[0.06] rounded-[6px] p-5">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-copal/40 mb-3">
                  Key Distances
                </h3>
                <div className="space-y-2 text-sm text-copal/70">
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <span>Z&oacute;calo to Mercado 20 de Noviembre</span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      3 min
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <span>Z&oacute;calo to Santo Domingo</span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      8 min
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <span>Z&oacute;calo to Jalatlaco</span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      12 min
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      Centro to Monte Alb&aacute;n parking{" "}
                      <span className="text-copal/40">
                        (no, don&apos;t walk this)
                      </span>
                    </span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      45 min uphill
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <TipCard type="skip">
                Don&apos;t walk to <Link href="/monte-alban-day-trip" className="text-barro underline">Monte Alb&aacute;n &rarr;</Link>. Yes, there&apos;s a
                path. No, it&apos;s not scenic &mdash; it follows the road,
                there&apos;s no sidewalk for parts of it, and the sun is brutal.
                Take a colectivo for 40 MXN.
              </TipCard>
            </ScrollReveal>
          </TransportModeSection>
        </div>
      </section>

      {/* Section 3: Taxis & DiDi */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <TransportModeSection
            mode="Taxis &amp; DiDi"
            tagline="When walking won&apos;t cut it"
            iconColor="bg-mezcal"
            letter="T"
          >
            <ScrollReveal delay={0.05}>
              <div className="text-sm text-copal/70 leading-relaxed space-y-4">
                <p>
                  Regular taxis are everywhere. They don&apos;t use meters
                  &mdash; negotiate the price before getting in. Most trips
                  within the city center cost 40&ndash;60 MXN. Taxi drivers in
                  Oaxaca are generally honest, but always agree on a price
                  first.
                </p>
                <p>
                  <a href="https://web.didiglobal.com" target="_blank" rel="noopener" className="text-barro underline">DiDi</a> (Mexico&apos;s version of Uber) works in Oaxaca and is
                  usually 20&ndash;30% cheaper than street taxis. The app shows
                  the price upfront. Pay with card or cash. Download it before
                  you arrive.
                </p>
                <p>
                  There&apos;s no Uber in Oaxaca &mdash; only DiDi. If you see
                  someone mention Uber, they mean DiDi.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 bg-lana-dark border border-copal/[0.06] rounded-[6px] p-5">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-copal/40 mb-3">
                  Common Routes &amp; Prices
                </h3>
                <div className="space-y-2 text-sm text-copal/70">
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <span>Centro to ADO bus station</span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      40&ndash;50 MXN
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <span>Centro to airport</span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      200&ndash;250 MXN
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <span>
                      Airport taxi{" "}
                      <span className="text-copal/40">(official stand)</span>
                    </span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      300 MXN fixed
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      Centro to Monte Alb&aacute;n{" "}
                      <span className="text-copal/40">(one way)</span>
                    </span>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      150&ndash;200 MXN
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <TipCard type="money">
                For airport trips, book a DiDi &mdash; it&apos;s 200&ndash;250
                MXN vs the fixed 300 MXN airport taxi. But for the return from
                the airport, DiDi drivers sometimes cancel because the airport
                queue is controlled. Use the official taxi stand for the ride
                into town.
              </TipCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TipCard type="skip">
                <strong>DiDi caveats:</strong> During peak hours (6&ndash;8 PM),
                expect 5&ndash;15 minute waits and occasional cancellations.
                DiDi works reliably within Centro, Jalatlaco, and Xochimilco
                &mdash; but outside the central tourist zone coverage drops fast.
                For day trips or outer neighborhoods, use a street taxi or
                colectivo instead. Also keep cash handy: card payments
                occasionally fail on the app.
              </TipCard>
            </ScrollReveal>
          </TransportModeSection>
        </div>
      </section>

      {/* Section 4: Colectivos */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <TransportModeSection
            mode="Colectivos"
            tagline="Shared minivans for day trips and beyond"
            iconColor="bg-barro"
            letter="C"
          >
            <ScrollReveal delay={0.05}>
              <div className="text-sm text-copal/70 leading-relaxed space-y-4">
                <p>
                  Shared minivans that run fixed routes. They&apos;re the
                  cheapest way to get around and the only practical option for{" "}
                  <Link href="/oaxaca-day-trips" className="text-barro underline">day trips &rarr;</Link> to Monte Alb&aacute;n, Mitla, Tule, Hierve el Agua,
                  and surrounding towns.
                </p>
                <p>
                  How they work: find the departure point (usually near a
                  market), wait for the van to fill up (or until the driver
                  decides to leave), pay in cash when you board or when you
                  arrive. There&apos;s no schedule &mdash; they leave when
                  they&apos;re full.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 bg-lana border border-copal/[0.06] rounded-[6px] p-5">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-copal/40 mb-3">
                  Key Routes
                </h3>
                <div className="space-y-2 text-sm text-copal/70">
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Monte Alb&aacute;n
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        Hotel Rivera del Ángel, Calle Mina 518 &middot; ~30 min
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      40 MXN
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Mitla
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        Same area &middot; ~1 hour
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      40 MXN
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To El Tule{" "}
                        <span className="text-copal/40">(the giant tree)</span>
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        Same area &middot; ~20 min
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      15 MXN
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Hierve el Agua
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        Colectivo to Mitla, then another colectivo or shared
                        taxi
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      varies
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Tlacolula{" "}
                        <span className="text-copal/40">(Sunday market)</span>
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        2a Clase bus station &middot; ~1 hour
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      40&ndash;50 MXN
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Etla{" "}
                        <span className="text-copal/40">(Wednesday market)</span>
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        2a Clase bus station &middot; ~30 min
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      20 MXN
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Ocotl&aacute;n{" "}
                        <span className="text-copal/40">(Friday market)</span>
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        2a Clase bus station &middot; ~1 hour
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      30 MXN
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <TipCard type="tip">
                Tell the driver your destination when you board. If the
                colectivo doesn&apos;t go there, they&apos;ll point you to the
                right one. Saying &ldquo;Monte Alb&aacute;n, por
                favor?&rdquo; with a questioning tone works perfectly.
              </TipCard>
            </ScrollReveal>
          </TransportModeSection>
        </div>
      </section>

      {/* Section 5: ADO Buses */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <TransportModeSection
            mode="ADO Buses"
            tagline="First-class intercity travel"
            iconColor="bg-anil"
            letter="B"
          >
            <ScrollReveal delay={0.05}>
              <div className="text-sm text-copal/70 leading-relaxed space-y-4">
                <p>
                  For intercity travel, <a href="https://www.ado.com.mx" target="_blank" rel="noopener" className="text-barro underline">ADO</a> is the standard. First-class buses
                  with A/C, reclining seats, and onboard bathrooms. Book online
                  at ado.com.mx or at the terminal on Calzada H&eacute;roes de
                  Chapultepec.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 bg-lana-dark border border-copal/[0.06] rounded-[6px] p-5">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-copal/40 mb-3">
                  Common Routes from Oaxaca
                </h3>
                <div className="space-y-2 text-sm text-copal/70">
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Mexico City
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        7&ndash;8 hours
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      500&ndash;900 MXN
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-copal/[0.06] pb-2">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Puebla
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        4&ndash;5 hours
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      400&ndash;600 MXN
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-copal/90 font-medium">
                        To Puerto Escondido{" "}
                        <span className="text-copal/40">(coast)</span>
                      </span>
                      <br />
                      <span className="text-xs text-copal/50">
                        7 hours (mountain road)
                      </span>
                    </div>
                    <span className="font-mono text-copal/50 shrink-0 ml-4">
                      350&ndash;500 MXN
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-4 text-sm text-copal/70 leading-relaxed">
                <p>
                  Buy tickets a day ahead for popular routes, especially Friday
                  evenings and Sunday afternoons. The terminal has a small
                  waiting area, a few food stalls, and okay Wi-Fi.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TipCard type="tip">
                Book ADO tickets online &mdash; the website occasionally offers
                20&ndash;30% discounts on off-peak departures. The
                &ldquo;OCC&rdquo; class is slightly cheaper than &ldquo;ADO
                GL&rdquo; and honestly just as comfortable.
              </TipCard>
            </ScrollReveal>
          </TransportModeSection>
        </div>
      </section>

      {/* Section 6: Airport Info */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Airport
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Airport Info
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 text-sm text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca&apos;s airport (OAX / Xoxocotl&aacute;n) is 8 km south
                of Centro. 20&ndash;30 min drive depending on traffic.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-lana border border-copal/[0.06] rounded-[6px] p-5">
                <h3 className="font-heading text-base font-bold text-copal">
                  Getting There
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-copal/70">
                  <li className="flex items-start gap-2">
                    <span className="text-anil mt-0.5">&bull;</span>
                    DiDi: 200&ndash;250 MXN
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-anil mt-0.5">&bull;</span>
                    Airport taxi from hotel (your hotel can arrange):
                    250&ndash;300 MXN
                  </li>
                </ul>
              </div>

              <div className="bg-lana border border-copal/[0.06] rounded-[6px] p-5">
                <h3 className="font-heading text-base font-bold text-copal">
                  Getting Back
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-copal/70">
                  <li className="flex items-start gap-2">
                    <span className="text-anil mt-0.5">&bull;</span>
                    Official airport taxi stand inside arrivals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-anil mt-0.5">&bull;</span>
                    Fixed price: 300 MXN to Centro
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-anil mt-0.5">&bull;</span>
                    Booth is on the right after you exit customs
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TipCard type="money">
              Don&apos;t exchange money at the airport cambio &mdash; the rate
              is 10&ndash;15% worse than ATMs. Use the Banorte ATM in the
              arrivals hall to withdraw pesos directly. See our{" "}
              <Link href="/oaxaca-safety-tips" className="text-barro underline">safety tips &rarr;</Link> for more on ATMs and SIM cards.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Don't Bother With */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Skip These
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Don&apos;t Bother With
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 space-y-3">
              {[
                {
                  name: "Rental cars",
                  why: "Parking in Centro is a nightmare, streets are narrow, and you don\u2019t need a car for anything in the city. For day trips, colectivos and taxis are cheaper and easier.",
                },
                {
                  name: "City buses",
                  why: "They exist but routes are unmarked, confusing for visitors, and colectivos go to the same places for the same price with less confusion.",
                },
                {
                  name: "Bicycles",
                  why: "Some hotels offer them, and a few rental shops exist, but the cobblestones are brutal and drivers aren\u2019t bike-aware. Not recommended unless you\u2019re experienced.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex gap-3 border border-barro/15 bg-barro/[0.03] rounded-[6px] p-4"
                >
                  <ArrowLeft
                    size={14}
                    className="text-barro shrink-0 mt-0.5 rotate-[-90deg]"
                  />
                  <div className="text-sm text-copal/70">
                    <strong className="text-copal">{item.name}</strong> &mdash;{" "}
                    {item.why}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <RelatedContent items={[
        { title: "4-Day Itinerary", description: "Day-by-day plan with transport built in.", href: "/oaxaca-city-4-day-itinerary", accentColor: "barro" },
        { title: "Monte Albán Day Trip", description: "Colectivo and taxi options to the ruins.", href: "/monte-alban-day-trip", accentColor: "nopal" },
        { title: "Budget Guide", description: "Transport costs across three budget tiers.", href: "/oaxaca-budget-guide", accentColor: "mezcal" },
      ]} />
    </>
  );
}
