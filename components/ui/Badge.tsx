import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "emerald" | "slate" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  className = "",
}) => {
  const variantStyles = {
    cyan: "bg-cyan-950/60 text-cyan-400 border border-cyan-500/30",
    emerald: "bg-emerald-950/60 text-emerald-400 border border-emerald-500/30",
    slate: "bg-slate-800/80 text-slate-300 border border-slate-700/50",
    outline: "bg-transparent text-slate-400 border border-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono tracking-wider rounded-full transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
