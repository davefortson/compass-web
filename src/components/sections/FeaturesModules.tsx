"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Building2,
  Cpu,
  Bot,
  FileOutput,
  Link,
  TrendingUp,
  Search,
} from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { GradientText } from "../ui/GradientText";
import { Card } from "../ui/Card";

const CORE_FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Portfolio & Project Dashboard",
    description:
      "Centralized view of all projects, programs, and initiatives with real-time status tracking.",
  },
  {
    icon: BookOpen,
    title: "Claims Catalog \u2014 Browse",
    description:
      "Explore and organize your full library of impact claims. Search, filter, and audit your evidence base.",
  },
  {
    icon: FileText,
    title: "Basic Impact Reporting",
    description:
      "Generate standard impact summaries and shareable briefs for funders and partners.",
  },
  {
    icon: Building2,
    title: "Organization Profile",
    description:
      "Your verified organizational identity on Compass \u2014 a trusted anchor for all your claims.",
  },
];

const MODULES = [
  {
    icon: Cpu,
    title: "Claims Engine",
    description:
      "AI-powered ingestion, structuring, and tagging of raw impact data into verifiable claims.",
  },
  {
    icon: Bot,
    title: "Regen AI Hub",
    description:
      "Agentic tools for automated reporting, risk analysis, storytelling, and due diligence workflows.",
  },
  {
    icon: FileOutput,
    title: "Reports Module",
    description:
      "Custom, automated, and registry-ready report generation. One click from claims to deliverable.",
  },
  {
    icon: Link,
    title: "Regen Ledger / Trust Layer",
    description:
      "Immutable on-chain logging of every claim. Full traceability for auditors, investors, and regulators.",
  },
  {
    icon: TrendingUp,
    title: "Trends & Risk Analysis",
    description:
      "Market signals, portfolio risk flags, and opportunity detection across your impact data.",
  },
  {
    icon: Search,
    title: "Diligence Tools",
    description:
      "Structured due diligence workflows with confidence scoring. Built for investors and grantmakers.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function FeaturesModules() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="bg-white py-[120px]">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center">
          <SectionLabel>PLATFORM OVERVIEW</SectionLabel>
          <h2 className="font-heading font-black text-[42px] leading-tight text-brand-dark mt-4">
            Built to start simple. Designed to scale.
          </h2>
          <p className="font-body text-lg text-brand-muted max-w-[560px] mx-auto mt-4">
            Every Compass account includes powerful core features. Add modules
            as your data, team, and ambitions grow.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* LEFT: Core Features */}
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-[1px] text-brand-green">
                INCLUDED
              </span>
              <div className="mt-1">
                <GradientText className="font-heading font-black text-xl">
                  CORE FEATURES
                </GradientText>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {CORE_FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    custom={i}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants}
                  >
                    <Card accentBorder className="flex items-start gap-4">
                      <div className="shrink-0 mt-0.5">
                        <Icon
                          size={22}
                          className="text-brand-green"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-brand-dark">
                          {feature.title}
                        </h3>
                        <p className="font-body text-sm text-brand-muted mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Modules */}
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-[1px] text-brand-green">
                ADD-ON &middot; ENTERPRISE
              </span>
              <div className="mt-1">
                <GradientText className="font-heading font-black text-xl">
                  MODULES
                </GradientText>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {MODULES.map((mod, i) => {
                const Icon = mod.icon;
                return (
                  <motion.div
                    key={mod.title}
                    custom={i + CORE_FEATURES.length}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={cardVariants}
                  >
                    <Card className="flex items-start gap-4 bg-brand-surface">
                      <div className="shrink-0 mt-0.5">
                        <Icon
                          size={22}
                          className="text-brand-green"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <span className="font-heading text-[10px] uppercase tracking-[1px] text-brand-green">
                          MODULE
                        </span>
                        <h3 className="font-heading font-bold text-base text-brand-dark mt-1">
                          {mod.title}
                        </h3>
                        <p className="font-body text-sm text-brand-muted mt-1">
                          {mod.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
