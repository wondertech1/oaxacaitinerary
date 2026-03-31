"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import TipCard from "@/components/content/TipCard";
import PhotoSpotCard from "@/components/photography/PhotoSpotCard";
import GuideHero from "@/components/shared/GuideHero";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import { getGuideImage } from "@/lib/constants/guides";

/* ─── FAQ data ─── */
const faqs = [
  {
    question: "What's the best time of day for photography in Oaxaca?",
    answer:
      "Golden hours are your best friend: 7–9 AM and 5–7 PM. Oaxaca sits at 1,550 meters elevation, which means the UV intensity between 11 AM and 3 PM is brutal — harsh overhead shadows, blown-out highlights, and flat, washed-out colors. Morning golden hour is slightly better than evening because the air is cleaner (less dust), the streets are emptier, and the low-angle sun lights east-facing facades like Santo Domingo perfectly. If you only have one morning, spend it at Santo Domingo at 8 AM, then walk south through the Andador Turístico to the Zócalo as the light rises.",
  },
  {
    question: "Do I need a real camera, or is a phone good enough?",
    answer:
      "A phone works for everything in this guide. Oaxaca's photogenic qualities come from color, light, and texture — not from subjects that require telephoto reach or extreme low-light capability. Modern phone cameras (iPhone 14+, Pixel 7+, Samsung S23+) handle Oaxaca's bright daylight and colorful scenes beautifully. The one scenario where a dedicated camera helps is inside the markets, where light is low and phone sensors can get noisy. But even there, you can get great shots by bracing against a column and holding steady. Bring a phone, skip the 5kg camera bag, and enjoy walking without neck pain.",
  },
  {
    question: "Can you photograph people at markets and in the streets?",
    answer:
      "Yes, but with respect and common sense. At Mercado 20 de Noviembre and Benito Juárez, most vendors are accustomed to cameras and won't mind if you photograph their stalls, especially if you buy something first. A 30-peso bag of chapulines earns you all the photos you want. For portraits of specific people, always ask first — a smile and 'Puedo tomar una foto?' goes a long way. Some vendors will say no, and that's fine. In Jalatlaco and the Centro, street photography is generally easy because there's no expectation of privacy in public spaces. The one rule: don't photograph children without asking their parents.",
  },
];

