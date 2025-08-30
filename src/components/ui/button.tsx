import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-medium",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft hover:shadow-medium",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-medium",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-light shadow-soft hover:shadow-medium",
        "accent-outline":
          "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium",
        hero: "bg-gradient-to-r from-primary via-primary/90 to-accent text-white hover:from-primary/90 hover:via-primary/80 hover:to-accent/90 shadow-2xl hover:shadow-3xl font-bold backdrop-blur-sm",
        demo: "bg-white/95 text-black hover:bg-white shadow-xl hover:shadow-2xl font-semibold backdrop-blur-md border border-white/20",
        headerDemo:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl font-semibold backdrop-blur-sm",
        blue: "bg-blue-accent text-white hover:bg-blue-accent/90 shadow-soft",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4 py-2",
        lg: "h-14 rounded-xl px-8 py-4 text-base",
        xl: "h-16 rounded-xl px-12 py-5 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, animate = true, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : animate ? motion.button : "button";

    const motionProps =
      animate && !asChild
        ? {
            whileHover: {
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2, ease: "easeOut" },
            },
            whileTap: {
              scale: 0.98,
              y: 0,
              transition: { duration: 0.1 },
            },
            initial: { scale: 1, y: 0 },
          }
        : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...motionProps}
        {...props}
      >
        {/* Shimmer effect for hero buttons */}
        {variant === "hero" && (
          <motion.div
            className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "linear",
            }}
          />
        )}
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
