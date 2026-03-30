"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

function DishCard({
  name,
  pronunciation,
  whatItIs,
  whereToBuy,
  price,
  tip,
  category,
}: {
  name: string;
  pronunciation?: string;
  whatItIs: string;
  whereToBuy: string;
  price: string;
  tip?: string;
  category: "essential" | "adventurous" | "sweet" | "drink";
}) {
  const accentColors = {
    essential: "border-l-barro",
    adventurous: "border-l-nopal",
    sweet: "border-l-mezcal",
    drink: "border-l-anil",
  };

  return (
    <div
      className={`border-l-4 ${accentColors[category]} rounded-[6px] bg-lana p-5`}
    >
      <div>
        <h3 className="font-heading text-lg font-bold text-copal">{name}</h3>
        {pronunciation && (
          <span className="font-mono text-xs italic text-copal/40">
            {pronunciation}
          </span>
        )}
        <p className="mt-2 text-sm text-copal/70 leading-relaxed">{whatItIs}</p>
        <div className="mt-3 flex items-start gap-2">
          <MapPin size={13} className="text-anil shrink-0 mt-0.5" />
          <p className="text-sm text-copal/60">{whereToBuy}</p>
        </div>
        <div className="mt-2">
          <span className="font-mono text-xs text-mezcal font-bold">
            {price}
          </span>
        </div>
        {tip && (
          <p className="mt-3 text-xs text-copal/50 italic border-t border-copal/[0.06] pt-3">
            {tip}
          </p>
        )}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What is the must-try street food in Oaxaca?",
    answer:
      "Tlayudas are the single dish most associated with Oaxacan street food — giant crispy tortillas loaded with beans, cheese, and grilled meat, folded and charred over coals. After that, memelas for breakfast and tamales oaxaqueños wrapped in banana leaf are essential. All three cost under 120 MXN.",
  },
  {
    question: "Is Oaxacan street food safe to eat?",
    answer:
      "Yes, if you follow a simple rule: eat where the food is cooked to order in front of you and where there is high turnover. Busy stalls with lines are your safest bet because nothing sits around long enough to go bad. Avoid pre-made food that has been sitting out for hours. Most travelers eat street food daily in Oaxaca without issues.",
  },
  {
    question: "How much does street food cost in Oaxaca?",
    answer:
      "Street food in Oaxaca is remarkably affordable. Memelas and tamales run 15–35 MXN each. Tlayudas cost 80–120 MXN. A full comida corrida with mole at a market fonda is 70–100 MXN. Budget 200–300 MXN (roughly $12–18 USD) for a full day of eating from street stalls and markets.",
  },
  {
    question: "What are chapulines and should I try them?",
    answer:
      "Chapulines are toasted grasshoppers seasoned with chile, lime, and garlic. They taste like a crunchy, salty, slightly citric chip — much less alarming than they sound. Start with the small ones (crunchier, less 'leggy') or mix them into guacamole if you are hesitant. They are Oaxaca's most iconic snack and widely available at markets and from Zócalo vendors for 20–40 MXN per bag.",
  },
  {
    question: "Where is the best street food in Oaxaca City?",
    answer:
      "The highest concentration is around the two central markets — Mercado Benito Juárez and Mercado 20 de Noviembre — and the streets connecting them along Calle Mina. For evening tlayudas, head to Calle Libres. For morning memelas, walk along García Vigil. The Zócalo and surrounding blocks are best after 6 PM when cart vendors set up for the night crowd.",
  },
  {
    question: "What time do street food vendors set up?",
    answer:
      "Most street food vendors operate in shifts. Morning vendors (memelas, tamales) set up around 7–8 AM and run until 11 AM. Evening vendors (tlayudas, empanadas, esquites) appear around 6–7 PM and serve until midnight or later on weekends. The markets operate all day from 7 AM to 7 PM.",
  },
];

