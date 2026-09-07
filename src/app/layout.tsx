import type { Metadata } from "next";
import { Syne, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
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
    "Hanoi Developer",
    "Vietnam Software Engineer",
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
      className={`${syne.variable} ${poppins.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-dark text-white font-sans antialiased selection:bg-accent-blue selection:text-white relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
