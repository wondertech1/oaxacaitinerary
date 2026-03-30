import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import LastVerified from "./LastVerified";

interface GuideHeroProps {
  breadcrumbLabel: string;
  kicker: string;
  kickerColor?: string;
  title: string;
  subtitle: string;
  pills?: string[];
  updatedDate?: string;
  readTime?: string;
  image?: string;
  imageAlt?: string;
}

export default function GuideHero({
  breadcrumbLabel,
  kicker,
  kickerColor = "text-mezcal",
  title,
  subtitle,
  pills,
  updatedDate = "March 2026",
  readTime,
  image,
  imageAlt,
}: GuideHeroProps) {
  return (
    <section className="bg-copal">
      {image && (
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-copal/20 via-transparent to-copal" />
        </div>
      )}

      <div className={`${image ? "pt-8" : "pt-24"} pb-12 px-4 sm:px-6`}>
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: breadcrumbLabel },
            ]}
            variant="dark"
          />

          <span
            className={`font-mono text-[11px] uppercase tracking-[0.3em] ${kickerColor}`}
          >
            {kicker}
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-lana leading-[1.1]">
            {title}
          </h1>
          <p className="mt-5 text-base text-lana/50 leading-relaxed max-w-xl">
            {subtitle}
          </p>

          {pills && pills.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="text-[10px] font-mono uppercase tracking-wider text-lana/30 border border-lana/10 rounded-[3px] px-2.5 py-1"
                >
                  {pill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex items-center gap-4 text-[10px] font-mono text-lana/25 uppercase tracking-wider">
            <LastVerified date={updatedDate} variant="dark" />
            {readTime && (
              <>
                <span>·</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
