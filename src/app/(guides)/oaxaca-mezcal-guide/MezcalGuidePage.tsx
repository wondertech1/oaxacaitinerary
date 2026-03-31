"use client";

import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import AgaveDivider from "@/components/decorative/AgaveDivider";
import TipCard from "@/components/content/TipCard";
import MezcalCard from "@/components/mezcal/MezcalCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

/* ─── Bar data ─── */
interface BarInfo {
  name: string;
  address: string;
  vibe: string;
  price: string;
  description: string;
  bestFor: string;
}

const bars: BarInfo[] = [
  {
    name: "In Situ",
    address: "Morelos 511, Centro",
    vibe: "Relaxed, knowledgeable staff, no pretension",
    price: "Espad\u00edn from 60 MXN / pour",
    description:
      "The mezcaler\u00eda most people start with, and for good reason. In Situ carries dozens of producers from across the Oaxacan valleys, with an emphasis on small-batch artesanal labels you won\u2019t find outside the state. The staff actually know what they\u2019re pouring \u2014 they\u2019ll walk you through agave types, production methods, and flavor profiles without making you feel like a student. The courtyard seating is pleasant, and the pours are honest. This is where you learn what you like before branching out.",
    bestFor: "First-timers, learning the basics, casual evening drinking",
  },
  {
    name: "Mezcaloteca",
    address: "Reforma 506, Centro",
    vibe: "Educational, appointment-style, intimate",
    price: "Guided tasting ~280 MXN / person",
    description:
      "This is not a bar. It\u2019s a guided tasting room, and you need to book ahead or arrive early and hope for a cancellation. A mezcalero sits with your group (usually 4\u20138 people) and walks you through a curated flight of 4\u20136 mezcals, explaining terroir, fermentation, and distillation as you go. You\u2019ll taste things here \u2014 wild agaves from remote mountain villages, pechuga distilled with turkey breast \u2014 that simply don\u2019t appear on bar menus. This is the deepest mezcal education available to a casual visitor.",
    bestFor:
      "Serious learners, anyone who wants to understand mezcal at a deeper level",
  },
  {
    name: "Los Siete Moles",
    address: "Xicot\u00e9ncatl 206, Centro",
    vibe: "Food-forward, festive, colorful",
    price: "Mezcal from 50 MXN / pour, dishes 80\u2013180 MXN",
    description:
      "Technically a restaurant, but the mezcal list is better than half the dedicated bars in town. The concept is pairing mezcal with Oaxacan food \u2014 their seven moles are the backbone of the menu, and each one shifts the mezcal on your palate in a different direction. Order the mole negro with a joven espad\u00edn and you\u2019ll understand why Oaxacans don\u2019t drink mezcal on an empty stomach. The roof terrace fills up by 8 PM on weekends.",
    bestFor: "Food+mezcal pairing, groups, a proper sit-down evening",
  },
  {
    name: "Archivo Maguey",
    address: "Porfirio D\u00edaz 816, Reforma",
    vibe: "Curated, rare pours, serious collectors",
    price: "Wild agaves from 120 MXN / pour",
    description:
      "Archivo is where you go after you\u2019ve done In Situ and Mezcaloteca and decided you need to go deeper. Their focus is on wild and semi-wild agaves \u2014 tobaziche, coyote, cuishe, sierra negra \u2014 from producers who make a few hundred liters a year. Some bottles behind the bar don\u2019t have labels. Prices are higher because the agaves are rarer and the production runs smaller, but this is not a tourist markup \u2014 these are spirits made in batches of 200\u2013400 liters from agaves that took 12\u201325 years to mature. The bartenders are passionate and opinionated. Ask them what\u2019s interesting right now.",
    bestFor:
      "Experienced drinkers, wild agave exploration, mezcal collectors",
  },
  {
    name: "La Mezcalerita",
    address: "Allende 108, Centro",
    vibe: "Casual, neighborhood feel, cheap pours",
    price: "Mezcal from 40 MXN / pour",
    description:
      "The antidote to mezcal snobbery. La Mezcalerita is a small, unpretentious spot where locals drink cheap, good espad\u00edn and nobody lectures you about terroir. Pours start at 40 MXN, which is about as low as it goes in the Centro without sacrificing quality. There\u2019s no menu of rare agaves \u2014 just solid everyday mezcal, a few tobal\u00e1s if you\u2019re lucky, and a vibe that says \u201csit down, drink, don\u2019t overthink it.\u201d Perfect for your third or fourth bar of the night.",
    bestFor: "Budget drinking, casual hangs, late-night mezcal",
  },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    question: "What\u2019s the difference between mezcal and tequila?",
    answer:
      "Tequila is a type of mezcal \u2014 it\u2019s mezcal made exclusively from blue agave (agave tequilana) in specific regions of Mexico, mostly Jalisco. Mezcal can be made from over 50 agave species and is primarily produced in Oaxaca. The key flavor difference comes from production: mezcal agaves are typically roasted in underground pits (giving them smokiness), while tequila agaves are steamed in ovens. Think of it like this: all tequila is mezcal, but not all mezcal is tequila. And once you\u2019ve tasted a good tobal\u00e1 or arroqueño, you\u2019ll understand why mezcal drinkers rarely go back.",
  },
  {
    question: "How do you drink mezcal properly?",
    answer:
      "Sip it slowly from a small clay cup (jicara) or a wide-mouthed glass. Never shoot mezcal \u2014 that\u2019s a waste of flavor and money. Take a small sip and let it sit on your tongue before swallowing. Many locals \u2018kiss\u2019 the mezcal, taking tiny sips and breathing out gently after each one. Orange slices with sal de gusano (worm salt) are the traditional accompaniment. No lime, no ice, no mixer. If a bartender offers you mezcal in a shot glass with lime and salt, you\u2019re in a tourist trap.",
  },
  {
    question: "How much does mezcal cost in Oaxaca?",
    answer:
      "At mezcaler\u00edas, a pour of espad\u00edn (the most common agave) runs 40\u201380 MXN. Tobal\u00e1 and other complex varieties cost 120\u2013250 MXN per pour. Wild agaves can hit 300 MXN. To buy bottles, expect 150\u2013300 MXN for a solid artesanal espad\u00edn, 400\u2013800 MXN for tobal\u00e1, and 600\u20131,500+ MXN for rare wild agaves or pechuga. For context, a good mezcal that costs $60 USD in the States can be found for 250\u2013350 MXN ($15\u201320 USD) in Oaxaca. Buying here is dramatically cheaper.",
  },
  {
    question: "Can you bring mezcal home on a flight?",
    answer:
      "Yes, but only in checked luggage. Each passenger can typically bring up to 5 liters of alcohol in checked bags (verify with your airline). Wrap bottles in clothes and seal them inside ziplock bags in case of breakage. Many Oaxacan shops will pack bottles in protective foam sleeves for free \u2014 ask when you buy. If you\u2019re buying at a palenque (distillery), they\u2019ll often have reused plastic bottles that are lighter and less fragile for transport. Note: you cannot bring mezcal through security in carry-on luggage regardless of size.",
  },
  {
    question: "What is pechuga mezcal?",
    answer:
      "Pechuga is a special-occasion mezcal made by hanging a raw chicken or turkey breast (pechuga means \u2018breast\u2019) inside the still during a third distillation, along with seasonal fruits, nuts, and spices. The proteins and fats from the meat create a rounder, silkier texture and add subtle savory depth. It sounds strange, but the result is extraordinary \u2014 often fruity, complex, and with an almost umami quality. Pechuga is traditionally made for celebrations like Day of the Dead. Expect to pay 180\u2013350 MXN per pour or 800\u20132,000 MXN per bottle. It\u2019s worth trying at least once.",
  },
  {
    question: "What does \u2018pechuga\u2019 mezcal taste like?",
    answer:
      "Pechuga is a ceremonial mezcal redistilled with a raw chicken or turkey breast (pechuga) plus seasonal fruits, nuts, and spices. The result is surprisingly delicate \u2014 not meaty at all. It\u2019s often floral, slightly sweet, with a round, silky texture. Good pechuga costs 800\u20132,000 MXN per bottle in Oaxaca. It\u2019s worth trying a pour (120\u2013200 MXN) before committing to a bottle.",
  },
];

