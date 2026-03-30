import Link from "next/link";
import ZapotecDivider from "@/components/decorative/ZapotecDivider";
import { guideLinks } from "@/lib/constants/guides";

export default function Footer() {
  return (
    <footer className="bg-copal text-lana/80">
      <ZapotecDivider className="opacity-20" color="#F5F0E6" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold text-lana">
              OAXACA
            </span>
            <p className="mt-3 text-sm text-lana/50 leading-relaxed">
              Opinionated Oaxaca City guides. Mezcal, markets, and Monte
              Albán. Updated 2026.
            </p>
            <div className="mt-4 flex gap-2">
              {["#A0522D", "#2C3E6B", "#5B7C52", "#C9944A"].map((c) => (
                <div
                  key={c}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Articles */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mezcal">
              Articles
            </span>
            <ul className="mt-4 space-y-2.5">
              {guideLinks.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="text-sm text-lana/50 hover:text-lana transition-colors"
                  >
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mezcal">
              Site
            </span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-lana/50 hover:text-lana transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-lana/50 hover:text-lana transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-lana/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-xs text-lana/30">
            © {new Date().getFullYear()} Oaxaca Itinerary
          </span>
          <span className="text-xs text-lana/30">
            Made with 🫗 in Oaxaca
          </span>
        </div>
      </div>
    </footer>
  );
}
