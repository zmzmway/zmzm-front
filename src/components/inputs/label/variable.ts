import { cva } from "class-variance-authority";

export const LABEL_VARIANTS = {
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
} as const;

export const labelVariants = cva(LABEL_VARIANTS.base);
