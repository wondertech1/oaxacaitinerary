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
    question: "Is a full week too long for Oaxaca?",
    answer:
      "No. Oaxaca rewards slow travel more than almost any city in Mexico. A week lets you explore the city deeply, do two full-day excursions (Valles Centrales and Sierra Norte), visit artisan villages, take a cooking class, and still have time to wander without a plan. Most people who spend a week say they could have stayed longer.",
  },
  {
    question: "How do I get to Sierra Norte villages?",
    answer:
      "Colectivos/shared trucks leave from the Terminal de Autobuses Camioneros on the periférico. Frequency varies — Cuajimoloyas and Benito Juárez have the most reliable service (2-3 departures daily, 80-120 MXN, 1.5-2 hours). You can also book through Expediciones Sierra Norte (the community ecotourism cooperative) who arrange transport as part of tour packages.",
  },
  {
    question: "Are the artisan villages worth visiting?",
    answer:
      "Absolutely. Teotitlán del Valle (textiles) is the standout — you'll watch families weave on traditional looms and buy rugs at a fraction of city prices. San Martín Tilcajete (alebrijes) is more touristy but the carved wooden animals are wildly detailed — some pieces take weeks to paint. Both are 30-45 minutes from Oaxaca City.",
  },
  {
    question: "Should I book a cooking class in advance?",
    answer:
      "Yes — at least a week ahead, especially during high season (Oct-Mar). The best classes are small (8-12 people) and include a market tour. Budget 800-1,500 MXN per person. Casa de los Sabores, Seasons of My Heart, and La Casa de los Aromas are all excellent.",
  },
  {
    question: "What's the best order for these 7 days?",
    answer:
      "Follow our suggested order. City first (days 1-4) to build context, then Valles Centrales (day 5) and Sierra Norte (day 6) as you expand outward, and artisan villages + cooking class (day 7) to close with hands-on cultural immersion. This rhythm lets you recover from active days with gentler ones.",
  },
];

