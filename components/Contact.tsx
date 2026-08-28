"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative analytics-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Connect."
          description="Open for Data Analytics Internship roles, Python data projects, and technical collaborations."
          align="center"
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Badge */}
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            href={`mailto:${PORTFOLIO_DATA.profile.social.email}`}
            className="group p-6 glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">
                DIRECT EMAIL
              </span>
              <h4 className="text-white font-bold text-xs sm:text-sm font-sans mb-1 group-hover:text-cyan-400 transition-colors break-all">
                {PORTFOLIO_DATA.profile.social.email}
              </h4>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-cyan-400">
              <span>Send Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </motion.a>

          {/* GitHub Badge */}
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            href={PORTFOLIO_DATA.profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 mb-4 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">
                GITHUB PROFILE
              </span>
              <h4 className="text-white font-bold text-xs sm:text-sm font-sans mb-1 group-hover:text-cyan-400 transition-colors">
                github.com/Ebinesar91
              </h4>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-cyan-400">
              <span>View Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </motion.a>

          {/* LinkedIn Badge */}
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            href={PORTFOLIO_DATA.profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all flex flex-col items-center text-center justify-between"
          >
            <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 block mb-1 uppercase">
                LINKEDIN NETWORK
              </span>
              <h4 className="text-white font-bold text-xs sm:text-sm font-sans mb-1 group-hover:text-cyan-400 transition-colors truncate max-w-[200px]">
                linkedin.com/in/ebinesar-a
              </h4>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-mono text-cyan-400">
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
