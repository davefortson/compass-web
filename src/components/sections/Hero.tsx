"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";

const STEP_DURATION = 2000;
const TOTAL_STEPS = 4;

const headlineText = "Turn Impact Data Into Decisions, Revenue, and Trust";
const headlineWords = headlineText.split(" ");

/* ── Data for the dashboard mock ── */
const dataRows = [
  { field: "site_id", value: "KEN-NAK-0042", type: "string" },
  { field: "lat/lng", value: "-1.286, 36.817", type: "geo" },
  { field: "soil_carbon_t", value: "14.7", type: "number" },
  { field: "tree_cover_ha", value: "312.5", type: "number" },
  { field: "water_flow_m3", value: "8,420", type: "number" },
];

const claimTags = [
  { label: "Carbon", color: "#4FB573" },
  { label: "Biodiversity", color: "#527984" },
  { label: "Water", color: "#79C6AA" },
];

const barData = [
  { label: "CO2e", value: 78, color: "#4FB573" },
  { label: "BIO", value: 55, color: "#527984" },
  { label: "H2O", value: 92, color: "#79C6AA" },
  { label: "SOC", value: 64, color: "#C4DAB5" },
];

/* ── Step 1: Raw data ingestion ── */
function StepIngest() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#4FB573] animate-pulse" />
        <span className="font-mono text-[10px] text-[#4FB573] uppercase tracking-wider">
          Ingesting field data...
        </span>
      </div>
      {dataRows.map((row, i) => (
        <motion.div
          key={row.field}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.25, duration: 0.35 }}
          className="flex items-center justify-between bg-[#232323] rounded-[2px] px-3 py-1.5 border border-white/5"
        >
          <span className="font-mono text-[10px] text-[#848484]">
            {row.field}
          </span>
          <span className="font-mono text-[11px] text-white/90">
            {row.value}
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="h-0.5 bg-gradient-to-r from-[#4FB573] to-transparent origin-left mt-2 rounded-full"
      />
    </div>
  );
}

/* ── Step 2: Claims tagging ── */
function StepClaims() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#79C6AA] animate-pulse" />
        <span className="font-mono text-[10px] text-[#79C6AA] uppercase tracking-wider">
          Mapping impact claims
        </span>
      </div>
      <div className="bg-[#232323] rounded-[2px] p-3 border border-white/5">
        <span className="font-mono text-[10px] text-[#848484] block mb-2">
          claim_type:
        </span>
        <div className="flex flex-wrap gap-2">
          {claimTags.map((tag, i) => (
            <motion.span
              key={tag.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.4, duration: 0.35 }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono font-semibold"
              style={{
                background: `${tag.color}20`,
                color: tag.color,
                border: `1px solid ${tag.color}40`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: tag.color }}
              />
              {tag.label}
            </motion.span>
          ))}
        </div>
      </div>
      {/* Mini progress indicators */}
      <div className="grid grid-cols-3 gap-2">
        {claimTags.map((tag, i) => (
          <motion.div
            key={tag.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.3 }}
            className="bg-[#232323] rounded-[2px] p-2 border border-white/5"
          >
            <span className="font-mono text-[9px] text-[#848484] block mb-1">
              {tag.label}
            </span>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.0 + i * 0.2, duration: 0.5 }}
                className="h-full rounded-full"
                style={{ background: tag.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Step 3: Verification ── */
function StepVerified() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#4FB573] animate-pulse" />
        <span className="font-mono text-[10px] text-[#4FB573] uppercase tracking-wider">
          On-chain verification
        </span>
      </div>
      <div className="bg-[#232323] rounded-[2px] p-3 border border-white/5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#848484]">status</span>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
            className="flex items-center gap-1.5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="flex-shrink-0"
            >
              <circle cx="7" cy="7" r="7" fill="#4FB573" />
              <path
                d="M4 7l2 2 4-4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-[11px] font-bold text-[#4FB573] uppercase">
              Verified
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          className="space-y-1.5"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#848484]">
              ledger_hash
            </span>
            <span className="font-mono text-[10px] text-[#79C6AA]">
              regen:1a2b...f9e8
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#848484]">
              block
            </span>
            <span className="font-mono text-[10px] text-white/70">
              #4,872,319
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#848484]">
              timestamp
            </span>
            <span className="font-mono text-[10px] text-white/70">
              2026-03-10T14:22:08Z
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.3 }}
        className="bg-[#4FB573]/10 border border-[#4FB573]/30 rounded-[2px] px-3 py-2 flex items-center gap-2"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z"
            fill="#4FB573"
          />
        </svg>
        <span className="font-mono text-[10px] text-[#4FB573]">
          Immutable record anchored to Regen Ledger
        </span>
      </motion.div>
    </div>
  );
}

