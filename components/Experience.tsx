"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Professional Experience"
          title="Internship Roles"
          description="Concise practical industry exposure."
        />

        <div className="max-w-3xl">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    {exp.role}
                  </h3>
                  <h4 className="text-xs font-mono text-cyan-400 font-semibold mb-1">
                    {exp.company}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-slate-900 text-slate-400 text-xs font-mono border border-slate-800 flex items-center gap-1.5 shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
