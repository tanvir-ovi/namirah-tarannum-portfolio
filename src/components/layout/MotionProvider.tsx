"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every Framer Motion animation in the tree honour the visitor's
 * reduced-motion preference, so no component has to branch on it itself
 * (which would risk a server/client hydration mismatch).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