export default function SevenDayItineraryPage() {
  const heroImage = getGuideImage("/oaxaca-7-day-itinerary");

  return (
    <>
      <GuideHero
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
        breadcrumbLabel="7-Day Itinerary"
        kicker="7-Day Itinerary"
        title="One Week in Oaxaca: The Full Immersion"
        subtitle="Seven days to go from tourist to honorary Oaxaqueño. The city, the valley, the cloud forests, the artisan villages, and a cooking class where you learn to make mole from scratch."
        pills={[
          "7 Days",
          "~$45–65/day",
          "Pace: Slow",
          "Best for: Deep Travelers, Culture Lovers",
        ]}
        readTime="18 min read"
      />

      <ZapotecDivider className="bg-lana" />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                A week in Oaxaca is the full experience. Not the highlights
                reel — the director&apos;s cut. You&apos;ll eat at the markets
                enough times to have a favorite stall. You&apos;ll navigate
                colectivos without checking your phone. You&apos;ll understand
                the difference between espadín and tobalá, between mole negro
                and mole rojo. You&apos;ll hike in cloud forests and watch
                families weave the same patterns their Zapotec ancestors did
                centuries ago.
              </p>
              <p>
                Days 1–5 follow our{" "}
                <Link
                  href="/oaxaca-5-day-itinerary"
                  className="text-barro underline"
                >
                  5-day itinerary
                </Link>{" "}
                (city + Valles Centrales loop). Days 6 and 7 go where most
                visitors never reach: Sierra Norte cloud forests and the
                artisan villages where Oaxaca&apos;s craft traditions are still
                alive.
              </p>
              <p className="text-sm text-copal/50 italic">
                Less time?{" "}
                <Link
                  href="/oaxaca-5-day-itinerary"
                  className="text-barro underline"
                >
                  The 5-day version
                </Link>{" "}
                is our recommended minimum for a complete experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Week overview */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil mb-4 block">
              Your Week at a Glance
            </span>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
              {[
                { day: 1, theme: "Arrive", color: "bg-barro/10 border-barro/20" },
                { day: 2, theme: "Markets", color: "bg-mezcal/10 border-mezcal/20" },
                { day: 3, theme: "Ruins", color: "bg-nopal/10 border-nopal/20" },
                { day: 4, theme: "Crafts", color: "bg-anil/10 border-anil/20" },
                { day: 5, theme: "Valley", color: "bg-mezcal/10 border-mezcal/20" },
                { day: 6, theme: "Sierra", color: "bg-nopal/10 border-nopal/20" },
                { day: 7, theme: "Artisans", color: "bg-barro/10 border-barro/20" },
              ].map((d) => (
                <div
                  key={d.day}
                  className={`${d.color} border rounded-[6px] p-2.5 text-center`}
                >
                  <span className="block font-heading text-lg font-bold text-copal/30">
                    {d.day}
                  </span>
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-copal/40 mt-0.5">
                    {d.theme}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Depth meter */}
          <ScrollReveal delay={0.1}>
            <div className="mt-6">
              <div className="flex justify-between text-[9px] font-mono uppercase tracking-wider text-copal/30 mb-1.5">
                <span>Tourist</span>
                <span>Honorary Oaxaqueño</span>
              </div>
              <div className="h-2 rounded-full bg-copal/[0.04] overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-barro/40 via-mezcal/50 to-nopal/60 w-full" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Days 1-5 Summary */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Days 1–5
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Foundation
            </h2>
            <p className="mt-3 text-sm text-copal/50">
              Full details in our{" "}
              <Link
                href="/oaxaca-5-day-itinerary"
                className="text-barro underline"
              >
                5-day itinerary →
              </Link>
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            {[
              {
                day: "01",
                title: "Arrive, Settle & First Tastes",
                summary:
                  "Airport to Centro, Zócalo, Santo Domingo, Andador Alcalá, first tlayuda, first mezcal at In Situ.",
              },
              {
                day: "02",
                title: "Markets, Museums & Mole",
                summary:
                  "Mercado 20 de Noviembre breakfast, IAGO, Textile Museum, Jalatlaco, mole negro dinner.",
              },
              {
                day: "03",
                title: "Monte Albán & Black Pottery",
                summary:
                  "Morning ruins (80 MXN colectivo, 90 MXN entry), afternoon at San Bartolo Coyotepec.",
              },
              {
                day: "04",
                title: "Souvenirs & Slow Wandering",
                summary:
                  "Mercado Benito Juárez shopping, Café Brújula, exploring corners you missed.",
              },
              {
                day: "05",
                title: "Valles Centrales Loop",
                summary:
                  "El Tule → Mitla ruins → Hierve el Agua waterfalls → Santiago Matatlán mezcal.",
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

      {/* Day 6 — Sierra Norte */}
      <section id="day-6" className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                06
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Six
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Cloud Forests and Mountain Villages
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="6:30 AM – 8:30 AM" title="Getting to Sierra Norte">
              <p>
                <strong>Pueblos Mancomunados</strong> is a network of
                indigenous Zapotec villages in the Sierra Norte mountains, 60 km
                north of Oaxaca. They run Mexico&apos;s most successful
                community ecotourism project — owned and operated by the
                villages themselves.
              </p>
              <p>
                <strong>Two best options:</strong>
              </p>
              <ul className="list-none space-y-1.5 ml-0">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Cuajimoloyas</strong> (3,200m elevation): Easier
                  access, cloud forest hiking, mountain biking.{" "}
                  <strong>80 MXN</strong> by colectivo, 1.5 hours.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Benito Juárez</strong> (3,000m): More infrastructure,
                  zip-lines, clear sightlines down to the Oaxaca valley floor.{" "}
                  <strong>100 MXN</strong> by colectivo, 2 hours.
                </li>
              </ul>
              <TipCard type="tip">
                <strong>Book through Expediciones Sierra Norte</strong> (office
                on García Vigil in Oaxaca). They coordinate transport,
                guides, meals, and cabin stays. A day trip package runs{" "}
                <strong>400–600 MXN</strong> per person including transport
                and guided hike.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="9:00 AM – 2:00 PM" title="Hiking the Cloud Forest">
              <p>
                The trails between villages pass through{" "}
                <strong>cloud forest</strong> — misty, moss-draped oak and pine
                forests at 3,000+ meters. It&apos;s a completely different
                world from the warm, dry valley below.
              </p>
              <p>
                <strong>Best hike:</strong> Cuajimoloyas to La Nevería (or
                vice versa). <strong>~3 hours, moderate difficulty</strong>.
                The trail winds through dense forest with occasional clearings
                that reveal the Oaxaca valley 2,000 meters below.
              </p>
              <p>
                <strong>What you&apos;ll see:</strong> Bromeliads, orchids,
                oak moss, and if you&apos;re lucky — coatimundis and hundreds
                of bird species. The silence is profound.
              </p>
              <TipCard type="money">
                <strong>Trail entry fee:</strong> 20–30 MXN per person (goes
                directly to the community). Guide: 200–300 MXN for the group
                (recommended — trails are marked but a guide adds enormously
                to the experience).
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="2:00 PM – 6:00 PM" title="Village Lunch & Return">
              <p>
                Eat at the <strong>community comedor</strong> in whichever
                village you end at. Simple, hearty food: black bean soup,
                handmade tortillas, grilled meat, herbal tea.{" "}
                <strong>60–80 MXN</strong> per meal. The best food won&apos;t
                win any awards — it&apos;s just honest mountain cooking.
              </p>
              <p>
                If you booked through Expediciones Sierra Norte, return
                transport is included. Otherwise, colectivos return to Oaxaca
                in the afternoon (check schedules — last departure is usually
                3–4 PM).
              </p>
              <TipCard type="tip">
                <strong>Want to stay overnight?</strong> The villages have
                community-run cabañas (<strong>300–500 MXN/night</strong>).
                Simple but clean, with zero light pollution at 3,200m — you can see the Milky Way clearly. If you
                have time, spending a night transforms the experience.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 7 — Artisan Villages & Cooking Class */}
      <section id="day-7" className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                07
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Seven
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Weaving, Alebrijes, and Learning to Make Mole
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock
              time="8:30 AM – 11:00 AM"
              title="Teotitlán del Valle — Where Textiles Are Alive"
            >
              <p>
                <strong>30 minutes from Oaxaca by taxi or colectivo</strong> (
                <strong>30–40 MXN</strong>). This Zapotec village has been
                weaving textiles for over 2,000 years. Not as a tourist
                attraction — as a way of life. Most families still have a loom
                in their home.
              </p>
              <p>
                Visit a <strong>family workshop</strong> (free, no appointment
                needed — walk the main street and look for signs). Watch the
                entire process: carding wool, spinning thread, dyeing with
                natural pigments (cochineal for red, indigo for blue, pomegranate
                for yellow), and weaving on a pedal loom.
              </p>
              <p>
                <strong>Buying rugs:</strong> Small tapetes start at{" "}
                <strong>300–500 MXN</strong>. Medium rugs:{" "}
                <strong>1,000–3,000 MXN</strong>. These are 40–60% cheaper than
                Oaxaca City galleries. The quality is identical — you&apos;re
                buying from the people who made them.
              </p>
              <TipCard type="tip">
                <strong>Look for natural dyes.</strong> Ask &quot;¿Son tintes
                naturales?&quot; (Are these natural dyes?). Synthetic-dyed rugs
                are cheaper but fade. Natural-dyed rugs age beautifully. The
                artisan will usually demonstrate the dye process if you ask.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock
              time="11:30 AM – 1:00 PM"
              title="San Martín Tilcajete — Alebrijes"
            >
              <p>
                <strong>15 minutes past Teotitlán.</strong> This is where the
                famous Oaxacan alebrijes come from — hand-carved wooden
                animals painted in psychedelic colors. The tradition started
                here in the 1950s and has become Oaxaca&apos;s most
                recognizable craft export.
              </p>
              <p>
                <strong>Visit a taller (workshop).</strong> The Jacobo and
                María Ángeles workshop is the most famous, but there are
                dozens of excellent smaller talleres on the main road. Watch
                the carving, sanding, and painting process — some pieces take
                weeks to complete.
              </p>
              <p>
                <strong>Prices:</strong> Small alebrijes from{" "}
                <strong>100–300 MXN</strong>. Medium pieces:{" "}
                <strong>500–1,500 MXN</strong>. Gallery-quality work from
                master carvers: <strong>3,000–15,000 MXN</strong>.
              </p>
              <TipCard type="money">
                <strong>Negotiate gently.</strong> These are artists, not
                vendors. A small discount (10–15%) is normal if buying
                multiple pieces, but don&apos;t haggle aggressively — the
                prices reflect weeks of hand-work.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="3:00 PM – 7:00 PM" title="Cooking Class — Learn to Make Mole">
              <p>
                The perfect way to end a week in Oaxaca: learning to make the
                food you&apos;ve been eating. Most cooking classes start with a{" "}
                <strong>market tour</strong> (identifying chiles, selecting
                ingredients, understanding cacao varieties) and end with you
                cooking and eating a full Oaxacan meal.
              </p>
              <p>
                <strong>Best cooking classes:</strong>
              </p>
              <ul className="list-none space-y-1.5 ml-0">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Casa de los Sabores:</strong>{" "}
                  <strong>1,200 MXN</strong>. Small groups, market tour, 4
                  dishes including mole. Best value.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>Seasons of My Heart</strong> (Susana Trilling):{" "}
                  <strong>1,500 MXN</strong>. Ranch setting outside the city.
                  More immersive, full-day experience.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  <strong>La Casa de los Aromas:</strong>{" "}
                  <strong>800 MXN</strong>. Budget option in Centro. Smaller
                  menu but solid instruction.
                </li>
              </ul>
              <TipCard type="tip">
                <strong>Book at least a week ahead</strong> — classes fill up
                fast during high season (Oct–Mar). Ask about dietary
                accommodations if needed. Most classes provide recipes to take
                home.{" "}
                <Link
                  href="/oaxaca-cultural-experiences"
                  className="text-barro underline"
                >
                  More cultural experiences →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <TimeBlock time="8:00 PM – Late" title="Final Night">
              <p>
                Your last night. By now you have favorites — go back to them.
                The taco stand you discovered. The mezcalería where the
                bartender knows your name. The Zócalo bench where the light is
                best.
              </p>
              <p>
                Or try somewhere new: <strong>Expendio Tradición</strong> for a
                final mezcal flight with Oaxacan botanas (snacks). Or walk
                Jalatlaco one more time in the evening light — it&apos;s
                different at night, quieter and more intimate.
              </p>
              <p>
                <strong>Airport tip:</strong> Book your morning taxi at the
                hotel desk (<strong>150–200 MXN</strong>). Allow 30 minutes
                for the ride. Check in any mezcal in your bag.
              </p>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      <ItineraryPicker currentDays={7} />

      {/* Essential Tips */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Essential Info
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Week-long practicalities
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Long-Stay Practicalities",
                color: "border-mezcal",
                text: "Laundry: lavandería on nearly every block, 50-80 MXN/load. SIM card: Telcel is best, 200 MXN for 5GB at any OXXO. Pharmacies: Farmacias Similares has everything. Drinking water: buy garrafones (20L jugs) for 25 MXN.",
              },
              {
                title: "Sierra Norte Prep",
                color: "border-nopal",
                text: "Bring layers — it's 10-15°C colder than the city at 3,200m. Hiking boots or sturdy shoes. Rain jacket (cloud forest = occasional rain). The altitude is noticeable — take it slow on the hike if you're not acclimatized.",
              },
              {
                title: "Money for a Week",
                color: "border-anil",
                text: "Budget ~$45-65 USD/day. Total week: $315-455 USD excluding accommodation and flights. Big expenses: cooking class (800-1,500 MXN), Valle loop (350-750 MXN), Sierra Norte (400-600 MXN). Markets and street food keep daily food costs low.",
              },
              {
                title: "What to Ship Home",
                color: "border-barro",
                text: "Large rugs from Teotitlán can be shipped (the workshops arrange it, 500-1,000 MXN for shipping). Mezcal: check your airline's liquid allowance. Mole paste, chocolate, and dried chiles pack easily in checked bags.",
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
            title: "Cultural Experiences",
            description:
              "Cooking classes, artisan workshops, and festivals worth planning around.",
            href: "/oaxaca-cultural-experiences",
            accentColor: "anil",
          },
          {
            title: "Day Trips Guide",
            description:
              "Hierve el Agua, Mitla, El Tule, and textile villages — with honest verdicts.",
            href: "/oaxaca-day-trips",
            accentColor: "nopal",
          },
          {
            title: "5-Day Itinerary",
            description:
              "Less time? Our recommended minimum for the complete Oaxaca experience.",
            href: "/oaxaca-5-day-itinerary",
            accentColor: "mezcal",
          },
        ]}
      />
    </>
  );
}
