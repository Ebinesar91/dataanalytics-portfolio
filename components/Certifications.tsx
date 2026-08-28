"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Credentials"
          title="Certifications & Specializations"
          description="Verified course certifications across data analytics, algorithms, cloud AI, and Python programming."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <Badge variant="cyan">{cert.badge}</Badge>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-sans mb-1">
                  {cert.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 block mb-3">
                  Issuer: {cert.issuer}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-[10px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
