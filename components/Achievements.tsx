"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative analytics-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Milestones"
          title="Key Achievements"
          description="Competitive hackathon wins and merit-based internship recognitions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 flex items-start gap-4 relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {item.context}
                </span>
                <h3 className="text-lg font-bold text-white font-sans mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
