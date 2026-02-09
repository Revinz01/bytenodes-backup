"use client";

import { useRef } from "react";
import { useInView, type Variants } from "framer-motion";

// Check if user prefers reduced motion
const getPrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  );
};

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return { ref, isInView };
};

const prefersReducedMotion = getPrefersReducedMotion();

// Optimized variants with faster animations for better performance
export const scrollVariants: Variants = {
  hidden: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.35,
    },
  },
};

export const scrollVariantsLeft: Variants = {
  hidden: {
    opacity: 0,
    x: prefersReducedMotion ? 0 : -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.35,
    },
  },
};

export const scrollVariantsRight: Variants = {
  hidden: {
    opacity: 0,
    x: prefersReducedMotion ? 0 : 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.35,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.06,
      delayChildren: prefersReducedMotion ? 0 : 0.08,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: prefersReducedMotion ? 1 : 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.25,
    },
  },
};
