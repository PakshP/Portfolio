"use client";

import { motion } from "framer-motion";
import React from "react";


/**
 * Reusable section header component with label, title, and description
 */
export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-xs uppercase tracking-[0.22em] text-[#BF3A2B]"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mt-3 font-serif text-3xl text-[#2A3B55] sm:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mt-3 max-w-2xl text-sm leading-7 text-[#4E5F7A] sm:text-base"
      >
        {description}
      </motion.p>
    </>
  );
}

/**
 * Fade-in-up animation wrapper for section content
 */
const FadeInUpComponent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof motion.div> & { delay?: number }
>(({ delay = 0, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, margin: "-50px" }}
    {...props}
  />
));
FadeInUpComponent.displayName = "FadeInUp";

export const FadeInUp = FadeInUpComponent;

