import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*", // frontend calls /api/*
  //       destination: "http://localhost:8222/:path*", // your backend
  //     },
  //   ];
  // },
};

export default nextConfig;
