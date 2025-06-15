import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 移除了 telemetry 配置，因为它不是 ExperimentalConfig 类型的有效属性
  }
};

export default nextConfig;