export default function StreetFoodGuidePage() {
  const heroImage = getGuideImage("/oaxaca-street-food-guide");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Street Food Guide"
        kicker="Food Guide"
        kickerColor="text-barro"
        title="Oaxaca Street Food: 12 Things to Eat and Where to Find Them"
        subtitle="A specific, priced list of exactly what to order and where. No generic 'try the local food' advice."
        pills={["12 Dishes", "All Priced in MXN", "Exact Locations"]}
        readTime="10 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="bg-lana" />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                The best food in Oaxaca doesn&apos;t live inside restaurants. It
                lives on the street &mdash; on folding tables under tarps, in
                plastic bags handed through car windows, on griddles that have
                been seasoned by decades of daily use. Oaxacan cuisine is part of the{" "}
                <a href="https://ich.unesco.org/en/RL/traditional-mexican-cuisine-ancestral-ongoing-community-culture-the-michoacan-paradigm-00400" target="_blank" rel="noopener" className="text-barro underline">UNESCO Intangible Cultural Heritage</a> designation
                for traditional Mexican food, and nowhere is that tradition more alive than here.{" "}
                <Link href="/mercado-20-de-noviembre-guide" className="text-barro underline">The markets</Link>{" "}
                get all the attention, but the real food culture unfolds on sidewalks after
                dark, at corners where locals queue without being told.
              </p>
              <p>
                This guide covers 12 dishes you should eat in Oaxaca City,
                organized by category. Every entry includes what it is, where to
                find it, what it costs, and &mdash; where it helps &mdash; how
                to pronounce it without embarrassing yourself.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Essentials */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Must-Eat
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Essentials
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            <ScrollReveal delay={0.05}>
              <DishCard
                name="Tlayuda"
                pronunciation="tlah-YOO-dah"
                whatItIs="A giant crispy tortilla (think 14 inches across) spread with asiento (unrefined pork lard), black beans, quesillo, lettuce, and your choice of tasajo, cecina, or chorizo. Folded in half and charred over coals. It&apos;s the closest thing Oaxaca has to a signature dish."
                whereToBuy="Tlayudas Libres (Calle Libres 212) is the most famous — open evenings from ~8 PM, the line is the landmark. Also try: the evening vendors in the Mercado 20 de Noviembre parking lot (fire up ~6 PM, 60–80 MXN), the late-night stands on Calle Hidalgo near the market (10 PM–3 AM), or La Teca on Porfirio Díaz for an Isthmus-style variation."
                price="80&ndash;120 MXN"
                tip="Order &lsquo;con tasajo&rsquo; for your first one. Eat it with the green salsa, not the red &mdash; the green is where Oaxaca lives."
                category="essential"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DishCard
                name="Memela"
                pronunciation="meh-MEH-lah"
                whatItIs="A small, thick oval tortilla made from hand-pressed masa, topped with asiento, beans, salsa, and crumbled cheese. Simpler than a tlayuda, eaten by hand, and almost always under 25 pesos. This is Oaxaca&apos;s breakfast."
                whereToBuy="Street corners along García Vigil in the mornings (look for women with comals on the sidewalk). The corner of García Vigil and Murguía is reliable. Also outside Templo de la Soledad on Independencia — 2–3 vendors set up by 7 AM."
                price="15&ndash;25 MXN"
                tip="If she has several salsas, point at the dark red one &mdash; that&apos;s pasilla chile, and it&apos;s specific to Oaxaca."
                category="essential"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <DishCard
                name="Tamales Oaxaque&ntilde;os"
                whatItIs="Wrapped in banana leaf (not corn husk like the rest of Mexico), filled with mole negro, chicken, or rajas. The banana leaf gives them a distinct, slightly sweet, earthy flavor you won&apos;t find anywhere else in the country."
                whereToBuy="Near the main entrance of Mercado Benito Ju&aacute;rez, early mornings. The women with stacked steamers are your target."
                price="25&ndash;35 MXN"
                tip="Get the mole negro filling. Rajas are fine but you can eat those anywhere in Mexico. The mole negro is the reason to be here."
                category="essential"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <DishCard
                name="Mole from Fondas"
                whatItIs="A comida corrida (set lunch) with mole &mdash; negro, rojo, amarillo, or coloradito &mdash; served over chicken or pork with rice, tortillas, and agua fresca. It&apos;s a full meal, and the mole has been simmering since dawn."
                whereToBuy="Any fonda with a handwritten menu on cardboard outside. The ones clustered around Mercado de Abastos are the most authentic and cheapest."
                price="70&ndash;100 MXN"
                tip="If the menu says &lsquo;mole negro,&rsquo; order it. If it says &lsquo;mole del d&iacute;a,&rsquo; order that instead &mdash; it means they only made one kind today and put everything into it."
                category="essential"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Adventurous */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Try It
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Adventurous
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            <ScrollReveal delay={0.05}>
              <DishCard
                name="Chapulines"
                pronunciation="chah-poo-LEE-ness"
                whatItIs="Toasted grasshoppers seasoned with chile, lime, and garlic. Crunchy, salty, slightly citric. They taste more like a spiced chip than anything insect-like. Oaxaca&apos;s most iconic snack, eaten by the handful or stuffed into a taco with guacamole."
                whereToBuy="Z&oacute;calo vendors in the evenings, or the women with baskets at Mercado Benito Ju&aacute;rez. Buy a small bag first."
                price="20&ndash;40 MXN per bag"
                tip="The small ones are better &mdash; crunchier and less &lsquo;leggy.&rsquo; If you&apos;re squeamish, mix them into guacamole. You won&apos;t even notice."
                category="adventurous"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DishCard
                name="Esquites"
                pronunciation="ess-KEE-tess"
                whatItIs="Corn kernels cut from the cob and served in a cup with mayo, crumbled cheese, chile powder, lime juice, and sometimes ep&aacute;zote. Creamy, tangy, spicy, sweet. The evening version of comfort food."
                whereToBuy="Cart parked outside Templo de la Compa&ntilde;&iacute;a most evenings. Also appears at corners around the Z&oacute;calo after 6 PM."
                price="30&ndash;40 MXN"
                tip="Ask for &lsquo;con todo&rsquo; (with everything). If you want heat, point at the dark red chile powder, not the orange one &mdash; the orange one is decorative, the red one means business."
                category="adventurous"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <DishCard
                name="Tejate"
                pronunciation="teh-HAH-teh"
                whatItIs="A pre-Hispanic drink made from toasted corn, fermented cacao, mamey seed, and flor de cacao. Served at room temperature with a thick foam on top. It&apos;s earthy, nutty, mildly sweet, and unlike anything you&apos;ve tasted before. Consumed in Oaxaca for over 2,000 years."
                whereToBuy="Market women at both Mercado Benito Ju&aacute;rez and Mercado 20 de Noviembre. Look for the large clay pots with pale, foamy liquid inside."
                price="25&ndash;35 MXN"
                tip="It looks like watered-down cement. Drink it anyway. The foam on top is the best part &mdash; don&apos;t scrape it off."
                category="adventurous"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sweets & Drinks */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Sweet &amp; Cold
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Sweets &amp; Drinks
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            <ScrollReveal delay={0.05}>
              <DishCard
                name="Nieves"
                whatItIs="Handmade sorbets in flavors you&apos;ve never seen on a menu &mdash; leche quemada (burnt milk), tuna (prickly pear), mezcal, beso de &aacute;ngel (angel&apos;s kiss). Churned by hand in metal canisters packed with ice. No preservatives, no stabilizers, no filler."
                whereToBuy="Stands on Calle Mina between the two markets. Multiple vendors &mdash; they&apos;re all good. The one with the longest line is usually the one doing leche quemada that day."
                price="20&ndash;30 MXN per scoop"
                tip="Get two scoops: leche quemada and tuna. That combination is Oaxaca in a cup."
                category="sweet"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <DishCard
                name="Chocolate de Agua"
                whatItIs="Hot chocolate made with water instead of milk, the traditional Oaxacan way. Beaten with a molinillo (wooden whisk) until foamy. Lighter, less sweet, and more intensely chocolatey than the milk version. Usually flavored with cinnamon and sometimes ground almonds."
                whereToBuy="Mayordomo on Calle Mina (the original location). Also available at any market chocolate stand, but Mayordomo is the benchmark."
                price="~30 MXN"
                tip="Order &lsquo;de agua, medio&rsquo; for the traditional half-portion. It&apos;s plenty. The &lsquo;de leche&rsquo; version exists but locals drink it with water."
                category="drink"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <DishCard
                name="Agua de Chilacayota"
                whatItIs="A sweet, cold drink made from chilacayota squash cooked with piloncillo (raw cane sugar), cinnamon, and lime. The texture has small strands of squash flesh floating in it. Refreshing, mildly sweet, and completely unlike any agua fresca you&apos;ve had."
                whereToBuy="Market stalls at Mercado Benito Ju&aacute;rez and Mercado 20 de Noviembre. Seasonal &mdash; most common from June through November, but sometimes available year-round."
                price="20&ndash;25 MXN"
                tip="It&apos;s seasonal. If you see it, buy it. You may not see it again during your trip."
                category="drink"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Street Food Rules */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Know Before You Go
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Street food rules
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 space-y-3">
              <TipCard type="tip">
                <strong>A line is a good sign.</strong> If locals are waiting,
                the food is worth waiting for. If a stall is empty at peak hours,
                there&apos;s a reason. Follow the line, not the signage.
              </TipCard>

              <TipCard type="money">
                <strong>Cash only, everywhere.</strong> No street vendor in
                Oaxaca takes cards. Hit an ATM before you start eating.{" "}
                <Link href="/oaxaca-budget-guide" className="text-barro underline">Budget
                200&ndash;300 MXN</Link> for a full evening of street food.
              </TipCard>

              <TipCard type="tip">
                <strong>Point, don&apos;t describe.</strong> Your Spanish
                doesn&apos;t need to be good. Point at what you want, hold up
                fingers for quantity, and say &ldquo;por favor.&rdquo; That
                covers 95% of transactions.
              </TipCard>

              <TipCard type="skip">
                <strong>Salsa is not optional.</strong> The salsas at street
                stalls are made fresh and specific to the dish. Skipping them is
                like ordering sushi without soy sauce. Start with a small
                spoonful &mdash; some are nuclear.
              </TipCard>

              <TipCard type="tip">
                <strong>Cooked to order = safe to eat.</strong> If you see it
                being grilled, fried, or steamed in front of you, it&apos;s
                safe. The places that make you sick are the ones with food
                sitting out for hours. Busy stalls with high turnover are your
                safest bet.
              </TipCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <RelatedContent
        items={[
          {
            title: "Mercado 20 de Noviembre",
            description:
              "Stall-by-stall guide to the legendary smoke-filled market.",
            href: "/mercado-20-de-noviembre-guide",
            accentColor: "nopal",
          },
          {
            title: "4-Day Itinerary",
            description:
              "Day-by-day plan with the right markets at the right time.",
            href: "/oaxaca-city-4-day-itinerary",
            accentColor: "barro",
          },
          {
            title: "Budget Guide",
            description:
              "Realistic daily costs including food across three tiers.",
            href: "/oaxaca-budget-guide",
            accentColor: "mezcal",
          },
        ]}
      />
    </>
  );
}
