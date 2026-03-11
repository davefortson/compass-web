"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Database, Plug, Link2, Globe, FileText } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";

const PRIVACY_CARDS = [
  {
    icon: Lock,
    title: "Privacy-First Architecture",
    body: "Compass never shares, sells, or monetizes your data. All AI tools operate within your controlled data environment.",
  },
  {
    icon: Database,
    title: "Client-Controlled Storage",
    body: "You own your claims data outright. Export, migrate, or connect to your own systems at any time \u2014 no lock-in.",
  },
  {
    icon: Plug,
    title: "Works With What You Have",
    body: "Compass connects to third-party databases, registries, and MRV platforms. No rip-and-replace required.",
  },
];

const TRUST_BADGES = [
  { label: "Regen Ledger Verified", icon: Link2 },
  { label: "SOC2-Ready Architecture", icon: Lock },
  { label: "TNFD / SBTi Compatible", icon: Globe },
  { label: "Audit-Ready Exports", icon: FileText },
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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.45 + i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export default function PrivacySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="topo-bg py-[120px]"
      style={{ backgroundColor: "#202020" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <SectionLabel light>DATA SOVEREIGNTY</SectionLabel>

          <h2 className="font-heading font-black text-[42px] text-white leading-tight mt-4">
            Your data. Your claims. Your control.
          </h2>
        </motion.div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"
        >
          {PRIVACY_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <Card variant="dark" className="h-full">
                  <div className="mb-4">
                    <Icon
                      size={32}
                      className="text-brand-green"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">
                    {card.title}
                  </h3>
                  <p
                    className="text-brand-cream text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {card.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.span
                key={badge.label}
                custom={i}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                variants={badgeVariants}
                className="border border-[rgba(79,181,115,0.3)] rounded-full px-4 py-2 text-brand-green text-sm inline-flex items-center gap-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Icon size={16} strokeWidth={2} />
                {badge.label}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
