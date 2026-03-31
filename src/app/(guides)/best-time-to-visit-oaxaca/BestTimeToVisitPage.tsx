"use client";

import { Sun, CloudRain, Camera, Utensils, Users, Ticket } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";
import MonthCard from "@/components/seasonal/MonthCard";
import SeasonalStrip from "@/components/seasonal/SeasonalStrip";

/* ─── FAQ Data ─── */
const faqs = [
  {
    question: "What is the best month to visit Oaxaca?",
    answer:
      "November is the single best month for most travelers. The rainy season has ended, temperatures are comfortable (10–29°C), and the Día de los Muertos celebrations in late October through November 2 are among the most spectacular in all of Mexico. That said, if crowds and prices concern you, January and February offer nearly identical weather with far fewer tourists.",
  },
  {
    question: "Is it worth visiting Oaxaca during the rainy season?",
    answer:
      "Absolutely. The rainy season (June–September) gets a bad reputation, but rain typically falls in short, intense afternoon bursts — mornings are almost always clear. Prices drop 30–50%, tourist crowds vanish, and the surrounding valleys turn lush green. The only real inconvenience is that some dirt roads to remote villages can become muddy.",
  },
  {
    question: "How far in advance should I book for Guelaguetza?",
    answer:
      "At least 2–3 months for accommodation, especially if you want to stay in the Centro Histórico. Hotels double or triple their rates during the last two Mondays of July. For the paid auditorium seats (200–500 MXN), tickets are available at the Oaxaca tourism office starting about two weeks before the event. Free seating at Cerro del Fortín fills up by 7 AM — arrive by 6 AM to secure a spot.",
  },
  {
    question: "What should I pack for Oaxaca's weather?",
    answer:
      "Layer up. Mornings can be cool (8–11°C in winter), afternoons hot (28–33°C), and evenings cool again. Bring a light jacket or sweater for evenings, breathable clothing for daytime, comfortable walking shoes, and sunscreen year-round. If visiting during rainy season, pack a compact rain jacket — an umbrella works too, but a jacket keeps your hands free for mezcal.",
  },
  {
    question: "Is Oaxaca too hot in April and May?",
    answer:
      "April and May are the warmest months, with highs reaching 33°C. It is noticeably hotter than the rest of the year, but Oaxaca sits at 1,550 meters elevation, so it never feels as oppressive as coastal cities. Stay hydrated, visit indoor markets during peak afternoon heat, and plan outdoor activities for morning hours. The dryness makes it more tolerable than humid heat.",
  },
  {
    question: "Does Oaxaca get hurricanes?",
    answer:
      "Oaxaca City itself does not get hurricanes — it sits at 1,550 meters elevation in an inland valley. Coastal Oaxaca (Puerto Escondido, Huatulco) can be affected during hurricane season (June–November), but the city only experiences increased rainfall during those months, typically as afternoon thunderstorms that clear by evening.",
  },
];

/* ─── Related Content ─── */
const relatedGuides = [
  {
    title: "Oaxaca City 4-Day Itinerary",
    description:
      "Day-by-day plan covering markets, Monte Albán, mezcal, and the best food in the Centro.",
    href: "/oaxaca-city-4-day-itinerary",
    accentColor: "barro",
  },
  {
    title: "Oaxaca Budget Guide",
    description:
      "Realistic daily costs across three tiers — backpacker, mid-range, and comfort.",
    href: "/oaxaca-budget-guide",
    accentColor: "mezcal",
  },
  {
    title: "Oaxaca Cultural Experiences",
    description:
      "Weaving workshops, mezcal tastings, cooking classes, and Zapotec village visits.",
    href: "/oaxaca-cultural-experiences",
    accentColor: "anil",
  },
];

