import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Self-hosted (VPS / Docker): tek Node süreciyle çalıştırmak için
  output: "standalone",
};

export default withNextIntl(nextConfig);
