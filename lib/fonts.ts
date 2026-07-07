// Self-hosted brand fonts (from the FounderNexus design system export).
// next/font/local optimizes + serves these, no CLS, no external request.
import localFont from "next/font/local";

export const plusJakartaSans = localFont({
  src: [
    { path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/plus-jakarta-sans/plus-jakarta-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// Secondary (legacy email / product UI) — not applied globally, available via font-product.
export const roboto = localFont({
  src: [
    { path: "../fonts/roboto/roboto-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/roboto/roboto-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/roboto/roboto-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
});
