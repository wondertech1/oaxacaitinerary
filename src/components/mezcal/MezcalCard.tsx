import FlavorWheel from "./FlavorWheel";

interface MezcalCardProps {
  name: string;
  agave: string;
  production: string;
  flavor: string;
  priceRange: string;
  profile: {
    smoky: number;
    herbal: number;
    citrus: number;
    floral: number;
    earthy: number;
    sweet: number;
  };
  accentColor?: string;
}

const borderMap: Record<string, string> = {
  barro: "border-t-barro",
  anil: "border-t-anil",
  nopal: "border-t-nopal",
  mezcal: "border-t-mezcal",
};

export default function MezcalCard({
  name,
  agave,
  production,
  flavor,
  priceRange,
  profile,
  accentColor = "mezcal",
}: MezcalCardProps) {
  return (
    <div
      className={`bg-lana rounded-[6px] border-t-4 ${
        borderMap[accentColor] || "border-t-mezcal"
      } overflow-hidden`}
    >
      <div className="p-5 md:p-6">
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg font-bold text-copal">
              {name}
            </h3>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-start gap-2 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-wider text-copal/40 shrink-0 mt-0.5 w-16">
                  Agave
                </span>
                <span className="text-copal/70">{agave}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-wider text-copal/40 shrink-0 mt-0.5 w-16">
                  Method
                </span>
                <span className="text-copal/70">{production}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-wider text-copal/40 shrink-0 mt-0.5 w-16">
                  Taste
                </span>
                <span className="text-copal/70">{flavor}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-wider text-copal/40 shrink-0 mt-0.5 w-16">
                  Price
                </span>
                <span className="font-mono text-xs font-bold text-mezcal">
                  {priceRange}
                </span>
              </div>
            </div>
          </div>

          {/* Flavor wheel */}
          <div className="shrink-0 flex justify-center">
            <FlavorWheel profile={profile} size={110} />
          </div>
        </div>
      </div>
    </div>
  );
}
