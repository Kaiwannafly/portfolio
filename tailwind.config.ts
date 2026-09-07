import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        "dark-surface": "#121212",
        "dark-card": "#171717",
        "dark-border": "#262626",
        "dark-border-light": "#333333",
        "text-muted": "#9e9e9e",
        "text-dim": "#666666",
        "accent-blue": "#2d76c0",
        "accent-sky": "#4c86c0",
        "accent-light": "#88a4c0",
        "accent-purple": "#4a0ce5",
        ember: "#ff682c",
        graphite: "#202020",
        "canvas-white": "#ffffff",
        ash: "#1f1f1f",
        fog: "#141414",
        mist: "#282828",
        steel: "#a3a3a3",
        slate: "#737373",
      },
      fontFamily: {
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        display: "-0.03em",
        body: "0.01em",
        caps: "0.12em",
      },
      borderRadius: {
        pill: "9999px",
        tag: "20px",
        card: "16px",
        button: "4px",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
