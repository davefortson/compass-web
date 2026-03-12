"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TrendingUp, Leaf, Package, HeartHandshake, ChevronDown } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { PERSONAS } from "../../lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Leaf,
  Package,
  HeartHandshake,
};

function PersonaContent({
  persona,
}: {
  persona: (typeof PERSONAS)[number];
}) {
  const Icon = iconMap[persona.icon];

  return (
    <div>
      {persona.roleLine && (
        <p
          className="font-body text-sm text-brand-green mb-3 tracking-wide"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {persona.roleLine}
        </p>
      )}

      {Icon && (
        <div className="mb-4">
          <Icon size={32} className="text-brand-green" strokeWidth={2} />
        </div>
      )}

      <h3 className="font-heading font-black text-2xl lg:text-3xl text-brand-dark">
        {persona.headline}
      </h3>

      <p
        className="font-body text-lg text-brand-muted mt-4"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {persona.body}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {persona.modules.map((mod) => (
          <span
            key={mod}
            className="bg-brand-surface border border-brand-border rounded-[2px] px-3 py-1 font-mono text-xs uppercase text-brand-muted"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {mod}
          </span>
        ))}
      </div>

      <blockquote className="border-l-4 border-brand-green pl-6 mt-8">
        <p
          className="font-body text-lg italic text-brand-dark"
          style={{ fontFamily: "var(--font-body)" }}
        >
          &ldquo;{persona.quote}&rdquo;
        </p>
        <p
          className="font-body text-sm text-brand-grey mt-2"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {persona.attribution}
        </p>
      </blockquote>
    </div>
  );
}

export default function PersonaSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="for-your-team"
      ref={sectionRef}
      className="bg-white py-[120px]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <SectionLabel>BUILT FOR YOUR WORK</SectionLabel>

          <h2 className="font-heading font-black text-[42px] text-brand-dark leading-tight mt-4">
            Compass works the way your team thinks
          </h2>
        </motion.div>

        {/* Desktop: Horizontal tabs */}
        <div className="hidden lg:block mt-16">
          <div className="flex border-b border-brand-border">
            {PERSONAS.map((persona, index) => (
              <button
                key={persona.id}
                onClick={() => setActiveIndex(index)}
                className={`relative px-6 py-4 font-heading font-bold text-base uppercase tracking-wider transition-colors duration-200 ${
                  activeIndex === index
                    ? "text-brand-green"
                    : "text-brand-grey hover:text-brand-dark"
                }`}
              >
                {persona.label}
                {activeIndex === index && (
                  <motion.div
                    layoutId="persona-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background:
                        "linear-gradient(to right, var(--color-brand-teal), var(--color-brand-sage), var(--color-brand-cream))",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={PERSONAS[activeIndex].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <PersonaContent persona={PERSONAS[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden mt-12 space-y-3">
          {PERSONAS.map((persona, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={persona.id}
                className="border border-brand-border rounded-[4px] overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-brand-surface text-left"
                >
                  <span className="font-heading font-bold text-base uppercase tracking-wider text-brand-dark">
                    {persona.label}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown
                      size={20}
                      className="text-brand-grey"
                      strokeWidth={2}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-6">
                        <PersonaContent persona={persona} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