export default function BestTimeToVisitPage() {
  const heroImage = getGuideImage("/best-time-to-visit-oaxaca");

  return (
    <>
      {/* ─── Hero ─── */}
      <GuideHero
        breadcrumbLabel="Best Time to Visit"
        kicker="Seasonal Guide"
        kickerColor="text-barro"
        title="Best Time to Visit Oaxaca: A Month-by-Month Breakdown"
        subtitle="Weather patterns, festival dates, crowd levels, and pricing — everything you need to pick the perfect window for your Oaxaca trip."
        pills={["12 Months", "Weather Data", "Festival Calendar"]}
        readTime="8 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="my-0" />

      {/* ─── TL;DR Intro ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="bg-barro/[0.04] border border-barro/10 rounded-[6px] p-5 md:p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-barro font-bold">
                TL;DR
              </span>
              <p className="mt-2 text-sm text-copal/70 leading-relaxed">
                <strong className="text-copal">October through March</strong> is the
                sweet spot — dry skies, comfortable temperatures, and manageable
                crowds outside of holiday peaks. Visit in{" "}
                <strong className="text-copal">late July</strong> if you want to
                experience Guelaguetza, Mexico&apos;s most spectacular indigenous dance
                festival. Late October through early November is unbeatable for{" "}
                <strong className="text-copal">Día de los Muertos</strong>.
                June through September is rainy season — cheaper and emptier, but
                expect afternoon downpours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-base text-copal/70 leading-relaxed">
              Oaxaca City sits at 1,550 meters in the Sierra Madre del Sur, which
              means it never gets truly cold and never gets coastal-humid. The
              climate is semi-arid with a pronounced wet and dry season. That
              elevation is your secret weapon — even when temperatures hit 33°C in
              April, the dry air and cool evenings make it far more comfortable than
              you would expect.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              But weather is only half the story. Oaxaca&apos;s festival calendar is
              packed with major events year-round &mdash; D&iacute;a de los Muertos, Guelaguetza, Noche de R&aacute;banos, and dozens of smaller fiestas &mdash; and timing your trip around
              one of them adds a layer you can&apos;t get any other way. Below, we break down every month so you can find
              the window that fits your style, budget, and priorities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Month by Month Strip ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              12-Month Overview
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Month by Month
            </h2>
            <p className="mt-3 text-sm text-copal/50 leading-relaxed max-w-xl">
              Scroll through every month with real weather data, crowd
              levels, pricing, and festival highlights.
            </p>
          </ScrollReveal>

          <div className="mt-8">
            <SeasonalStrip>
              {/* ── Dry Season: Winter ── */}
              <MonthCard
                month="January"
                shortMonth="JAN"
                tempHigh={28}
                tempLow={8}
                rain="Minimal"
                crowds={2}
                price={2}
                verdict="Great weather, post-holiday quiet"
                accentColor="barro"
              />
              <MonthCard
                month="February"
                shortMonth="FEB"
                tempHigh={29}
                tempLow={9}
                rain="Minimal"
                crowds={2}
                price={2}
                verdict="Driest month, excellent for day trips"
                accentColor="barro"
              />
              <MonthCard
                month="March"
                shortMonth="MAR"
                tempHigh={31}
                tempLow={11}
                rain="Minimal"
                crowds={2}
                price={2}
                festivals={["Semana Santa (late)"]}
                verdict="Warming up but still dry"
                accentColor="barro"
              />

              {/* ── Hot/Transition: Spring ── */}
              <MonthCard
                month="April"
                shortMonth="APR"
                tempHigh={33}
                tempLow={13}
                rain="Light"
                crowds={3}
                price={3}
                festivals={["Semana Santa"]}
                verdict="Hot but manageable, Easter crowds"
                accentColor="anil"
              />
              <MonthCard
                month="May"
                shortMonth="MAY"
                tempHigh={33}
                tempLow={14}
                rain="Moderate"
                crowds={2}
                price={2}
                verdict="Shoulder season starts, afternoon showers begin"
                accentColor="anil"
              />
              <MonthCard
                month="June"
                shortMonth="JUN"
                tempHigh={31}
                tempLow={15}
                rain="Heavy"
                crowds={1}
                price={1}
                verdict="Rainy season, cheapest month, fewest tourists"
                accentColor="anil"
              />

              {/* ── Rainy Season: Summer ── */}
              <MonthCard
                month="July"
                shortMonth="JUL"
                tempHigh={30}
                tempLow={15}
                rain="Heavy"
                crowds={4}
                price={4}
                festivals={["Guelaguetza"]}
                verdict="Wet but worth it for Guelaguetza"
                accentColor="nopal"
              />
              <MonthCard
                month="August"
                shortMonth="AUG"
                tempHigh={30}
                tempLow={15}
                rain="Heavy"
                crowds={2}
                price={2}
                verdict="Still rainy, low crowds, good deals"
                accentColor="nopal"
              />
              <MonthCard
                month="September"
                shortMonth="SEP"
                tempHigh={29}
                tempLow={14}
                rain="Heavy"
                crowds={1}
                price={1}
                verdict="Wettest month, rock-bottom prices"
                accentColor="nopal"
              />

              {/* ── Transition to Dry: Fall/Winter ── */}
              <MonthCard
                month="October"
                shortMonth="OCT"
                tempHigh={29}
                tempLow={13}
                rain="Moderate"
                crowds={3}
                price={3}
                festivals={["Día de los Muertos prep"]}
                verdict="Rain easing, Muertos energy building"
                accentColor="mezcal"
              />
              <MonthCard
                month="November"
                shortMonth="NOV"
                tempHigh={29}
                tempLow={10}
                rain="Light"
                crowds={4}
                price={4}
                festivals={["Día de los Muertos"]}
                verdict="Peak for Muertos, book far ahead"
                accentColor="mezcal"
              />
              <MonthCard
                month="December"
                shortMonth="DEC"
                tempHigh={27}
                tempLow={8}
                rain="Minimal"
                crowds={4}
                price={4}
                festivals={["Noche de Rábanos", "Christmas"]}
                verdict="Holiday season, festive atmosphere"
                accentColor="mezcal"
              />
            </SeasonalStrip>
          </div>

          <TipCard type="tip">
            Temperatures are in Celsius. To convert: multiply by 1.8 and add 32. So
            28°C is about 82°F, 8°C is about 46°F. Oaxaca&apos;s elevation means
            significant day-to-night temperature swings — always bring a layer for
            evening.
          </TipCard>
        </div>
      </section>

      <ZapotecDivider />

      {/* ─── Best Months For... ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              By Travel Style
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Best Months For...
            </h2>
          </ScrollReveal>

          {/* Budget Travelers */}
          <ScrollReveal delay={0.06}>
            <div className="mt-8 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-mezcal/10 flex items-center justify-center mt-0.5">
                <Sun size={18} className="text-mezcal" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-copal">
                  Budget Travelers
                </h3>
                <p className="mt-1 text-sm text-copal/60 leading-relaxed">
                  <strong className="text-copal/80">June, August, or September.</strong>{" "}
                  These are the deepest rainy-season months and prices reflect it.
                  Hostels that charge 400 MXN in November drop to 200–250 MXN.
                  Mid-range hotels slash rates by 30–50%. Flights from Mexico City
                  are at their cheapest. You will get wet in the afternoons, but
                  the mornings are gorgeous and the food is exactly the same price
                  year-round because locals eat at the same places regardless of
                  season. If you can handle a daily siesta while it pours outside,
                  this is your window.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Food Lovers */}
          <ScrollReveal delay={0.08}>
            <div className="mt-8 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-barro/10 flex items-center justify-center mt-0.5">
                <Utensils size={18} className="text-barro" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-copal">
                  Food Lovers
                </h3>
                <p className="mt-1 text-sm text-copal/60 leading-relaxed">
                  <strong className="text-copal/80">Any month works — but October through December is special.</strong>{" "}
                  Oaxaca&apos;s food scene operates at full strength year-round.
                  Mercado 20 de Noviembre&apos;s grills never take a day off, and
                  the tlayuda ladies on Reforma Street are there rain or shine. That
                  said, late fall brings seasonal ingredients that elevate everything:
                  fresh-harvest chapulines (grasshoppers) are crunchiest in October,
                  tamales de mole negro appear for Día de los Muertos, and the
                  Christmas season brings buñuelos, ponche, and the legendary
                  chocolate atole. If you time it right, you can eat through three
                  major food-centric celebrations in two months.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Culture & Festivals */}
          <ScrollReveal delay={0.1}>
            <div className="mt-8 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-nopal/10 flex items-center justify-center mt-0.5">
                <Ticket size={18} className="text-nopal" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-copal">
                  Culture & Festivals
                </h3>
                <p className="mt-1 text-sm text-copal/60 leading-relaxed">
                  <strong className="text-copal/80">Late July or late October to early November.</strong>{" "}
                  These are the two marquee windows. Guelaguetza (last two Mondays of
                  July) is a whirlwind of indigenous dance, regional costume, and
                  community pride — nothing else in Mexico compares. Día de los
                  Muertos (October 31 through November 2) transforms the entire city
                  into an altar: marigold-carpeted streets, comparsas (costumed
                  parades), graveyard vigils in surrounding villages, and a communal
                  energy that you simply cannot manufacture. Both events spike prices
                  and fill hotels, but both are worth every peso.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Photography */}
          <ScrollReveal delay={0.12}>
            <div className="mt-8 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-anil/10 flex items-center justify-center mt-0.5">
                <Camera size={18} className="text-anil" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-copal">
                  Photography
                </h3>
                <p className="mt-1 text-sm text-copal/60 leading-relaxed">
                  <strong className="text-copal/80">October or November.</strong>{" "}
                  The light in Oaxaca is extraordinary year-round thanks to the
                  altitude and clear skies, but October and November deliver the best
                  combination: the landscape is still green from the rains, the air is
                  freshly washed and haze-free, golden hour is spectacular, and
                  there are festivals everywhere providing colorful subjects. The
                  Día de los Muertos altars, painted faces, and candlelit graveyards
                  are a photographer&apos;s dream. For landscapes and architecture without
                  people in the frame, January or February mornings offer empty streets
                  and crystalline light.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Avoiding Crowds */}
          <ScrollReveal delay={0.14}>
            <div className="mt-8 flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-barro/10 flex items-center justify-center mt-0.5">
                <Users size={18} className="text-barro" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-copal">
                  Avoiding Crowds
                </h3>
                <p className="mt-1 text-sm text-copal/60 leading-relaxed">
                  <strong className="text-copal/80">January, February, May, or August–September.</strong>{" "}
                  The post-holiday lull in January and February is wonderful — the
                  weather is perfect, prices have normalized, and the Christmas crowds
                  have flown home. May is the transition month between dry and wet
                  season, and most travelers skip it entirely even though the weather
                  is still mostly fine. August and September are the lowest-traffic
                  months of the year, but you are firmly in rainy season. Avoid late
                  July (Guelaguetza), late October to early November (Muertos), Semana
                  Santa (Easter week), and mid-December through early January if crowds
                  bother you.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <TipCard type="money">
            The biggest price swings are on accommodation, not food or activities.
            A hotel room that costs 1,200 MXN/night in February might be 2,500 MXN
            during Guelaguetza and 800 MXN in September. Street food, market meals,
            and mezcal tastings cost the same year-round.
          </TipCard>
        </div>
      </section>

      <ZapotecDivider />

      {/* ─── Rainy Season Reality Check ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Weather
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Rainy Season Reality Check
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="mt-6 flex gap-3 items-start">
              <CloudRain size={20} className="text-anil shrink-0 mt-1" />
              <p className="text-base text-copal/70 leading-relaxed">
                Let&apos;s clear something up: Oaxaca&apos;s rainy season is not six
                months of nonstop rain. The pattern is remarkably predictable.
                Mornings are sunny and clear. Clouds build through the early
                afternoon. Between 3 and 6 PM, there is a downpour — often
                dramatic, sometimes with thunder — that lasts one to three hours.
                Then it stops, the air is fresh and cool, and the evening is
                beautiful.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              This means your mornings are completely unaffected. You can visit
              Monte Albán, explore markets, take cooking classes, and wander the
              Centro Histórico without any rain. The practical adjustment is simple:
              schedule outdoor activities for the morning, and plan indoor things —
              museums, mezcalerias, long lunches, textile workshops — for the
              afternoon.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              September is the wettest month and the only one where rain can
              occasionally start earlier in the day or last longer. Even then,
              full-day washouts are rare. The trade-off is that the valley is
              spectacularly green — the contrast with the burnt-orange colonial
              architecture is sharp enough to photograph itself, and the surrounding mountains look like they
              belong in a Miyazaki film.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              The real consideration is not rain itself but what rain does to
              unpaved roads. If you plan to visit remote Zapotec villages like
              Benito Juárez or Cuajimoloyas in the Sierra Norte, some trails and
              dirt roads become slippery. Ask your guide or rental-car agency about
              current conditions. Major day-trip destinations like Monte Albán,
              Hierve el Agua, Mitla, and Tule are all accessible via paved roads
              year-round.
            </p>
          </ScrollReveal>

          <TipCard type="tip">
            Pack a compact rain jacket, not an umbrella. You will want both hands
            free for holding mezcal, taking photos, and eating tlayudas on the
            street. A 50-peso poncho from any corner store works in a pinch.
          </TipCard>
        </div>
      </section>

      <ZapotecDivider />

      {/* ─── Festival Planning ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Celebrations
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Festival Planning
            </h2>
            <p className="mt-3 text-sm text-copal/50 leading-relaxed max-w-xl">
              Three festivals define the Oaxaca calendar. Each one is worth building
              an entire trip around. The{" "}
              <a href="https://www.oaxaca.travel" target="_blank" rel="noopener" className="text-barro underline">Oaxaca tourism portal</a>{" "}
              has updated dates and event listings.
            </p>
          </ScrollReveal>

          {/* Guelaguetza */}
          <ScrollReveal delay={0.06}>
            <div className="mt-10 border-l-2 border-nopal/30 pl-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-nopal">
                Late July
              </span>
              <h3 className="mt-1 font-heading text-xl font-bold text-copal">
                Guelaguetza
              </h3>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                Guelaguetza is the biggest indigenous dance festival in Mexico and one
                of the most important cultural events in all of Latin America. Held on
                the last two Mondays of July, it brings together delegations from
                Oaxaca&apos;s eight regions — each performing their traditional dances
                in full regalia at the open-air amphitheater on Cerro del Fortín,
                the hill overlooking the city.
              </p>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                The word &quot;guelaguetza&quot; means &quot;reciprocal exchange of
                gifts&quot; in Zapotec, and that is exactly what happens. After each
                delegation performs, they throw gifts to the audience — pineapples,
                bread, mole paste, mezcal, woven textiles. The atmosphere is electric
                and joyful. Surrounding the main event, the city hosts two weeks of
                calendas (street parades), concerts, exhibitions, and food fairs.
              </p>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                <strong className="text-copal/80">How to get tickets:</strong> There
                are two tiers. Free seating in Sections C and D of the amphitheater
                is first-come, first-served — arrive by 6 AM for an 8 AM show
                (yes, seriously). Paid seats in Sections A and B cost 200–500 MXN
                and are sold at the Oaxaca state tourism office (Murguía 206, Centro)
                starting about two weeks before the festival. Tickets sell out fast.
                A third option: watch the Lunes del Cerro performance from the
                grassy slopes below the amphitheater, which is free and has a
                relaxed picnic atmosphere.
              </p>

              <TipCard type="skip">
                Beware of scalpers selling &quot;VIP Guelaguetza tickets&quot; outside
                the amphitheater for 1,000+ MXN. These are almost always scams or
                massively marked-up Section A seats. Buy directly from the tourism
                office or arrive early for free seats.
              </TipCard>
            </div>
          </ScrollReveal>

          {/* Día de los Muertos */}
          <ScrollReveal delay={0.08}>
            <div className="mt-10 border-l-2 border-barro/30 pl-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-barro">
                October 31 – November 2
              </span>
              <h3 className="mt-1 font-heading text-xl font-bold text-copal">
                Día de los Muertos
              </h3>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                Oaxaca&apos;s Día de los Muertos celebration is widely considered the
                most authentic and intense in Mexico — more so than Mexico City or
                Pátzcuaro. The preparations begin in mid-October when markets overflow
                with cempasúchil (marigold flowers), sugar skulls, pan de muerto, and
                copal incense. By late October, elaborate altars (ofrendas) appear in
                homes, restaurants, hotels, and public spaces across the city.
              </p>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                The main events unfold over three days. October 31 is for the
                spirits of children — families decorate small ofrendas with toys and
                sweets. November 1 honors adults who have passed, with larger altars,
                favorite foods and drinks of the deceased, and photographs. November 2
                is the climax: comparsas (costumed processions with brass bands) wind
                through the streets, and families hold all-night vigils at cemeteries,
                sharing food and mezcal over the graves of loved ones.
              </p>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                The village celebrations are even more powerful than the city&apos;s.
                Xoxocotlán cemetery, about 15 minutes south of the Centro, hosts the
                most famous vigil — thousands of candles illuminating decorated
                graves while families eat, drink, and tell stories. San Felipe del
                Agua and Atzompa also have remarkable celebrations with fewer crowds.
              </p>

              <TipCard type="tip">
                Book accommodation at least 2 months in advance for Muertos week.
                Many hotels require a 3-night minimum stay. Alternatively, stay in
                a neighboring town like Etla or Zaachila where prices remain
                reasonable, and take colectivos into the city.
              </TipCard>
            </div>
          </ScrollReveal>

          {/* Noche de Rábanos */}
          <ScrollReveal delay={0.1}>
            <div className="mt-10 border-l-2 border-mezcal/30 pl-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mezcal">
                December 23
              </span>
              <h3 className="mt-1 font-heading text-xl font-bold text-copal">
                Noche de Rábanos
              </h3>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                This one is gloriously weird. Every December 23, artisans carve
                oversized radishes into elaborate sculptures — nativity scenes,
                Guelaguetza dancers, churches, animals, historical events — and
                display them in the zócalo for judging. The tradition dates back to
                1897 when colonial vendors carved radishes to attract customers to
                their market stalls. It has evolved into a genuine art competition
                that draws thousands of spectators.
              </p>
              <p className="mt-3 text-sm text-copal/60 leading-relaxed">
                The exhibition is free and opens at 3 PM on December 23 in the main
                plaza. Lines can be over an hour long by 5 PM, so arrive early. The
                displays are accompanied by totomoxtle (corn husk) sculptures and
                flor inmortal (dried flower) arrangements. The entire zócalo has a
                carnival atmosphere with food stalls, live music, and fireworks. It
                kicks off the broader Christmas season in Oaxaca, which includes
                Calendas on Christmas Eve and New Year celebrations.
              </p>

              <TipCard type="tip">
                Combine Noche de Rábanos with the Christmas-to-New-Year period for
                a festive 10-day trip. December in Oaxaca is dry, cool, and buzzing
                with energy. Just book accommodation early — this is high season.
              </TipCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider />

      {/* ─── Packing & Practical ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Practical
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Season-by-Season Packing
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dry Season Card */}
              <div className="bg-lana rounded-[6px] border border-copal/[0.04] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sun size={16} className="text-barro" />
                  <span className="font-heading text-sm font-bold text-copal">
                    Dry Season (Oct–Apr)
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-copal/60 leading-relaxed">
                  <li>Light layers — mornings are cool, afternoons warm</li>
                  <li>Sweater or light jacket for evenings</li>
                  <li>Comfortable walking shoes (cobblestones everywhere)</li>
                  <li>Sunscreen and hat — the UV at altitude is strong</li>
                  <li>Sunglasses — the light is intense</li>
                </ul>
              </div>

              {/* Wet Season Card */}
              <div className="bg-lana rounded-[6px] border border-copal/[0.04] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CloudRain size={16} className="text-anil" />
                  <span className="font-heading text-sm font-bold text-copal">
                    Rainy Season (May–Sep)
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-copal/60 leading-relaxed">
                  <li>Everything from dry season, plus:</li>
                  <li>Compact rain jacket (not an umbrella)</li>
                  <li>Quick-dry clothing for humid afternoons</li>
                  <li>Waterproof bag or dry bag for electronics</li>
                  <li>Sandals that can get wet for walking post-rain</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <TipCard type="money">
            Forgot something? Oaxaca has everything you need. Sunscreen at a farmacia
            costs 80–120 MXN, rain ponchos are 30–50 MXN at any corner store, and
            the Mercado de Abastos sells cheap clothing. Do not overpack — the
            cobblestone streets punish heavy luggage.
          </TipCard>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <FAQSection faqs={faqs} />

      {/* ─── Related Content ─── */}
      <RelatedContent items={relatedGuides} />
    </>
  );
}
