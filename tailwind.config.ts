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
        graphite: "#202020",
        "canvas-white": "#ffffff",
        ash: "#efefef",
        fog: "#f5f5f5",
        ivory: "#ebe6dd",
        steel: "#4d4d4d",
        slate: "#828282",
        mist: "#e8e8e8",
        ember: "#ff682c",
        brass: "#816729",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        display: "-0.02em",
        body: "0.01em",
        caps: "0.08em",
      },
      borderRadius: {
        "pill": "200px",
        "tag": "20px",
        "card": "12px",
        "card-asym": "12px 0px 12px 12px",
        "button": "0px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 4px 12px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
        elevation: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
