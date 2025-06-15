import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// 禁用遥测
process.env.NEXT_TELEMETRY_DISABLED = '1';

export default nextConfig;
