import { cva } from "class-variance-authority";

export const INPUT_VARIANTS = {
  base: "flex h-9 w-full rounded-md border border-border-default bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-error/20",
} as const;

export const inputVariants = cva(INPUT_VARIANTS.base);
