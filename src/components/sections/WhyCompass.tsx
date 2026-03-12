"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Users, Plug } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Verifiable by design",
    body: "Every claim is logged on Regen Ledger \u2014 not a spreadsheet, not a PDF. An immutable record that auditors, investors, and regulators can independently verify.",
  },
  {
    icon: Users,
    title: "Community-grounded standards",
    body: "Impact claims are structured around open ecological and social data standards \u2014 not proprietary vendor logic. Your data stays yours, and it stays legible.",
  },
  {
    icon: Plug,
    title: "Works with what you already have",
    body: "Compass connects to your existing databases, registries, and MRV platforms. No rip-and-replace required.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export default function WhyCompass() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-white py-[100px]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center"
        >
          <SectionLabel>WHAT MAKES US DIFFERENT</SectionLabel>
          <h2 className="font-heading font-black text-[42px] text-brand-dark leading-tight mt-4">
            Built Different
          </h2>
        </motion.div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"
        >
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <Card accentBorder className="h-full">
                  <div className="mb-4">
                    <Icon
                      size={32}
                      className="text-brand-green"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p
                    className="text-brand-muted text-[15px] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
