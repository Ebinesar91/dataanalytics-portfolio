"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Clock, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative analytics-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Academic Timeline"
          title="Education & Formal Learning"
          description="Formal degree program and specialized structured coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-cyan-400 text-xs font-mono border border-slate-800">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white font-sans mb-1">
                {edu.degree}
              </h3>
              <h4 className="text-sm font-semibold text-cyan-400 mb-3 font-mono">
                {edu.institution}
              </h4>

              <div className="text-xs text-emerald-400 font-mono mb-4 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{edu.expectedGraduation}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-3 border-t border-slate-800/60">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
