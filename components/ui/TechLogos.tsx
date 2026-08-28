import React from "react";

export const TechLogos: Record<string, React.FC<{ className?: string }>> = {
  Python: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M62.6 0c-17.7 0-16.6 7.7-16.6 7.7l.1 8h17.1v2.4H33.8s-11.6-1.3-11.6 16.9c0 18.2 10.1 17.5 10.1 17.5h6v-8.5s-.3-10.1 10-10.1h17.2s9.6.2 9.6-9.3V7.7S86.2 0 62.6 0zm-9.5 5.1c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"
        fill="#3776AB"
      />
      <path
        d="M65.1 127.9c17.7 0 16.6-7.7 16.6-7.7l-.1-8H64.5v-2.4h29.4s11.6 1.3 11.6-16.9c0-18.2-10.1-17.5-10.1-17.5h-6v8.5s.3 10.1-10 10.1H62.2s-9.6-.2-9.6 9.3v16.9s-1 7.7 22.5 7.7zm9.5-5.1c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
        fill="#FFD43B"
      />
    </svg>
  ),

  Java: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M48.2 97.4c-6.8 1.4-14.7 2.4-14.7 2.4s8.9-3.7 17.6-5c8.7-1.3 22-1.9 29.8 1 0 0-8.8-1.5-16.6.1-7.8 1.6-16.1 1.5-16.1 1.5z"
        fill="#5382A1"
      />
      <path
        d="M44.9 83.1c-8.2 1.9-20.9 4-20.9 4s13-4.5 24.6-6c11.6-1.5 28.5-1.9 38.6 2.3 0 0-10.9-2.3-21.7-.5-10.8 1.8-20.6.2-20.6.2z"
        fill="#5382A1"
      />
      <path
        d="M74.9 69.2c4.8 4.7 1.6 8.3-4.8 12-10.1 5.9-27.9 6.8-38 1.9 4.3 1 11.2.9 17.8-.3 10.5-2 19.3-5.2 25-13.6z"
        fill="#E76F00"
      />
      <path
        d="M60.1 0C54.8 10.4 46.5 21.6 57 32.7c6 6.3 11 12.3 4.2 20.3 7.8-8.2 5.1-15.6-.4-21.6C52.7 22.8 56.4 13.9 60.1 0z"
        fill="#E76F00"
      />
      <path
        d="M80.2 107.1c-13.6 7-38.6 7.6-53.1 1.5 0 0 5.4.9 14.6.4 13.6-.7 32.1-4.7 38.5-1.9z"
        fill="#5382A1"
      />
    </svg>
  ),

  C: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M117.5 33.8l-47-27.1c-3.9-2.3-8.8-2.3-12.8 0l-47 27.1c-3.9 2.3-6.4 6.5-6.4 11v54.3c0 4.5 2.4 8.7 6.4 11l47 27.1c3.9 2.3 8.8 2.3 12.8 0l47-27.1c3.9-2.3 6.4-6.5 6.4-11V44.8c.3-4.5-2.1-8.7-6.4-11z"
        fill="#A8B9CC"
      />
      <path
        d="M64 26.5c-20.7 0-37.5 16.8-37.5 37.5S43.3 101.5 64 101.5c14.2 0 26.6-7.9 32.8-19.5l-14.7-8.5c-3.4 6.3-10.1 10.5-18.1 10.5-11.3 0-20.5-9.2-20.5-20.5S52.7 43 64 43c8 0 14.7 4.2 18.1 10.5l14.7-8.5C90.6 34.4 78.2 26.5 64 26.5z"
        fill="#004482"
      />
    </svg>
  ),

  Pandas: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect x="20" y="16" width="20" height="96" rx="4" fill="#150458" />
      <rect x="54" y="16" width="20" height="96" rx="4" fill="#E70488" />
      <rect x="88" y="16" width="20" height="96" rx="4" fill="#FFCA00" />
      <circle cx="30" cy="40" r="6" fill="#06B6D4" />
      <circle cx="64" cy="64" r="6" fill="#FFFFFF" />
      <circle cx="98" cy="88" r="6" fill="#10B981" />
    </svg>
  ),

  NumPy: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M64 10L16 36v56l48 26 48-26V36L64 10z" fill="#013243" />
      <path d="M64 10v108L16 92V36L64 10z" fill="#4DABCF" />
      <path d="M64 10l48 26v56L64 118V10z" fill="#4C78A8" />
      <path d="M64 54L30 36l34-18 34 18-34 18z" fill="#E45756" />
    </svg>
  ),

  Matplotlib: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="54" fill="#111827" stroke="#374151" strokeWidth="4" />
      <path
        d="M24 88 C 40 40, 50 100, 64 48 C 78 96, 90 20, 104 72"
        fill="none"
        stroke="#117554"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M24 72 C 40 90, 60 30, 74 80 C 88 40, 95 60, 104 40"
        fill="none"
        stroke="#1FB784"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  ),

  Seaborn: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect x="16" y="16" width="96" height="96" rx="16" fill="#0F172A" stroke="#1E293B" strokeWidth="4" />
      <path
        d="M28 90 Q 50 20, 70 70 T 100 30"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M28 75 Q 45 40, 65 85 T 100 50"
        fill="none"
        stroke="#818CF8"
        strokeWidth="4"
        strokeDasharray="4 4"
      />
    </svg>
  ),

  SQL: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <ellipse cx="64" cy="32" rx="44" ry="16" fill="#336791" />
      <path d="M20 32v32c0 8.8 19.7 16 44 16s44-7.2 44-16V32" fill="none" stroke="#336791" strokeWidth="8" />
      <path d="M20 64v32c0 8.8 19.7 16 44 16s44-7.2 44-16V64" fill="none" stroke="#336791" strokeWidth="8" />
      <ellipse cx="64" cy="32" rx="44" ry="16" fill="none" stroke="#4183C4" strokeWidth="4" />
    </svg>
  ),

  Supabase: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M69.4 121.2c-2.3 3.1-7.2 1.4-7.1-2.4l1.3-43.2H12.9c-4.4 0-6.8-5.1-3.9-8.4L64 8.7c2.3-3.1 7.2-1.4 7.1 2.4l-1.3 43.2h50.7c4.4 0 6.8 5.1 3.9 8.4L69.4 121.2z"
        fill="url(#supabaseGrad)"
      />
      <defs>
        <linearGradient id="supabaseGrad" x1="12" y1="8" x2="116" y2="120">
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>
    </svg>
  ),

  "Jupyter Notebook": ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M64 22c26.5 0 48 6.3 48 14s-21.5 14-48 14S16 43.7 16 36s21.5-14 48-14z"
        fill="none"
        stroke="#F37626"
        strokeWidth="10"
      />
      <path
        d="M64 78c26.5 0 48 6.3 48 14s-21.5 14-48 14S16 99.7 16 92s21.5-14 48-14z"
        fill="none"
        stroke="#F37626"
        strokeWidth="10"
      />
      <circle cx="64" cy="64" r="18" fill="#767677" />
      <circle cx="34" cy="36" r="6" fill="#F37626" />
      <circle cx="94" cy="92" r="6" fill="#505050" />
    </svg>
  ),

  Git: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M123.5 56.4L71.6 4.5c-4.4-4.4-11.5-4.4-15.9 0L42.5 17.7l19.5 19.5c4.7-1.6 10.1-.5 13.8 3.2 3.7 3.7 4.8 9.1 3.2 13.8l18.8 18.8c4.7-1.6 10.1-.5 13.8 3.2 5 5 5 13.1 0 18.1-5 5-13.1 5-18.1 0-4-4-4.9-9.8-2.7-14.7L72.8 63V94c1.6 1 3.1 2.4 4.1 4.1 3.7 6.4 1.5 14.6-4.9 18.3s-14.6 1.5-18.3-4.9c-3.7-6.4-1.5-14.6 4.9-18.3 2.5-1.5 5.3-2.1 8-1.9V61.8c-2.7.2-5.5-.4-8-1.9L32.1 76.4c.3.9.4 1.8.4 2.8 0 6.9-5.6 12.5-12.5 12.5S7.5 86.1 7.5 79.2s5.6-12.5 12.5-12.5c2.6 0 5 .8 7 2.1l16.1-16.1L23.6 33.2 4.5 52.3c-4.4 4.4-4.4 11.5 0 15.9l51.9 51.9c4.4 4.4 11.5 4.4 15.9 0l51.2-51.2c4.4-4.3 4.4-11.4 0-15.5z"
        fill="#F05032"
      />
    </svg>
  ),

  GitHub: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 4C30.86 4 4 30.86 4 64c0 26.51 17.19 49 41.03 56.94 3 .55 4.1-1.3 4.1-2.89 0-1.43-.05-5.22-.08-10.25-16.69 3.63-20.21-8.04-20.21-8.04-2.73-6.93-6.66-8.77-6.66-8.77-5.45-3.72.41-3.65.41-3.65 6.02.42 9.19 6.18 9.19 6.18 5.35 9.17 14.04 6.52 17.46 4.99.54-3.88 2.09-6.52 3.8-8.02-13.32-1.51-27.33-6.66-27.33-29.65 0-6.55 2.34-11.9 6.18-16.1-.62-1.52-2.68-7.62.59-15.88 0 0 5.04-1.61 16.51 6.15 4.79-1.33 9.92-2 15.02-2.02 5.1.02 10.23.69 15.02 2.02 11.46-7.76 16.49-6.15 16.49-6.15 3.28 8.26 1.22 14.36.6 15.88 3.85 4.2 6.17 9.55 6.17 16.1 0 23.06-14.03 28.12-27.4 29.6 2.15 1.85 4.07 5.51 4.07 11.1 0 8.02-.07 14.49-.07 16.46 0 1.6 1.08 3.48 4.14 2.89C106.83 113 124 90.51 124 64 124 30.86 97.14 4 64 4z"
      />
    </svg>
  ),

  "VS Code": ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path
        d="M93.3 11.5L68 31.7 26.2 1.3c-2.4-1.7-5.7-1.1-7.4 1.3L1.5 25.1c-1.5 2.1-1.1 5 1 6.6l23.5 18-23.5 18c-2.1 1.6-2.5 4.5-1 6.6l17.3 22.5c1.7 2.4 5 3 7.4 1.3L68 67.8l25.3 20.2c2.4 1.9 5.8 1.5 7.7-.9l23.9-30.8c2-2.6 2-6.2 0-8.8L101 12.4c-1.9-2.4-5.3-2.8-7.7-.9z"
        fill="#0066B8"
      />
      <path
        d="M93.3 11.5L68 31.7l25.3 20.2c2.4 1.9 5.8 1.5 7.7-.9l23.9-30.8c2-2.6 2-6.2 0-8.8L101 12.4c-1.9-2.4-5.3-2.8-7.7-.9z"
        fill="#007ACC"
      />
      <path
        d="M93.3 116.5L68 96.3l25.3-20.2c2.4-1.9 5.8-1.5 7.7.9l23.9 30.8c2 2.6 2 6.2 0 8.8L101 115.6c-1.9 2.4-5.3 2.8-7.7.9z"
        fill="#1F9CF0"
      />
    </svg>
  ),

  "Data Cleaning": ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect x="16" y="16" width="96" height="96" rx="16" fill="#0F172A" stroke="#06B6D4" strokeWidth="4" />
      <path d="M32 40h64L68 76v28L60 96V76L32 40z" fill="none" stroke="#06B6D4" strokeWidth="6" strokeLinejoin="round" />
      <circle cx="88" cy="88" r="8" fill="#10B981" />
    </svg>
  ),

  EDA: ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect x="16" y="16" width="96" height="96" rx="16" fill="#0F172A" stroke="#06B6D4" strokeWidth="4" />
      <circle cx="56" cy="56" r="24" fill="none" stroke="#38BDF8" strokeWidth="6" />
      <path d="M74 74l26 26" stroke="#06B6D4" strokeWidth="8" strokeLinecap="round" />
      <path d="M44 56h24M56 44v24" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),

  "Data Interpretation": ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect x="16" y="16" width="96" height="96" rx="16" fill="#0F172A" stroke="#06B6D4" strokeWidth="4" />
      <path d="M32 88l24-32 20 16 28-40" fill="none" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="104" cy="32" r="6" fill="#10B981" />
    </svg>
  ),

  "Statistical Analysis": ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect x="16" y="16" width="96" height="96" rx="16" fill="#0F172A" stroke="#06B6D4" strokeWidth="4" />
      <path d="M28 80 C 48 80, 52 36, 64 36 C 76 36, 80 80, 100 80" fill="none" stroke="#06B6D4" strokeWidth="6" strokeLinecap="round" />
      <line x1="64" y1="28" x2="64" y2="92" stroke="#10B981" strokeWidth="3" strokeDasharray="4 4" />
    </svg>
  ),

  "Data Visualization": ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect x="16" y="16" width="96" height="96" rx="16" fill="#0F172A" stroke="#06B6D4" strokeWidth="4" />
      <rect x="32" y="60" width="16" height="36" rx="4" fill="#38BDF8" />
      <rect x="56" y="40" width="16" height="56" rx="4" fill="#06B6D4" />
      <rect x="80" y="24" width="16" height="72" rx="4" fill="#10B981" />
    </svg>
  ),
};
