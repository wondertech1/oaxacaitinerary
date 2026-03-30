"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import MarquetryBorder from "@/components/decorative/MarquetryBorder";
import TipCard from "@/components/content/TipCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";
import ExperienceCard from "@/components/cultural/ExperienceCard";

const faqs = [
  {
    question: "Are cooking classes in Oaxaca worth the money?",
    answer:
      "Yes, unequivocally. A good Oaxacan cooking class is not a tourist demonstration — it starts at the market where you learn to identify chiles, negotiate with vendors, and buy ingredients the way locals do. Then you cook 3-5 dishes from scratch, eat everything, and leave with recipes that actually work at home. At 1,500-2,500 MXN ($85-140 USD) for 4-6 hours including a market tour and a full meal, it is one of the best value cultural experiences in Mexico. The three classes listed in this guide all include market visits and are taught by Oaxacan cooks, not expat chefs.",
  },
  {
    question: "What are the best artisan villages to visit near Oaxaca?",
    answer:
      "The three essential villages are San Mart\u00edn Tilcajete for alebrijes (painted wooden spirit animals), San Bartolo Coyotepec for barro negro (black pottery), and Teotitl\u00e1n del Valle for Zapotec textile weaving. All three are within 30-45 minutes of the city and can be visited independently by colectivo for under 50 MXN each way. You do not need a tour — just show up, walk into the workshops (most have signs saying 'taller' or 'workshop'), and artisans will happily demonstrate their craft. If you only have time for one, go to Teotitl\u00e1n del Valle — the weaving cooperatives are the most impressive and you can try the backstrap loom yourself.",
  },
  {
    question: "When is Guelaguetza and how do I get tickets?",
    answer:
      "Guelaguetza takes place over two Mondays in late July (the two Mondays after July 16). The main performances happen at the Auditorio Guelaguetza on Cerro del Fort\u00edn. There are two ticket tiers: the free section (Secci\u00f3n C and D, first come first served — arrive by 6 AM) and paid sections (Secci\u00f3n A and B, roughly 300-600 MXN, sold through the Oaxaca state tourism office weeks in advance). Book accommodation 2-3 months ahead if visiting during Guelaguetza — the city fills up completely. Even if you miss the main event, the two weeks surrounding it are packed with free parades, calenda processions, mezcal tastings, and concerts throughout the city center.",
  },
  {
    question:
      "Can you visit artisan workshops without booking a tour?",
    answer:
      "Absolutely, and you should. Tours charge 800-1,500 MXN per person to shuttle you to the same villages you can reach by colectivo for 30-50 MXN. In San Mart\u00edn Tilcajete, San Bartolo Coyotepec, and Teotitl\u00e1n del Valle, workshops are open to visitors — just walk in. Most artisans welcome drop-ins and will demonstrate their techniques for free in hopes you will buy something (and you should — prices are lower than in city shops). The only exception is if you want a structured hands-on weaving lesson in Teotitl\u00e1n, which should be arranged a day ahead through one of the cooperatives.",
  },
];

