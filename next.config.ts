import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/free-trial",
        destination: "/pricing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
