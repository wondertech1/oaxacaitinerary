"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import VenueCard from "@/components/nightlife/VenueCard";
import EveningTimeline from "@/components/nightlife/EveningTimeline";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

/* ─── FAQ data ─── */
const faqs = [
  {
    question: "Is Oaxaca nightlife safe?",
    answer:
      "Yes, Oaxaca City\u2019s Centro Hist\u00f3rico is generally safe for going out at night. The main bar and restaurant streets \u2014 Garc\u00eda Vigil, Alcal\u00e1, Murgu\u00eda, and the blocks around the Z\u00f3calo \u2014 are well-lit and populated until 1\u20132 AM on weekends. Use normal urban precautions: don\u2019t flash expensive electronics, stick to well-trafficked streets, and take a taxi or Uber home if you\u2019re heading more than a few blocks late at night. The real risk is overdrinking mezcal (it\u2019s stronger than you think at 45\u201355% ABV) and walking home on uneven cobblestones \u2014 twisted ankles are more common than crime. Avoid wandering into unfamiliar residential neighborhoods after midnight.",
  },
  {
    question: "What time does nightlife start in Oaxaca?",
    answer:
      "Late by Northern European or North American standards. Most Oaxacans eat dinner between 8 and 10 PM, so bars don\u2019t really fill up until 10\u201310:30 PM. Live music venues typically start their first set around 9\u20139:30 PM, but the crowd doesn\u2019t peak until 11 PM. If you arrive at a bar at 8 PM, you\u2019ll likely have the place to yourself \u2014 that\u2019s not a bad thing if you want a quiet mezcal, but don\u2019t assume the place is dead. It hasn\u2019t started yet. Friday and Saturday nights run until 2\u20133 AM. Sunday through Thursday, most places close by midnight or 1 AM.",
  },
  {
    question: "How much should I budget for a night out in Oaxaca?",
    answer:
      "A solid night out \u2014 dinner, mezcal at two bars, maybe a live music venue, and a late-night tlayuda \u2014 will run 400\u2013800 MXN ($25\u201350 USD) per person depending on how much mezcal you drink and whether you eat at a sit-down restaurant or street stalls. Breakdown: dinner 100\u2013250 MXN, mezcal pours 40\u2013150 MXN each (figure 3\u20135 pours across the night), cover charges 0\u2013100 MXN, late-night food 40\u201380 MXN, taxi home 40\u201360 MXN. If you stick to La Mezcalerita-priced bars (40\u201360 MXN pours) and eat street food, you can do the whole evening for under 350 MXN. If you\u2019re ordering rare agaves and cocktails at rooftop bars, budget closer to 1,200 MXN.",
  },
  {
    question: "What\u2019s the best neighborhood for nightlife?",
    answer:
      "Centro Hist\u00f3rico, specifically the rectangle bounded by Garc\u00eda Vigil (west), Alcal\u00e1 (east), Independencia (south), and Abasolo (north). Within that grid, you\u2019ll find 90% of the bars, mezcaler\u00edas, and live music venues mentioned in this guide. Everything is walkable within 10\u201315 minutes. The Jalatlaco neighborhood (east of the Centro) has a few emerging bars and a bohemian vibe, but it\u2019s still quieter after dark. Reforma neighborhood (northwest) has Archivo Maguey and some newer spots, but it\u2019s more spread out. For a concentrated, walkable night out, stay in the Centro and work your way through the grid.",
  },
];

