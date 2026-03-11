"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LOGOS = [
  "CONSERVATION FUND",
  "IMPACT VENTURES",
  "SUPPLY CHAIN CO.",
  "MARINE NGO",
  "WATERSHED FUND",
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="bg-white border-t border-b border-brand-border py-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <p
          className="text-sm text-center lg:text-left shrink-0"
          style={{
            fontFamily: "var(--font-body)",
            color: "#848484",
          }}
        >
          Trusted by organizations at the frontier of impact
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {LOGOS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 6 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
              }
              transition={{
                duration: 0.4,
                delay: 0.15 + i * 0.08,
                ease: "easeOut" as const,
              }}
              className="font-heading font-bold uppercase text-[13px] text-[#C0C5C4] hover:text-brand-green transition-colors duration-200 cursor-default select-none tracking-wide"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
