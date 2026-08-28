"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { TechLogos } from "./ui/TechLogos";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...PORTFOLIO_DATA.skills.map((s) => s.category)];

  const filteredSkillGroups =
    activeCategory === "All"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative analytics-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technical Toolkit"
          title="Skills & Analytical Stack"
          description="A structured breakdown of official language logos, data libraries, database technologies, and analytical workflow tools."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono rounded-xl transition-all ${
                  isActive
                    ? "bg-cyan-400 text-cyan-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with Technical Logos */}
        <div className="space-y-8">
          {filteredSkillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80"
            >
              <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                {group.items.map((skill) => {
                  const LogoComponent = TechLogos[skill.name];
                  return (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all flex items-center gap-3.5"
                    >
                      {/* Technical Brand Logo Container */}
                      <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 group-hover:border-cyan-500/30 group-hover:scale-105 transition-all shrink-0 flex items-center justify-center h-10 w-10">
                        {LogoComponent ? (
                          <LogoComponent className="w-6 h-6" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-cyan-400" />
                        )}
                      </div>

                      <div className="overflow-hidden">
                        <h4 className="text-white font-bold text-xs sm:text-sm font-sans truncate group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400 block truncate">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
