import type { NextConfig } from "next";

// For GitHub Pages: build plain HTML files into out/ instead of running a server.
// BASE_PATH is "" for a user site (alishbahkap.github.io), "/repo-name" otherwise.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
        basePath,
      }
    : {}),
};

export default nextConfig;
