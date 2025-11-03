import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opus-production-3e99.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