export default function MezcalGuidePage() {
  const heroImage = getGuideImage("/oaxaca-mezcal-guide");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Mezcal Guide"
        kicker="Mezcal"
        kickerColor="text-mezcal"
        title="Oaxaca Mezcal Guide: What to Drink, Where to Drink It"
        subtitle="A practical guide to understanding mezcal, finding the best bars, visiting distilleries, and buying bottles to take home &mdash; with prices, addresses, and opinions."
        pills={["Mezcal 101", "5 Best Bars", "Distillery Visits"]}
        readTime="11 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <AgaveDivider className="bg-lana" />

      {/* ═══════════════════ Intro ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Every travel guide tells you to &ldquo;try mezcal in
                Oaxaca.&rdquo; None of them tell you what to actually order when
                you&apos;re standing at a bar looking at 40 unlabeled bottles, a
                bartender who speaks rapid Oaxacan Spanish, and a menu that
                lists agave varieties like they&apos;re Pok&eacute;mon you
                should already recognize.
              </p>
              <p>
                This is not a cocktail guide. You don&apos;t need cocktail
                recipes for Oaxaca &mdash; the mezcal here is meant to be
                sipped straight, slowly, from a jicara or a wide glass. This
                guide is about understanding what you&apos;re tasting, knowing
                which bars are worth your time (and which are tourist traps
                pouring industrial spirit), and having the confidence to walk
                into a mezcaler&iacute;a, point at a bottle of tobaz&iacute;che,
                and know roughly what&apos;s about to hit your palate.
              </p>
              <p>
                I&apos;ve spent enough mornings in Oaxaca regretting the night
                before to know what&apos;s good and what&apos;s a waste of pesos.
                Everything here is specific: real addresses, prices in MXN, and
                honest opinions about what&apos;s overrated and what isn&apos;t.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AgaveDivider />

      {/* ═══════════════════ Understanding Mezcal ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Mezcal 101
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Understanding Mezcal: The Four Agaves You&apos;ll See Everywhere
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                There are over 50 agave species used in mezcal production, but
                in Oaxaca&apos;s bars, four dominate the menu. Understanding
                these four is enough to order confidently and know whether
                you&apos;re getting good value. Think of this as the difference
                between knowing &ldquo;red wine&rdquo; and knowing the
                difference between a Tempranillo and a Malbec &mdash; it
                completely changes the experience.
              </p>
              <p>
                Each card below shows the agave type, production method, flavor
                profile, and what you should expect to pay per pour at a
                mezcaler&iacute;a in Oaxaca City. The radar charts show relative
                flavor intensity on six axes &mdash; they&apos;re subjective,
                but they&apos;ll give you a rough idea before you taste.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal delay={0.08}>
              <MezcalCard
                name="Espad\u00edn"
                agave="Agave angustifolia"
                production="Artesanal \u2014 earthen pit roasted, copper or clay pot distilled"
                flavor="Clean smoke, mild sweetness, citrus peel, roasted agave. The gateway mezcal \u2014 approachable, balanced, and what 80% of producers make."
                priceRange="60\u2013100 MXN / pour"
                profile={{
                  smoky: 3,
                  herbal: 2,
                  citrus: 2,
                  floral: 1,
                  earthy: 2,
                  sweet: 3,
                }}
                accentColor="mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <MezcalCard
                name="Tobal\u00e1"
                agave="Agave potatorum"
                production="Wild harvested or semi-cultivated \u2014 smaller pi\u00f1as, lower yield"
                flavor="Complex, floral, bright citrus, tropical fruit. Delicate smoke. The one that converts wine drinkers and skeptics."
                priceRange="120\u2013200 MXN / pour"
                profile={{
                  smoky: 2,
                  herbal: 3,
                  citrus: 3,
                  floral: 4,
                  earthy: 1,
                  sweet: 2,
                }}
                accentColor="anil"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <MezcalCard
                name="Madrecuixe"
                agave="Agave karwinskii"
                production="Wild or semi-wild \u2014 long, narrow pi\u00f1as, slow roast"
                flavor="Intense vegetal and savory. Wet earth, green pepper, roasted poblano. Not for beginners \u2014 this is mezcal for people who already know they like mezcal."
                priceRange="150\u2013250 MXN / pour"
                profile={{
                  smoky: 4,
                  herbal: 4,
                  citrus: 1,
                  floral: 2,
                  earthy: 4,
                  sweet: 1,
                }}
                accentColor="nopal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <MezcalCard
                name="Arroqueño"
                agave="Agave americana var. oaxacensis"
                production="Semi-wild \u2014 massive pi\u00f1as (up to 200 kg), 25+ years to mature"
                flavor="Balanced, herbal, white flower, gentle smoke, minerality. The agave that took a quarter-century to grow \u2014 and you can taste the patience."
                priceRange="180\u2013300 MXN / pour"
                profile={{
                  smoky: 3,
                  herbal: 2,
                  citrus: 2,
                  floral: 3,
                  earthy: 3,
                  sweet: 2,
                }}
                accentColor="barro"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.24}>
            <TipCard type="tip">
              <strong>Start with espad&iacute;n.</strong> Don&apos;t jump
              straight to tobala or wild agaves on your first night. Espad&iacute;n
              is the baseline &mdash; once you understand its flavor, you can
              appreciate how the other agaves differ. Order a tobala second.
              Save the madrecuixe for day two, when your palate has calibrated.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <TipCard type="money">
              <strong>Price doesn&apos;t always mean better.</strong> A
              150&nbsp;MXN madrecuixe isn&apos;t inherently &ldquo;better&rdquo;
              than a 60&nbsp;MXN espad&iacute;n. The price reflects rarity and
              production cost, not quality. Some of the most memorable mezcals
              I&apos;ve had in Oaxaca were straightforward espad&iacute;ns under
              80&nbsp;MXN.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <AgaveDivider />

      {/* ═══════════════════ Best Mezcalerías ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Where to Drink
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The 5 Best Mezcaler&iacute;as in Oaxaca City
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              There are easily 30+ mezcal bars in Oaxaca&apos;s Centro, and
              most of them are fine. These five are more than fine &mdash;
              they&apos;re each doing something distinct, and together they
              cover every kind of mezcal experience you might want: educational,
              casual, rare, food-paired, and cheap. Hit two or three across your
              trip and you&apos;ll cover serious ground.
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-6">
            {bars.map((bar, i) => (
              <ScrollReveal key={bar.name} delay={i * 0.06}>
                <div className="rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-copal">
                        {bar.name === "Mezcaloteca" ? (
                          <a href="https://mezcaloteca.com" target="_blank" rel="noopener" className="text-barro underline">{bar.name}</a>
                        ) : bar.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 text-sm text-copal/50">
                        <MapPin size={13} className="text-anil shrink-0" />
                        <span>{bar.address}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-mezcal shrink-0">
                      {bar.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                    {bar.description}
                  </p>
                  <div className="mt-3 flex items-start gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-copal/40 shrink-0 mt-0.5">
                      Best for
                    </span>
                    <span className="text-xs text-copal/60 italic">
                      {bar.bestFor}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.36}>
            <TipCard type="skip">
              <strong>Skip the Z&oacute;calo tourist bars.</strong> The bars on
              the main square pour overpriced, mediocre mezcal to captive
              audiences. Walk two blocks in any direction and the quality
              doubles while the price halves. If a bar has a promoter outside
              offering you a free shot, keep walking.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <TipCard type="tip">
              <strong>The jicara matters.</strong> Good mezcaler&iacute;as serve
              mezcal in jicaras (dried gourd cups) or wide copitas. If
              you&apos;re handed a shot glass, the bar probably doesn&apos;t
              take its mezcal seriously. The wide opening lets you nose the
              spirit, which is half the experience.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <AgaveDivider />

      {/* ═══════════════════ Distillery Day Trips ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Day Trip
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Distillery Day Trips: Santiago Matatl&aacute;n
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Santiago Matatl&aacute;n sits about 50 km southeast of Oaxaca
                City and calls itself the &ldquo;World Capital of
                Mezcal.&rdquo; That&apos;s a bold claim, but it&apos;s not
                wrong &mdash; the valley is dotted with palenques (small
                distilleries) where families have been making mezcal for
                generations. Some of these operations are literally a pit in the
                ground, a horse-drawn tahona, and a wood-fired copper still in
                somebody&apos;s backyard.
              </p>
              <p>
                The drive takes about 30 minutes on a paved highway. Along the
                road into town, you&apos;ll see signs for palenques on both
                sides &mdash; some are legitimate family operations, others are
                essentially tourist shops with a decorative still out front.
                Here&apos;s how to tell the difference and what to expect.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                Getting There
              </h3>
              <div className="mt-3 space-y-2 text-sm text-copal/70 leading-relaxed">
                <p>
                  <strong className="text-copal/90">Colectivo (cheapest):</strong>{" "}
                  Shared vans leave from the second-class bus terminal (Central
                  de Abastos) roughly every 20 minutes. Cost is{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    30 MXN
                  </span>{" "}
                  each way. Journey time is 40&ndash;50 minutes depending on
                  stops. Tell the driver &ldquo;Matatl&aacute;n, por
                  favor&rdquo; so he drops you in the town center, not at a
                  roadside palenque.
                </p>
                <p>
                  <strong className="text-copal/90">Taxi:</strong> A private
                  taxi from the Centro costs around{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    350&ndash;500 MXN
                  </span>{" "}
                  one way. Negotiate a round trip with waiting time for{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    800&ndash;1,200 MXN
                  </span>{" "}
                  total. This is the best option if you want to visit multiple
                  palenques, since they&apos;re spread along the highway.
                </p>
                <p>
                  <strong className="text-copal/90">Organized tour:</strong>{" "}
                  Runs{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    400&ndash;900 MXN
                  </span>{" "}
                  per person, usually includes 2&ndash;3 palenque visits and
                  lunch. Fine if you don&apos;t want logistics, but you lose
                  flexibility and spend time at places chosen for their
                  commission rate, not their mezcal.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-4 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                What to Expect at a Palenque
              </h3>
              <div className="mt-3 text-sm text-copal/70 leading-relaxed space-y-3">
                <p>
                  A typical visit lasts 30&ndash;60 minutes. The mezcalero will
                  walk you through the entire process: the earthen pit where
                  agave pi&ntilde;as are roasted over volcanic rock for 3&ndash;5
                  days, the stone tahona pulled by horse to crush the cooked
                  agave, the wooden vats where natural fermentation happens over
                  1&ndash;2 weeks, and finally the copper or clay stills. Most
                  palenques offer free tastings of 3&ndash;5 varieties at the
                  end &mdash; this is where they hope you&apos;ll buy bottles.
                </p>
                <p>
                  The best palenques are the ones where you can see active
                  production &mdash; smoke rising from the pit, agave fibers
                  drying in the sun, fermentation bubbling in the tinas. If
                  everything looks like a museum exhibit and the still is
                  spotless, you&apos;re at a showroom, not a working distillery.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TipCard type="tip">
              <strong>Go on a weekday.</strong> Palenques are working
              operations, and most production happens Monday through Friday.
              Visit on a Saturday and you might see an empty pit and a cold
              still. Visit on a Tuesday and you&apos;ll see the whole process
              in action.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <TipCard type="money">
              <strong>Bottles are cheaper at the palenque.</strong> You&apos;ll
              pay 30&ndash;50% less than in Oaxaca City shops. A solid artesanal
              espad&iacute;n runs{" "}
              <span className="font-mono text-xs font-bold text-mezcal">
                120&ndash;200 MXN
              </span>{" "}
              per bottle at the source. The same bottle in a Centro shop will be
              200&ndash;350 MXN. Bring cash &mdash; most palenques don&apos;t
              take cards.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <AgaveDivider />

      {/* ═══════════════════ Buying Mezcal ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Take It Home
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Buying Mezcal to Take Home
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Mezcal costs a fraction of export prices when you buy it here. Bottles that retail for $50&ndash;80 USD in
                the States cost 200&ndash;400 MXN ($12&ndash;24 USD) here. Even
                rare wild agave mezcals that would be $120+ in Brooklyn are
                600&ndash;1,000 MXN in a Oaxacan shop. The catch is knowing what
                to buy and what to avoid.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                What to Look For on the Label
              </h3>
              <div className="mt-3 text-sm text-copal/70 leading-relaxed space-y-3">
                <p>
                  <strong className="text-copal/90">Artesanal or Ancestral:</strong>{" "}
                  These are the two production categories worth buying, as
                  defined by the <a href="https://www.crm.org.mx" target="_blank" rel="noopener" className="text-barro underline">Consejo Regulador del Mezcal</a> (CRM).
                  Artesanal means earthen-pit roasted agave, stone-crushed, and
                  copper-distilled. Ancestral means the same but distilled in
                  clay pots instead of copper &mdash; it&apos;s the oldest
                  method and produces a more rustic, complex spirit. Avoid
                  anything labeled &ldquo;industrial&rdquo; or &ldquo;mezcal&rdquo;
                  with no category specified.
                </p>
                <p>
                  <strong className="text-copal/90">Agave type:</strong> It
                  should name the specific agave (espad&iacute;n, tobala,
                  etc.). If it just says &ldquo;maguey&rdquo; without
                  specifying, that&apos;s a red flag.
                </p>
                <p>
                  <strong className="text-copal/90">Mezcalero name:</strong>{" "}
                  Good mezcal names its maker. If there&apos;s no producer name,
                  it&apos;s likely an industrial blend from an anonymous source.
                </p>
                <p>
                  <strong className="text-copal/90">ABV:</strong> Look for
                  45&ndash;55%. Below 40% suggests it&apos;s been watered down.
                  Above 55% is unusual but not necessarily bad. Most quality
                  artesanal mezcal sits at 47&ndash;49%.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-4 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                Price Ranges (Bottles)
              </h3>
              <div className="mt-3 space-y-2 text-sm text-copal/70 leading-relaxed">
                <p>
                  <strong className="text-copal/90">Artesanal espad&iacute;n:</strong>{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    150&ndash;300 MXN
                  </span>{" "}
                  &mdash; The everyday workhorse. Buy two: one to drink, one to
                  gift.
                </p>
                <p>
                  <strong className="text-copal/90">Tobal&aacute;:</strong>{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    400&ndash;800 MXN
                  </span>{" "}
                  &mdash; The &ldquo;impress your friends&rdquo; bottle.
                  Floral, complex, and unlike anything they&apos;ve tasted.
                </p>
                <p>
                  <strong className="text-copal/90">Wild agaves (tobaziche, cuishe, madrecuixe):</strong>{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    500&ndash;1,200 MXN
                  </span>{" "}
                  &mdash; For the serious collector. These are limited runs
                  from agaves that grow wild in the mountains.
                </p>
                <p>
                  <strong className="text-copal/90">Pechuga:</strong>{" "}
                  <span className="font-mono text-xs font-bold text-mezcal">
                    800&ndash;2,000 MXN
                  </span>{" "}
                  &mdash; The ceremonial stuff. Buy it if you tried it at a
                  bar and loved it.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-4 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                Packing Mezcal for Flights
              </h3>
              <div className="mt-3 text-sm text-copal/70 leading-relaxed space-y-3">
                <p>
                  Checked luggage only &mdash; no exceptions. Wrap each bottle
                  in at least two layers of clothing, then seal it inside a
                  gallon-size ziplock bag. If a bottle breaks mid-flight, the
                  bag saves your wardrobe. Many shops in Oaxaca will bubble-wrap
                  bottles for free if you ask; some sell foam bottle sleeves for
                  15&ndash;20 MXN.
                </p>
                <p>
                  Most airlines allow up to 5 liters of alcohol per passenger in
                  checked bags (verify with your carrier). Two 750ml bottles is a
                  safe, practical limit per bag &mdash; any more and you risk
                  weight overages and awkward packing geometry.
                </p>
                <p>
                  If you&apos;re buying at a palenque and the bottle is reused
                  plastic, that&apos;s actually a bonus for travel &mdash;
                  lighter and unbreakable. Just make sure the cap seals properly.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <TipCard type="skip">
              <strong>Avoid &ldquo;cream&rdquo; mezcals and flavored bottles.</strong>{" "}
              The mango, caf&eacute;, and cr&egrave;me varieties sold in
              tourist shops are sugary mixers with mezcal as an afterthought.
              They&apos;re not terrible, but they&apos;re not real mezcal
              either. If someone back home wants something sweet, buy them a good
              espad&iacute;n and a bottle of orange juice.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <AgaveDivider />

      {/* ═══════════════════ Tasting Vocabulary ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Glossary
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Tasting Vocabulary: Seven Words You Need
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-sm text-copal/60 leading-relaxed">
              You don&apos;t need a sommelier vocabulary to enjoy mezcal, but
              knowing these seven terms will help you read menus, talk to
              bartenders, and understand what you&apos;re paying for.
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-0">
            {[
              {
                term: "Joven",
                pronunciation: "HO-ven",
                definition:
                  "Unaged mezcal, bottled shortly after distillation. This is what you want 90% of the time. Clear, pure expression of the agave without barrel influence. Most mezcal in Oaxaca is joven.",
              },
              {
                term: "Reposado",
                pronunciation: "reh-poh-SAH-doh",
                definition:
                  "Rested in wood for 2\u201312 months. Picks up mild vanilla and caramel notes from the barrel. Divisive among mezcal purists \u2014 some argue the wood masks the agave flavor. Worth trying once, but joven is the standard.",
              },
              {
                term: "Pechuga",
                pronunciation: "peh-CHOO-gah",
                definition:
                  "Mezcal redistilled with a raw chicken or turkey breast hung inside the still, along with fruits, nuts, and spices. The result is silky, fruity, and faintly savory. Made for celebrations. Expensive but extraordinary.",
              },
              {
                term: "Ancestral",
                pronunciation: "ahn-seh-STRAHL",
                definition:
                  "The oldest production method: earthen pit roast, stone tahona crush, open-air fermentation, clay pot distillation. Produces the most rustic, textured mezcals. If you see it on a menu, order it.",
              },
              {
                term: "Artesanal",
                pronunciation: "ar-teh-sah-NAHL",
                definition:
                  "Traditional production using earthen pit roasting and either copper or clay distillation. The middle ground between ancestral and industrial. This is where most good mezcal lives.",
              },
              {
                term: "Industrial",
                pronunciation: "een-doos-tree-AHL",
                definition:
                  "Made with autoclaves (steam ovens), mechanical shredders, and stainless steel stills. Faster and cheaper, but strips out much of the character. Avoid this category unless you\u2019re mixing cocktails and don\u2019t care.",
              },
              {
                term: "Cap\u00f3n",
                pronunciation: "kah-POHN",
                definition:
                  "An agave whose flowering stalk (quiote) has been cut before it blooms, forcing all the plant\u2019s sugars to concentrate in the pi\u00f1a. Most mezcal agaves are cap\u00f3n. It\u2019s what gives good mezcal its sweetness and depth.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.term} delay={i * 0.04}>
                <div className="py-4 border-b border-copal/[0.06]">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-heading text-base font-bold text-copal">
                      {item.term}
                    </h3>
                    <span className="font-mono text-xs italic text-copal/40">
                      {item.pronunciation}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-copal/65 leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <TipCard type="tip">
              <strong>Ask for &ldquo;joven, artesanal.&rdquo;</strong> If
              you remember nothing else from this glossary, those two words will
              get you a good mezcal at any bar in Oaxaca. It tells the
              bartender you want unaged, traditionally made spirit &mdash; which
              is what the locals drink.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <AgaveDivider />

      {/* ═══════════════════ FAQs ═══════════════════ */}
      <FAQSection faqs={faqs} />

      {/* ═══════════════════ Related Content ═══════════════════ */}
      <RelatedContent
        items={[
          {
            title: "Oaxaca Street Food Guide",
            description:
              "12 dishes to eat and where to find them, with prices in MXN and exact locations.",
            href: "/oaxaca-street-food-guide",
            accentColor: "barro",
          },
          {
            title: "Oaxaca City 4-Day Itinerary",
            description:
              "Day-by-day plan covering markets, ruins, mezcal, and food.",
            href: "/oaxaca-city-4-day-itinerary",
            accentColor: "barro",
          },
          {
            title: "Cultural Experiences",
            description:
              "Weaving workshops, cooking classes, and Zapotec village visits.",
            href: "/oaxaca-cultural-experiences",
            accentColor: "anil",
          },
        ]}
      />
    </>
  );
}
