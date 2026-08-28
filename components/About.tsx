"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle, Code } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Editorial Overview"
          title="About My Background"
          description="A Computer Science undergraduate blending analytical problem solving with clean data wrangling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-800/80 relative"
          >
            <div className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
              {PORTFOLIO_DATA.profile.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">B.E. Computer Science</h4>
                  <p className="text-xs text-slate-400">GRT Institute (2024–2028)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">NPTEL Certified</h4>
                  <p className="text-xs text-slate-400">Data Analytics with Python</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80">
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Core Qualifications
              </h3>

              <div className="space-y-3">
                {PORTFOLIO_DATA.profile.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-200"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Approach Box */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 to-slate-950">
              <h4 className="text-white font-bold text-base mb-2 font-sans">
                My Analytical Approach
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Rather than jumping straight to complex models, I focus on meticulous data cleaning, exploratory data analysis (EDA), and validating statistical distributions first.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
