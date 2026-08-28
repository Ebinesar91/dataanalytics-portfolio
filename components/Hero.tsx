"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Database } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { HeroAnalyticsWidget } from "./HeroAnalyticsWidget";
import { Badge } from "./ui/Badge";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center analytics-grid-bg overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Direct Greeting Badge */}
            <div className="mb-4">
              <Badge variant="cyan" className="py-1.5 px-4 text-xs font-mono font-semibold">
                <Database className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                {PORTFOLIO_DATA.profile.smallTag}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-sans">
              Turning Data Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400">
                Meaningful Insights.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {PORTFOLIO_DATA.profile.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-cyan-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/20 font-sans group"
              >
                View Analytics Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Ebinesar_A_Data_Analytics_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:border-slate-600 font-sans"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Download Resume
              </a>
            </div>

            {/* Links Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 rounded-xl transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 rounded-xl transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>NPTEL Winter Internship Selection</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Analytics Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <HeroAnalyticsWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
