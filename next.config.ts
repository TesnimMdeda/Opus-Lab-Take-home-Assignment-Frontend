import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "opus-production-3e99.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
