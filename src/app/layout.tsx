import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emon Bepari | AI Automation Engineer & Full-Stack Developer",
  description:
    "Portfolio of Emon Bepari: AI automation (n8n, Claude Code, LLM agents), full-stack development (Next.js, TypeScript, PostgreSQL), computer vision and IoT. Based in Dhaka, open to remote roles.",
  keywords: ["Emon Bepari", "AI Automation Engineer", "n8n", "Claude Code", "Full-Stack Developer", "Next.js", "PostgreSQL", "Bangladesh"],
  openGraph: {
    title: "Emon Bepari | AI Automation Engineer & Full-Stack Developer",
    description: "AI agents, n8n workflows and full-stack apps that businesses can trust with real data.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
