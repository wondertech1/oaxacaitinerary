import Link from "next/link";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface GuideCTAProps {
  title?: string;
  description?: string;
  href?: string;
  buttonText?: string;
}

export default function GuideCTA({
  title = "Ready to plan your trip?",
  description = "Start with the 4-day itinerary — it covers the best of Oaxaca City without rushing.",
  href = "/oaxaca-city-4-day-itinerary",
  buttonText = "Read the 4-Day Itinerary",
}: GuideCTAProps) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[6px] border-2 border-copal/[0.06] text-center px-6 py-10 md:py-14">
            {/* Mezcal label arch — decorative top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 rounded-b-full bg-mezcal/10" />

            {/* Subtle smoke gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-mezcal/[0.03] via-transparent to-transparent pointer-events-none" />

            <div className="relative">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-copal">
                {title}
              </h2>
              <p className="mt-3 text-sm text-copal/50 leading-relaxed max-w-md mx-auto">
                {description}
              </p>
              <Link
                href={href}
                className="inline-block mt-6 px-6 py-2.5 bg-barro text-white text-sm font-mono uppercase tracking-wider rounded-[4px] hover:bg-barro/90 transition-colors"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