export default function NightlifeGuidePage() {
  const heroImage = getGuideImage("/oaxaca-nightlife-guide");

  return (
    <>
      {/* ═══════════════════ 1. Hero ═══════════════════ */}
      <GuideHero
        breadcrumbLabel="Nightlife Guide"
        kicker="After Dark"
        kickerColor="text-mezcal"
        title="Oaxaca After Dark: Mezcal Bars, Live Music & Late-Night Tlayudas"
        subtitle="A practical guide to going out in Oaxaca City &mdash; where to drink mezcal, where to hear live son istme&ntilde;o and cumbia, and where to eat when everything else has closed."
        pills={["10 Venues", "Live Music", "Rooftop Bars"]}
        readTime="8 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="bg-copal" color="var(--lana)" />

      {/* ═══════════════════ 2. Dark Intro ═══════════════════ */}
      <section className="bg-copal py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-lana/70 leading-relaxed space-y-4">
              <p>
                Oaxaca&apos;s nightlife doesn&apos;t start until most North
                Americans would be thinking about going to bed. Dinner at 9 PM
                is early here. The first real drink at 10. Live music hits its
                stride around 11. And if you&apos;re still standing at midnight,
                the tlayuda stands are just warming up their comals for the
                late-night crowd.
              </p>
              <p>
                The whole thing revolves around mezcal. Not cocktails, not beer,
                not wine &mdash; mezcal. Sipped slowly from a jicara, chased
                with orange slices and sal de gusano, while a son istme&ntilde;o
                band plays in a courtyard three meters from your table. This is
                not Canc&uacute;n nightclub culture. There are no velvet ropes,
                no bottle service, no DJs playing EDM at 130 decibels. Oaxaca
                after dark is intimate, musical, and deeply local &mdash; and
                it&apos;s one of the best nights out in Mexico if you know where
                to go.
              </p>
              <p>
                This guide covers the venues worth your time: mezcaler&iacute;as
                where the staff actually know what they&apos;re pouring, live
                music spots where the bands play traditional Oaxacan genres
                alongside cumbia and jazz, rooftop bars with views that justify
                the cocktail markup, and the late-night food stands that keep the
                whole operation fueled past 2 AM. Everything has an address, a
                price range, and an honest opinion.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-copal" color="var(--lana)" />

      {/* ═══════════════════ 3. Evening Timeline ═══════════════════ */}
      <section className="bg-copal py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              The Rhythm
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-lana">
              The Evening Timeline
            </h2>
            <p className="mt-4 text-sm text-lana/50 leading-relaxed">
              Oaxaca runs on its own clock. Don&apos;t fight it &mdash; lean
              into the rhythm and your night will be better for it. Here&apos;s
              how a typical evening unfolds.
            </p>
          </ScrollReveal>

          <div className="mt-8">
            <EveningTimeline
              slots={[
                {
                  time: "6:00 \u2013 7:00 PM",
                  activity: "Pre-Dinner Mezcal at a Mezcaler\u00eda",
                  detail:
                    "Start slow. One or two pours of espad\u00edn at In Situ or La Mezcalerita while the evening light turns the cantera stone buildings gold. This is your warm-up \u2014 a chance to calibrate your palate before dinner. Sit in a courtyard if you can. The city is at its most beautiful at this hour.",
                },
                {
                  time: "7:00 \u2013 9:00 PM",
                  activity: "Dinner: Mole or Tlayudas",
                  detail:
                    "Oaxaca is a food city first and a drinking city second, and the best nights out start with a proper meal. Get mole negro at Los Pacos or a tlayuda with tasajo at the Mercado 20 de Noviembre (open until 10 PM most nights). Eating well is not optional here \u2014 mezcal on an empty stomach is a short evening.",
                },
                {
                  time: "9:00 \u2013 10:00 PM",
                  activity: "Live Music at Txalaparta or the Z\u00f3calo",
                  detail:
                    "The live music venues start their first sets around 9 PM. Txalaparta on Garc\u00eda Vigil is the reliable pick \u2014 son istme\u00f1o, jazz, cumbia, depending on the night. Alternatively, check if there\u2019s a free concert at the Z\u00f3calo kiosk, which happens most evenings. Grab a bench and a mezcal from a nearby bar.",
                },
                {
                  time: "10:00 PM \u2013 12:00 AM",
                  activity: "Bar Hopping in Centro",
                  detail:
                    "This is when the Centro comes alive. The streets between Garc\u00eda Vigil and Alcal\u00e1 fill with people. Hit a second mezcaler\u00eda, try a rooftop bar, or head to Candela for dancing. The blocks around Murgu\u00eda and 5 de Mayo have the densest concentration of bars. No need for a plan \u2014 follow the noise and the open doors.",
                },
                {
                  time: "12:00 AM \u2013 2:00 AM",
                  activity: "Late-Night Tlayudas and Wind Down",
                  detail:
                    "The last bars close around 2\u20133 AM on weekends, but the real final act is the late-night food. Tlayuda stands fire up their comals around 10 PM and run until the last customer leaves. Tlayudas Libres on Hidalgo is the classic choice. A 60 MXN tlayuda with tasajo and quesillo at 1 AM is the perfect ending to any Oaxaca night.",
                },
              ]}
            />
          </div>

          <ScrollReveal delay={0.3}>
            <TipCard type="tip">
              <strong>Don&apos;t peak too early.</strong> If you&apos;re
              ordering your fourth mezcal at 8 PM, you&apos;ll be done by 10
              when the city is just waking up. Pace yourself: one mezcal before
              dinner, dinner with water, then pick up the pace after 9 PM.
              Mezcal is 45&ndash;55% ABV &mdash; it&apos;s not beer.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      {/* ═══════════════════ 4. Mezcalerías ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Where to Drink
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Mezcaler&iacute;as: The Serious Drinking
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Oaxaca has 30-plus mezcal bars in the Centro alone. Most of them
              are perfectly fine &mdash; you&apos;ll get a decent pour of
              espad&iacute;n and a pleasant courtyard. These three are more than
              fine. They each represent a different approach to mezcal, and
              together they cover the full range from budget to deep-dive. Hit
              all three across your trip if you can.
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-5">
            <ScrollReveal delay={0.08}>
              <VenueCard
                name="In Situ"
                type="Mezcaler\u00eda"
                address="Morelos 511, Centro"
                hours="5 PM \u2013 1 AM daily"
                priceRange="60\u2013200 MXN / pour"
                description="The mezcaler\u00eda most people start with, and for good reason. In Situ carries dozens of producers from across the Oaxacan valleys, with an emphasis on small-batch artesanal labels. The staff genuinely know what they\u2019re pouring \u2014 tell them what flavors you like and they\u2019ll guide you through three or four pours that build on each other. No cocktails, no beer, no distractions. This is mezcal served the way it\u2019s meant to be: straight, in a jicara, with orange and sal de gusano on the side. The courtyard is small and fills up by 9 PM on weekends, so arrive early or be prepared to stand."
                atmosphere={["Intimate", "Expert Staff", "No Cocktails"]}
                bestFor="Serious mezcal exploration with knowledgeable guidance"
                accentColor="mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <VenueCard
                name="Mezcaloteca"
                type="Mezcaler\u00eda / Tasting Room"
                address="Reforma 506, Centro"
                hours="5 PM \u2013 12 AM (reservations recommended)"
                priceRange="280 MXN tasting flight"
                description="This is not a bar in the traditional sense. Mezcaloteca runs guided tasting sessions where a mezcalero sits with your group and walks you through a curated flight of 4\u20136 mezcals, explaining terroir, agave varieties, and production methods as you go. You\u2019ll taste things here that don\u2019t appear on any bar menu \u2014 wild agaves from remote sierra villages, ancestral clay-pot distillations, pechuga from producers who make 200 liters a year. The atmosphere is quiet, almost academic. This is for people who want to understand mezcal, not just drink it. Book ahead or arrive early \u2014 walk-ins are hit or miss."
                atmosphere={["Educational", "Quiet", "Reservations"]}
                bestFor="Learning about mezcal at a deep, guided level"
                accentColor="anil"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <VenueCard
                name="La Mezcalerita"
                type="Mezcaler\u00eda"
                address="Allende 108, Centro"
                hours="4 PM \u2013 12 AM daily"
                priceRange="40\u2013120 MXN / pour"
                description="The antidote to mezcal snobbery. La Mezcalerita is a small, unpretentious spot where locals outnumber tourists and nobody lectures you about terroir. Pours start at 40 MXN, which is about as low as it goes in the Centro without sacrificing quality. There\u2019s no menu of rare wild agaves \u2014 just solid everyday espad\u00edn, a few tobal\u00e1s when available, and a vibe that says \u201csit down, drink, don\u2019t overthink it.\u201d The atmosphere is friendly, the prices are honest, and nobody judges you for ordering the cheapest thing on the board. Perfect for your third stop of the night when your palate is warm and your budget consciousness is kicking in."
                atmosphere={["Casual", "Cheap", "Friendly"]}
                bestFor="Budget mezcal drinking without pretension"
                accentColor="barro"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.26}>
            <TipCard type="money">
              <strong>Mezcal math:</strong> A 60 MXN pour at In Situ is roughly
              $3.50 USD. A comparable pour of the same quality in Brooklyn or
              San Francisco would cost $15&ndash;20. Even the &ldquo;expensive&rdquo;
              200 MXN wild agave pours are under $12. This is not the place to
              be cheap &mdash; try the good stuff while you can afford it.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      {/* ═══════════════════ 5. Live Music ═══════════════════ */}
      <section className="bg-copal py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Live Sound
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-lana">
              Live Music Venues
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-lana/50 leading-relaxed">
              Oaxaca has one of the richest live music scenes in Mexico. On any
              given night you can hear son istme&ntilde;o (the swinging, brassy
              folk music of the Isthmus of Tehuantepec), cumbia, son jarocho,
              jazz, or experimental fusions that defy category. The venues are
              small, the bands are close, and the mezcal flows. These three
              cover the range from intimate listening rooms to proper
              dance floors.
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-5">
            <ScrollReveal delay={0.08}>
              <VenueCard
                name="Txalaparta"
                type="Live Music Venue"
                address="Garc\u00eda Vigil 307, Centro"
                hours="8 PM \u2013 2 AM (Wed\u2013Sat)"
                priceRange="No cover / 50\u2013100 MXN cover"
                description="The most reliable live music venue in the Centro. Txalaparta books a rotating lineup of son istme\u00f1o groups, jazz trios, cumbia bands, and the occasional experimental act. The space is a narrow courtyard \u2014 maybe 60 people at capacity \u2014 which means you\u2019re never more than a few meters from the band. The mezcal list is solid and reasonably priced (70\u2013120 MXN pours), and the staff don\u2019t pressure you to run up a tab. Cover charge varies: some nights are free, others are 50\u2013100 MXN depending on the act. Check their Instagram for the weekly lineup. Arrive by 9:30 PM on Fridays and Saturdays if you want a seat \u2014 by 10:30 it\u2019s standing room only."
                atmosphere={["Son Istme\u00f1o", "Jazz", "Cumbia"]}
                bestFor="Live music and mezcal in an intimate courtyard"
                accentColor="nopal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <VenueCard
                name="Z\u00f3calo Kiosk"
                type="Open-Air Concert Space"
                address="Z\u00f3calo, Centro"
                hours="Most evenings, 7\u20139 PM (free)"
                priceRange="Free"
                description="Not a venue in the traditional sense, but the bandstand kiosk in the Z\u00f3calo hosts free concerts most evenings \u2014 municipal bands, student ensembles, marimba groups, and occasionally a full brass band that fills the entire square with sound. The quality varies wildly: some nights you get a transcendent marimba set that stops foot traffic, other nights it\u2019s a covers band working through their second hour of 1980s ballads. But it\u2019s free, it\u2019s outdoors, and you can grab a mezcal from any of the surrounding bars and sit on a bench. This is how most Oaxacans spend a Tuesday evening. The concerts usually wrap by 9 PM, which makes it a perfect warm-up before heading to a proper venue."
                atmosphere={["Open Air", "Free", "Variable Quality"]}
                bestFor="Free live music and people-watching in the main square"
                accentColor="mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <VenueCard
                name="Candela"
                type="Dance Bar / Live Music"
                address="Murgu\u00eda 413, Centro"
                hours="9 PM \u2013 3 AM (Thu\u2013Sat)"
                priceRange="50\u2013150 MXN cover"
                description="Candela is where you go when you want to dance. The ground floor hosts live cumbia, salsa, and son bands Thursday through Saturday, and the energy is infectious \u2014 by 11 PM the dance floor is packed with a mix of locals and travelers moving to brass-heavy cumbia that shakes the walls. The mezcal is straightforward (espad\u00edn and maybe one or two others, nothing rare), the cocktails are passable, and the beer is cold. Nobody comes to Candela for a refined drinking experience. You come to sweat, dance badly, and have the kind of night you\u2019ll remember even if the details get blurry. Cover charge is 50\u2013150 MXN depending on the night and the band. Cash only for cover."
                atmosphere={["Dancing", "Cumbia", "Salsa"]}
                bestFor="Dancing to live cumbia and Latin music until 3 AM"
                accentColor="barro"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.26}>
            <TipCard type="tip">
              <strong>Check Instagram, not Google.</strong> Oaxaca&apos;s live
              music scene runs on Instagram Stories and WhatsApp, not websites.
              Most venues post their weekly lineup on Instagram Monday or
              Tuesday. Google listings are often outdated or wrong. Search for
              @txalaparta.oax and @candelaoaxaca for current schedules.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      {/* ═══════════════════ 6. Rooftop & Special Bars ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Up Top
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Rooftop &amp; Special Bars
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Oaxaca doesn&apos;t have a rooftop bar culture the way Mexico City
              does, but there are a handful of terraces worth the cocktail
              markup. The appeal is simple: Oaxaca&apos;s skyline is a jumble
              of colonial domes, cantera stone facades, and the Sierra Norte
              mountains beyond. From three stories up, with a mezcal cocktail in
              hand and the last golden light hitting Santo Domingo, it&apos;s
              hard to argue with the premium.
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-5">
            <ScrollReveal delay={0.08}>
              <VenueCard
                name="Casa Oaxaca Caf\u00e9"
                type="Rooftop Bar / Restaurant"
                address="Garc\u00eda Vigil 407, Centro"
                hours="1 PM \u2013 11 PM daily"
                priceRange="120\u2013180 MXN cocktails"
                description="The best sunset drink in the city, full stop. Casa Oaxaca\u2019s rooftop terrace sits above the colonial roofline with unobstructed views of Santo Domingo\u2019s towers and the mountains beyond. The cocktail program is mezcal-forward and well-executed \u2014 not the lazy \u201cmezcal margarita\u201d you get at tourist bars, but properly conceived drinks with Oaxacan ingredients like tepache, pasilla chile, and chapulines salt. A cocktail runs 120\u2013180 MXN ($7\u201311 USD), which is a premium by Oaxaca standards but reasonable for the setting. The food is good but expensive \u2014 stick to drinks unless you\u2019re splurging. Arrive by 6 PM for sunset and you\u2019ll get a table. By 7 PM on weekends, there\u2019s often a short wait."
                atmosphere={["Rooftop", "Views", "Cocktails"]}
                bestFor="Sunset drinks with the best view in Oaxaca"
                accentColor="mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <VenueCard
                name="Los Danzantes Terrace"
                type="Restaurant / Terrace Bar"
                address="Alcal\u00e1 403, Centro"
                hours="1 PM \u2013 12 AM daily"
                priceRange="140\u2013200 MXN cocktails"
                description="Los Danzantes is primarily a restaurant \u2014 one of Oaxaca\u2019s best, in fact \u2014 but the upstairs terrace functions as a standalone bar and it\u2019s worth visiting even if you\u2019re not eating. The setting is a walled courtyard open to the sky, with mature trees and soft lighting that makes the whole place feel like a private garden. The mezcal list is curated and priced fairly for the quality of the space. Their house mezcal cocktails are inventive without being gimmicky. The main downside is price: this is the most expensive bar on this list, with cocktails at 140\u2013200 MXN and food running 200\u2013400 MXN for mains. But the atmosphere is impeccable, especially on a warm evening. This is where you come when you want a date-night-quality drink in a setting that earns its prices."
                atmosphere={["Elegant", "Garden Terrace", "Date Night"]}
                bestFor="A refined evening with excellent cocktails and atmosphere"
                accentColor="anil"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <TipCard type="skip">
              <strong>Skip the Z&oacute;calo terrace bars.</strong> The
              restaurants lining the Z&oacute;calo square have rooftop terraces
              with views, but the drinks are overpriced (180&ndash;250 MXN
              cocktails), the mezcal list is generic, and the food is mediocre
              tourist fare. You&apos;re paying for the location, not the
              experience. Walk one block north to Garc&iacute;a Vigil and the
              quality doubles while the prices drop.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      {/* ═══════════════════ 7. Late Night Eats ═══════════════════ */}
      <section className="bg-copal py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              After Midnight
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-lana">
              Late-Night Eats
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-lana/60 leading-relaxed space-y-4">
              <p>
                Oaxaca&apos;s late-night food scene is built on one thing:
                tlayudas. These massive, crispy tortillas loaded with asiento
                (rendered pork lard), black beans, quesillo, and your choice of
                tasajo (dried beef), cecina (marinated pork), or chorizo are the
                city&apos;s answer to the 2 AM pizza slice. The difference is
                that a Oaxacan tlayuda at midnight is significantly better than
                any pizza you&apos;ve eaten drunk.
              </p>
              <p>
                The stands fire up their comals around 10 PM and run until the
                last customer staggers away, usually around 2&ndash;3 AM on
                weekends. Most are clustered near the Z&oacute;calo and along
                Hidalgo and Mina streets. Here are the ones worth seeking out.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 rounded-[6px] bg-lana/[0.06] border border-lana/[0.06] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-lana">
                Tlayudas Libres
              </h3>
              <div className="mt-1 text-[11px] font-mono text-lana/40 uppercase tracking-wider">
                Hidalgo, near 20 de Noviembre &bull; 10 PM &ndash; 3 AM
              </div>
              <p className="mt-3 text-sm text-lana/55 leading-relaxed">
                The most famous late-night tlayuda stand in Oaxaca. The name is
                slightly misleading &mdash; the tlayudas aren&apos;t free, they
                just happen to be on Calle Libres, a block south of the main
                market. A full tlayuda with tasajo runs{" "}
                <span className="font-mono text-xs font-bold text-mezcal">
                  50&ndash;70 MXN
                </span>
                , and it&apos;s enormous. The quality is consistent, the
                quesillo is stringy and molten, and the asiento gives the
                tortilla base a savory richness that soaks up whatever
                mezcal is still in your system. This is the definitive post-bar
                food experience in Oaxaca. Expect a short line on Friday and
                Saturday nights.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-4 rounded-[6px] bg-lana/[0.06] border border-lana/[0.06] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-lana">
                Street Stands Near the Z&oacute;calo
              </h3>
              <div className="mt-1 text-[11px] font-mono text-lana/40 uppercase tracking-wider">
                South side of Z&oacute;calo &bull; 9 PM &ndash; 2 AM
              </div>
              <p className="mt-3 text-sm text-lana/55 leading-relaxed">
                On the south side of the Z&oacute;calo, near the corner of
                Flores Mag&oacute;n and Hidalgo, a cluster of street vendors
                sets up each evening selling tacos, memelas, and empanadas de
                amarillo. The empanadas &mdash; masa pockets filled with mole
                amarillo and chicken &mdash; are{" "}
                <span className="font-mono text-xs font-bold text-mezcal">
                  20&ndash;30 MXN
                </span>{" "}
                each and criminally good at midnight. The memelas (thick corn
                masa topped with beans, salsa, and crumbled cheese) run{" "}
                <span className="font-mono text-xs font-bold text-mezcal">
                  15&ndash;25 MXN
                </span>
                . None of these stands have names or menus &mdash; just look for
                the comals, the crowds, and the smell of toasting corn.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-4 rounded-[6px] bg-lana/[0.06] border border-lana/[0.06] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-lana">
                Tacos de Guisado on Mina
              </h3>
              <div className="mt-1 text-[11px] font-mono text-lana/40 uppercase tracking-wider">
                Calle Mina, between D&iacute;az Ordaz &amp; 20 de Noviembre
                &bull; 8 PM &ndash; 1 AM
              </div>
              <p className="mt-3 text-sm text-lana/55 leading-relaxed">
                If you want something beyond tlayudas, the guisado taco stands
                on Calle Mina serve stewed fillings in soft corn tortillas:
                chicharr&oacute;n prensado (pressed pork crackling in red
                salsa), mole verde, rajas con crema, and whatever else the
                cocinera made that day. Tacos run{" "}
                <span className="font-mono text-xs font-bold text-mezcal">
                  15&ndash;25 MXN
                </span>{" "}
                each, and three or four make a proper late-night meal. These
                stands close earlier than the tlayuda spots &mdash; usually by 1
                AM &mdash; so don&apos;t wait too long.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      {/* ═══════════════════ 8. Tips ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Practical
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Nightlife Tips &amp; Warnings
            </h2>
          </ScrollReveal>

          <div className="mt-6 space-y-0">
            <ScrollReveal delay={0.06}>
              <TipCard type="tip">
                <strong>Safety at night:</strong> Oaxaca&apos;s Centro is
                well-lit and safe on the main streets (Alcal&aacute;,
                Garc&iacute;a Vigil, Murgu&iacute;a, 5 de Mayo). Stick to these
                corridors after midnight. If you&apos;re more than 5 blocks
                from the Z&oacute;calo late at night, take a taxi or Uber home
                &mdash; rides within the Centro cost 30&ndash;50 MXN. Don&apos;t
                walk through the Abastos market area after dark. Keep your phone
                in your front pocket and leave expensive watches at the hotel.
              </TipCard>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <TipCard type="skip">
                <strong>Avoid overpriced tourist traps.</strong> Any bar with a
                promoter standing outside offering free mezcal shots is not a
                mezcaler&iacute;a &mdash; it&apos;s a tourist bar pouring
                industrial-grade spirit at triple the price. The Z&oacute;calo
                square bars are the worst offenders: 180&ndash;250 MXN for a
                mezcal cocktail that would cost 80 MXN two blocks away. If the
                menu is only in English and the prices aren&apos;t in pesos,
                keep walking.
              </TipCard>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <TipCard type="money">
                <strong>Cover charge reality check:</strong> Most mezcaler&iacute;as
                have no cover. Live music venues charge 0&ndash;150 MXN
                depending on the night and the act. Cash is almost always
                required for cover &mdash; keep a few 50 and 100 MXN bills
                handy. Some venues include a drink with the cover charge (ask
                &ldquo;&iquest;Incluye bebida?&rdquo; at the door). If a bar
                tries to charge more than 150 MXN cover and doesn&apos;t have a
                named band playing, it&apos;s a ripoff.
              </TipCard>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <TipCard type="tip">
                <strong>Mezcal pace guide:</strong> One jicara of mezcal is
                roughly 30&ndash;45 ml at 45&ndash;55% ABV, which means two
                pours equals about one strong cocktail. A reasonable evening is
                3&ndash;5 pours across 4&ndash;5 hours, with food in between.
                If someone offers to buy you a round of &ldquo;shots,&rdquo;
                they&apos;re either a tourist or they&apos;re trying to get you
                drunk fast. Oaxacans sip mezcal &mdash; they don&apos;t
                shoot it.
              </TipCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <TipCard type="money">
                <strong>Tipping at bars:</strong> Bartender tips in Oaxaca run
                10&ndash;15% of your tab, which is standard in Mexico. At small
                mezcaler&iacute;as with no printed bill, round up generously
                &mdash; if your tab is 180 MXN, leave 200. At live music venues,
                the musicians sometimes pass a hat or have a tip jar near the
                stage. Dropping 20&ndash;50 MXN if you enjoyed the set is
                appreciated and helps sustain a scene that runs on passion more
                than profit.
              </TipCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      {/* ═══════════════════ 9. FAQs ═══════════════════ */}
      <FAQSection faqs={faqs} />

      {/* ═══════════════════ 10. Related Content ═══════════════════ */}
      <RelatedContent
        items={[
          {
            title: "Oaxaca Mezcal Guide",
            description:
              "Agave varieties, the 5 best bars, distillery day trips, and what to buy to take home.",
            href: "/oaxaca-mezcal-guide",
            accentColor: "mezcal",
          },
          {
            title: "Where to Stay in Oaxaca",
            description:
              "Neighborhood breakdown, hotel picks by budget, and which areas to avoid.",
            href: "/where-to-stay-oaxaca",
            accentColor: "anil",
          },
          {
            title: "Oaxaca Street Food Guide",
            description:
              "12 dishes to eat and where to find them, with prices in MXN and exact locations.",
            href: "/oaxaca-street-food-guide",
            accentColor: "barro",
          },
        ]}
      />
    </>
  );
}
