import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use the compiler API supported by TypeScript 5 instead of spawning its CLI.
  experimental: { useTypeScriptCli: false },
};

export default nextConfig;
