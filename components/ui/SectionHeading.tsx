import React from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = "left",
}) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
