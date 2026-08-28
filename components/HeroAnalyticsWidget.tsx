"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Activity, LineChart } from "lucide-react";

export const HeroAnalyticsWidget: React.FC = () => {
  const [activePoint, setActivePoint] = useState(3);

  const points = [
    { id: 0, month: "Jan", val: 320, pct: "+12%", metric: "Revenue $42.5K" },
    { id: 1, month: "Feb", val: 480, pct: "+28%", metric: "Revenue $58.1K" },
    { id: 2, month: "Mar", val: 410, pct: "-5%", metric: "Revenue $51.3K" },
    { id: 3, month: "Apr", val: 690, pct: "+42%", metric: "Revenue $76.8K" },
    { id: 4, month: "May", val: 820, pct: "+61%", metric: "Revenue $94.2K" },
    { id: 5, month: "Jun", val: 950, pct: "+84%", metric: "Revenue $112.4K" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer Ambient Ambient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-cyan-400/10 to-emerald-500/20 rounded-2xl blur-xl opacity-75" />

      {/* Main Glass Panel */}
      <div className="relative rounded-2xl glass-panel p-5 md:p-6 border border-slate-800/80 shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-300 font-semibold tracking-wider uppercase">
              INTERACTIVE DATA CANVAS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
              PYTHON • PANDAS
            </span>
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Project Real Data Summary Counters */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Records Analyzed</span>
              <Database className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-lg font-bold font-mono text-white">542.9K</div>
            <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
              Cleaned retail & student rows
            </div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Seaborn Figures</span>
              <LineChart className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-lg font-bold font-mono text-white">
              16 Plots
            </div>
            <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
              KDE, heatmaps & distributions
            </div>
          </div>
        </div>

        {/* Interactive Chart Area */}
        <div className="relative bg-slate-950/60 rounded-xl p-4 border border-slate-800/60 analytics-grid-bg">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-mono text-[11px] text-slate-300">
              MONTHLY REVENUE TREND STUDY
            </span>
            <span className="text-[10px] font-mono text-cyan-400">
              Node {activePoint + 1}/6 Active
            </span>
          </div>

          {/* SVG Line Graph */}
          <div className="relative h-40 w-full flex items-end pt-4 pb-2">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 500 160"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <path
                d="M 20,130 Q 100,100 180,110 T 340,50 T 480,20 L 480,150 L 20,150 Z"
                fill="url(#chartGradient)"
              />

              <path
                d="M 20,130 Q 100,100 180,110 T 340,50 T 480,20"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* Interactive Data Points Overlay */}
            <div className="relative w-full h-full flex items-end justify-between px-2 z-10">
              {points.map((pt, idx) => {
                const isActive = activePoint === idx;
                return (
                  <button
                    key={pt.id}
                    onClick={() => setActivePoint(idx)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`h-4 w-4 rounded-full border-2 transition-all flex items-center justify-center ${
                        isActive
                          ? "bg-cyan-400 border-white ring-4 ring-cyan-500/30 scale-125"
                          : "bg-slate-900 border-cyan-500/60 group-hover:border-cyan-400"
                      }`}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                    </motion.div>
                    <span
                      className={`text-[10px] font-mono mt-2 transition-colors ${
                        isActive ? "text-cyan-400 font-bold" : "text-slate-500"
                      }`}
                    >
                      {pt.month}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Data Point Metric Bar */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-400">Inspected Node:</span>
              <span className="text-white font-bold">
                {points[activePoint].metric}
              </span>
            </div>
            <span className="text-emerald-400 font-semibold">
              {points[activePoint].pct} Growth
            </span>
          </div>
        </div>

        {/* Small Caption */}
        <div className="mt-3 text-[10px] font-mono text-slate-500 text-center">
          * Interactive UI widget demonstrating Python Seaborn trend modeling.
        </div>
      </div>
    </div>
  );
};
