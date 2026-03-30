import Link from "next/link";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  accentColor: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
}

const colorMap: Record<string, string> = {
  barro: "bg-barro",
  anil: "bg-anil",
  nopal: "bg-nopal",
  mezcal: "bg-mezcal",
};

const hoverColorMap: Record<string, string> = {
  barro: "group-hover:bg-barro",
  anil: "group-hover:bg-anil",
  nopal: "group-hover:bg-nopal",
  mezcal: "group-hover:bg-mezcal",
};

export default function RelatedContent({
  items,
  title = "Keep Reading",
}: RelatedContentProps) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 border-t border-copal/[0.06]">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
            More Guides
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-copal">
            {title}
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.href} delay={i * 0.08}>
              <Link
                href={item.href}
                className="group flex items-start gap-4 p-4 rounded-[6px] bg-lana border border-copal/[0.04] hover:border-copal/[0.08] transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Bobbin circle accent */}
                <div className="shrink-0 mt-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      colorMap[item.accentColor] || "bg-barro"
                    }/15 transition-colors duration-300`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        colorMap[item.accentColor] || "bg-barro"
                      }/40 ${
                        hoverColorMap[item.accentColor] || "group-hover:bg-barro"
                      }/70 transition-colors duration-300`}
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="font-heading text-sm font-bold text-copal group-hover:text-barro transition-colors duration-200 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-copal/50 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
