import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
