"use client";

import { motion } from "framer-motion";

const sectionMotion = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-64px" },
  transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] as const },
};

type SectionShellProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  ariaLabelledby?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
  ariaLabelledby,
}: SectionShellProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      {...sectionMotion}
      className={`scroll-mt-20 py-16 sm:py-20 md:scroll-mt-24 md:py-24 lg:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
