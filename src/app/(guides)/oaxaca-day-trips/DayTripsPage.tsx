"use client";

import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import { getGuideImage } from "@/lib/constants/guides";
import RelatedContent from "@/components/shared/RelatedContent";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import DayTripCard from "@/components/daytrips/DayTripCard";
import ValleyMap from "@/components/daytrips/ValleyMap";

/* ─── Map Markers ─────────────────────────────────────────────── */
const markers = [
  { id: "monte-alban", name: "Monte Albán", x: 120, y: 100, distance: "9 km", time: "30 min" },
  { id: "hierve", name: "Hierve el Agua", x: 340, y: 80, distance: "70 km", time: "1.5 hrs" },
  { id: "mitla", name: "Mitla", x: 330, y: 180, distance: "46 km", time: "1 hr" },
  { id: "el-tule", name: "El Tule", x: 290, y: 200, distance: "13 km", time: "20 min" },
  { id: "teotitlan", name: "Teotitlán", x: 310, y: 140, distance: "31 km", time: "40 min" },
  { id: "san-bartolo", name: "San Bartolo", x: 160, y: 260, distance: "12 km", time: "25 min" },
];

/* ─── FAQ Data ────────────────────────────────────────────────── */
const faqs = [
  {
    question: "Can I visit all 6 day trips in one day?",
    answer:
      "No, and you shouldn't try. The eastern valley destinations (Mitla, El Tule, Teotitlán, Hierve el Agua) can technically be combined into one very long day, but you'll be exhausted and won't enjoy any of them properly. Pick 2-3 per day maximum. Monte Albán and San Bartolo are in different directions and work as a separate half-day each.",
  },
  {
    question: "Are colectivos safe for tourists?",
    answer:
      "Absolutely. Colectivos are shared minivans or taxis used by locals every day. They're the standard transport in the Oaxaca Valley, not some adventure-tourism gimmick. You'll sit alongside families, market vendors, and students. The only 'risk' is that they leave when full, so you might wait 10-20 minutes. All the colectivo terminals mentioned in this guide are well-established departure points that have operated for years.",
  },
  {
    question: "Should I book a tour or go independently?",
    answer:
      "For Monte Albán, Mitla, El Tule, Teotitlán, and San Bartolo: go independently. Colectivos are cheap, frequent, and easy. For Hierve el Agua: a tour or shared taxi makes more sense because the road is rough, colectivos from Mitla are infrequent, and you'd need to change transport twice. Tours to Hierve typically cost 350-500 MXN and often combine it with Mitla and El Tule, which is decent value.",
  },
  {
    question: "What's the best day of the week for day trips?",
    answer:
      "Avoid Mondays — Monte Albán and Mitla are open but less staffed, and some village workshops in Teotitlán and San Bartolo close. Tuesday through Saturday is ideal. Sunday works for ruins but Teotitlán holds its weekly market (great for textiles). If you're visiting Hierve el Agua, weekdays are significantly less crowded than weekends when Oaxaqueño families visit.",
  },
  {
    question: "How much cash should I bring for a day trip?",
    answer:
      "Bring 300-500 MXN per person in small bills (20s and 50s). Colectivo drivers rarely have change for 500 MXN notes. Entry fees at ruins are cash-only. Village workshops sometimes accept card but don't count on it. ATMs exist in Mitla town but not at other villages. The Oaxaca City ATMs at Banamex on the zócalo or the Santander on Alcalá are the most reliable.",
  },
];

