"use client";

import { Phone, Wifi, CreditCard, Heart, Shield } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import AmatePaper from "@/components/decorative/AmatePaper";
import TipCard from "@/components/content/TipCard";
import SafetyRating from "@/components/safety/SafetyRating";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

/* ─── Neighborhood card ─── */
function NeighborhoodCard({
  name,
  level,
  description,
  details,
}: {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  description: string;
  details: string[];
}) {
  return (
    <div className="bg-lana rounded-[6px] border border-copal/[0.06] p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-heading text-lg font-bold text-copal">{name}</h3>
        <SafetyRating level={level} />
      </div>
      <p className="text-sm text-copal/70 leading-relaxed">{description}</p>
      <ul className="mt-3 space-y-1.5">
        {details.map((detail, i) => (
          <li
            key={i}
            className="text-sm text-copal/60 leading-relaxed flex items-start gap-2"
          >
            <span className="text-nopal/60 mt-1 shrink-0">&bull;</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Scam item ─── */
function ScamItem({
  title,
  description,
  avoidance,
}: {
  title: string;
  description: string;
  avoidance: string;
}) {
  return (
    <div className="py-4 border-b border-lana/10 last:border-b-0">
      <h3 className="font-heading text-base font-bold text-lana/90">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-lana/60 leading-relaxed">
        {description}
      </p>
      <p className="mt-2 text-sm text-nopal/90 leading-relaxed">
        <strong>How to avoid:</strong> {avoidance}
      </p>
    </div>
  );
}

/* ─── FAQ data ─── */
const faqs = [
  {
    question: "Is Oaxaca safe for tourists in 2026?",
    answer:
      "Yes. Oaxaca City is one of the safest tourist destinations in Mexico. The Centro Hist\u00f3rico, Jalatlaco, and Reforma neighborhoods are well-patrolled and walkable day and night. Violent crime against tourists is extremely rare. The U.S. State Department rates Oaxaca state at Level 2 (Exercise Increased Caution), the same level as the UK and France. Use the same common sense you would in any mid-sized city \u2014 don\u2019t flash expensive jewelry, be aware of your surroundings at night, and stick to well-lit areas.",
  },
  {
    question: "Can I walk around Oaxaca at night?",
    answer:
      "In Centro Hist\u00f3rico and Jalatlaco, absolutely. Streets are busy with locals and tourists until midnight or later, especially around the Z\u00f3calo, Alcal\u00e1, and Llano park. Reforma and Xochimilco are fine along main streets but have some darker residential blocks where you may want to grab a taxi after 10 PM. North of Perif\u00e9rico there\u2019s no reason for tourists to walk at night.",
  },
  {
    question: "Is it safe to use ATMs in Oaxaca?",
    answer:
      "Yes, if you use bank-attached ATMs during business hours. Stick to Banamex (Citibanamex), BBVA, Banorte, or HSBC machines inside banks or inside shopping centers. Avoid standalone ATMs from Cashzone, Euronet, or unbranded machines at convenience stores \u2014 they charge 3\u20135% surcharges and have higher skimming risk. Cover your PIN, withdraw during daylight, and use ATMs inside the bank lobby when possible.",
  },
];

export default function SafetyTipsPage() {
  const heroImage = getGuideImage("/oaxaca-safety-tips");

  return (
    <>
      {/* ─── Hero ─── */}
      <GuideHero
        breadcrumbLabel="Safety Tips"
        kicker="Practical"
        kickerColor="text-nopal"
        title="Oaxaca Safety Guide: What Tourists Actually Need to Know"
        subtitle="An honest, no-hype assessment of safety, scams, health risks, and practical info for Oaxaca City &mdash; written by someone who has actually spent months there."
        pills={["Neighborhood Safety", "Common Scams", "Health & Emergency"]}
        readTime="9 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider className="bg-lana" />

      {/* ─── Intro ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Overview
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The Short Version
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca City is one of Mexico&apos;s safest tourist destinations.
                Full stop. The centro is compact, walkable, and well-policed.
                Violent crime against tourists is exceedingly rare &mdash; the
                things most likely to ruin your trip are a bad stomach, sunburn,
                or paying double for a taxi because you didn&apos;t agree on the
                price first.
              </p>
              <p>
                That said, context matters. Oaxaca is a real city with 300,000+
                people, not a theme park. Petty theft exists. Overcharging
                happens. Some neighborhoods are better avoided at night. This
                guide covers all of it with the kind of honesty you won&apos;t
                find in a tourism board pamphlet.
              </p>
              <p>
                The biggest risk most tourists face in Oaxaca is actually health-related:
                altitude adjustment, sun exposure, and the classic traveler&apos;s
                stomach. We cover all of that below, along with neighborhood-by-neighborhood
                safety ratings, common scams, emergency contacts, and the practical
                stuff &mdash; SIM cards, tipping, ATMs &mdash; that nobody tells
                you before you arrive.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="tip">
              Oaxaca consistently ranks as one of the safest cities in Mexico for
              foreign visitors. The <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html" target="_blank" rel="noopener" className="text-barro underline">U.S. State Department</a> rates Oaxaca state at
              Level 2 (&ldquo;Exercise Increased Caution&rdquo;) &mdash; the
              same advisory level as France, the UK, and Germany.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Neighborhood Safety ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              By Area
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Neighborhood Safety at Night
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              All of these ratings are for nighttime walking. During the day,
              every tourist-relevant neighborhood in Oaxaca is perfectly safe.
              The differences only emerge after dark.
            </p>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            <ScrollReveal delay={0.08}>
              <NeighborhoodCard
                name="Centro Hist&oacute;rico"
                level={1}
                description="The safest area for tourists, day and night. Well-lit colonial streets, constant police presence, and busy with pedestrians until midnight or later."
                details={[
                  "The Z\u00f3calo and surrounding blocks are active until 1\u20132 AM on weekends",
                  "Pedestrian street Alcal\u00e1 is well-lit and patrolled its entire length",
                  "Tourist police (identifiable by their white shirts) patrol the main plazas",
                  "Walking home from restaurants and bars at midnight is completely normal",
                  "Only sketchy spot: the blocks immediately around Mercado de Abastos after dark",
                ]}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <NeighborhoodCard
                name="Jalatlaco"
                level={1}
                description="Quiet, residential barrio beloved by artists and expats. Feels like a small village within the city. Safe to walk at any hour."
                details={[
                  "Calm cobblestone streets with colorful houses \u2014 very few cars after dark",
                  "Popular with digital nomads and long-term visitors, so there\u2019s always foot traffic",
                  "Several late-night restaurants and mezcaler\u00edas keep the area active",
                  "Well-connected to Centro via Calle Reforma \u2014 a 10\u201315 minute walk",
                  "One of the best neighborhoods in all of Mexico to walk at night",
                ]}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <NeighborhoodCard
                name="Reforma"
                level={2}
                description="A residential neighborhood north of Centro. Fine during the day and mostly fine at night, but with less street lighting on side streets."
                details={[
                  "Main avenues (Reforma, Independencia) are well-lit and busy until 10\u201311 PM",
                  "Residential side streets can be dark and empty after 9 PM",
                  "Several popular restaurants and cafes along the main roads",
                  "Stick to main streets at night and you\u2019ll have zero issues",
                  "Grab a taxi or DiDi if heading to dark residential blocks after 10 PM",
                ]}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <NeighborhoodCard
                name="Xochimilco"
                level={2}
                description="Historic neighborhood east of Centro with a bohemian character. Lively during the day, but some blocks go quiet after dark."
                details={[
                  "The main strip around the Xochimilco church is active and safe at night",
                  "Some side streets lack adequate lighting after 9\u201310 PM",
                  "Home to several good restaurants that are worth visiting",
                  "A 5\u201310 minute walk from Centro \u2014 the main connecting roads are fine",
                  "Take a taxi back if you\u2019re deep in the neighborhood late at night",
                ]}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
              <NeighborhoodCard
                name="North of Perif&eacute;rico"
                level={3}
                description="Working-class residential areas with no tourist infrastructure. There is no reason for visitors to go here, and it&apos;s best avoided after dark."
                details={[
                  "No attractions, restaurants, or hotels that tourists would visit",
                  "Poorly lit streets with minimal pedestrian traffic at night",
                  "Not inherently dangerous, but you\u2019d stand out and have nothing to gain",
                  "If a taxi or DiDi takes you through here, it\u2019s fine \u2014 just don\u2019t walk",
                  "Locals live here comfortably, but it\u2019s not set up for visitors",
                ]}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.28}>
            <TipCard type="tip">
              When in doubt, use DiDi (Mexico&apos;s Uber equivalent). It&apos;s
              cheap, reliable, and available 24/7 in Oaxaca. A ride across the
              entire city rarely costs more than 60&ndash;80 MXN ($3.50&ndash;$4.50
              USD).
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Common Scams (AmatePaper wrap) ─── */}
      <AmatePaper className="bg-lana-dark px-6 py-8 md:px-8 md:py-10">
        <section className="py-4 md:py-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
                Watch Out
              </span>
              <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-lana">
                Common Scams &amp; Annoyances
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <p className="mt-4 text-base text-lana/60 leading-relaxed">
                Oaxaca is not a scam-heavy city. You won&apos;t encounter the
                aggressive hustling you&apos;d see in Cancun or Playa del Carmen.
                But a few predictable annoyances catch first-time visitors off
                guard. None of these are dangerous &mdash; they&apos;re just costly
                if you don&apos;t know about them.
              </p>
            </ScrollReveal>

            <div className="mt-6">
              <ScrollReveal delay={0.08}>
                <ScamItem
                  title="Taxi Overcharging"
                  description="Oaxaca taxis don&apos;t use meters. Drivers quote a price, and tourists routinely pay 2&ndash;3x the local rate. A ride from the airport to Centro should cost 200&ndash;250 MXN, but some drivers ask for 400+. Within the city, most rides should be 40&ndash;60 MXN."
                  avoidance="Always agree on the price before getting in. Better yet, use DiDi &mdash; it shows the price upfront, and drivers can&apos;t change it. For airport transfers, buy a prepaid taxi ticket inside the terminal (the booth is right after baggage claim)."
                />
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <ScamItem
                  title="Fake Mezcal"
                  description="Street vendors and some tourist shops sell &ldquo;artisanal mezcal&rdquo; that is actually cheap cane spirit with flavoring. It might not be dangerous, but you&apos;re paying 200+ MXN for a bottle worth 30 MXN."
                  avoidance="Buy mezcal from established mezcaler&iacute;as or shops with proper labeling (NOM number on the bottle, producer name, agave type). In Situ, Mezcaloteca, and Los Amantes are all trustworthy. Never buy mezcal from someone on the street."
                />
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <ScamItem
                  title="Fake Artisan Goods"
                  description="Machine-made textiles from China or Puebla sold as &ldquo;handmade Oaxacan&rdquo; crafts. This is especially common with alebrijes (carved wooden animals), embroidered blouses, and woven rugs. The fakes look similar but fall apart quickly."
                  avoidance="Buy directly from artisan cooperatives or named workshops. Real hand-embroidered blouses take 2&ndash;3 months to make and cost 1,500&ndash;5,000 MXN. If someone offers one for 200 MXN, it&apos;s machine-made. ARIPO and the Textile Museum gift shop are reliable sources."
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ScamItem
                  title="Overpriced Restaurants on Alcal&aacute;"
                  description="The pedestrian street Macedonio Alcal&aacute; is beautiful, but restaurants lining it charge 50&ndash;100% more than equivalent places one or two blocks away. The food is often worse, too, because they survive on foot traffic rather than reputation."
                  avoidance="Walk one block in any direction off Alcal&aacute; and prices drop dramatically. The best food in Oaxaca is at markets (Mercado 20 de Noviembre), fondas (family-run lunch spots), and side-street restaurants the locals actually eat at."
                />
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <ScamItem
                  title="&ldquo;Tourist Price&rdquo; at Markets"
                  description="At Benito Ju&aacute;rez and Mercado de Abastos, some vendors quote higher prices when they hear English or see a tourist face. This isn&apos;t a scam exactly &mdash; it&apos;s negotiation culture &mdash; but you&apos;ll pay 20&ndash;40% more if you don&apos;t push back."
                  avoidance="Learn a few phrases in Spanish. &ldquo;&iquest;Cu&aacute;nto cuesta?&rdquo; (how much?) and &ldquo;&iquest;Me puede dar un mejor precio?&rdquo; (can you give a better price?) go a long way. Negotiate politely but firmly. Walk away if the price feels too high &mdash; there are usually five other stalls selling the same thing."
                />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.28}>
              <div className="mt-6 flex gap-3 border rounded-[6px] p-4 border-barro/30 bg-barro/[0.06]">
                <Shield
                  size={14}
                  className="text-barro shrink-0 mt-0.5"
                />
                <p className="text-sm text-lana/70 leading-relaxed">
                  <strong className="text-lana/90">Pickpocketing</strong> exists
                  but is uncommon. It&apos;s most reported on crowded buses and at
                  Mercado de Abastos. Keep your phone in a front pocket, don&apos;t
                  leave bags unattended at restaurant tables, and you&apos;ll be
                  fine. Oaxaca has significantly less petty theft than Mexico City,
                  Guadalajara, or any beach resort.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </AmatePaper>

      {/* ─── Health Tips ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              <Heart size={12} className="inline -mt-0.5 mr-1" />
              Health
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Health Tips
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-copal mb-2">
                  Altitude (1,550m / 5,085ft)
                </h3>
                <p>
                  Oaxaca sits at 1,550 meters above sea level. This isn&apos;t high
                  enough to cause serious altitude sickness, but it&apos;s enough to
                  notice. You may feel slightly more winded climbing stairs, get
                  headaches, or tire more easily for the first 48 hours. Drink
                  significantly more water than you normally would &mdash; at least
                  3 liters per day for your first two days. Alcohol hits harder
                  at altitude, so ease into the mezcal tastings.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-copal mb-2">
                  Water Safety
                </h3>
                <p>
                  Do not drink tap water. This applies everywhere in Mexico, not
                  just Oaxaca. Use bottled water or purified water from your
                  hotel&apos;s garraf&oacute;n (large water jug). Ice at restaurants
                  and bars is made from purified water and is safe &mdash; you
                  don&apos;t need to ask for drinks &ldquo;sin hielo.&rdquo; Street
                  vendors making aguas frescas and juices use purified water too.
                  Brush your teeth with bottled water for the first few days if
                  you have a sensitive stomach.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-copal mb-2">
                  Stomach Issues
                </h3>
                <p>
                  The infamous &ldquo;Montezuma&apos;s Revenge&rdquo; hits about
                  30&ndash;40% of first-time visitors to Mexico within the first
                  1&ndash;3 days. It&apos;s usually caused by unfamiliar bacteria
                  in food, not contamination &mdash; your gut just needs time to
                  adjust. Bring Imodium (loperamide) and Pepto-Bismol from home.
                  Start with cooked foods and avoid raw salads on your first day.
                  Street food in Oaxaca is generally safe &mdash; high turnover means
                  fresh ingredients &mdash; but let your stomach settle before going
                  all-in on chapulines (grasshoppers) and tlayudas from street carts.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-copal mb-2">
                  Pharmacies
                </h3>
                <p>
                  Farmacia del Ahorro and Farmacias Similares are everywhere in
                  Oaxaca &mdash; you&apos;ll never be more than a few blocks from
                  one. Many medications that require prescriptions in the U.S. or
                  Europe are available over the counter in Mexico, including
                  antibiotics, anti-inflammatories, and anti-nausea medication.
                  Pharmacists are knowledgeable and will recommend treatments for
                  common traveler ailments. A course of antibiotics costs
                  50&ndash;150 MXN ($3&ndash;$9 USD). Most Farmacias Similares
                  also have an on-site doctor (consulta m&eacute;dica) who can
                  see you for 40&ndash;60 MXN and write prescriptions on the
                  spot &mdash; no appointment needed. This is significantly
                  cheaper and faster than a hospital visit for non-emergency
                  issues like stomach bugs or infections.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-copal mb-2">
                  Sun Exposure
                </h3>
                <p>
                  The UV index in Oaxaca is brutal. At 1,550m altitude and 17&deg;
                  latitude, UV radiation is 20&ndash;30% stronger than at sea level.
                  You will burn faster than you expect, even on cloudy days. Wear
                  SPF 50+ sunscreen, reapply every 2 hours, and wear a hat if
                  you&apos;re visiting Monte Alb&aacute;n or Hierve el Agua where
                  there&apos;s zero shade. Bring sunscreen from home &mdash;
                  it&apos;s 2&ndash;3x more expensive in Mexico.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="tip">
              Pack a small first-aid kit: Imodium, Pepto-Bismol, electrolyte
              packets (or buy Electrolit at any OXXO &mdash; it&apos;s the Mexican
              Gatorade and actually works), Band-Aids, and your preferred pain
              reliever. These are all available in Oaxaca, but having them on
              hand your first night saves a pharmacy run while jet-lagged.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Phone, Internet & SIM Cards ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              <Wifi size={12} className="inline -mt-0.5 mr-1" />
              Connectivity
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Phone, Internet &amp; SIM Cards
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Staying connected in Oaxaca is easy and cheap. Here&apos;s
                everything you need to know about phones and internet access.
              </p>

              <div>
                <h3 className="font-heading text-base font-bold text-copal mb-1.5">
                  SIM Cards
                </h3>
                <p>
                  Buy a Telcel prepaid SIM at any OXXO convenience store for
                  100&ndash;200 MXN ($6&ndash;$12 USD). This gets you 5&ndash;10GB
                  of data depending on the plan, plus unlimited calls within Mexico.
                  Telcel has the best coverage in Oaxaca and surrounding areas.
                  AT&T Mexico is a decent alternative. Bring your own unlocked phone
                  &mdash; the SIM swap takes 5 minutes. You&apos;ll need your
                  passport for registration (Mexican law requires it since 2022).
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-copal mb-1.5">
                  WiFi
                </h3>
                <p>
                  Nearly every caf&eacute;, restaurant, and hotel in the tourist
                  areas offers free WiFi. Speed varies &mdash; expect 10&ndash;30
                  Mbps at most caf&eacute;s, which is fine for browsing and messaging
                  but not great for video calls. For reliable work-from-caf&eacute;
                  internet, try Cafebre&iacute;a El Andador on Alcal&aacute; or
                  Boulenc in Jalatlaco.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-copal mb-1.5">
                  Offline Maps
                </h3>
                <p>
                  Download the Oaxaca City area in Google Maps before you arrive.
                  Mobile data can be spotty in some neighborhoods and drops out
                  entirely on day trips to Monte Alb&aacute;n, Hierve el Agua, and
                  the Valles Centrales. Offline maps with saved pins for restaurants
                  and landmarks will save you multiple times.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="money">
              If you have an eSIM-compatible phone, consider Airalo or Holafly
              instead of a physical SIM. You can set it up before landing in
              Mexico and avoid the OXXO trip entirely. Airalo offers 5GB for
              Mexico at around $10 USD.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Emergency Info ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              <Phone size={12} className="inline -mt-0.5 mr-1" />
              Emergency
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Emergency Info
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Save these numbers in your phone before you arrive. Hopefully
              you&apos;ll never need them, but being prepared costs nothing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-lana-dark rounded-[6px] p-4 border border-copal/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-barro/70">
                  General Emergency
                </span>
                <p className="mt-1 font-heading text-xl font-bold text-copal">
                  911
                </p>
                <p className="mt-1 text-xs text-copal/50">
                  Mexico&apos;s <a href="https://www.gob.mx/911" target="_blank" rel="noopener" className="text-barro underline">national emergency number</a> works for police, fire, and ambulance. Operators may speak
                  limited English &mdash; speak slowly or use basic Spanish.
                </p>
              </div>

              <div className="bg-lana-dark rounded-[6px] p-4 border border-copal/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-barro/70">
                  Tourist Police
                </span>
                <p className="mt-1 font-heading text-xl font-bold text-copal">
                  951 502 0189
                </p>
                <p className="mt-1 text-xs text-copal/50">
                  Oaxaca&apos;s dedicated tourist police. More likely to have
                  English speakers. Available 24/7.
                </p>
              </div>

              <div className="bg-lana-dark rounded-[6px] p-4 border border-copal/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-anil/70">
                  Hospital with English Speakers
                </span>
                <p className="mt-1 font-heading text-base font-bold text-copal">
                  Hospital Reforma
                </p>
                <p className="mt-1 text-xs text-copal/50">
                  Calle Reforma 613, Centro. Private hospital with 24-hour
                  emergency room. Several doctors speak English. Expect to pay
                  upfront (1,000&ndash;3,000 MXN for a standard consultation) and
                  submit to insurance later.
                </p>
              </div>

              <div className="bg-lana-dark rounded-[6px] p-4 border border-copal/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-anil/70">
                  U.S. Consular Agency
                </span>
                <p className="mt-1 font-heading text-base font-bold text-copal">
                  951 514 3054
                </p>
                <p className="mt-1 text-xs text-copal/50">
                  Alcal&aacute; 407, Interior 20. Limited hours (Mon&ndash;Fri
                  10am&ndash;1pm). For lost passports, arrests, or serious
                  emergencies involving U.S. citizens.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <h3 className="font-heading text-lg font-bold text-copal">
                ATMs &amp; Banking
              </h3>
              <p>
                Use ATMs from major Mexican banks: <strong className="text-copal/90">Banamex
                (Citibanamex)</strong> and <strong className="text-copal/90">BBVA</strong> have
                the most locations and lowest foreign withdrawal fees (typically
                36&ndash;50 MXN per transaction, about $2&ndash;$3 USD). <strong className="text-copal/90">Banorte</strong> and{" "}
                <strong className="text-copal/90">HSBC</strong> are also reliable.
              </p>
              <p>
                <strong className="text-barro">Avoid Cashzone, Euronet, and
                unbranded standalone ATMs.</strong> These charge 3&ndash;5%
                surcharges on top of the standard fee, and exchange rates are
                significantly worse. A 5,000 MXN withdrawal from Cashzone can
                cost you an extra 150&ndash;250 MXN compared to a bank ATM.
              </p>
              <p>
                Withdraw larger amounts less frequently to minimize per-transaction
                fees. Most bank ATMs have a daily limit of 8,000&ndash;10,000 MXN.
                Always choose to be charged in MXN (not your home currency) when
                the ATM asks &mdash; this avoids dynamic currency conversion
                markups of 3&ndash;7%.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TipCard type="skip">
              Never accept &ldquo;dynamic currency conversion&rdquo; at ATMs or
              card terminals. When the screen asks if you want to be charged in
              your home currency (USD, EUR, GBP), always say no and choose MXN.
              The conversion rate they offer is 3&ndash;7% worse than your
              bank&apos;s rate.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Tipping & Etiquette ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              <CreditCard size={12} className="inline -mt-0.5 mr-1" />
              Etiquette
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Tipping &amp; Etiquette
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Tipping culture in Oaxaca is straightforward but different from
              what you might be used to. Here&apos;s the honest breakdown so you
              don&apos;t over-tip (wasting money) or under-tip (being rude).
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 space-y-3">
              <div className="flex gap-4 items-start bg-lana rounded-[6px] p-4 border border-copal/[0.04]">
                <span className="font-mono text-xs font-bold text-mezcal shrink-0 mt-0.5 w-24">
                  Restaurants
                </span>
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">10&ndash;15%</strong> at
                  sit-down restaurants. 10% is acceptable, 15% is generous. Check
                  the bill first &mdash; some upscale restaurants add a
                  &ldquo;servicio&rdquo; (service charge) automatically, especially
                  for groups of 6+. At fondas and comedores (casual lunch spots),
                  tipping is appreciated but not expected &mdash; leaving 10&ndash;20
                  MXN for good service is a kind gesture.
                </p>
              </div>

              <div className="flex gap-4 items-start bg-lana rounded-[6px] p-4 border border-copal/[0.04]">
                <span className="font-mono text-xs font-bold text-mezcal shrink-0 mt-0.5 w-24">
                  Bars
                </span>
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">10% or round up.</strong> If
                  your mezcal flight costs 180 MXN, leaving 200 MXN is perfect. At
                  mezcaler&iacute;as where the bartender explains the spirits in
                  detail, 15% shows appreciation. For a simple beer at a casual bar,
                  rounding up to the nearest 10 pesos is enough.
                </p>
              </div>

              <div className="flex gap-4 items-start bg-lana rounded-[6px] p-4 border border-copal/[0.04]">
                <span className="font-mono text-xs font-bold text-mezcal shrink-0 mt-0.5 w-24">
                  Taxis
                </span>
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">No tip expected.</strong> You
                  already negotiated the fare before getting in. If the driver was
                  exceptionally helpful (waited for you, helped with luggage, gave
                  good recommendations), rounding up 10&ndash;20 MXN is a nice touch
                  but truly optional. DiDi rides don&apos;t include tipping.
                </p>
              </div>

              <div className="flex gap-4 items-start bg-lana rounded-[6px] p-4 border border-copal/[0.04]">
                <span className="font-mono text-xs font-bold text-mezcal shrink-0 mt-0.5 w-24">
                  Hotels
                </span>
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">20&ndash;50 MXN/day</strong> for
                  housekeeping, left on the pillow or nightstand each morning.
                  Bellhops: 20&ndash;30 MXN per bag. Concierge who books tours or
                  restaurants: 50&ndash;100 MXN. At boutique hotels and B&Bs, tipping
                  the owner is not expected.
                </p>
              </div>

              <div className="flex gap-4 items-start bg-lana rounded-[6px] p-4 border border-copal/[0.04]">
                <span className="font-mono text-xs font-bold text-mezcal shrink-0 mt-0.5 w-24">
                  Markets
                </span>
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">Never tip.</strong> This is a
                  transaction, not a service. Negotiate politely but firmly. Vendors
                  expect it and respect buyers who engage in the process. Start at
                  about 70% of the asking price and meet in the middle. Always be
                  friendly &mdash; aggressive haggling is rude and counterproductive.
                </p>
              </div>

              <div className="flex gap-4 items-start bg-lana rounded-[6px] p-4 border border-copal/[0.04]">
                <span className="font-mono text-xs font-bold text-mezcal shrink-0 mt-0.5 w-24">
                  Tour Guides
                </span>
                <p className="text-sm text-copal/70 leading-relaxed">
                  <strong className="text-copal/90">50&ndash;100 MXN per
                  person</strong> for half-day tours, 100&ndash;200 MXN for full-day
                  tours. For private guides, 10&ndash;15% of the tour cost is
                  standard. Cooking class instructors: 100&ndash;200 MXN per person
                  is generous and appreciated.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TipCard type="money">
              Always tip in cash (MXN), even if you paid the bill by card. Many
              restaurant staff don&apos;t receive card tips directly &mdash; they
              go through the house first and may be redistributed or delayed. A
              cash tip goes straight into the server&apos;s pocket.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <h3 className="font-heading text-lg font-bold text-copal">
                General Etiquette Notes
              </h3>
              <p>
                Oaxaca is conservative compared to Mexico City or beach towns. A
                few cultural notes that will make your visit smoother:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-nopal/60 mt-1 shrink-0">&bull;</span>
                  <span>
                    <strong className="text-copal/90">Greet people.</strong> A
                    &ldquo;buenos d&iacute;as&rdquo; or &ldquo;buenas
                    tardes&rdquo; when entering a shop, restaurant, or taxi goes a
                    long way. Oaxacans are warm but value basic courtesy.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nopal/60 mt-1 shrink-0">&bull;</span>
                  <span>
                    <strong className="text-copal/90">Ask before
                    photographing people.</strong> Especially at markets and
                    indigenous communities. A simple &ldquo;&iquest;Puedo tomar
                    una foto?&rdquo; is respectful. Some artisans will say no, and
                    that should be accepted graciously.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nopal/60 mt-1 shrink-0">&bull;</span>
                  <span>
                    <strong className="text-copal/90">Dress modestly at
                    churches.</strong> Cover shoulders and knees when visiting
                    Santo Domingo and other churches. This is enforced loosely but
                    shows respect.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nopal/60 mt-1 shrink-0">&bull;</span>
                  <span>
                    <strong className="text-copal/90">Learn basic
                    Spanish.</strong> Even 20 phrases will transform your
                    experience. Oaxacans deeply appreciate any effort to speak
                    their language, and you&apos;ll get better prices, better
                    service, and warmer interactions.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={faqs} />

      {/* ─── Related Content ─── */}
      <RelatedContent
        items={[
          {
            title: "Getting Around Oaxaca",
            description:
              "Colectivos, taxis, DiDi, and walking routes through the city.",
            href: "/getting-around-oaxaca",
            accentColor: "anil",
          },
          {
            title: "Where to Stay in Oaxaca",
            description:
              "Neighborhood guide with hotel picks for every budget tier.",
            href: "/where-to-stay-oaxaca",
            accentColor: "anil",
          },
          {
            title: "Oaxaca Budget Guide",
            description:
              "Realistic daily costs across three budget tiers with real 2026 prices.",
            href: "/oaxaca-budget-guide",
            accentColor: "mezcal",
          },
        ]}
      />
    </>
  );
}
