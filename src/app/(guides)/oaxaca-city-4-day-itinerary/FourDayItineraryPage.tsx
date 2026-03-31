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
  { question: "Is 4 days enough for Oaxaca City?", answer: "Yes — 4 days is the sweet spot. You'll cover the main sights, eat extraordinarily well, visit Monte Albán, and still have time to wander. A 5th day is nice for a day trip to Hierve el Agua or Mitla, but not essential." },
  { question: "How much does 4 days in Oaxaca cost?", answer: "Budget travelers spend $40–55 USD/day (hostels, street food, colectivos). Mid-range is $60–90/day (boutique hotel, restaurants, taxis). Comfort is $100–150/day (nice hotel, tasting menus, tours). Oaxaca is one of Mexico's best-value destinations." },
  { question: "Is Oaxaca City safe for tourists?", answer: "Very safe. Centro Histórico and Jalatlaco are walkable at night. Normal precautions apply — don't flash expensive gear, use official taxis or DiDi. The Centro Histórico and Jalatlaco are walkable well after dark, and violent crime against tourists here is extremely rare compared to beach resort cities like Cancún or Acapulco." },
  { question: "What's the best time of year to visit Oaxaca?", answer: "October–March for dry weather (18–28°C). July for Guelaguetza festival. Late October for Día de los Muertos. Avoid June–August if you dislike afternoon rain, though mornings are usually clear." },
  { question: "Do I need to speak Spanish in Oaxaca?", answer: "Basic Spanish helps a lot, especially in markets and colectivos. Most restaurants in Centro have some English, but street vendors and colectivo drivers rarely do. Learn key food words and you'll be fine." },
];

