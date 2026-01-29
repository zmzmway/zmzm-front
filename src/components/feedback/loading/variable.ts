import { cva } from "class-variance-authority";

export const loadingVariants = cva("animate-spin", {
  variants: {
    variant: {
      default: "text-primary",
      white: "text-white",
      muted: "text-muted-foreground",
      primary: "text-primary",
      alternative: "text-text-alternative", // gray-600
    },
  },
  defaultVariants: {
    variant: "default",
  },
});