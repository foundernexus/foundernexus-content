import type { Config } from "tailwindcss";

// FounderNexus placeholder brand tokens — dark, minimal, high-contrast to match
// foundernexus.com. Drop in exact brand hexes here when confirmed; nothing else
// needs to change.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14", // page background (near-black)
        panel: "#12161F", // cards / surfaces
        panel2: "#171C27",
        line: "#232A36", // hairline borders
        fg: "#E8E9EC", // primary text
        muted: "#9AA3B2", // secondary text
        accent: "#C7A45A", // restrained warm "signal" accent
        "accent-soft": "#D8BE7E",
        "accent-ink": "#0B0E14",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: { prose: "72ch" },
    },
  },
  plugins: [],
};

export default config;
