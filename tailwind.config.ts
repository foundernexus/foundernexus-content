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
        // Brand blue ramp (tokens/colors.css — completes the Figma-exported scale).
        "blue-100": "#D3EAFD", // soft blue chip / selected surface
        "blue-200": "#A6D2F7", // light blue borders / stage-2 chip
        "blue-300": "#66B2F0", // eyebrow blue on dark surfaces
        "blue-400": "#2196F3", // small accents / list markers
        "blue-action": "#215BE3", // action-blue gradient endpoint
        "hero-navy": "#061B2C", // rich navy hero-image tint (tokens/colors.css: "dark surfaces, event hero")
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
