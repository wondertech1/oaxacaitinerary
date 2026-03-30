import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumb({
  items,
  variant = "light",
}: BreadcrumbProps) {
  const textColor = variant === "dark" ? "text-lana/30" : "text-copal/30";
  const hoverColor =
    variant === "dark" ? "hover:text-lana/50" : "hover:text-copal/50";
  const activeColor =
    variant === "dark" ? "text-lana/50" : "text-copal/50";

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-2 ${textColor} mb-6`}
      >
        {items[0]?.href && (
          <Link href={items[0].href} className={`${hoverColor} transition-colors`}>
            <ArrowLeft size={14} />
          </Link>
        )}
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-[10px]">/</span>}
            {item.href && i > 0 ? (
              <Link
                href={item.href}
                className={`font-mono text-[10px] uppercase tracking-wider ${hoverColor} transition-colors`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  i === items.length - 1 ? activeColor : ""
                }`}
              >
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>

      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items
              .filter((item) => item.href || items.indexOf(item) === items.length - 1)
              .map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: item.label,
                ...(item.href && {
                  item: `https://oaxacaitinerary.com${item.href}`,
                }),
              })),
          }),
        }}
      />
    </>
  );
}
