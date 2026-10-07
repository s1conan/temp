"use client";

import { MotionConfig } from "motion/react";

/**
 * App-wide motion configuration.
 *
 * `reducedMotion="user"` automatically disables transform/layout animations
 * for users who request reduced motion, while keeping opacity transitions.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
