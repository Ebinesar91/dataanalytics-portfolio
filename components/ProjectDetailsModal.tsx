"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  BarChart2,
  Code,
  FileText,
  CheckCircle,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";
import { ProjectData } from "@/data/portfolioData";
import { Badge } from "./ui/Badge";
import { GithubIcon } from "./ui/Icons";

interface ProjectDetailsModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "charts" | "code">(
    "overview"
  );
  const [selectedChart, setSelectedChart] = useState<number>(0);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
        >
          {/* Modal Top Header Bar */}
          <div className="flex items-center justify-between p-5 border-b border-slate-800/80 bg-slate-950/80">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                  ANALYTICS DEEP DIVE
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Tab Navigation */}
          <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800/80 bg-slate-950/40">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold border-b-2 transition-all ${
                activeTab === "overview"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Full Workflow & Insights
            </button>

            <button
              onClick={() => setActiveTab("charts")}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold border-b-2 transition-all ${
                activeTab === "charts"
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              Chart Gallery ({project.charts.length})
            </button>

            {project.codeSnippets.length > 0 && (
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold border-b-2 transition-all ${
                  activeTab === "code"
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                Python Snippets
              </button>
            )}
          </div>

          {/* Modal Body Content Area */}
          <div className="p-6 overflow-y-auto space-y-8 flex-1">
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="cyan">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* KPI Metrics Summary Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80"
                    >
                      <span className="text-[10px] font-mono text-slate-400 block mb-0.5">
                        {m.label}
                      </span>
                      <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">
                        {m.value}
                      </div>
                      <span className="text-[10px] text-slate-500 block truncate">
                        {m.description}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 1. Problem Statement */}
                <div className="glass-panel p-5 rounded-xl border border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                    1. Problem Definition
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* 2. Dataset Specs */}
                <div className="glass-panel p-5 rounded-xl border border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    2. Dataset Overview
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/60">
                      <span className="text-slate-400">Dataset Name:</span>
                      <p className="text-white font-semibold">{project.datasetInfo.name}</p>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800/60">
                      <span className="text-slate-400">Source:</span>
                      <p className="text-white font-semibold">{project.datasetInfo.source}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-3">
                    Features: {project.datasetInfo.features}
                  </p>
                </div>

                {/* 3. Data Cleaning */}
                <div className="glass-panel p-5 rounded-xl border border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    3. Data Cleaning & Preprocessing
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.dataCleaning.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Findings & Business Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
                      Key Statistical Findings
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                      Actionable Impact
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {project.businessImpact.map((impact, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* CHARTS TAB */}
            {activeTab === "charts" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Chart List Sidebar */}
                  <div className="md:col-span-4 space-y-2 max-h-[450px] overflow-y-auto pr-1">
                    {project.charts.map((chart, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedChart(idx)}
                        className={`w-full p-3 text-left rounded-xl border text-xs transition-all ${
                          selectedChart === idx
                            ? "bg-cyan-950/60 border-cyan-400 text-white font-semibold"
                            : "bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800"
                        }`}
                      >
                        <div className="font-mono text-[10px] text-cyan-400 mb-0.5">
                          CHART #{idx + 1}
                        </div>
                        <div>{chart.title}</div>
                      </button>
                    ))}
                  </div>

                  {/* Main Displayed Chart */}
                  <div className="md:col-span-8 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col">
                    <div className="relative w-full rounded-lg overflow-hidden border border-slate-800 mb-4 bg-black">
                      <img
                        src={project.charts[selectedChart].src}
                        alt={project.charts[selectedChart].title}
                        className="w-full object-contain max-h-[380px]"
                      />
                    </div>
                    <div className="text-xs text-slate-300 font-mono">
                      <span className="text-cyan-400 font-bold">Caption: </span>
                      {project.charts[selectedChart].caption}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CODE TAB */}
            {activeTab === "code" && (
              <div className="space-y-6">
                {project.codeSnippets.map((snippet, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950"
                  >
                    <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400 font-bold">{snippet.title}</span>
                      <span className="text-slate-500 uppercase">{snippet.language}</span>
                    </div>
                    <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer Links */}
          <div className="p-4 border-t border-slate-800/80 bg-slate-950/90 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Repository & Notebook Sources
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub Repo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
