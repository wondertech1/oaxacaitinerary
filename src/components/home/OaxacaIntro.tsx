"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function OaxacaIntro() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
            Why Oaxaca
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
            Mexico&apos;s cultural heart, without the tourist veneer
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base text-copal/70 leading-relaxed">
            Oaxaca City is not Cancún. It&apos;s not a resort town or a party
            destination. It&apos;s the kind of place where a grandmother still
            grinds chocolate on a metate at 5 AM, where the market has been
            selling the same tlayudas from the same stall for three generations,
            and where a $4 mole can change your understanding of what food can
            be.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 text-base text-copal/70 leading-relaxed">
            These guides are built from repeated trips, not quick research.
            Every restaurant listed has been eaten at. Every price has been
            verified. Every &quot;skip this&quot; comes from the experience of
            not having skipped it.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-6 text-sm font-mono text-barro hover:text-barro/70 transition-colors"
          >
            About this guide <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
