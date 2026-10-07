import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Next.js 16 requires an explicit quality allowlist (default is [75]).
    qualities: [50, 75, 85, 100],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
    // Remote Supabase Storage images (enable when a project ref is known):
    // remotePatterns: [
    //   new URL("https://<project-ref>.supabase.co/storage/v1/object/public/**"),
    // ],
  },
};

export default nextConfig;
