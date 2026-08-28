"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, CheckCircle2, Layers } from "lucide-react";
import { ProjectData } from "@/data/portfolioData";
import { Badge } from "./ui/Badge";
import { GithubIcon } from "./ui/Icons";

interface ProjectCardProps {
  project: ProjectData;
  onOpenDetails: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Banner & Header */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Category & Stack Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant="cyan">{project.category}</Badge>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Python Analytics</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors font-sans mb-2">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 group-hover:border-slate-700/80 transition-colors"
            >
              <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                {metric.label}
              </span>
              <div className="text-base font-bold font-mono text-cyan-400">
                {metric.value}
              </div>
              <span className="text-[10px] text-slate-500 block truncate">
                {metric.description}
              </span>
            </div>
          ))}
        </div>

        {/* Stack Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Problem & Key Findings Snippets */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-3">
          <div className="text-xs text-slate-300">
            <span className="font-mono text-cyan-400 font-bold block mb-1">
              PROBLEM STATEMENT:
            </span>
            <p className="line-clamp-2 text-slate-400 text-xs leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800/60">
            <span className="font-mono text-emerald-400 text-[11px] font-bold block mb-1">
              KEY INSIGHT HIGHLIGHT:
            </span>
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{project.keyFindings[0]}</span>
            </div>
          </div>
        </div>

        {/* Chart Thumbnail Previews */}
        <div className="pt-2">
          <span className="text-[11px] font-mono text-slate-400 block mb-2">
            GENERATED VISUALIZATION PREVIEWS ({project.charts.length} CHARTS)
          </span>
          <div className="grid grid-cols-4 gap-2">
            {project.charts.slice(0, 4).map((chart, idx) => (
              <div
                key={idx}
                className="relative h-16 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 group-hover:border-slate-700"
              >
                <img
                  src={chart.src}
                  alt={chart.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="p-6 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          GitHub Repository
        </a>

        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/10 font-sans"
        >
          <BarChart2 className="w-3.5 h-3.5" />
          View Analysis
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
