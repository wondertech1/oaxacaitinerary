import { MapPin, AlertTriangle, DollarSign } from "lucide-react";

export default function TipCard({
  children,
  type = "tip",
}: {
  children: React.ReactNode;
  type?: "tip" | "skip" | "money";
}) {
  const styles = {
    tip: "border-nopal/20 bg-nopal/[0.04]",
    skip: "border-barro/20 bg-barro/[0.04]",
    money: "border-mezcal/20 bg-mezcal/[0.04]",
  };
  const icons = {
    tip: <MapPin size={14} className="text-nopal shrink-0 mt-0.5" />,
    skip: <AlertTriangle size={14} className="text-barro shrink-0 mt-0.5" />,
    money: <DollarSign size={14} className="text-mezcal shrink-0 mt-0.5" />,
  };

  return (
    <div
      className={`flex gap-3 border rounded-[6px] p-4 my-4 text-sm text-copal/70 leading-relaxed ${styles[type]}`}
    >
      {icons[type]}
      <div>{children}</div>
    </div>
  );
}
