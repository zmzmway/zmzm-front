import { ComponentProps, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import { inputVariants } from "./variable";

export interface InputProps
  extends Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}