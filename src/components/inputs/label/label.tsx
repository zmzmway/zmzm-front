"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/libs";
import { labelVariants } from "./variable";
import { LabelProps } from "./type";
import { SLOT } from "./constants";

function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot={SLOT.ROOT}
      className={cn(labelVariants(), className)}
      {...props}
    />
  );
}

export { Label };