/**
 * Animation utilities and presets for Framer Motion
 * Provides consistent animations across the landing page
 */

import { Variants, Transition } from 'framer-motion';

// Easing presets
export const easings = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: { type: "spring", stiffness: 300, damping: 30 },
  gentle: { type: "spring", stiffness: 100, damping: 20 },
} as const;

// Duration presets
export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: durations.fast,
      ease: easings.easeIn,
    },
  },
};

// Hero section variants
export const heroVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
      staggerChildren: 0.2,
    },
  },
};

// Feature card variants
export const featureCardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.bounce,
    },
  },
  hover: {
    y: -8,
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    },
  },
};

// Testimonial variants
export const testimonialVariants: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: durations.fast,
      ease: easings.easeIn,
    },
  },
};

// Pricing card variants
export const pricingCardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.bounce,
    },
  },
  hover: {
    y: -12,
    scale: 1.03,
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    },
  },
};

// Stagger container variants
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Stagger item variants
export const staggerItem: Variants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
};

// CTA section variants
export const ctaVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

// Floating animation variants
export const floatingVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotating animation variants
export const rotatingVariants: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Pulse animation variants
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Shimmer effect variants
export const shimmerVariants: Variants = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: '100%',
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3,
      ease: 'linear',
    },
  },
};

// Modal variants
export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.bounce,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: durations.fast,
      ease: easings.easeIn,
    },
  },
};

// Backdrop variants
export const backdropVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: durations.fast,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: durations.fast,
    },
  },
};

// Stats counter variants
export const statsVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.bounce,
    },
  },
};

// Navigation variants
export const navVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    },
  },
};

// Footer variants
export const footerVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

// Utility functions
export const createStaggerDelay = (index: number, baseDelay = 0.1) => ({
  delay: index * baseDelay,
});

export const createSpringTransition = (stiffness = 300, damping = 30): Transition => ({
  type: "spring",
  stiffness,
  damping,
});

export const createBounceTransition = (duration = durations.normal): Transition => ({
  duration,
  ease: easings.bounce,
});

// Intersection Observer animation hook
export const useInViewAnimation = () => {
  return {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: easings.easeOut },
  };
};
