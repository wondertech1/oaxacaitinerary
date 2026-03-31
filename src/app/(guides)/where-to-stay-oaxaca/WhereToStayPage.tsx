"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import GuideHero from "@/components/shared/GuideHero";
import { getGuideImage } from "@/lib/constants/guides";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";

interface NeighborhoodCardProps {
  name: string;
  tagline: string;
  description: React.ReactNode;
  priceRange: { hostel: string; hotel: string; airbnb: string };
  walkability: 1 | 2 | 3 | 4 | 5;
  vibes: string[];
  stayIf: string;
  skipIf: string;
  accentColor: string;
}

function NeighborhoodCard({
  name,
  tagline,
  description,
  priceRange,
  walkability,
  vibes,
  stayIf,
  skipIf,
  accentColor,
}: NeighborhoodCardProps) {
  return (
    <div
      className={`w-full border-t-4 ${accentColor} rounded-[6px] bg-lana overflow-hidden`}
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div>
          <h3 className="font-heading text-xl font-bold text-copal">{name}</h3>
          <p className="text-sm text-copal/50 italic mt-0.5">{tagline}</p>
        </div>

        {/* Two columns */}
        <div className="mt-5 flex flex-col md:flex-row gap-6">
          {/* Left: description */}
          <div className="md:w-2/3 text-sm text-copal/70 leading-relaxed space-y-3">
            {description}
          </div>

          {/* Right: data sidebar */}
          <div className="md:w-1/3 space-y-4">
            {/* Price ranges */}
            <div className="bg-lana-dark rounded-[6px] p-4 space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                Price / Night
              </span>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-copal/70">
                  <span>Hostel</span>
                  <span className="font-mono text-xs font-bold text-mezcal">
                    {priceRange.hostel}
                  </span>
                </div>
                <div className="flex justify-between text-copal/70">
                  <span>Hotel</span>
                  <span className="font-mono text-xs font-bold text-mezcal">
                    {priceRange.hotel}
                  </span>
                </div>
                <div className="flex justify-between text-copal/70">
                  <span>Airbnb</span>
                  <span className="font-mono text-xs font-bold text-mezcal">
                    {priceRange.airbnb}
                  </span>
                </div>
              </div>
            </div>

            {/* Walkability dots */}
            <div className="px-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                Walkability
              </span>
              <div className="flex gap-1.5 mt-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < walkability ? "bg-nopal" : "bg-copal/15"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Vibe tags */}
            <div className="px-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                Vibes
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {vibes.map((vibe) => (
                  <span
                    key={vibe}
                    className="text-[10px] font-mono text-copal/50 border border-copal/10 rounded-[3px] px-2 py-0.5"
                  >
                    {vibe}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom callouts */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="border-l-2 border-nopal bg-nopal/[0.04] rounded-r-[4px] p-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-nopal/70">
              Stay here if&hellip;
            </span>
            <p className="mt-1 text-sm text-copal/70">{stayIf}</p>
          </div>
          <div className="border-l-2 border-barro bg-barro/[0.04] rounded-r-[4px] p-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-barro/70">
              Skip if&hellip;
            </span>
            <p className="mt-1 text-sm text-copal/70">{skipIf}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const neighborhoods: NeighborhoodCardProps[] = [
  {
    name: "Centro Hist\u00f3rico",
    tagline: "The obvious choice \u2014 and it\u2019s obvious for a reason",
    description: (
      <>
        <p>
          Walk everywhere. The Z&oacute;calo is your living room &mdash;
          restaurants, museums, mezcaler&iacute;as, and markets are all within a
          10-minute walk. If you only have 3&ndash;4 days, this is the
          no-brainer pick.
        </p>
        <p>
          The trade-off is noise. Thursday through Saturday nights bring{" "}
          <Link href="/oaxaca-nightlife-guide" className="text-barro underline">live
          music, bar crowds</Link>, and the occasional brass band passing under your
          window at 1&nbsp;AM. If you&apos;re a light sleeper, book a room
          facing an interior courtyard &mdash; not the street.
        </p>
      </>
    ),
    priceRange: {
      hostel: "300\u2013500 MXN",
      hotel: "800\u20132,500 MXN",
      airbnb: "600\u20131,500 MXN",
    },
    walkability: 5,
    vibes: ["Walkable", "Restaurants", "Nightlife", "Touristy"],
    stayIf:
      "You\u2019re a first-timer, here for a short trip, and want to walk everywhere.",
    skipIf:
      "You\u2019re a light sleeper or want a quiet, residential feel.",
    accentColor: "border-barro",
  },
  {
    name: "Jalatlaco",
    tagline:
      "The colorful one \u2014 quieter, artistic, 5 minutes from everything",
    description: (
      <>
        <p>
          Painted walls, flower-filled doorways, and the most Instagram-famous
          streets in Oaxaca. Jalatlaco has become a destination in itself, but
          it&apos;s still quieter than Centro after 9&nbsp;PM.
        </p>
        <p>
          Great coffee shops and breakfast spots. The walk to the Z&oacute;calo
          is 10&ndash;15 minutes, which is just enough distance to feel like you
          have your own neighborhood. Couples love it here.
        </p>
      </>
    ),
    priceRange: {
      hostel: "250\u2013400 MXN",
      hotel: "900\u20131,800 MXN",
      airbnb: "500\u20131,200 MXN",
    },
    walkability: 4,
    vibes: ["Quiet", "Colorful", "Coffee Shops", "Artistic"],
    stayIf:
      "You\u2019re a couple, a creative type, or an early-morning walker who wants charm without chaos.",
    skipIf:
      "You want to stumble home from a mezcaler\u00eda at midnight without a taxi.",
    accentColor: "border-anil",
  },
  {
    name: "Reforma",
    tagline:
      "The residential one \u2014 real Oaxacan life, less convenience",
    description: (
      <>
        <p>
          This is where locals actually live. Fewer tourist restaurants, more
          fondas serving 60-peso comida corrida. Your neighbors are families, not
          backpackers. The prices reflect that.
        </p>
        <p>
          The downside: it&apos;s a 20-minute walk to the Z&oacute;calo, and
          most things you came to Oaxaca for are in Centro or Jalatlaco.
          You&apos;ll spend time commuting. Worth it for long stays, not ideal
          for a weekend trip.
        </p>
      </>
    ),
    priceRange: {
      hostel: "200\u2013350 MXN",
      hotel: "600\u20131,200 MXN",
      airbnb: "400\u2013900 MXN",
    },
    walkability: 2,
    vibes: ["Local", "Affordable", "Quiet", "Residential"],
    stayIf:
      "You\u2019re staying 2+ weeks, on a tight budget, or want to practice your Spanish daily.",
    skipIf:
      "You have 4 days or fewer \u2014 you\u2019ll waste too much time commuting.",
    accentColor: "border-nopal",
  },
  {
    name: "Xochimilco",
    tagline:
      "The emerging one \u2014 artisan workshops, fewer crowds",
    description: (
      <>
        <p>
          Northwest of Centro, across the R&iacute;o Atoyac. Xochimilco is
          Oaxaca&apos;s artisan neighborhood &mdash; textile workshops, pottery
          studios, and a local market that tourists rarely visit.
        </p>
        <p>
          The walk to the Z&oacute;calo is 10&ndash;15 minutes, similar to
          Jalatlaco but in the opposite direction. It&apos;s less polished,
          fewer coffee shops, but more authentic. If you&apos;ve been to Oaxaca
          before and want a fresh perspective, this is it.
        </p>
      </>
    ),
    priceRange: {
      hostel: "250\u2013400 MXN",
      hotel: "700\u20131,400 MXN",
      airbnb: "450\u20131,000 MXN",
    },
    walkability: 3,
    vibes: ["Emerging", "Artisan", "Good Food", "Low-key"],
    stayIf:
      "You\u2019ve been to Oaxaca before and want a less polished, more local experience.",
    skipIf:
      "You want the postcard experience on your first trip.",
    accentColor: "border-mezcal",
  },
];

const comparisonData = [
  {
    neighborhood: "Centro Hist\u00f3rico",
    budget: "300\u20132,500 MXN",
    walkToZocalo: "0\u20135 min",
    vibe: "Lively, central",
    bestFor: "First-timers",
  },
  {
    neighborhood: "Jalatlaco",
    budget: "250\u20131,800 MXN",
    walkToZocalo: "10\u201315 min",
    vibe: "Colorful, quiet",
    bestFor: "Couples",
  },
  {
    neighborhood: "Reforma",
    budget: "200\u20131,200 MXN",
    walkToZocalo: "20 min",
    vibe: "Residential, local",
    bestFor: "Long stays",
  },
  {
    neighborhood: "Xochimilco",
    budget: "250\u20131,400 MXN",
    walkToZocalo: "10\u201315 min",
    vibe: "Artisan, emerging",
    bestFor: "Return visitors",
  },
];

const faqs = [
  {
    question: "What's the best neighborhood to stay in Oaxaca City?",
    answer:
      "There's no single best — it depends on your trip. Centro Histórico is ideal for first-timers who want to walk everywhere. Jalatlaco suits couples who prefer charm and quiet evenings. Reforma works for long-stay travelers on a budget. Xochimilco is best for return visitors looking for a less touristy experience.",
  },
  {
    question: "How much does accommodation cost per night?",
    answer:
      "Hostels range from 200–500 MXN per night depending on the neighborhood. Mid-range hotels run 700–2,500 MXN. Airbnbs typically cost 400–1,500 MXN for a private room or apartment. Jalatlaco and Centro are slightly more expensive; Reforma is the cheapest across all tiers.",
  },
  {
    question: "Is Jalatlaco safe to walk around at night?",
    answer:
      "Yes. Jalatlaco has well-lit streets and steady foot traffic in the evenings from locals and visitors at restaurants and coffee shops. Normal city awareness applies — don't flash valuables and stick to lit streets.",
  },
  {
    question: "Should I book accommodation in advance?",
    answer:
      "For Día de Muertos (late October–early November) and Guelaguetza (late July), book 3–4 months ahead — these periods sell out fast. For the rest of the year, 2–3 weeks in advance is usually fine. Last-minute deals exist but you'll have fewer choices in popular neighborhoods.",
  },
];

export default function WhereToStayPage() {
  const heroImage = getGuideImage("/where-to-stay-oaxaca");

  return (
    <>
      <GuideHero
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
        breadcrumbLabel="Where to Stay"
        kicker="Accommodation"
        kickerColor="text-anil"
        title="Where to Stay in Oaxaca City: Neighborhoods Compared"
        subtitle="Four neighborhoods broken down by price, walkability, and vibe — so you can pick the one that fits."
        pills={["4 Neighborhoods", "Real Prices in MXN", "Walkability Scores"]}
        readTime="8 min read"
      />

      <ZapotecDivider className="bg-lana" />

      {/* Section 1: Before you book */}
      <section className="bg-lana py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Before You Book
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The good news: Oaxaca is small
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 text-sm text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca City&apos;s historic core is compact &mdash; roughly 1.5
                km across. You can walk from one end to the other in 20 minutes.
                This means that even the &quot;far&quot; neighborhoods on this
                list are still within{" "}
                <Link href="/getting-around-oaxaca" className="text-barro underline">walking distance</Link>
                {" "}of the Z&oacute;calo, the
                markets, and the main attractions.
              </p>
              <p>
                The real question isn&apos;t &quot;can I walk there?&quot;
                &mdash; it&apos;s &quot;do I want to walk back at 11&nbsp;PM
                after three mezcals?&quot; That&apos;s what separates these
                neighborhoods. Each one has a distinct personality, noise level,
                and price bracket. None of them are bad. Some are better for you.
                All four are{" "}
                <Link href="/oaxaca-safety-tips" className="text-barro underline">safe for walking at night</Link>
                {" "}&mdash; it&apos;s a matter of preference, not security.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TipCard type="tip">
              Book accommodation with a rooftop terrace if you can. Oaxaca&apos;s
              sunsets are spectacular, and having a private spot to watch the sky
              turn pink over the Sierra Norte is worth the small premium. Many
              boutique hotels and Airbnbs include this &mdash; always ask.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Neighborhoods */}
      <section className="bg-lana-dark py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Neighborhoods
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Four areas, honestly compared
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-6">
            {neighborhoods.map((neighborhood, i) => (
              <ScrollReveal key={neighborhood.name} delay={0.05 + i * 0.08}>
                <NeighborhoodCard {...neighborhood} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Quick Comparison */}
      <section className="bg-lana py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              At a Glance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Quick comparison
            </h2>
          </ScrollReveal>

          {/* Desktop grid */}
          <ScrollReveal delay={0.1}>
            <div className="mt-8 hidden md:block">
              <div className="bg-lana-dark border border-copal/[0.06] rounded-[6px] overflow-hidden">
                {/* Header row */}
                <div className="grid grid-cols-5 gap-px bg-copal/[0.06]">
                  {[
                    "Neighborhood",
                    "Budget / Night",
                    "Walk to Z\u00f3calo",
                    "Vibe",
                    "Best For",
                  ].map((header) => (
                    <div
                      key={header}
                      className="bg-lana-dark px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40"
                    >
                      {header}
                    </div>
                  ))}
                </div>
                {/* Data rows */}
                {comparisonData.map((row) => (
                  <div
                    key={row.neighborhood}
                    className="grid grid-cols-5 gap-px bg-copal/[0.06]"
                  >
                    <div className="bg-lana-dark px-4 py-3 text-sm font-bold text-copal">
                      {row.neighborhood}
                    </div>
                    <div className="bg-lana-dark px-4 py-3 text-sm text-copal/70 font-mono text-xs">
                      {row.budget}
                    </div>
                    <div className="bg-lana-dark px-4 py-3 text-sm text-copal/70">
                      {row.walkToZocalo}
                    </div>
                    <div className="bg-lana-dark px-4 py-3 text-sm text-copal/70">
                      {row.vibe}
                    </div>
                    <div className="bg-lana-dark px-4 py-3 text-sm text-copal/70">
                      {row.bestFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile stacked cards */}
            <div className="mt-8 md:hidden space-y-3">
              {comparisonData.map((row) => (
                <div
                  key={row.neighborhood}
                  className="bg-lana-dark border border-copal/[0.06] rounded-[6px] p-4"
                >
                  <h4 className="font-heading text-sm font-bold text-copal">
                    {row.neighborhood}
                  </h4>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-copal/60">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-copal/30">
                        Budget
                      </span>
                      <p className="mt-0.5 font-mono text-mezcal font-bold">
                        {row.budget}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-copal/30">
                        Walk to Z&oacute;calo
                      </span>
                      <p className="mt-0.5">{row.walkToZocalo}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-copal/30">
                        Vibe
                      </span>
                      <p className="mt-0.5">{row.vibe}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-copal/30">
                        Best For
                      </span>
                      <p className="mt-0.5">{row.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Our Recommendation */}
      <section className="bg-lana-dark py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Our Take
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              So where should you actually stay?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 text-sm text-copal/70 leading-relaxed space-y-4">
              <p>
                <strong className="text-copal">
                  First time, 3&ndash;5 days: Centro Hist&oacute;rico.
                </strong>{" "}
                Don&apos;t overthink it. You&apos;ll walk everywhere, eat at
                every market, and fall asleep to the sound of the city. Ask for
                an interior room if noise bothers you.
              </p>
              <p>
                <strong className="text-copal">
                  Want quiet evenings: Jalatlaco.
                </strong>{" "}
                Close enough to walk to everything during the day, peaceful
                enough to sleep with the windows open at night. The best coffee
                shops in the city are here.
              </p>
              <p>
                <strong className="text-copal">
                  Been to Oaxaca before: Xochimilco.
                </strong>{" "}
                You&apos;ve done Centro and Jalatlaco. Xochimilco gives you a
                reason to explore a different part of the city, with artisan
                workshops and a local market you probably missed last time.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TipCard type="money">
              Airbnb is almost always cheaper than hotels in Oaxaca, especially
              for stays of a week or more. Many hosts offer discounts for weekly
              bookings. A private room with rooftop access in Jalatlaco can run
              500&ndash;800 MXN/night &mdash; half what a comparable hotel room
              costs.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Booking Tips */}
      <section className="bg-lana py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Booking Tips
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              How to book smart
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 text-sm text-copal/70 leading-relaxed space-y-4">
              <p>
                <strong className="text-copal">Best platforms:</strong> Airbnb
                for apartments and private rooms. Booking.com for hotels (better
                cancellation policies). Hostelworld for hostels. Many smaller
                boutique hotels in Oaxaca aren&apos;t on any platform &mdash;
                search Google Maps directly for &quot;hotel boutique
                Oaxaca&quot; and message them on WhatsApp.
              </p>
              <p>
                <strong className="text-copal">When to book:</strong>{" "}
                D&iacute;a de Muertos (late October&ndash;early November) and
                Guelaguetza (late July) book out months in advance. For those
                periods, book 3&ndash;4 months ahead. Rest of the year,
                2&ndash;3 weeks is fine.
              </p>
              <p>
                <strong className="text-copal">What to ask about:</strong>{" "}
                Rooftop access, hot water reliability (some older buildings are
                inconsistent), kitchen availability, and which direction your
                room faces. Street-facing rooms in Centro are louder on weekends.
                Interior rooms and courtyard-facing rooms are always quieter.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TipCard type="tip">
              Always message your host before booking on Airbnb. Ask if the hot
              water is consistent and whether the Wi-Fi speed is good enough for
              video calls (if you&apos;re working remotely). These two things
              cause the most complaints in Oaxaca accommodation reviews.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedContent items={[
        { title: "4-Day Itinerary", description: "Day-by-day plan starting from Centro Histórico.", href: "/oaxaca-city-4-day-itinerary", accentColor: "barro" },
        { title: "Getting Around", description: "How to get everywhere from your neighborhood.", href: "/getting-around-oaxaca", accentColor: "anil" },
        { title: "Budget Guide", description: "Accommodation costs across three budget tiers.", href: "/oaxaca-budget-guide", accentColor: "mezcal" },
      ]} />
    </>
  );
}