export default function CulturalExperiencesPage() {
  const heroImage = getGuideImage("/oaxaca-cultural-experiences");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Cultural Experiences"
        kicker="Culture"
        kickerColor="text-anil"
        title="Oaxaca Cultural Experiences: Cooking Classes, Workshops & Festivals"
        subtitle="The stuff you&apos;ll remember long after you forget what hotel you stayed at. Real experiences, real prices, no hand-waving."
        pills={["Cooking Classes", "Artisan Workshops", "Festivals"]}
        readTime="10 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <MarquetryBorder />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca&apos;s culture is not a museum piece. It is not
                preserved behind glass or performed for tour groups on a
                schedule. It is a living, working, everyday thing &mdash; women
                grinding chocolate at 6 AM the same way their grandmothers did,
                weavers running backstrap looms while watching telenovelas,
                alebrijes painters finishing a single piece over the course of
                three weeks because that is how long it takes when you actually
                care about what you are making.
              </p>
              <p>
                This matters because the cultural experiences available to
                visitors in Oaxaca are not simulations. When you take a cooking
                class, you are cooking real food with real cooks who will eat
                the same dishes for dinner tonight. When you visit an artisan
                workshop, you are walking into someone&apos;s actual workspace,
                not a demonstration center built for tourists. When you attend
                Guelaguetza, you are watching indigenous communities perform
                dances they have been performing for centuries &mdash; not a
                choreographed show designed to sell you souvenirs on the way
                out.
              </p>
              <p>
                What follows is a specific, priced, opinionated guide to the
                cultural experiences worth your time and money in Oaxaca. Some
                of these cost nothing. Some cost $140 USD and are worth every
                peso. A few things that appear on every &ldquo;top 10
                experiences&rdquo; list are not here because they are not that
                good. We will tell you which ones and why.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── COOKING CLASSES ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <MarquetryBorder className="mb-6" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Hands-On
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Cooking Classes
            </h2>
            <p className="mt-3 text-base text-copal/70 leading-relaxed">
              A cooking class in Oaxaca is not a team-building exercise with
              aprons. It is a full-day immersion into the food culture that
              defines this region &mdash; market walks at dawn, grinding chiles
              on a metate, making mole from scratch the way it has been made
              for hundreds of years. Every class below includes a guided market
              tour, hands-on cooking of multiple dishes, and you eat everything
              you make. These are the three we recommend, and each one offers
              something different.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.05}>
              <ExperienceCard
                name="Casa de los Sabores"
                type="Cooking Class"
                description="The most well-rounded class in Oaxaca City. Starts at Mercado de Abastos where your instructor walks you through every aisle, explaining chiles, herbs, and chocolate. Back at the kitchen you cook four dishes: a mole (usually coloradito or amarillo depending on the day), tlayudas, a soup, and a seasonal side. The instructors are Oaxacan women who grew up cooking these dishes, not culinary school graduates performing ethnicity. Class size is capped at 8, so you actually get to cook, not just watch."
                price="1,800 MXN ($100 USD)"
                duration="5 hours"
                booking="Book 2-3 days ahead"
                verified="Mar 2026"
                accentColor="anil"
                rotation={-0.5}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ExperienceCard
                name="Seasons of My Heart (Rancho Aurora)"
                type="Cooking Class"
                description={<>Susana Trilling&apos;s ranch outside the city, about 45 minutes by taxi, set in the Etla Valley with views of the mountains. This is the full-day, deep-dive option. You visit a local market in Etla (much less touristy than the city markets), then cook at the ranch using wood-fired clay ovens and traditional tools. Expect 5-6 dishes including a complex mole and handmade tortillas. It is more expensive and more remote, but if you want to understand Oaxacan food at a deeper level than &lsquo;I took a class,&rsquo; this is it. Susana literally wrote the book &mdash; she has authored three cookbooks on Oaxacan cuisine. Book through <a href="https://seasonsofmyheart.com" target="_blank" rel="noopener" className="text-barro underline">Seasons of My Heart</a> directly.</>}
                price="2,500 MXN ($140 USD)"
                duration="Full day"
                booking="Book 1 week ahead"
                verified="Mar 2026"
                accentColor="nopal"
                rotation={0.5}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ExperienceCard
                name="Casa Crespo"
                type="Cooking Class"
                description="The most intimate option. Run by a Oaxacan family out of their home kitchen, classes are capped at 4-6 people. The market visit is shorter but more personal &mdash; they take you to the vendors they actually buy from and introduce you by name. Back at the house you cook 3-4 dishes in a real family kitchen (not a purpose-built teaching space), and the recipes lean toward the everyday food Oaxacans actually eat at home rather than restaurant showpieces. If you want to feel like you are cooking with a family rather than attending a class, this is the one."
                price="1,500 MXN ($85 USD)"
                duration="4 hours"
                booking="Book 1-2 days ahead"
                verified="Mar 2026"
                accentColor="barro"
                rotation={-0.3}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <TipCard type="tip">
              <strong>Which one to pick:</strong> If you have time and budget
              for only one, go with Casa de los Sabores &mdash; it is the best
              balance of depth, value, and convenience. If money is no object
              and you want the most memorable day of your trip, book Seasons of
              My Heart. If you are traveling solo or as a couple and want
              something personal over polished, choose Casa Crespo.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <TipCard type="skip">
              <strong>What to skip:</strong> The hotel-run cooking
              &ldquo;experiences&rdquo; at boutique hotels in Centro. They
              charge similar prices for shorter classes, smaller menus, and
              instructors who are hotel staff, not cooks with generations of
              knowledge. The three options above are all run by people who
              would be cooking this food whether you showed up or not.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <TipCard type="money">
              <strong>Budget alternative:</strong> If 1,500+ MXN is out of
              reach, go to Mercado de Abastos on a Saturday morning and simply
              watch. The women making mole paste at the grinding stalls will
              often explain what they are doing if you ask politely. Buy
              ingredients there and cook at your Airbnb &mdash; most of the
              market vendors will help you figure out quantities if you tell
              them what you are making. Cost: whatever you spend on
              ingredients, usually 100-200 MXN for a full meal.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ARTISAN WORKSHOPS ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <MarquetryBorder className="mb-6" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Village Workshops
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Artisan Workshops
            </h2>
            <p className="mt-3 text-base text-copal/70 leading-relaxed">
              The Valles Centrales surrounding Oaxaca City are home to Zapotec
              and Mixtec communities that have been producing crafts for
              centuries. What makes these villages remarkable is that the
              artisans are not recreating traditions for tourists &mdash; they
              are continuing a living practice. Every village listed below is
              reachable by colectivo from Oaxaca City for under 50 MXN each
              way. You do not need a guide or a tour company. Just show up,
              walk around, and ask to see workshops. Most families are happy to
              demonstrate their process.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <ScrollReveal delay={0.05}>
              <ExperienceCard
                name="Alebrijes in San Mart&iacute;n Tilcajete"
                type="Workshop"
                description="The spiritual home of alebrijes &mdash; intricately carved and painted wooden spirit animals that have become the most recognizable Oaxacan craft worldwide. Entire families work together: men carve the copal wood into jaguars, dragons, and impossible hybrid creatures, while women paint them with microscopic dot patterns that can take weeks to finish. Walk into any taller on the main road and you will be shown the full process from raw wood to finished piece. The work is astonishing up close &mdash; many pieces sell for thousands of dollars in galleries abroad but cost a fraction here. Jacobo &amp; Mar&iacute;a &Aacute;ngeles is the most famous workshop, but smaller family operations along the village roads are equally impressive and far less crowded."
                price="Free (village visit) / 500 MXN (workshop)"
                duration="3-4 hours"
                booking="Show up"
                verified="Mar 2026"
                accentColor="mezcal"
                rotation={0.3}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ExperienceCard
                name="Barro Negro in San Bartolo Coyotepec"
                type="Workshop"
                description="The village that invented barro negro &mdash; Oaxaca&apos;s signature black pottery. The technique was perfected by Do&ntilde;a Rosa Real de Nieto in the 1950s, and her descendants still run the main workshop on the town square. The clay starts grey and turns jet black through a reduction firing process (oxygen-starved kiln, no glaze, no paint). You can watch potters shape pieces by hand on a rotating base (no potter&apos;s wheel &mdash; they spin the base with their feet), and the burnishing process that creates the metallic sheen is genuinely mesmerizing. Several workshops offer free demonstrations. Buy directly from the artisans &mdash; identical pieces sell for 3-4 times more in Oaxaca City shops."
                price="Free demonstrations"
                duration="2-3 hours"
                booking="Show up"
                verified="Mar 2026"
                accentColor="barro"
                rotation={-0.4}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ExperienceCard
                name="Textile Weaving in Teotitl&aacute;n del Valle"
                type="Workshop"
                description="A Zapotec village that has been weaving textiles since before the Spanish arrived. The rugs and tapetes are made from wool dyed with natural pigments &mdash; cochineal insects for reds and pinks, indigo for blues, pomegranate for yellows, huizache bark for browns. Watching the dyeing process is as interesting as the weaving itself. Several cooperatives offer hands-on backstrap loom lessons where you weave your own small piece to take home. The community-run cooperatives pay artisans fairly and prices are transparent. This is the village where you will be most tempted to spend money, and you should &mdash; a handwoven rug from Teotitl&aacute;n is a legitimate heirloom piece."
                price="300-500 MXN (weaving lesson)"
                duration="2-3 hours"
                booking="Arrange at cooperative"
                verified="Mar 2026"
                accentColor="anil"
                rotation={0.5}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ExperienceCard
                name="Chocolate Making at Mayordomo"
                type="Workshop"
                description="Not a village trip but a city experience worth including. Mayordomo is Oaxaca&apos;s most iconic chocolate brand, and their original location on Calle Mina offers a free walk-through of their grinding process. Watch cacao beans get roasted, ground with sugar and cinnamon on a stone metate, and turned into the paste that becomes Oaxaca&apos;s famous chocolate de agua. The whole factory smells like roasted cacao and warm cinnamon. It takes 30 minutes, there is no reservation, and you will leave with a bag of chocolate (because it is impossible not to). Their custom blends let you choose your sugar-to-cacao ratio &mdash; go for 70% cacao, 30% sugar if you want it the way Oaxacans drink it."
                price="Free factory tour"
                duration="30 min"
                booking="Walk in"
                verified="Mar 2026"
                accentColor="mezcal"
                rotation={-0.2}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <TipCard type="tip">
              <strong>How to get there independently:</strong> Colectivos to
              all three villages leave from the second-class bus terminal
              (Central de Abastos area). San Mart&iacute;n Tilcajete and San
              Bartolo Coyotepec are on the same road south &mdash; you can
              visit both in a single half-day trip. Teotitl&aacute;n del Valle
              is east, about 30 minutes. Colectivos run frequently and cost
              20-40 MXN each way. Just ask at the terminal for the right
              departure point.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <TipCard type="money">
              <strong>What to buy:</strong> If you are going to buy one thing in
              Oaxaca, make it a handwoven textile from Teotitl&aacute;n del
              Valle. Small pieces (placemats, table runners) start at 200-500
              MXN. A quality rug runs 2,000-8,000 MXN depending on size and
              complexity &mdash; these same pieces sell for 5-10 times that in
              US and European shops. Buy directly from the weaver and the money
              goes straight to the family.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <TipCard type="skip">
              <strong>Skip the packaged &ldquo;artisan tour&rdquo;:</strong>{" "}
              Tour companies charge 800-1,500 MXN per person to drive you to
              these same villages in a van, give you 20 minutes at each stop,
              and take you to workshops that pay commissions. Go independently,
              spend as much time as you want, and the money you save on the
              tour goes directly to the artisans instead of a middleman.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FESTIVALS ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <MarquetryBorder className="mb-6" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Calendar
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Festivals Worth Planning Around
            </h2>
            <p className="mt-3 text-base text-copal/70 leading-relaxed">
              Oaxaca has more festivals per capita than almost anywhere in
              Mexico. Some are worth rearranging your entire trip for. Others
              are nice if you happen to be in town but not worth flying in
              specifically. Here are the four that matter most, with honest
              assessments of what to expect.
            </p>
          </ScrollReveal>

          {/* Guelaguetza */}
          <ScrollReveal delay={0.05}>
            <div className="mt-8 rounded-[6px] bg-lana border border-copal/[0.06] overflow-hidden">
              <div className="h-1.5 bg-barro opacity-60" />
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                      Late July
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-copal">
                      Guelaguetza
                    </h3>
                  </div>
                  <span className="shrink-0 bg-barro/10 text-barro font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Must-See
                  </span>
                </div>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  The single biggest cultural event in Oaxaca and arguably the
                  most important indigenous festival in Mexico. Delegations
                  from all eight regions of the state converge on the city to
                  perform traditional dances, music, and rituals in full
                  ceremonial dress. The main performances happen at the
                  Auditorio Guelaguetza on Cerro del Fort&iacute;n, but the
                  entire city transforms &mdash; parades (calendas) through
                  the streets, free concerts in the Z&oacute;calo, mezcal
                  tastings, food fairs, and spontaneous dancing in every
                  neighborhood.
                </p>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  The event spans roughly two weeks, with the main performances
                  on the two Mondays following July 16. Free seating (sections
                  C and D) requires arriving by 6 AM. Paid sections (A and B)
                  cost 300&ndash;600 MXN and are sold through the{" "}
                  <a href="https://www.oaxaca.gob.mx/guelaguetza" target="_blank" rel="noopener" className="text-barro underline">Oaxaca state
                  tourism office</a> weeks in advance. Even without tickets to the
                  main event, the surrounding festivities are worth the trip.
                </p>
                <p className="mt-3 text-sm text-barro/80 leading-relaxed font-medium">
                  Book accommodation 2&ndash;3 months ahead. The city fills
                  up. Prices double. This is non-negotiable.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Día de los Muertos */}
          <ScrollReveal delay={0.1}>
            <div className="mt-5 rounded-[6px] bg-lana border border-copal/[0.06] overflow-hidden">
              <div className="h-1.5 bg-anil opacity-60" />
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                      October 31 &ndash; November 2
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-copal">
                      D&iacute;a de los Muertos
                    </h3>
                  </div>
                  <span className="shrink-0 bg-anil/10 text-anil font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Worth It
                  </span>
                </div>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  This is the real thing, not the Canc&uacute;n resort version
                  with face paint and margaritas. In Oaxaca, D&iacute;a de los
                  Muertos is genuinely sacred. Families build elaborate altars
                  (ofrendas) for their dead, cemeteries are lit with thousands
                  of candles, and the rituals have a solemnity that is
                  profoundly moving even as a visitor. The main event is the
                  vigil at the Pante&oacute;n General on the night of November
                  1 &mdash; families picnic beside their loved ones&apos;
                  graves, mariachi bands play requests, and the candlelight
                  stretches as far as you can see.
                </p>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  In the days leading up, the city is full of comparsas
                  (costumed parades), marigold-covered altars in every shop and
                  restaurant, and the smell of copal incense everywhere. The
                  nearby village of Xoxocotl&aacute;n has an especially
                  dramatic cemetery vigil. This is the second most popular time
                  to visit after Guelaguetza &mdash; book 6&ndash;8 weeks
                  ahead.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Noche de Rábanos */}
          <ScrollReveal delay={0.15}>
            <div className="mt-5 rounded-[6px] bg-lana border border-copal/[0.06] overflow-hidden">
              <div className="h-1.5 bg-nopal opacity-60" />
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                      December 23
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-copal">
                      Noche de R&aacute;banos
                    </h3>
                  </div>
                  <span className="shrink-0 bg-nopal/10 text-nopal font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Unique
                  </span>
                </div>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  Yes, it is a radish carving competition. Yes, it sounds
                  absurd. And yes, it is genuinely one of the most charming
                  cultural events in Mexico. Every December 23, artisans
                  compete in the Z&oacute;calo to create the most elaborate
                  sculptures from giant radishes &mdash; nativity scenes,
                  Guelaguetza dancers, historical tableaux, mythological
                  creatures, all carved from radishes grown specifically for
                  this event (they are enormous, the size of your forearm).
                </p>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  The tradition dates back to the colonial era when Spanish
                  friars introduced radishes to the region and vendors carved
                  them to attract buyers at the Christmas market. The event
                  draws massive crowds and the line to see the displays can
                  stretch for blocks. Get there by 5 PM for manageable lines.
                  It is free, it takes about an hour to see everything, and it
                  is uniquely, wonderfully Oaxacan.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Semana Santa */}
          <ScrollReveal delay={0.2}>
            <div className="mt-5 rounded-[6px] bg-lana border border-copal/[0.06] overflow-hidden">
              <div className="h-1.5 bg-mezcal opacity-60" />
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
                      March / April
                    </span>
                    <h3 className="mt-1 font-heading text-xl font-bold text-copal">
                      Semana Santa
                    </h3>
                  </div>
                  <span className="shrink-0 bg-mezcal/10 text-mezcal font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    If You&apos;re There
                  </span>
                </div>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  If you happen to be in Oaxaca during Holy Week, you will
                  witness a city transformed by religious processions. On Good
                  Friday, solemn parades wind through the Centro Hist&oacute;rico
                  with floats carrying life-size statues of Christ, accompanied
                  by incense, brass bands, and hundreds of participants in
                  purple robes. The streets are carpeted with elaborate
                  alfombras &mdash; sawdust tapestries colored with natural
                  pigments and arranged into intricate patterns that take hours
                  to create and are destroyed in minutes as the procession
                  walks over them.
                </p>
                <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                  It is not worth flying to Oaxaca specifically for Semana
                  Santa &mdash; you can see similar (and arguably more dramatic)
                  processions in other Mexican and Latin American cities. But if
                  you are already in town, clear your schedule on Good Friday
                  afternoon and station yourself along Alcal&aacute; or around
                  the Z&oacute;calo. The alfombras alone are worth seeing.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <TipCard type="tip">
              <strong>Calendar hack:</strong> Even if you are not visiting
              during a major festival, Oaxaca has some kind of calenda, parade,
              or neighborhood celebration happening almost every week. Ask at
              your hotel or check with the tourism office on the Z&oacute;calo
              &mdash; there is a good chance something will overlap with your
              dates. Calendas (street processions with giant paper-mache
              figures, brass bands, and mezcal) are especially common and
              always worth following for a few blocks.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CULTURAL BUDGET BREAKDOWN ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Money
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              What This Actually Costs
            </h2>
            <p className="mt-3 text-base text-copal/70 leading-relaxed">
              Cultural experiences in Oaxaca range from completely free to
              moderately expensive, but nothing here will break the bank by
              international standards. Here is a realistic breakdown for a 4-5
              day trip.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-4 border-b border-copal/[0.06] pb-3">
                <span className="shrink-0 font-mono text-xs text-mezcal font-bold w-36">
                  Cooking class
                </span>
                <span className="text-sm text-copal/70">
                  1,500&ndash;2,500 MXN ($85&ndash;140 USD) &mdash; one class
                  is enough, two if you are a serious cook
                </span>
              </div>
              <div className="flex items-start gap-4 border-b border-copal/[0.06] pb-3">
                <span className="shrink-0 font-mono text-xs text-mezcal font-bold w-36">
                  Village colectivos
                </span>
                <span className="text-sm text-copal/70">
                  150&ndash;200 MXN total for 2&ndash;3 village round trips
                </span>
              </div>
              <div className="flex items-start gap-4 border-b border-copal/[0.06] pb-3">
                <span className="shrink-0 font-mono text-xs text-mezcal font-bold w-36">
                  Artisan purchases
                </span>
                <span className="text-sm text-copal/70">
                  200&ndash;2,000+ MXN &mdash; entirely up to you, but budget
                  at least something for the weavers
                </span>
              </div>
              <div className="flex items-start gap-4 border-b border-copal/[0.06] pb-3">
                <span className="shrink-0 font-mono text-xs text-mezcal font-bold w-36">
                  Chocolate tour
                </span>
                <span className="text-sm text-copal/70">
                  Free (Mayordomo factory visit)
                </span>
              </div>
              <div className="flex items-start gap-4 border-b border-copal/[0.06] pb-3">
                <span className="shrink-0 font-mono text-xs text-mezcal font-bold w-36">
                  Guelaguetza tickets
                </span>
                <span className="text-sm text-copal/70">
                  Free (arrive early) or 300&ndash;600 MXN for paid seating
                </span>
              </div>
              <div className="flex items-start gap-4 pt-1">
                <span className="shrink-0 font-mono text-xs text-barro font-bold w-36">
                  Realistic total
                </span>
                <span className="text-sm text-copal/80 font-medium">
                  2,000&ndash;4,000 MXN ($110&ndash;220 USD) for a solid
                  cultural program over 4&ndash;5 days
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="money">
              <strong>The free cultural experience:</strong> Every Sunday
              morning, the Z&oacute;calo hosts a free outdoor concert by the
              Oaxaca State Band &mdash; traditional Oaxacan music played by a
              full brass ensemble under the laurel trees. Locals bring their
              families, vendors sell nieves and esquites, and it is one of the
              best people-watching opportunities in the city. It costs nothing
              and tells you more about Oaxacan life than any guided tour.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FINAL WORD ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
              The Honest Take
            </h2>
            <div className="mt-4 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca is one of the few places in Mexico where
                &ldquo;cultural experience&rdquo; is not a euphemism for
                &ldquo;tourist trap with traditional music playing in the
                background.&rdquo; The artisans, cooks, and communities you
                interact with are doing what they have always done &mdash; you
                are being invited into their daily life, not a performance
                staged for your benefit.
              </p>
              <p>
                That said, respect the invitation. Do not haggle artisans down
                to their last peso on pieces that took weeks to make. Do not
                photograph people without asking. Do not treat cemetery vigils
                as photo opportunities. Oaxaca is generous with its culture
                because people here are proud of it and want to share it. The
                best thing you can do is show up with curiosity, pay fair
                prices, and leave the selfie stick at the hotel.
              </p>
              <p>
                Take a cooking class. Visit a village. Buy something directly
                from the person who made it. Sit in the Z&oacute;calo on a
                Sunday morning and listen to the band. These are the things you
                will remember about Oaxaca years from now &mdash; not the
                hotel, not the restaurant, not the Instagram spot. The moments
                where you were actually present in a culture that has been
                thriving for thousands of years and plans to keep doing so long
                after you leave.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedContent
        items={[
          {
            title: "Day Trips from Oaxaca",
            description:
              "How to reach artisan villages and archaeological sites independently.",
            href: "/oaxaca-day-trips",
            accentColor: "nopal",
          },
          {
            title: "Mezcal Guide",
            description:
              "What to drink, where to drink it, and distillery day trips.",
            href: "/oaxaca-mezcal-guide",
            accentColor: "mezcal",
          },
          {
            title: "4-Day Itinerary",
            description:
              "Day-by-day plan that weaves in the best cultural stops.",
            href: "/oaxaca-city-4-day-itinerary",
            accentColor: "barro",
          },
        ]}
      />
    </>
  );
}
