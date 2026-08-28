import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ebinesar A | Data Analytics & Python",
  description:
    "Data Analytics portfolio of Ebinesar A, a Computer Science undergraduate focused on Python, SQL, data analysis, visualization, and data-driven problem solving.",
  keywords: [
    "Ebinesar A",
    "Data Analytics",
    "Python",
    "SQL",
    "Pandas",
    "Seaborn",
    "Data Visualization",
    "Computer Science",
    "NPTEL Data Analytics",
  ],
  authors: [{ name: "Ebinesar A" }],
  openGraph: {
    title: "Ebinesar A | Data Analytics & Python Portfolio",
    description:
      "Data Analytics portfolio of Ebinesar A, featuring real transactional sales analysis and student performance correlation studies.",
    type: "website",
    locale: "en_US",
    siteName: "Ebinesar A Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebinesar A | Data Analytics & Python",
    description:
      "Data Analytics portfolio of Ebinesar A, focused on Python-based data analysis and statistical visualization.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
        {children}
      </body>
    </html>
  );
}
