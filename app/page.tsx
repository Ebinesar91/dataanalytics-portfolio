import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { AnalyticsWorkflow } from "@/components/AnalyticsWorkflow";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AnalyticsWorkflow />
        <Projects />
        <Certifications />
        <Education />
        <Experience />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
