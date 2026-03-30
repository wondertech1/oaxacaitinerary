import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "About — Why Trust This Guide",
  description:
    "The person behind Oaxaca Itinerary — why Oaxaca, how these guides are built, and the philosophy of opinionated travel recommendations.",
  alternates: { canonical: "https://oaxacaitinerary.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="bg-copal text-lana pt-28 pb-12 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mezcal">
            About
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lana leading-[1.1]">
            This guide exists because the first 10 results were useless
          </h1>
          <p className="mt-5 text-base text-lana/50 leading-relaxed max-w-xl">
            Most Oaxaca guides online are thin, generic, and clearly not written
            by someone who has spent real time there. This one is different.
          </p>
        </div>
      </section>

      <ZapotecDivider className="bg-lana" />

      {/* Author Bio */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Photo placeholder */}
              <div className="w-36 h-36 md:w-48 md:h-48 bg-lana-dark rounded-[6px] flex items-center justify-center shrink-0">
                <span className="text-xs font-mono text-copal/30 uppercase tracking-wider">
                  Photo
                </span>
              </div>

              <div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-copal">
                  Who writes this
                </h2>
                <div className="mt-4 space-y-3 text-sm text-copal/70 leading-relaxed">
                  <p>
                    A traveler who keeps coming back to Oaxaca because no other
                    city in Mexico has this combination: world-class food at
                    street-stall prices, living indigenous culture that
                    isn&apos;t performative, and a pace of life that makes you
                    wonder why you ever rush.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-barro mt-1.5 shrink-0" />
                      Multiple extended trips to Oaxaca over several years
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-anil mt-1.5 shrink-0" />
                      Every recommendation personally visited and paid for
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-nopal mt-1.5 shrink-0" />
                      No sponsored content, no affiliate kickbacks on this site
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-mezcal mt-1.5 shrink-0" />
                      Prices and details verified as of March 2026
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Oaxaca */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-lana-dark">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Why Oaxaca
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              The city that rewired how I think about travel
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base text-copal/70 leading-relaxed">
              The first time I ate tasajo at Mercado 20 de Noviembre — sitting
              on a plastic stool in a corridor filled with wood smoke, tearing
              into grilled meat with handmade tortillas while a woman sold me
              salsa from a clay bowl — I understood that this wasn&apos;t a
              place you &quot;visit.&quot; It&apos;s a place that rearranges
              your priorities.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Getting lost in Jalatlaco at golden hour, watching a family paint
              alebrijes on their doorstep. Finding a mezcalería on a side street
              where the owner poured samples of mezcal made by her uncle in the
              Sierra. Standing on the Grand Plaza at Monte Albán and realizing
              the Zapotecs built this 2,500 years ago — not as a ruin, but as a
              living capital.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-base text-copal/70 leading-relaxed">
              Oaxaca doesn&apos;t need to be sold. It needs to be navigated
              honestly. That&apos;s what these guides try to do.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How These Guides Are Different */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
              Our Approach
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
              How these guides are different
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Opinionated",
                color: "border-barro",
                desc: 'We say "skip this, do that instead." If a place isn\'t worth your time, we\'ll tell you — and suggest what to do instead.',
              },
              {
                title: "Priced",
                color: "border-anil",
                desc: "Every recommendation includes actual prices in MXN with USD equivalents. No vague \"budget-friendly\" nonsense.",
              },
              {
                title: "Verified",
                color: "border-nopal",
                desc: "Visited in person, last confirmed March 2026. If something has closed or changed, we update or remove it.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={0.1 + i * 0.05}>
                <div
                  className={`relative bg-lana-dark border-t-4 ${card.color} rounded-[6px] p-5 h-full`}
                >
                  <div className="absolute inset-0 weave-diagonal opacity-[0.02]" />
                  <div className="relative z-10">
                    <h3 className="font-heading text-lg font-bold text-copal">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-copal/60 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 bg-copal">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lana/50 text-sm">Ready to plan your trip?</p>
          <Link
            href="/oaxaca-city-4-day-itinerary"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-barro text-lana rounded-[4px] font-mono text-sm uppercase tracking-wider hover:bg-barro/90 transition-colors"
          >
            Read the 4-Day Itinerary
          </Link>
        </div>
      </section>
    </>
  );
}
