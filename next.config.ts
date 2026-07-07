import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Browser Accept header picks AVIF (smallest) then WebP. Runtime transcode
    // for next/image only — does not change the on-disk file (§10).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
