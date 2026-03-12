"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { ModulePreview } from "../ui/ModulePreview";
import { MODULE_TABS } from "../../lib/constants";

export default function ModuleTour() {
  const [activeTab, setActiveTab] = useState(0);

  const currentModule = MODULE_TABS[activeTab];

  return (
    <section id="modules" className="bg-brand-surface py-[120px]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center">
          <SectionLabel>INTERACTIVE TOUR</SectionLabel>
          <h2 className="font-heading font-black text-[42px] leading-tight text-brand-dark mt-4">
            See Compass in action
          </h2>
          <p className="font-body text-lg text-brand-muted max-w-[560px] mx-auto mt-4">
            Examples shown across ecological portfolios &mdash; Compass works
            across all impact domains.
          </p>
        </div>

        {/* Tab list */}
        <div className="mt-12 overflow-x-auto">
          <div className="flex flex-row gap-1 min-w-max">
            {MODULE_TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`font-heading font-bold text-sm uppercase px-4 py-2 cursor-pointer transition-colors duration-200 whitespace-nowrap ${
                  activeTab === i
                    ? "text-brand-green border-b-2 border-brand-green"
                    : "text-brand-grey hover:text-brand-dark border-b-2 border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModule.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-10"
            >
              {/* Left: Module description */}
              <div className="flex flex-col justify-center">
                <h3 className="font-heading font-bold text-2xl text-brand-dark">
                  {currentModule.label}
                </h3>

                <span className="inline-block bg-brand-green/10 text-brand-green font-mono text-xs uppercase px-3 py-1 rounded-[2px] mt-2 self-start">
                  {currentModule.persona}
                </span>

                <p className="font-body text-base text-brand-muted mt-4">
                  {currentModule.description}
                </p>

                <ul className="mt-4 flex flex-col gap-3">
                  {currentModule.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <CheckCircle2
                        size={18}
                        className="text-brand-green shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="font-body text-sm text-brand-dark">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#lead-capture"
                  className="text-brand-green font-heading font-bold text-sm uppercase mt-6 inline-block hover:underline transition-all duration-200"
                >
                  GET THIS FOR YOUR ORG &rarr;
                </a>
              </div>

              {/* Right: Static module preview */}
              <div>
                <div className="rounded-[4px] border border-brand-border shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden h-[360px] lg:h-[520px]">
                  <ModulePreview moduleId={currentModule.id} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
