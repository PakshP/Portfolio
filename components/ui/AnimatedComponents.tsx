"use client";

import { motion } from "framer-motion";
import React from "react";
import { classNames } from "@/lib/theme";


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
        viewport={{ once: true, amount: 0.2 }}
        className={classNames.sectionLabel}
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className={classNames.sectionTitle}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className={classNames.sectionDescription}
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
  React.ComponentPropsWithoutRef<typeof motion.div> & { delay?: number }
>(({ delay = 0, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.2 }}
    {...props}
  />
));
FadeInUpComponent.displayName = "FadeInUp";

export const FadeInUp = FadeInUpComponent;

export function SectionReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