export default function PhotographySpotsPage() {
  const heroImage = getGuideImage("/oaxaca-photography-spots");

  return (
    <>
      <GuideHero
        breadcrumbLabel="Photography Spots"
        kicker="Photography"
        kickerColor="text-mezcal"
        title="12 Best Photography Spots in Oaxaca City"
        subtitle="Optimal shooting times, specific directions, and crowd tips for every location &mdash; because great photos in Oaxaca are about light and timing, not gear."
        pills={["12 Locations", "Best Light Times", "Crowd Tips"]}
        readTime="8 min read"
        image={heroImage?.image}
        imageAlt={heroImage?.imageAlt}
      />

      <ZapotecDivider />

      {/* ═══════════════════ Intro ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Let&apos;s get something out of the way: you don&apos;t need an
                expensive camera to take great photos in Oaxaca. The city is
                absurdly photogenic &mdash; painted walls in every shade of
                terracotta and indigo, golden stone churches that glow at dawn,
                smoke-filled market corridors where light cuts through the haze
                like a stage effect. Your phone camera is fine. What matters is
                being at the right place when the light is right, and knowing
                which direction to face.
              </p>
              <p>
                That&apos;s what this guide is about. Not gear. Not editing
                presets. Just 12 specific locations with the exact time of day
                the light is best, which direction to walk from, and when to
                arrive to beat the crowds (or embrace them). I&apos;ve shot
                every spot on this list multiple times across different seasons,
                and the times I&apos;ve given are consistent year-round because
                Oaxaca sits at 17&deg; latitude &mdash; the sun angle
                doesn&apos;t shift dramatically between months.
              </p>
              <p>
                Oaxaca sits at 1,550 meters elevation. That means the UV
                intensity is significantly higher than at sea level, and the
                midday sun creates harsh, unflattering shadows that blow out
                highlights and flatten colors. The good news is that golden hours
                here are generous &mdash; roughly 7&ndash;9&nbsp;AM and
                5&ndash;7&nbsp;PM &mdash; giving you four full hours of
                beautiful light every day. Plan around those windows, and
                everything in between becomes time for eating, drinking mezcal,
                and staying in the shade.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TipCard type="tip">
              <strong>Morning light &gt; evening light in Oaxaca.</strong> The
              air is cleaner before noon &mdash; less dust, less haze from
              traffic. If you only have one early morning, use it at Santo
              Domingo at 8&nbsp;AM when the east-facing facade catches low,
              golden sun. Evening light is warmer in color but slightly hazier,
              which can actually add atmosphere to street scenes.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider />

      {/* ═══════════════════ Architecture ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
              Architecture
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Architectural Landmarks
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Oaxaca&apos;s colonial architecture is built from cantera verde
              &mdash; a local green volcanic stone that shifts color throughout
              the day, from cool grey in the shade to warm gold in direct
              sunlight. The churches and civic buildings along the pedestrian
              corridor were designed to face east, which means morning light is
              the hero. Here are four architectural spots worth shooting
              deliberately rather than just snapping as you walk past.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <ScrollReveal delay={0.08}>
              <PhotoSpotCard
                name="Santo Domingo Church"
                category="Architecture"
                description="The crown jewel of Oaxacan architecture. The baroque facade is covered in ornate stone carvings that catch every photon of morning light, turning from grey to gold as the sun climbs. The interior matches the exterior's intensity — gilded walls, painted ceilings — but photography inside is restricted to no-flash only. The real shot is the exterior from the plaza at street level, looking up at the facade with the sky behind."
                direction="Macedonio Alcalá at Allende"
                lightingNote="Morning sun lights the gold facade perfectly"
                crowdTip="Before 9 AM for empty courtyard"
                optimalTime={8}
                accentColor="barro"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <PhotoSpotCard
                name="IAGO Courtyard"
                category="Architecture"
                description="The Instituto de Artes Gráficas de Oaxaca occupies a restored colonial house with a courtyard that shows up on every Oaxaca travel blog for a reason. Stone arcades frame a lush garden, and the diffused light filtering through the arcades creates soft, even illumination that's ideal for both wide shots and detail close-ups. The library upstairs has beautiful windows that frame the courtyard from above."
                direction="Macedonio Alcalá 507"
                lightingNote="Diffused light through arcades all morning"
                crowdTip="Rarely crowded"
                optimalTime={10}
                accentColor="anil"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <PhotoSpotCard
                name="Cathedral at Zócalo"
                category="Architecture"
                description="Oaxaca's cathedral sits on the north side of the main square and is best photographed from the south side in the late afternoon when the west-setting sun catches the green stone at a low angle, saturating the color and adding depth to the carvings. The plaza's Indian laurel trees frame the shot naturally. At sunset, the entire facade turns golden-green — a color that only exists in Oaxacan stone at that hour."
                direction="South side of Zócalo"
                lightingNote="Golden hour bathes the green stone facade"
                crowdTip="Always people but that adds life"
                optimalTime={18}
                accentColor="mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <PhotoSpotCard
                name="Andador Turístico"
                category="Architecture"
                description="The pedestrian-only street running from Santo Domingo south to the Zócalo is lined with restored colonial buildings, galleries, and cafés. It's a corridor shot waiting to happen — the narrow street creates natural leading lines, and late afternoon light rakes across the facades from the west, creating dramatic shadow patterns on the stone. Walk north-to-south so the light is behind you and illuminating the buildings ahead."
                direction="Macedonio Alcalá between Santo Domingo and Zócalo"
                lightingNote="Late afternoon shadows create depth"
                crowdTip="Walk north-to-south for best light direction"
                optimalTime={17}
                accentColor="nopal"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.24}>
            <TipCard type="tip">
              <strong>Shoot the Andador on a Sunday morning.</strong> The
              pedestrian street is empty before 9&nbsp;AM on Sundays, and the
              morning light comes straight down the corridor from the east. On
              weekdays there are delivery vehicles until 10&nbsp;AM. Sunday
              morning gives you a clean, people-free corridor with gorgeous
              directional light.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider />

      {/* ═══════════════════ Street Life ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
              Street Life
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Street Life &amp; Markets
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Oaxaca&apos;s street life is where the city reveals its character.
              The markets, painted neighborhoods, and plazas are not static
              backdrops &mdash; they&apos;re living, shifting scenes where
              light, smoke, and human activity combine differently every hour.
              These four spots reward patience and return visits. Each one looks
              completely different at 7&nbsp;AM versus 7&nbsp;PM, so the
              optimal times below are suggestions, not rules.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <ScrollReveal delay={0.08}>
              <PhotoSpotCard
                name="Jalatlaco Colorful Streets"
                category="Street Life"
                description="The Jalatlaco neighborhood southeast of the Centro is Oaxaca's most colorful district — every house is painted a different shade, with bougainvillea spilling over walls and hand-painted murals on every third door. The magic hour here is late afternoon when the west-facing walls catch golden light and the shadows go long. Walk the blocks south of Calle Reforma, where the streets narrow and the colors intensify. The corner of Rufino Tamayo and Constitución is a classic shot."
                direction="Walk south from Calle Reforma into Jalatlaco"
                lightingNote="Golden hour on painted walls is perfection"
                crowdTip="Weekday afternoons are quieter"
                optimalTime={16.5}
                accentColor="barro"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <PhotoSpotCard
                name="Mercado 20 de Noviembre — Pasillo de Humo"
                category="Street Life"
                description="The 'Smoke Corridor' in the back of Mercado 20 de Noviembre looks like a film set — thick charcoal smoke, shafts of overhead light, zero staging required. Rows of open charcoal grills fill the narrow aisle with thick smoke, and shafts of light from the high ceiling cut through the haze like spotlights on a stage. The vendors fan their grills, sending columns of smoke upward. It's moody, atmospheric, and almost cinematic without any editing. The meat starts grilling around 8:30 AM — arrive by then to catch the first smoke before the air gets too thick."
                direction="Back corridor of the market"
                lightingNote="Smoke creates natural dramatic lighting"
                crowdTip="Go by 8:30 AM before the crowds"
                optimalTime={9}
                accentColor="mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <PhotoSpotCard
                name="Zócalo at Night"
                category="Street Life"
                description="The Zócalo transforms completely after dark. String lights canopy the trees, balloon vendors trail clusters of glowing orbs, families promenade, and food carts ring the perimeter with warm pools of light. The combination of ambient artificial light and human activity creates a warm, textured nightscape that looks great even on phone cameras. Shoot from any corner — the diagonal views across the square catch the most depth. The cathedral, lit from below, provides a natural focal point in the background."
                direction="Main square from any corner"
                lightingNote="String lights + ambient vendors"
                crowdTip="Always busy but that's the point"
                optimalTime={20}
                accentColor="anil"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <PhotoSpotCard
                name="Street Vendors on Calle Mina"
                category="Street Life"
                description="Calle Mina between the market and the Zócalo is where Oaxaca's morning food economy happens. By 6:30 AM, vendors are setting up folding tables, laying out towers of pan de yema, unwrapping tamales from banana leaves, and heating pots of chocolate atole on portable stoves. Steam rises from every cart, catching the early light. By 8 AM the street is in full flow — the best shots come in that 6:30–8 AM window when it's all being assembled and the light is soft and directional."
                direction="Calle Mina between market and Zócalo"
                lightingNote="Soft early morning light, steam from food carts"
                crowdTip="6:30–8 AM for vendors setting up"
                optimalTime={7.5}
                accentColor="nopal"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.24}>
            <TipCard type="money">
              <strong>Buy before you shoot at markets.</strong> A 30&nbsp;MXN
              bag of chapulines or a 15&nbsp;MXN piece of pan de yema from a
              vendor earns you goodwill and all the photos you want. Vendors are
              far more welcoming to cameras when you&apos;re a customer, not
              just a spectator. This applies everywhere in the market district.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <TipCard type="tip">
              <strong>Pasillo de Humo exposure trick.</strong> The smoke in the
              market corridor tricks auto-exposure into overexposing. Tap to
              focus on a bright area (like a shaft of light) and let the shadows
              go dark &mdash; the contrast is what makes the shot. If your
              phone has a manual exposure slider, pull it down one stop from
              what the camera suggests.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider />

      {/* ═══════════════════ Views & Nature ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-nopal">
              Views &amp; Nature
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Views &amp; Natural Landscapes
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Beyond the colonial center, Oaxaca&apos;s surrounding valley
              offers landscapes that range from pre-Columbian ruins perched on
              mountaintops to petrified waterfalls and cactus gardens. These four
              spots require a bit more planning &mdash; early starts, transport
              logistics, or guided-tour bookings &mdash; but the payoff is
              images that go far beyond the typical Oaxaca City Instagram feed.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <ScrollReveal delay={0.08}>
              <PhotoSpotCard
                name="Monte Albán Main Plaza"
                category="Views & Nature"
                description="The ancient Zapotec capital sits on a flattened mountaintop overlooking the Oaxaca Valley, and the main plaza — a vast, open ceremonial space surrounded by pyramids and platforms — opens up into a 300-meter-long ceremonial plaza ringed by pyramids, with the whole Oaxaca Valley spread below. The low morning sun creates long shadows across the stone structures, adding depth and drama to what could otherwise look flat. Climb to the top of the South Platform for a panoramic view of the entire site with the valley below. The scale is almost impossible to capture in a single frame — shoot panoramas."
                direction="Top of the main platform facing south"
                lightingNote="Low morning sun creates long shadows on ruins"
                crowdTip="First colectivo at 8:30 AM gets you there before tour buses"
                optimalTime={8.5}
                accentColor="nopal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <PhotoSpotCard
                name="Cerro del Fortín Lookout"
                category="Views & Nature"
                description="The hill above the Guelaguetza amphitheater offers the best panoramic view of Oaxaca City, with the valley stretching to the mountains in every direction. At sunset, the city below catches the last warm light while the surrounding sierra turns purple and blue. You can walk up via Calle Crespo in about 25 minutes (steep but paved), or take a taxi for 40 MXN. The amphitheater's concrete steps make for a good foreground element with the cityscape behind. On clear days, you can see all the way to Monte Albán."
                direction="Walk or taxi up Calle Crespo to the amphitheater"
                lightingNote="Sunset panorama over the entire valley"
                crowdTip="Relatively empty on non-festival days"
                optimalTime={17.5}
                accentColor="mezcal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <PhotoSpotCard
                name="Jardín Etnobotánico"
                category="Views & Nature"
                description="The Ethnobotanical Garden behind the Santo Domingo complex is a curated collection of Oaxacan plant species — towering columnar cacti, centuries-old trees, and arid-landscape plants arranged in an almost sculptural layout. The dappled light filtering through the canopy creates a constantly shifting pattern on the ground, and the cacti cast geometric shadows that look almost like an art installation. The catch: you can only enter via a guided tour (Spanish tours daily, English tours Tuesdays and Thursdays). Book in advance during high season."
                direction="Behind Santo Domingo (guided tour required)"
                lightingNote="Dappled light through cactus garden"
                crowdTip="Must be on a guided tour, no solo wandering"
                optimalTime={10}
                accentColor="nopal"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <PhotoSpotCard
                name="Hierve el Agua"
                category="Views & Nature"
                description="The petrified waterfalls and infinity pools at Hierve el Agua sit on a cliff edge with a view over the Mitla valley that looks rendered, not real. The mineral-crusted cascades catch sunrise light beautifully, turning from white to gold as the sun breaks over the eastern mountains. The infinity pools in the foreground with the valley behind is the classic shot. If you arrive at opening (around 7 AM from the parking area), you'll have the cascades entirely to yourself for 30–45 minutes before the first tour groups arrive. That window is worth every minute of the early drive."
                direction="Arrive at opening for best light"
                lightingNote="Early sunrise with no one around is magical"
                crowdTip="Dawn arrival worth the early start"
                optimalTime={7}
                accentColor="barro"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.24}>
            <TipCard type="skip">
              <strong>Don&apos;t attempt Hierve el Agua as a rushed day
              trip.</strong> The drive from Oaxaca City takes 90 minutes each
              way on winding mountain roads, and the colectivo schedule
              isn&apos;t reliable for early arrival. Either hire a taxi for the
              day (around 1,200&ndash;1,500&nbsp;MXN round trip with waiting
              time) or combine it with a Mitla visit and make a full day of it.
              Arriving after 10&nbsp;AM means crowds, harsh light, and a
              significantly less magical experience.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <TipCard type="tip">
              <strong>Monte Alb&aacute;n colectivo strategy.</strong> Colectivos
              to Monte Alb&aacute;n leave from Hotel Rivera del &Aacute;ngel on
              Calle Mina. The first departure is around 8:30&nbsp;AM. Buy a
              round-trip ticket (80&nbsp;MXN) and tell the driver you want the
              earliest return so you&apos;re back before the midday heat. Being
              on the first van means you arrive around 9&nbsp;AM, before the
              large tour buses from hotels, and you get the best light on the
              stone platforms.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider />

      {/* ═══════════════════ Camera Tips ═══════════════════ */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Practical
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              Camera Tips for Oaxaca
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mt-6 text-base text-copal/70 leading-relaxed space-y-4">
              <p>
                Oaxaca&apos;s altitude, light intensity, and street-level
                conditions create specific challenges that are worth knowing
                about before you start shooting. None of these are
                dealbreakers &mdash; just adjustments that will noticeably
                improve your results.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-6 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                UV Intensity at 1,550m
              </h3>
              <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                At Oaxaca&apos;s elevation, UV radiation is roughly 20% stronger
                than at sea level. Photographically, this means the midday sun
                between 11&nbsp;AM and 3&nbsp;PM creates extremely harsh shadows
                with very little detail in the highlight areas. Cameras and
                phones auto-expose for the bright areas and let shadows go black,
                or they expose for shadows and blow out the sky. There&apos;s no
                middle ground at noon. The solution is simple: don&apos;t shoot
                important subjects between 11 and 3. Use those hours for eating,
                resting, or exploring indoor markets where the light is diffused.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-4 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                Golden Hours Are Generous
              </h3>
              <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                Because Oaxaca is at 17&deg; north latitude, the sun rises and
                sets at a relatively moderate angle year-round. This means
                golden hour isn&apos;t a 20-minute scramble like it is in
                northern latitudes &mdash; you get a solid two-hour window of
                warm, directional light both morning (7&ndash;9&nbsp;AM) and
                evening (5&ndash;7&nbsp;PM). That&apos;s four hours of ideal
                light every single day. Use them. The morning window is
                slightly bluer and cleaner; the evening window is warmer and
                hazier. Both work beautifully for Oaxaca&apos;s colorful
                subjects.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-4 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                Phone Camera Tips
              </h3>
              <div className="mt-3 text-sm text-copal/70 leading-relaxed space-y-3">
                <p>
                  <strong className="text-copal/90">Clean your lens.</strong>{" "}
                  Oaxaca is dusty, and a smudged phone lens creates haze that
                  you&apos;ll blame on the air quality. Wipe it with a soft cloth
                  before every session. This one habit improves phone photos
                  more than any editing app.
                </p>
                <p>
                  <strong className="text-copal/90">Tap to lock exposure.</strong>{" "}
                  In scenes with bright sky and dark foreground (common in
                  Oaxaca), tap on the subject you want properly exposed and hold
                  until the exposure locks. On iPhone, you&apos;ll see
                  &ldquo;AE/AF Lock.&rdquo; This prevents the camera from
                  constantly re-metering as you compose.
                </p>
                <p>
                  <strong className="text-copal/90">Skip the ultra-wide for architecture.</strong>{" "}
                  Ultra-wide lenses distort vertical lines, making buildings look
                  like they&apos;re falling backward. Use your phone&apos;s
                  main (1x) lens for architecture, and step back if you need
                  more in the frame. The results are dramatically better.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-4 rounded-[6px] bg-lana border border-copal/[0.04] p-5 md:p-6">
              <h3 className="font-heading text-base font-bold text-copal">
                Markets Are Low-Light Environments
              </h3>
              <p className="mt-3 text-sm text-copal/70 leading-relaxed">
                Mercado 20 de Noviembre and Mercado Benito Ju&aacute;rez are
                roofed structures with limited natural light reaching the inner
                stalls. Phone cameras compensate by slowing the shutter speed,
                which means motion blur if your hands aren&apos;t steady. Brace
                your elbows against your body or lean on a column. If your phone
                has a &ldquo;Night Mode&rdquo; or &ldquo;Low Light&rdquo;
                setting, use it &mdash; it takes a multi-frame composite that
                reduces noise and blur. Take a breath, hold still for one
                second, and you&apos;ll get a sharp shot even in the dim inner
                corridors.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <TipCard type="tip">
              <strong>Shoot in portrait orientation more than you think.</strong>{" "}
              Oaxaca&apos;s streets are narrow and vertical &mdash; tall
              doorways, church facades, narrow alleys with overhead elements.
              Landscape orientation wastes half the frame on blank walls.
              Portrait captures the height and intimacy of the city&apos;s
              architecture. Plus, it works better on Instagram, which is
              probably where most of your photos will end up.
            </TipCard>
          </ScrollReveal>

          <ScrollReveal delay={0.34}>
            <TipCard type="skip">
              <strong>Don&apos;t over-edit Oaxaca&apos;s colors.</strong>{" "}
              The terracotta, indigo, and green stone are already intensely
              saturated in real life. If you crank the saturation slider in
              post-processing, the colors will look artificial and garish.
              Oaxaca needs less editing than almost any city I&apos;ve
              photographed. Straighten your horizons, maybe add a touch of
              warmth, and leave the rest alone.
            </TipCard>
          </ScrollReveal>
        </div>
      </section>

      <ZapotecDivider />

      {/* ═══════════════════ FAQs ═══════════════════ */}
      <FAQSection faqs={faqs} />

      {/* ═══════════════════ Related Content ═══════════════════ */}
      <RelatedContent
        items={[
          {
            title: "Oaxaca City 4-Day Itinerary",
            description:
              "Day-by-day plan covering markets, ruins, mezcal, and food — with photo-friendly timing built in.",
            href: "/oaxaca-city-4-day-itinerary",
            accentColor: "barro",
          },
          {
            title: "Oaxaca Day Trips",
            description:
              "Monte Albán, Hierve el Agua, Mitla, and mezcal distilleries — with transport details and timing.",
            href: "/oaxaca-day-trips",
            accentColor: "nopal",
          },
          {
            title: "Cultural Experiences",
            description:
              "Weaving workshops, cooking classes, and Zapotec village visits worth photographing.",
            href: "/oaxaca-cultural-experiences",
            accentColor: "anil",
          },
        ]}
      />
    </>
  );
}
