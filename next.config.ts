import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the workspace root to this app — a parent lockfile exists one level up.
  turbopack: { root: appDir },
  images: {
    // The work images are pre-optimised to WebP at sensible dimensions during
    // the build step (scripts/… → public/work), so we serve them as-is rather
    // than re-running them through the on-demand optimizer. Identical output
    // locally and on Vercel, and no image-optimization quota consumed.
    unoptimized: true,
  },
};

export default nextConfig;
