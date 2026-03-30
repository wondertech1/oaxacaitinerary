"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
            FAQ
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
            {title}
          </h2>
        </ScrollReveal>

        <div className="mt-8 space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div
                  className={`border-b border-copal/[0.06] transition-colors duration-200 ${
                    isOpen ? "border-l-2 border-l-barro pl-4" : "pl-0"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left py-5 flex items-start justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span
                      className={`text-base font-heading font-bold transition-colors duration-200 ${
                        isOpen
                          ? "text-copal"
                          : "text-copal/70 group-hover:text-copal"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {/* Fold crease indicator */}
                    <span
                      className={`shrink-0 mt-1 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <span className="block w-2.5 h-[1.5px] bg-barro/50 absolute" />
                      <span className="block w-[1.5px] h-2.5 bg-barro/50 absolute" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                      >
                        <div className="pb-5 text-sm text-copal/60 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* FAQPage structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
