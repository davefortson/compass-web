"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Upload,
  Layers,
  Shield,
  Brain,
  Rocket,
  Lock,
  Link,
  Link2,
} from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

const STEPS = [
  {
    id: "ingest",
    label: "INGEST",
    icon: Upload,
    title: "Connect Your Data",
    body: "Upload documents, connect APIs, or link third-party databases. Compass ingests field reports, MRV data, spreadsheets, and more.",
  },
  {
    id: "structure",
    label: "STRUCTURE",
    icon: Layers,
    title: "Claims Catalog",
    body: "AI organizes your data into structured impact claims \u2014 tagged, categorized, and ready to query.",
  },
  {
    id: "verify",
    label: "VERIFY",
    icon: Shield,
    title: "Regen Ledger",
    body: "Every claim is logged on the Regen Ledger \u2014 immutable, traceable, and independently verifiable.",
  },
  {
    id: "analyze",
    label: "ANALYZE",
    icon: Brain,
    title: "Regen AI Hub",
    body: "Agentic tools surface trends, flag risks, run diligence workflows, and generate insights across your claims library.",
  },
  {
    id: "deploy",
    label: "DEPLOY",
    icon: Rocket,
    title: "Reports & Revenue",
    body: "Generate reports, share verified data with stakeholders, access nature markets, and tell your impact story.",
  },
];

const TRUST_STATEMENTS = [
  {
    icon: Lock,
    text: "Privacy-first \u00B7 Client-controlled data \u00B7 No vendor lock-in",
  },
  {
    icon: Link,
    text: "Works with your existing databases and registries",
  },
  {
    icon: Link2,
    text: "Regen Ledger provides immutable traceability",
  },
];

function StepNode({
  step,
  index,
  isInView,
}: {
  step: (typeof STEPS)[number];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
      }
      transition={{
        duration: 0.45,
        delay: index * 0.2,
        ease: "easeOut" as const,
      }}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center relative cursor-pointer"
        style={{
          background: "#202020",
          border: "2px solid transparent",
          backgroundImage:
            "linear-gradient(#202020, #202020), linear-gradient(204.4deg, #527984 5.94%, #79C6AA 51.92%, #C4DAB5 97.89%)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center">
          <Icon size={28} className="text-brand-dark" strokeWidth={1.8} />
        </div>
      </div>

      <span className="font-heading font-bold uppercase text-[11px] tracking-[1.5px] text-white mt-3">
        {step.label}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.95 }}
        animate={
          hovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 8, scale: 0.95 }
        }
        transition={{ duration: 0.2, ease: "easeOut" as const }}
        className="absolute top-[110px] left-1/2 -translate-x-1/2 z-20 pointer-events-none w-[260px]"
      >
        <div
          className="rounded-[4px] p-4"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <h4 className="font-heading font-bold text-sm text-white mb-1">
            {step.title}
          </h4>
          <p
            className="text-[13px] text-white/80 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {step.body}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ConnectorArrow({
  index,
  isInView,
  direction,
}: {
  index: number;
  isInView: boolean;
  direction: "horizontal" | "vertical";
}) {
  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 + 0.15 }}
      className={`flex items-center justify-center ${
        isHorizontal ? "w-12" : "h-10"
      }`}
    >
      <svg
        width={isHorizontal ? 48 : 20}
        height={isHorizontal ? 20 : 40}
        viewBox={isHorizontal ? "0 0 48 20" : "0 0 20 40"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isHorizontal ? (
          <>
            <motion.line
              x1="0"
              y1="10"
              x2="38"
              y2="10"
              stroke="#4FB573"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
            />
            <motion.path
              d="M36 5 L44 10 L36 15"
              stroke="#4FB573"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 + 0.5 }}
            />
          </>
        ) : (
          <>
            <motion.line
              x1="10"
              y1="0"
              x2="10"
              y2="30"
              stroke="#4FB573"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
            />
            <motion.path
              d="M5 28 L10 36 L15 28"
              stroke="#4FB573"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2, delay: index * 0.2 + 0.5 }}
            />
          </>
        )}
      </svg>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const diagramInView = useInView(diagramRef, { once: true, margin: "-60px" });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="topo-bg py-[120px]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center"
        >
          <SectionLabel light>HOW COMPASS WORKS</SectionLabel>

          <h2 className="font-heading font-black text-[42px] text-white leading-tight mt-4">
            One platform. From raw data to trusted claims.
          </h2>
        </motion.div>

        <div ref={diagramRef} className="mt-20">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:flex items-start justify-center">
            {STEPS.map((step, i) => (
              <div key={step.id} className="flex items-start">
                <StepNode step={step} index={i} isInView={diagramInView} />
                {i < STEPS.length - 1 && (
                  <div className="flex items-center mt-[30px]">
                    <ConnectorArrow
                      index={i}
                      isInView={diagramInView}
                      direction="horizontal"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile / Tablet: vertical flow */}
          <div className="flex lg:hidden flex-col items-center">
            {STEPS.map((step, i) => (
              <div key={step.id} className="flex flex-col items-center">
                <StepNode step={step} index={i} isInView={diagramInView} />
                {i < STEPS.length - 1 && (
                  <ConnectorArrow
                    index={i}
                    isInView={diagramInView}
                    direction="vertical"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust statements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            diagramInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" as const }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {TRUST_STATEMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-start gap-3 justify-center md:justify-start"
              >
                <Icon
                  size={18}
                  className="text-brand-cream shrink-0 mt-0.5"
                  strokeWidth={1.8}
                />
                <span
                  className="text-sm text-brand-cream leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
