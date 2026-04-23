import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ],
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