export default function FourDayItineraryPage() {
  const heroImage = getGuideImage("/oaxaca-city-4-day-itinerary");

  return (
    <>
      <GuideHero
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
        breadcrumbLabel="4-Day Itinerary"
        kicker="4-Day Itinerary"
        title="4 Days in Oaxaca City: A Local-Feeling Itinerary"
        subtitle="An opinionated day-by-day plan that prioritizes the things most guides get wrong — the right markets at the right time, the mole you should actually order, and the ruins without the crowds."
        pills={["4 Days", "~$50–70/day", "Pace: Moderate", "Best for: Couples, Solo, Foodies"]}
        readTime="14 min read"
      />

      <ZapotecDivider className="bg-lana" />

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                This itinerary is for people who want to <em>experience</em>{" "}
                Oaxaca, not check boxes. You&apos;ll eat better than most
                travelers, spend less than you&apos;d expect, and leave with a
                genuine understanding of why Oaxaca City is considered the
                cultural capital of Mexico.
              </p>
              <p>
                It&apos;s not for people who want to cram every attraction into
                every day. The rhythm here is simple: mornings for exploration,
                afternoons for eating and wandering, evenings for{" "}
                <Link href="/oaxaca-mezcal-guide" className="text-barro underline">mezcal</Link>{" "}
                and mole. Trust the pace.
              </p>
              <p className="text-sm text-copal/50 italic">
                You won&apos;t find{" "}
                <Link href="/oaxaca-day-trips" className="text-barro underline">Hierve el Agua</Link>{" "}
                on this itinerary. It&apos;s
                1.5 hours each way on terrible roads, and it&apos;s
                underwhelming in person. If you have a 5th day, maybe.
                Otherwise, spend your time better.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 1 */}
      <section id="day-1" className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                01
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day One
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Arrive, Settle, and Eat Your First Tlayuda
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="Morning → Early Afternoon" title="Arrival">
              <p>
                <strong>Airport to Centro:</strong> Taxi from OAX airport costs{" "}
                <strong>200–250 MXN (~$12–14 USD)</strong>. Don&apos;t use the
                guys shouting outside — go to the official taxi counter inside
                the terminal. Fixed rate. The ride is 15–20 minutes.
              </p>
              <TipCard type="tip">
                <strong>Where to stay:</strong> Book in Centro Histórico or
                Jalatlaco. Skip Reforma — it&apos;s residential and you&apos;ll
                waste time on taxis. Jalatlaco is the colorful, quiet
                neighborhood 5 blocks from the Zócalo. Hostels: 300–500
                MXN/night. Hotels: 800–1,500 MXN/night. Airbnbs: 600–1,200
                MXN/night.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="1:30 PM – 5:00 PM" title="Orient Yourself">
              <p>
                <strong>Walk to the Zócalo</strong> (main square). This is your
                compass. Every direction from here has something worth seeing
                within 10 blocks.
              </p>
              <p>
                <strong>Templo de Santo Domingo + Jardín Etnobotánico:</strong>{" "}
                The church is free — the interior is floor-to-ceiling gilded stucco from the 1600s, every surface carved and covered in gold leaf. It borders on excessive, which is the point. The ethnobotanical garden costs{" "}
                <strong>30 MXN</strong> and requires a guided tour (tours run
                on schedule — check at the entrance). Worth it. The guides are
                excellent and the garden explains the connection between
                Oaxacan culture and its plants.
              </p>
              <p>
                <strong>Andador Turístico</strong> (Macedonio Alcalá pedestrian
                street): Walk it end-to-end from Santo Domingo to the Zócalo.
                Just look. Don&apos;t buy anything yet — the prices here are
                tourist prices, 30–50% higher than the markets.
              </p>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="6:00 PM – 9:00 PM" title="First Tlayuda & First Mezcal">
              <p>
                <strong>Tlayudas Libres</strong> (Calle Libres 212): Order a
                tlayuda de tasajo (dried beef) with quesillo and black beans.{" "}
                <strong>80–100 MXN</strong>. It&apos;s wood-fired and enormous
                — share one, or be ambitious. This is the dish that defines
                Oaxacan street food.
              </p>
              <p>
                <strong>In Situ Mezcalería</strong> (Morelos 511): Order an
                espadín joven (young agave) to start.{" "}
                <strong>60 MXN per pour</strong>. Don&apos;t order cocktails at
                mezcal bars — it defeats the purpose. Sip it neat. The staff
                will guide you if you ask.
              </p>
              <TipCard type="skip">
                <strong>Skip:</strong> Mezcalería Los Amantes on Alcalá.
                It&apos;s fine but overpriced and full of tour groups. In Situ
                is where Oaxaqueños actually drink.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 2 */}
      <section id="day-2" className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                02
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Two
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  The Day You Understand Why People Come Here for the Food
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="8:00 AM – 12:00 PM" title="Mercado 20 de Noviembre">
              <p>
                Go early. <strong>By 11 AM it&apos;s packed</strong> and the
                best seats at the smoke grill section are taken.
              </p>
              <p>
                <strong>The famous parrillada</strong> (Pasillo de Humo):
                Head to the back corridor. Buy your meat from any vendor — 200g
                of tasajo: <strong>~60 MXN</strong>, chorizo:{" "}
                <strong>~50 MXN</strong>. Sit at any table in the communal
                grilling area. They&apos;ll grill it for you. Buy tortillas and
                salsa separately (<strong>20 MXN</strong>) from the women
                walking between tables.
              </p>
              <p>
                <strong>Mayordomo hot chocolate:</strong> Across the street from
                the market. <strong>30 MXN</strong> for a cup of chocolate de
                agua (the traditional way — with water, not milk). Buy a bag of
                chocolate for home — it&apos;s half the price of the airport.
              </p>
              <TipCard type="money">
                <strong>Total market breakfast:</strong> 150–200 MXN per person
                (~$8–11 USD) including meat, tortillas, salsa, a drink, and
                chocolate.{" "}
                <Link
                  href="/mercado-20-de-noviembre-guide"
                  className="text-barro underline"
                >
                  Read the full market guide →
                </Link>
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="1:00 PM – 5:00 PM" title="Museums & Jalatlaco">
              <p>
                <strong><a href="https://www.iago.mx" target="_blank" rel="noopener" className="text-barro underline">IAGO</a></strong> (Instituto de Artes Gráficas de Oaxaca):
                Free. One of the best free museums in Mexico, in a gorgeous
                colonial building. Rotating contemporary art exhibitions plus a
                graphic arts library with over 60,000 prints and books — one of the largest in Latin America.
              </p>
              <p>
                <strong>Museo Textil de Oaxaca:</strong> Free. Small but
                exceptional. Shows you the backstrap loom technique you&apos;ll
                see in village markets. Understanding the craft makes buying
                textiles later much more meaningful (and helps you spot
                machine-made fakes).
              </p>
              <p>
                <strong>Walk through Jalatlaco:</strong> The colorful
                neighborhood with all the Instagram photos. Best between{" "}
                <strong>3–5 PM</strong> when the light hits the painted walls.
                Get a coffee at Cafeología (Calle Reforma 401B) — single-origin
                Oaxacan beans, <strong>45 MXN</strong>.
              </p>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="7:00 PM – 10:00 PM" title="Your First Mole">
              <p>
                <strong>Los Danzantes</strong> (Macedonio Alcalá 403): Order the{" "}
                <strong>mole negro</strong> — this is the dish Oaxaca is famous
                for. It takes 3 days to make and uses 30+ ingredients including
                chocolate. <strong>220–280 MXN</strong> for a plate. Yes,
                it&apos;s tourist-priced. But the mole negro here is consistently the one locals recommend to visitors, and for good reason.
              </p>
              <TipCard type="tip">
                <strong>Cheaper alternative:</strong> Zandunga (García Vigil
                512). Isthmus-style Oaxacan food. Mole is{" "}
                <strong>130 MXN</strong>. More casual. Order the garnachas
                istmeñas as a starter — crispy tortilla cups with beef and
                pickled onion.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 3 */}
      <section id="day-3" className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                03
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Three
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  Zapotec Ruins, Black Pottery, and the Best View in the Valley
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="8:00 AM – 1:00 PM" title="Monte Albán">
              <p>
                <strong>Getting there:</strong> Book a colectivo from Hotel
                Rivera del Ángel (Calle Mina 518).{" "}
                <strong>80 MXN round trip</strong>, leaves at 8:30 AM. You get
                2.5 hours at the ruins, which is enough.
              </p>
              <p>
                <strong>Entry: 90 MXN</strong>. Bring water, sunscreen, and a
                hat. There is zero shade on the main plaza. The views of the
                Oaxaca valley are the best thing about it — the ruins themselves
                are impressive for their scale but less visually dramatic than,
                say, Palenque.
              </p>
              <TipCard type="skip">
                <strong>Skip the on-site guides</strong> — they&apos;re
                expensive (500+ MXN) and most repeat the same script. Download
                a free audio guide from the INAH app instead. It&apos;s better
                researched and you can go at your own pace.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock
              time="2:00 PM – 6:00 PM"
              title="San Bartolo Coyotepec (Barro Negro)"
            >
              <p>
                <strong>30 minutes by taxi or colectivo.</strong> This is where
                the famous black pottery (barro negro) is made. Doña Rosa&apos;s
                workshop is the most famous, but any of the family workshops on
                the main road give free demonstrations.
              </p>
              <TipCard type="money">
                <strong>Prices here are 40–60% less than Oaxaca City
                shops.</strong> A small barro negro vase: 80–150 MXN in the
                village vs. 200–350 MXN on Alcalá. Bring cash — most workshops
                don&apos;t take cards.
              </TipCard>
              <p>
                <strong>If it&apos;s Friday:</strong> Continue to Ocotlán
                market (15 min further). The Friday tianguis (open-air market)
                here is spectacular and far less touristy than anything in the
                city. Food stalls, textiles, pottery, and a mole selection
                that&apos;ll make you rethink lunch.
              </p>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TimeBlock time="7:00 PM – Late" title="Evening in Centro">
              <p>
                <strong>Splurge option:</strong> Casa Oaxaca El Restaurante for
                a contemporary Oaxacan tasting menu (~<strong>800 MXN</strong>).
                Chef&apos;s-choice menu changes daily. Reservations recommended.
              </p>
              <p>
                <strong>Budget option:</strong> Any comedor in Centro for a
                comida corrida — soup, main, agua fresca, tortillas.{" "}
                <strong>70–90 MXN</strong>. Comedor Oaxaqueño on Calle Porfirio
                Díaz is reliable.
              </p>
              <p>
                <strong>After dinner:</strong> Walk the Zócalo. Street
                musicians, families, vendors selling chapulines (grasshoppers
                seasoned with chile and lime). Try them — they taste like smoky
                lime chips. <strong>20 MXN</strong> for a small bag.
              </p>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      {/* Day 4 */}
      <section id="day-4" className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl md:text-7xl font-heading font-bold text-copal/[0.06] leading-none">
                04
              </span>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-copal">
                  Day Four
                </h2>
                <p className="text-sm text-copal/50 mt-1">
                  A Proper Oaxacan Morning Before You Leave
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TimeBlock time="7:30 AM – 10:00 AM" title="Mercado Benito Juárez & Souvenirs">
              <p>
                <strong>Mercado Benito Juárez</strong> — the &quot;other&quot;
                market, and actually better for souvenirs and crafts than 20 de
                Noviembre. It&apos;s right next door but has a completely
                different character.
              </p>
              <p>
                <strong>What to buy to take home:</strong>
              </p>
              <ul className="list-none space-y-1.5 ml-0">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  Mole paste: <strong>80–120 MXN/kg</strong>. Vacuum sealed,
                  lasts months. Get negro and rojo.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  Mezcal: <strong>150–400 MXN/bottle</strong>. Ask for artesanal
                  or ancestral — skip industrial.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  Chocolate: Mayordomo or La Soledad brands.{" "}
                  <strong>40–60 MXN</strong> per bag.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-barro mt-2 shrink-0" />
                  Embroidered blouses (huipiles): Prices vary wildly. A
                  hand-embroidered piece starts at 500 MXN and can reach 3,000+
                  for museum-quality work.
                </li>
              </ul>
            </TimeBlock>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TimeBlock time="10:00 AM – 12:00 PM" title="Last Coffee & Goodbye Walk">
              <p>
                <strong>Café Brújula</strong> — the best coffee in the city.
                Get a Pluma Hidalgo pour-over (<strong>50 MXN</strong>). Pluma
                Hidalgo is a Oaxacan coffee-growing region and the beans are
                exceptional. Multiple locations — the one on Alcalá has the best
                atmosphere.
              </p>
              <p>
                Final walk through Centro. If you missed anything, this is your
                time. The light in Oaxaca between 10–11 AM is{" "}
                <Link href="/oaxaca-photography-spots" className="text-barro underline">perfect for
                photos</Link> — warm and soft without the midday harshness.
              </p>
              <TipCard type="tip">
                <strong>Airport tip:</strong> Book your return taxi at the hotel
                desk (150–200 MXN) or use DiDi (the Mexican Uber equivalent).
                Don&apos;t hail a random taxi to the airport — the rate should
                be fixed. Allow 30 minutes for the ride.
              </TipCard>
            </TimeBlock>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      <ItineraryPicker currentDays={4} />

      {/* Essential Tips */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Essential Info
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Before you go
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Money",
                color: "border-mezcal",
                text: "ATMs at Banamex and BBVA are reliable. Avoid Cashzone ATMs (high fees). Tip 10–15% at restaurants. Markets are cash only. 1 USD ≈ 18 MXN.",
              },
              {
                title: "Safety",
                color: "border-nopal",
                text: <>Oaxaca City has a much lower crime rate than most Mexican tourist destinations. Normal precautions — don&apos;t flash expensive gear, stick to lit streets at night. Centro and Jalatlaco are very safe on foot. <Link href="/oaxaca-safety-tips" className="text-barro underline">Read our full safety guide&nbsp;&rarr;</Link></>,
              },
              {
                title: "Spanish Phrases",
                color: "border-anil",
                text: '¿Cuánto cuesta? (How much?) • Una tlayuda por favor • La cuenta (the check) • ¿Tiene mezcal espadín? • Gracias, muy amable (Thanks, very kind) • ¿Dónde está...? (Where is...?)',
              },
              {
                title: "When to Go",
                color: "border-barro",
                text: "Oct–Nov for Día de los Muertos. Dec–Mar for perfect weather (18–28°C, no rain). July for Guelaguetza festival. Avoid mid-June to August unless you enjoy afternoon downpours.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={0.05 + i * 0.04}>
                <div
                  className={`relative bg-lana-dark border-t-4 ${card.color} rounded-[6px] p-5`}
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
          { title: "Mercado 20 de Noviembre", description: "Stall-by-stall guide to Oaxaca's legendary smoke-filled market.", href: "/mercado-20-de-noviembre-guide", accentColor: "nopal" },
          { title: "Street Food Guide", description: "12 things to eat and exactly where to find them.", href: "/oaxaca-street-food-guide", accentColor: "barro" },
          { title: "Budget Guide", description: "Realistic daily costs for 2026 across three budget tiers.", href: "/oaxaca-budget-guide", accentColor: "mezcal" },
        ]}
      />
    </>
  );
}
