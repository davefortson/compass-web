"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, ShoppingCart, Globe } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { Card } from "../ui/Card";

const CARDS = [
  {
    icon: AlertTriangle,
    title: "Investors & Funders",
    body: "Diligence on impact claims takes months. Data lives in PDFs, spreadsheets, and inboxes. There\u2019s no way to verify what\u2019s real.",
  },
  {
    icon: ShoppingCart,
    title: "Brands & Supply Chains",
    body: "Sustainability commitments require traceable evidence. Without structured claims data, reporting is slow, inconsistent, and vulnerable.",
  },
  {
    icon: Globe,
    title: "NGOs & Grantmakers",
    body: "Field data is rich but unstructured. Turning monitoring outputs into verifiable, fundable evidence is expensive and time-consuming.",
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

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="bg-brand-surface pt-16 pb-[120px]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <SectionLabel>THE CHALLENGE</SectionLabel>

          <h2
            className="font-heading font-black text-[42px] text-brand-dark leading-tight mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            {"Your impact data is scattered.\nYour stakeholders demand proof."}
          </h2>
        </motion.div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <Card accentBorder className="h-full">
                  <div className="mb-4">
                    <Icon
                      size={28}
                      className="text-brand-green"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-dark mb-3">
                    {card.title}
                  </h3>
                  <p
                    className="text-brand-muted text-[15px] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {card.body}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" as const }}
          className="mt-20 text-center"
        >
          <p
            className="text-lg text-brand-muted max-w-[640px] mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Compass solves this — with a single platform that makes impact data
            legible, traceable, and deployable. From raw field data to verified
            claims to revenue-generating assets.
          </p>

          <a
            href="#how-it-works"
            className="inline-block mt-8 font-heading font-bold uppercase text-sm tracking-wider text-brand-green hover:opacity-80 transition-opacity duration-200"
          >
            EXPLORE THE PLATFORM &darr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