export default function DayTripsPage() {
  const heroImage = getGuideImage("/oaxaca-day-trips");

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <GuideHero
        breadcrumbLabel="Day Trips"
        kicker="Day Trips"
        kickerColor="text-nopal"
        title="6 Day Trips from Oaxaca City, Ranked by a Repeat Visitor"
        subtitle="Not every day trip from Oaxaca is worth your time. After six visits to the valley, here's what I'd actually do again — and what I'd skip."
        pills={["6 Destinations", "Transport Costs", "Honest Verdicts"]}
        readTime="12 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="my-0" />

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base text-copal/70 leading-relaxed">
              Every Oaxaca blog post lists the same day trips in the same order and
              calls all of them &ldquo;must-see.&rdquo; They&rsquo;re not. Some of these
              destinations are genuinely transformative — the kind of places that
              make you rethink what you thought you knew about pre-Hispanic
              civilizations and living craft traditions. Others are fine. Pleasant,
              even. But &ldquo;pleasant&rdquo; is not worth a four-hour round trip on
              a rutted mountain road when you could spend that time eating tlayudas
              at the Mercado de Abastos or watching a mezcal distillation in a
              backyard palenque.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              This guide ranks six day trips from Oaxaca City on one criterion:{" "}
              <strong className="text-copal/90">
                is the experience worth the time and effort to get there?
              </strong>{" "}
              I give each destination an honest verdict — &ldquo;worth it,&rdquo;
              &ldquo;it depends,&rdquo; or &ldquo;skip it&rdquo; — along with real
              transport prices, colectivo terminal locations, and the exact amount of
              time you actually need. No affiliate links influencing the rankings.
              No tour-company partnerships. Just opinions from someone who has taken
              all of these trips multiple times.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Valley Map ───────────────────────────────────────── */}
      <section className="py-8 md:py-12 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Orientation
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Oaxaca Valley at a Glance
            </h2>
            <p className="mt-3 text-sm text-copal/60 leading-relaxed max-w-xl">
              Oaxaca City sits in a Y-shaped valley surrounded by the Sierra Madre
              del Sur. All six destinations fan out from the city center. Hover or
              tap a marker to see distances and travel times.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="mt-8">
              <ValleyMap markers={markers} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="mt-6 text-xs text-copal/40 text-center font-mono">
              Distances are approximate, measured from Oaxaca City zócalo.
              Times reflect typical colectivo/taxi travel, not driving.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="my-0" />

      {/* ── Day Trip Cards ───────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Rankings
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              6 Destinations, Honestly Ranked
            </h2>
            <p className="mt-3 text-sm text-copal/60 leading-relaxed max-w-xl">
              Listed in the order I&rsquo;d recommend them to a friend with 4-5 days
              in Oaxaca. Your priorities may differ — a textile obsessive should
              put Teotitlán first, an archaeology nerd Monte Albán.
            </p>
          </ScrollReveal>

          {/* 1. Monte Albán */}
          <ScrollReveal delay={0.06}>
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] text-copal/30 uppercase tracking-wider">
                  01
                </span>
                <span className="h-px flex-1 bg-copal/[0.06]" />
              </div>
              <DayTripCard
                name="Monte Albán"
                tagline="Ancient Zapotec capital on a flattened mountaintop"
                description="The Zapotecs leveled an entire mountain summit around 500 BCE and built a ceremonial center that dominated the valley for over a thousand years. The scale is staggering — the Grand Plaza alone is larger than two football fields. You'll see the Danzantes carvings (actually depictions of sacrificed captives), the astronomical Observatory, and panoramic views of the entire valley. The on-site museum is small but well-curated. Go early morning when fog lifts off the platforms — it's genuinely atmospheric. The colectivo from Calle Trujano takes 30 minutes and drops you at the parking lot. Buy your ticket at the booth, not from anyone approaching you in the lot."
                distance="9 km"
                timeNeeded="3-4 hours"
                transport="Colectivo 80 MXN RT"
                cost={<>90 MXN entry (<a href="https://www.inah.gob.mx" target="_blank" rel="noopener" className="text-barro underline">INAH</a>)</>}
                verdict="worth-it"
                verdictNote="The single most important archaeological site in the Oaxaca Valley and one of the most significant in all of Mesoamerica. Even if you're not into ruins, the mountain-top setting alone justifies the half-day. Go before 10am to beat tour buses."
                accentColor="nopal"
              />
            </div>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Colectivo terminal for Monte Albán:</strong> Shared vans
            depart from the Hotel Rivera del Ángel area on Calle Mina 518, near
            the corner of Díaz Ordaz. First departure around 8:00am, then
            roughly every 30 minutes. Return vans leave from the parking lot —
            the last one is at 5:00pm. Costs 40 MXN each way per person. Don&rsquo;t
            let anyone tell you it&rsquo;s more.
          </TipCard>

          {/* 2. Mitla */}
          <ScrollReveal delay={0.06}>
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] text-copal/30 uppercase tracking-wider">
                  02
                </span>
                <span className="h-px flex-1 bg-copal/[0.06]" />
              </div>
              <DayTripCard
                name="Mitla"
                tagline="Zapotec-Mixtec mosaics that make Monte Albán look plain"
                description="If Monte Albán is about scale, Mitla is about precision. The geometric mosaic friezes on the Hall of Columns are made from thousands of individually carved stone pieces fitted together without mortar — a technique so precise that a knife blade can't fit between them. These aren't painted decorations or carvings; they're three-dimensional stone puzzles representing Zapotec cosmological patterns. The Spanish built a church directly on top of part of the site, which is its own kind of fascinating. The town of Mitla itself is worth 30 minutes of wandering — there's a good mezcal shop on the main road and a few textile vendors with reasonable prices. Colectivos leave from the second-class bus terminal on the Periférico."
                distance="46 km"
                timeNeeded="2-3 hours"
                transport="Colectivo 40 MXN"
                cost="85 MXN entry"
                verdict="worth-it"
                verdictNote="The mosaics at Mitla are arguably more impressive than anything at Monte Albán, and fewer tourists visit. The colectivo ride through the valley is beautiful. Combine it with El Tule on the way back for a solid half-day."
                accentColor="nopal"
              />
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Budget hack:</strong> Colectivos to Mitla (40 MXN one way)
            depart from a lot on the Periférico near the second-class bus
            station. Tell the driver &ldquo;Mitla&rdquo; — some vans go only to
            Tlacolula. The ride takes about an hour with stops. Alternatively,
            an ADO bus goes direct for 55 MXN but less frequently.
          </TipCard>

          {/* 3. Teotitlán del Valle */}
          <ScrollReveal delay={0.06}>
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] text-copal/30 uppercase tracking-wider">
                  03
                </span>
                <span className="h-px flex-1 bg-copal/[0.06]" />
              </div>
              <DayTripCard
                name="Teotitlán del Valle"
                tagline="Zapotec weaving village where every family has a loom"
                description="Teotitlán has been a weaving village since pre-Hispanic times — the Aztecs demanded textiles as tribute. Today, almost every household has a foot-pedal loom, and many families dye their wool with natural pigments: cochineal (deep crimson), indigo (blue), pomegranate (yellows), and huizache bark (browns). The best part isn't buying a rug (though you should — prices are 40-60% less than in Oaxaca City shops). It's watching the entire process: carding raw wool, spinning it, extracting cochineal from dried insects, mixing it with lime juice to shift the color, and then the hypnotic rhythm of the loom. Ask any workshop for a demonstration — they'll happily show you. The community museum is tiny but has a good collection of Zapotec artifacts found during church construction."
                distance="31 km"
                timeNeeded="3-4 hours"
                transport="Colectivo 25 MXN"
                cost="Free"
                verdict="worth-it"
                verdictNote="The best place in the Oaxaca Valley to understand textile traditions firsthand. You're buying directly from the families who make the pieces, at real prices. Workshop visits are typically free — you're not obligated to buy, though you'll want to."
                accentColor="anil"
              />
            </div>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Best workshops in Teotitlán:</strong> Walk past the main
            church square and head uphill into the residential streets. The
            workshops closest to the bus stop cater to tour groups and charge
            higher prices. Families further from the center are often more
            welcoming, less rehearsed, and their prices reflect what locals
            actually pay. A good-quality 1m x 1.5m rug with natural dyes runs
            1,200-2,500 MXN depending on complexity.
          </TipCard>

          {/* 4. San Bartolo Coyotepec */}
          <ScrollReveal delay={0.06}>
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] text-copal/30 uppercase tracking-wider">
                  04
                </span>
                <span className="h-px flex-1 bg-copal/[0.06]" />
              </div>
              <DayTripCard
                name="San Bartolo Coyotepec"
                tagline="Birthplace of Oaxaca's iconic black pottery"
                description="San Bartolo is the only place in the world where barro negro — Oaxaca's signature black clay pottery — is produced. The technique was revived in the 1950s by Doña Rosa Real de Nieto, who discovered that burnishing the clay with quartz before firing gives it the distinctive metallic sheen. Her family workshop (now run by descendants) offers free demonstrations of the entire process, from wedging the clay to the spectacular kiln firing that turns grey clay jet-black through reduction. The village is compact — you can walk between a dozen workshops in an hour. Prices are dramatically lower than Oaxaca City: a medium decorative piece that costs 400 MXN on Alcalá sells for 150-250 MXN here. Quality varies, so compare a few workshops before buying."
                distance="12 km"
                timeNeeded="2-3 hours"
                transport="Colectivo 15 MXN"
                cost="Free"
                verdict="worth-it"
                verdictNote="If you're going to buy any black pottery (and you should — it's Oaxaca's most distinctive craft), buy it here. You'll save 40-60% versus city prices and actually meet the artisans. The Doña Rosa workshop alone is worth the 25-minute colectivo ride."
                accentColor="barro"
              />
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>Savings tip:</strong> That barro negro skull you saw on
            Alcalá for 600 MXN? It&rsquo;s 200-350 MXN in San Bartolo, and
            you&rsquo;re buying from the family who made it. The colectivo from
            the Periférico costs 15 MXN. Total round-trip transport: 30 MXN.
            You&rsquo;ll save more than that on a single piece.
          </TipCard>

          {/* 5. Hierve el Agua */}
          <ScrollReveal delay={0.06}>
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] text-copal/30 uppercase tracking-wider">
                  05
                </span>
                <span className="h-px flex-1 bg-copal/[0.06]" />
              </div>
              <DayTripCard
                name="Hierve el Agua"
                tagline="Petrified waterfalls and natural infinity pools"
                description={<>The Instagram photos look incredible: turquoise infinity pools perched on a cliff edge with valley views, flanked by petrified &apos;waterfalls&apos; of mineral deposits. The reality is more nuanced. The pools are real and genuinely beautiful — mineral-rich spring water fills shallow basins on the cliff edge and the views are expansive. But. The road from Mitla is brutal — 28 km of unpaved switchbacks that take nearly an hour in a shared truck. The petrified cascades are smaller than photos suggest (they&apos;re about 12 meters, not the Niagara-scale formations you might imagine). The site gets absolutely packed on weekends. And the community that manages the site has had intermittent conflicts that sometimes close access entirely — check <a href="https://www.oaxaca.travel/en/hierve-el-agua" target="_blank" rel="noopener" className="text-barro underline">current access info</a> before committing to the trip. On a clear weekday with few visitors? It&apos;s magical. On a crowded Sunday after a rattling truck ride? Less so.</>}
                distance="70 km"
                timeNeeded="Full day"
                transport="Tour 350 MXN or shared taxi"
                cost="50 MXN entry"
                verdict="conditional"
                verdictNote="The road is genuinely terrible and the round trip eats a full day. On a clear weekday it can be beautiful, but many visitors report feeling underwhelmed given the effort required. If you have 5+ days, sure. If you only have 3-4 days, spend the time in the valley instead."
                accentColor="barro"
              />
            </div>
          </ScrollReveal>

          <TipCard type="skip">
            <strong>Reality check:</strong> Hierve el Agua is the most
            over-recommended day trip from Oaxaca. The petrified cascades are
            genuinely cool but not life-changing. The &ldquo;infinity
            pool&rdquo; is a shallow mineral basin — you sit in it, you don&rsquo;t
            swim. If Instagram photos are your main motivation, know that they&rsquo;re
            shot with wide-angle lenses that make everything look 3x bigger. If
            you do go, book a tour that combines it with Mitla and El Tule so
            the driving is at least worthwhile.
          </TipCard>

          {/* 6. El Tule */}
          <ScrollReveal delay={0.06}>
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[11px] text-copal/30 uppercase tracking-wider">
                  06
                </span>
                <span className="h-px flex-1 bg-copal/[0.06]" />
              </div>
              <DayTripCard
                name="El Tule"
                tagline="The widest tree on Earth, in a churchyard"
                description="El Árbol del Tule is a Montezuma cypress with a trunk circumference of 42 meters — wider than it is tall, wider than any tree on the planet. It's estimated to be between 1,500 and 3,000 years old. The tree sits in the churchyard of Santa María del Tule and is surrounded by a low iron fence. You walk around it, gape at the gnarled trunk (locals will point out shapes — a lion, a crocodile, an elephant), take some photos, and then you're done. There's a small market outside selling tejate, nieves, and fried grasshoppers. Honestly, the tree is impressive — the sheer mass of it is hard to comprehend in photos. But it's a 30-minute stop, not a destination. Never make a special trip just for this."
                distance="13 km"
                timeNeeded="30-45 min"
                transport="Colectivo 15 MXN"
                cost="Free"
                verdict="conditional"
                verdictNote="It's the widest tree in the world and it is genuinely impressive in person. But it's a photo stop, not a day trip. Only visit as a quick detour on the way to or from Mitla or Teotitlán. Never go just for this."
                accentColor="mezcal"
              />
            </div>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>Combo tip:</strong> El Tule is directly on the road between
            Oaxaca City and Mitla/Teotitlán. Every colectivo heading east passes
            through. Tell your driver &ldquo;me bajo en el Tule&rdquo; (drop me at
            El Tule), spend 30 minutes, then flag down the next colectivo
            continuing to your real destination. Total added cost: 0 MXN extra
            (you&rsquo;re already passing through).
          </TipCard>
        </div>
      </section>

      <ZapotecDivider className="my-0" />

      {/* ── Combining Day Trips ──────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Strategy
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              How to Combine Day Trips
            </h2>
            <p className="mt-3 text-sm text-copal/60 leading-relaxed max-w-xl">
              Geography makes some combinations natural and others a waste of time.
              Here are the routes that actually work, tested across multiple trips.
            </p>
          </ScrollReveal>

          {/* Combo 1 */}
          <ScrollReveal delay={0.08}>
            <div className="mt-8 bg-white rounded-[6px] border border-copal/[0.06] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-nopal/60 uppercase tracking-wider mt-1">
                  Combo A
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-copal">
                    The Eastern Valley Loop (Half Day)
                  </h3>
                  <p className="text-sm text-copal/60 leading-relaxed mt-2">
                    <strong className="text-copal/80">Mitla + El Tule</strong> —
                    Take an early colectivo toward Mitla (40 MXN). Ask to stop at
                    El Tule first, spend 30 minutes with the tree, then flag down
                    the next colectivo to continue to Mitla. Explore the ruins for
                    2 hours, grab lunch at one of the comedores on the main street
                    (tlayuda for 60 MXN), then colectivo back. You&rsquo;re home by
                    2pm. Total cost: about 180 MXN per person including entry and
                    lunch.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Combo 2 */}
          <ScrollReveal delay={0.12}>
            <div className="mt-4 bg-white rounded-[6px] border border-copal/[0.06] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-anil/60 uppercase tracking-wider mt-1">
                  Combo B
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-copal">
                    Textiles + Mezcal (Full Morning to Afternoon)
                  </h3>
                  <p className="text-sm text-copal/60 leading-relaxed mt-2">
                    <strong className="text-copal/80">
                      Teotitlán del Valle + a mezcal palenque
                    </strong>{" "}
                    — Colectivo to Teotitlán (25 MXN), spend 2-3 hours visiting
                    weaving workshops. On the return, ask the colectivo driver to
                    drop you at the Matatlán turnoff — this is the
                    &ldquo;world capital of mezcal&rdquo; and several palenques
                    (small distilleries) accept walk-in visitors. Try Real Minero
                    or Lalocura if they&rsquo;re open, but any family-run palenque
                    with a working tahona stone is worth 30 minutes. Colectivo back
                    to Oaxaca. Total: around 120 MXN for transport plus whatever
                    you spend on textiles and mezcal.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Combo 3 */}
          <ScrollReveal delay={0.16}>
            <div className="mt-4 bg-white rounded-[6px] border border-copal/[0.06] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-barro/60 uppercase tracking-wider mt-1">
                  Combo C
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-copal">
                    The Full Eastern Day (If You Must Do Hierve)
                  </h3>
                  <p className="text-sm text-copal/60 leading-relaxed mt-2">
                    <strong className="text-copal/80">
                      El Tule + Mitla + Hierve el Agua
                    </strong>{" "}
                    — This is the standard tour route and the only way Hierve el
                    Agua makes logistical sense. Either book a tour (350-500 MXN)
                    or hire a taxi for the day (negotiate 800-1,200 MXN for 2-4
                    passengers). You&rsquo;ll leave around 8am, hit El Tule
                    quickly, spend an hour at Mitla, then drive the rough road to
                    Hierve el Agua, swim in the pools for an hour, and return by
                    5pm. It&rsquo;s a long day but it works. I&rsquo;d only recommend
                    this if you have 5+ days in Oaxaca and have already done the
                    things that matter more.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Combo 4 */}
          <ScrollReveal delay={0.2}>
            <div className="mt-4 bg-white rounded-[6px] border border-copal/[0.06] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-mezcal/60 uppercase tracking-wider mt-1">
                  Combo D
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-copal">
                    Craft Morning (Half Day)
                  </h3>
                  <p className="text-sm text-copal/60 leading-relaxed mt-2">
                    <strong className="text-copal/80">
                      San Bartolo Coyotepec + Monte Albán
                    </strong>{" "}
                    — These two are in roughly opposite directions but both close
                    to the city. Start with San Bartolo by 9am (colectivo 15 MXN,
                    25 minutes south), spend 90 minutes with the potters, return to
                    the city by 11am, grab a quick coffee, then take the Monte
                    Albán colectivo for an afternoon visit when the light is
                    beautiful on the platforms. This combo works because both are
                    short, close, and deeply worthwhile.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <TipCard type="tip">
            <strong>The best day-trip schedule for 4 days in Oaxaca:</strong>{" "}
            Day 1 — Explore the city, eat everything. Day 2 — Monte Albán
            morning, San Bartolo afternoon. Day 3 — Teotitlán + mezcal
            palenque. Day 4 — Mitla + El Tule, or just spend the day in the
            city if you&rsquo;re tired. Skip Hierve el Agua unless you have
            a fifth day and genuinely want to go.
          </TipCard>
        </div>
      </section>

      {/* ── Practical Transport Section ──────────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Transport
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Colectivo Cheat Sheet
            </h2>
            <p className="mt-3 text-sm text-copal/60 leading-relaxed max-w-xl">
              Colectivos are shared minivans that run fixed routes. They&rsquo;re
              how Oaxaqueños get around the valley. No apps, no schedules — just
              show up at the departure point and wait for one to fill up.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-copal/[0.08]">
                    <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-wider text-copal/40">
                      Destination
                    </th>
                    <th className="text-left py-3 pr-4 font-mono text-[10px] uppercase tracking-wider text-copal/40">
                      Departs From
                    </th>
                    <th className="text-right py-3 font-mono text-[10px] uppercase tracking-wider text-copal/40">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="text-copal/70">
                  {[
                    { dest: "Monte Albán", from: "Calle Mina 518 (Hotel Rivera del Ángel)", price: "40 MXN" },
                    { dest: "Mitla", from: "Periférico / 2nd-class terminal", price: "40 MXN" },
                    { dest: "Teotitlán", from: "Periférico / 2nd-class terminal", price: "25 MXN" },
                    { dest: "El Tule", from: "Periférico / 2nd-class terminal", price: "15 MXN" },
                    { dest: "San Bartolo", from: "Periférico (south side)", price: "15 MXN" },
                    { dest: "Hierve el Agua", from: "Via tour/taxi from Mitla", price: "350+ MXN" },
                  ].map((row) => (
                    <tr key={row.dest} className="border-b border-copal/[0.04]">
                      <td className="py-3 pr-4 font-medium text-copal/80">
                        {row.dest}
                      </td>
                      <td className="py-3 pr-4">{row.from}</td>
                      <td className="py-3 text-right font-mono text-xs">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <TipCard type="money">
            <strong>All prices are per person, one way</strong> (except Monte
            Albán which is sold as round-trip). Have exact change or small bills
            ready. Drivers rarely break a 500 MXN note. Most colectivos run from
            roughly 7am to 7pm, with the highest frequency between 8am and 2pm.
          </TipCard>
        </div>
      </section>

      <ZapotecDivider className="my-0" />

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <FAQSection faqs={faqs} title="Day Trip FAQs" />

      {/* ── Related Content ──────────────────────────────────── */}
      <RelatedContent
        items={[
          {
            title: "Monte Albán Day Trip",
            description:
              "Deep-dive guide to the Zapotec capital — platform-by-platform walkthrough, best time to visit, and what the guides won't tell you.",
            href: "/monte-alban-day-trip",
            accentColor: "nopal",
          },
          {
            title: "Getting Around Oaxaca",
            description:
              "Colectivos, taxis, Uber, walking — how to navigate the city and valley without overpaying or getting lost.",
            href: "/getting-around-oaxaca",
            accentColor: "anil",
          },
          {
            title: "Oaxaca City 4-Day Itinerary",
            description:
              "Day-by-day plan that balances food, culture, and day trips — with realistic timing and budget estimates.",
            href: "/oaxaca-city-4-day-itinerary",
            accentColor: "barro",
          },
        ]}
      />
    </main>
  );
}
