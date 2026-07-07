import type { Config } from "tailwindcss";

// FounderNexus brand tokens, from the design system export (tokens/colors.css,
// tokens/typography.css): white surfaces, deep navy text, decisive blue actions,
// pale-blue supporting panels, restrained gray borders. Plus Jakarta Sans primary.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F9F9F9", // page background (gray-50)
        panel: "#FFFFFF", // cards / surfaces (white)
        panel2: "#F1F8FF", // pale-blue emphasis panel (blue-50)
        line: "#D3D6DA", // hairline borders (gray-350)
        fg: "#01052A", // primary text (navy-900)
        muted: "#56646F", // secondary text (gray-600)
        accent: "#007BE4", // primary action blue (blue-500)
        "accent-soft": "#0072BA", // action hover (blue-600)
        "accent-ink": "#FFFFFF", // text on accent-colored surfaces
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        product: [
          "var(--font-roboto)",
          "var(--font-plus-jakarta)",
          "-apple-system",
          "sans-serif",
        ],
      },
      maxWidth: { prose: "72ch" },
    },
  },
  plugins: [],
};

export default config;
