"use client";

import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/libs";
import { LABEL_STYLES } from "./variable";
import { LabelProps } from "./type";

function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(LABEL_STYLES.root, className)}
      {...props}
    />
  );
}

export { Label };
