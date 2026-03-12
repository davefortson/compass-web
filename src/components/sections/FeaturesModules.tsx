"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LayoutDashboard,
  Cpu,
  Bot,
  FileOutput,
  Link,
  TrendingUp,
  Search,
  FileText,
  Building2,
} from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { GradientText } from "../ui/GradientText";
import { Card } from "../ui/Card";

const ALL_FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Portfolio Dashboard",
    description:
      "A live view of every project, program, and initiative with real-time status and verified metrics in one place.",
  },
  {
    icon: Cpu,
    title: "Claims Engine",
    description:
      "AI-powered ingestion that turns raw field data, PDFs, and spreadsheets into structured, verifiable impact claims.",
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
      "Custom, automated, registry-ready reports. One click from verified claims to polished deliverable.",
  },
  {
    icon: Link,
    title: "Regen Ledger / Trust Layer",
    description:
      "Every claim logged on-chain. Immutable, traceable, and independently verifiable by auditors and investors.",
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
      "Structured workflows with confidence scoring, built for investors and grantmakers who need to move fast.",
  },
  {
    icon: FileText,
    title: "Basic Impact Reporting",
    description:
      "Standard impact summaries and shareable briefs ready for funders and partners.",
  },
  {
    icon: Building2,
    title: "Organization Profile",
    description:
      "Your verified identity on Compass \u2014 a trusted anchor for all your claims.",
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
            What Compass Does
          </h2>
          <p className="font-body text-lg text-brand-muted max-w-[600px] mx-auto mt-4">
            Everything your team needs to ingest, verify, analyze, and deploy
            impact data &mdash; in one place.
          </p>
        </div>

        {/* Flat grid of feature-benefit pairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {ALL_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <Card accentBorder className="flex items-start gap-4 h-full">
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
    </section>
  );
}
