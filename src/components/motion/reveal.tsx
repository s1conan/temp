"use client";

import { motion } from "motion/react";

interface RevealProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly y?: number;
}

/**
 * Fade-and-rise reveal on scroll. Transform/opacity only, fires once.
 * Reduced-motion handling is inherited from MotionProvider.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
