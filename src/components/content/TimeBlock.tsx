import { Clock } from "lucide-react";

export default function TimeBlock({
  time,
  title,
  children,
}: {
  time: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-6 pb-8 border-l border-copal/10">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-barro/30 border-2 border-lana" />

      <div className="flex items-center gap-2 mb-2">
        <Clock size={12} className="text-copal/30" />
        <span className="font-mono text-[11px] uppercase tracking-wider text-copal/40">
          {time}
        </span>
      </div>
      <h4 className="font-heading text-base font-bold text-copal">{title}</h4>
      <div className="mt-2 text-sm text-copal/70 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
