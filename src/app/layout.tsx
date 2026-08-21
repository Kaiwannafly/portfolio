import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyle Dam — Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Kyle Dam (Phuong Nam Dam). Software Engineer and UTS IT Graduate specializing in React, Node.js, .NET Core, and scalable enterprise systems.",
  keywords: [
    "Kyle Dam",
    "Phuong Nam Dam",
    "Software Engineer",
    "Full-Stack Developer",
    "UTS",
    "React",
    "TypeScript",
    "Node.js",
    "Sydney Developer",
  ],
  authors: [{ name: "Kyle Dam", url: "https://github.com/Kaiwannafly" }],
  openGraph: {
    title: "Kyle Dam — Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Kyle Dam. Software Engineer and UTS IT Graduate specializing in React, Node.js, .NET Core, and scalable enterprise systems.",
    url: "https://github.com/Kaiwannafly/portfolio",
    siteName: "Kyle Dam Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-canvas-white text-graphite antialiased selection:bg-ember selection:text-white">
        {children}
      </body>
    </html>
  );
}