/* ── Step 4: Impact chart ── */
function StepChart() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#C4DAB5] animate-pulse" />
        <span className="font-mono text-[10px] text-[#C4DAB5] uppercase tracking-wider">
          Impact metrics dashboard
        </span>
      </div>
      <div className="bg-[#232323] rounded-[2px] p-3 border border-white/5">
        <div className="flex items-end gap-3 h-[100px]">
          {barData.map((bar, i) => (
            <div
              key={bar.label}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${bar.value}%` }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.6,
                  ease: "easeOut" as const,
                }}
                className="w-full rounded-[2px] relative"
                style={{ background: bar.color }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/80"
                >
                  {bar.value}%
                </motion.span>
              </motion.div>
              <span className="font-mono text-[9px] text-[#848484]">
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.3 }}
          className="bg-[#232323] rounded-[2px] p-2 border border-white/5"
        >
          <span className="font-mono text-[9px] text-[#848484] block">
            Total Credits
          </span>
          <span className="font-mono text-[14px] text-[#4FB573] font-bold">
            14,720
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.3 }}
          className="bg-[#232323] rounded-[2px] p-2 border border-white/5"
        >
          <span className="font-mono text-[9px] text-[#848484] block">
            Confidence
          </span>
          <span className="font-mono text-[14px] text-[#79C6AA] font-bold">
            97.3%
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Step indicators at top of dashboard ── */
const stepLabels = ["Ingest", "Claims", "Verify", "Metrics"];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-1 mb-4">
      {stepLabels.map((label, i) => (
        <div key={label} className="flex items-center gap-1">
          <div className="flex flex-col items-center gap-0.5">
            <div
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{
                background: i <= current ? "#4FB573" : "#848484",
              }}
            />
            <span
              className="font-mono transition-colors duration-300"
              style={{
                fontSize: "8px",
                color: i === current ? "#4FB573" : "#848484",
              }}
            >
              {label}
            </span>
          </div>
          {i < stepLabels.length - 1 && (
            <div
              className="h-px w-4 mt-[-8px] transition-colors duration-300"
              style={{
                background:
                  i < current
                    ? "#4FB573"
                    : "rgba(255,255,255,0.1)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main Dashboard Preview ── */
function DashboardPreview({ step }: { step: number }) {
  return (
    <div
      className="w-full rounded-[4px] p-4 relative overflow-hidden"
      style={{
        background: "#2a2a2a",
        border: "1px solid rgba(79,181,115,0.2)",
      }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#4FB573]" />
          <span className="font-mono text-[11px] text-white/80 font-semibold">
            compass
          </span>
          <span className="font-mono text-[10px] text-[#848484]">
            / pipeline
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#4FB573]" />
          <span className="font-mono text-[9px] text-[#4FB573]">LIVE</span>
        </div>
      </div>

      <StepIndicator current={step} />

      {/* Animated content area */}
      <div className="min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {step === 0 && <StepIngest />}
            {step === 1 && <StepClaims />}
            {step === 2 && <StepVerified />}
            {step === 3 && <StepChart />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom status bar */}
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="font-mono text-[9px] text-[#848484]">
          {stepLabels[step]}
          {" "}
          &mdash; step {step + 1}/{TOTAL_STEPS}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className="h-1 w-4 rounded-full transition-colors duration-300"
              style={{
                background:
                  i === step ? "#4FB573" : "rgba(255,255,255,0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */

export function Hero() {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Cycle through dashboard steps
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % TOTAL_STEPS);
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="topo-bg min-h-screen relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 w-full py-24 lg:py-0">
          {/* ── Left Column (60%) ── */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            {/* ── Eyebrow: who it's for ── */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-base tracking-wide"
              style={{ color: "#79C6AA" }}
            >
              Built for teams that run on impact data
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3"
            >
              <SectionLabel light>IMPACT INTELLIGENCE PLATFORM</SectionLabel>
            </motion.div>

            {/* ── Headline with staggered word animation ── */}
            <h1
              className="mt-4 font-heading font-[900] text-5xl lg:text-[56px] text-white"
              style={{
                lineHeight: "120%",
                fontFamily: "var(--font-heading)",
              }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.08,
                    ease: "easeOut" as const,
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* ── Problem statement ── */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-5 text-lg font-body font-semibold text-white/90 max-w-xl"
            >
              Most impact data is scattered, unstructured, and impossible to
              verify. Compass fixes that.
            </motion.p>

            {/* ── Body copy ── */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.5, delay: 1.15 }}
              className="mt-4 text-xl max-w-xl"
              style={{
                color: "#C4DAB5",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
              }}
            >
              Compass is purpose-built for impact claims. Ingest, verify, and
              organize your impact data &mdash; from ecological monitoring to
              social outcomes &mdash; then deploy it with AI tools that work
              the way your team thinks.
            </motion.p>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-10 flex flex-row flex-wrap gap-4"
            >
              <Button variant="primary" href="#lead-capture">
                GET YOUR FREE PROTOTYPE
              </Button>
              <Button variant="ghost" href="#how-it-works">
                WATCH HOW IT WORKS
              </Button>
            </motion.div>
          </div>

          {/* ── Right Column (40%) — Dashboard Preview ── */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
              className="w-full h-[40vh] lg:h-auto"
            >
              <DashboardPreview step={step} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
