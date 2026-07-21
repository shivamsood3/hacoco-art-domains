import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "hacococapital.local",
    "investwithhacoco.local",
    "hacocoadvisory.local",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hacoco.art",
      },
      {
        protocol: "https",
        hostname: "thehacoco.com",
      },
      {
        protocol: "https",
        hostname: "hacoco.art",
        pathname: "/cdn/**",
      },
      {
        protocol: "http",
        hostname: "hacoco.art",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
