"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, X, CheckCircle, ExternalLink } from "lucide-react";

export const ResumeCTA: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel p-8 md:p-12 border border-slate-800/80 overflow-hidden text-center bg-gradient-to-b from-slate-900/90 to-slate-950">
          {/* Background Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL RESUME / CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
              Want to know more about my work?
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Explore my full academic transcript, project technical summaries, NPTEL course scores, and Python data analytics portfolio.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="/resume.pdf"
                download="Ebinesar_A_Data_Analytics_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-cyan-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/20 font-sans"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all font-sans"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                Quick Resume View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Quick Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreviewModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 p-6 md:p-8 space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    Ebinesar A — Resume Overview
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    B.E. Computer Science & Engineering • Data Analytics Focus
                  </span>
                </div>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs font-mono text-slate-300 max-h-[60vh] overflow-y-auto pr-2">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">
                    SUMMARY:
                  </span>
                  <p className="text-slate-300 text-xs font-sans leading-relaxed">
                    Computer Science & Engineering undergraduate with a strong foundation in Python, SQL, Pandas, NumPy, and statistical data visualization. Experienced in exploratory data analysis (EDA), cleaning complex transactional data, and presenting quantitative insights.
                  </p>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-2">
                    CORE COMPETENCIES:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
                    <div>• Python Data Wrangling</div>
                    <div>• SQL Database Queries</div>
                    <div>• Exploratory Data Analysis (EDA)</div>
                    <div>• Seaborn & Matplotlib Plotting</div>
                    <div>• Statistical Summary Metrics</div>
                    <div>• Jupyter Notebook Workflow</div>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-2">
                    EDUCATION & RECOGNITION:
                  </span>
                  <div className="space-y-1 font-sans text-xs">
                    <p className="text-white font-semibold">GRT Institute of Engineering and Technology (2024 - 2028)</p>
                    <p className="text-slate-400">• B.E. Computer Science and Engineering</p>
                    <p className="text-slate-400">• NPTEL Data Analytics with Python Certified</p>
                    <p className="text-slate-400">• NPTEL Winter Internship Selection</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Ready to download PDF document
                </span>
                <a
                  href="/resume.pdf"
                  download="Ebinesar_A_Data_Analytics_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-sans"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Complete PDF
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
