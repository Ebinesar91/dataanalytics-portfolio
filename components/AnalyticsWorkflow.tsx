"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Filter,
  Search,
  Calculator,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

const workflowIcons: Record<string, LucideIcon> = {
  Database,
  Filter,
  Search,
  Calculator,
  BarChart3,
  CheckCircle2,
};

export const AnalyticsWorkflow: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="workflow" className="py-24 relative bg-slate-950/60 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Data Methodology"
          title="End-to-End Analytics Workflow"
          description="How raw data is systematic transformed into actionable statistical insights."
        />

        {/* Desktop Pipeline Flow Bar */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-8 relative">
          {PORTFOLIO_DATA.workflow.map((item, idx) => {
            const IconComp = workflowIcons[item.icon] || Database;
            const isSelected = selectedStep === idx;

            return (
              <motion.button
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                onClick={() => setSelectedStep(idx)}
                className={`relative p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? "bg-cyan-950/40 border-cyan-400 ring-2 ring-cyan-500/20 shadow-lg shadow-cyan-500/10"
                    : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">
                    STEP {item.step}
                  </span>
                  <div
                    className={`p-1.5 rounded-md ${
                      isSelected
                        ? "bg-cyan-400 text-cyan-950"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="text-white font-bold text-xs font-mono tracking-wide">
                  {item.name}
                </h4>

                {/* Arrow Connector Indicator */}
                {idx < PORTFOLIO_DATA.workflow.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700 z-10 pointer-events-none" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-lg">
                {PORTFOLIO_DATA.workflow[selectedStep].step}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  PIPELINE STAGE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  {PORTFOLIO_DATA.workflow[selectedStep].name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">
                Click steps to inspect methodology
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {PORTFOLIO_DATA.workflow[selectedStep].description}
          </p>
        </div>

        {/* Mobile Vertical Pipeline List */}
        <div className="lg:hidden mt-8 space-y-3">
          {PORTFOLIO_DATA.workflow.map((item, idx) => {
            const IconComp = workflowIcons[item.icon] || Database;
            return (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">
                      {item.step}
                    </span>
                    <h4 className="text-white font-bold text-sm font-sans">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
