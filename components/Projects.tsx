"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, ProjectData } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailsModal } from "./ProjectDetailsModal";
import { SectionHeading } from "./ui/SectionHeading";

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 relative analytics-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Featured Work"
          title="Data Analytics Projects"
          description="In-depth analytical projects showcasing end-to-end Python data cleaning, exploratory data analysis, correlation modeling, and statistical visualizations."
        />

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailsModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
