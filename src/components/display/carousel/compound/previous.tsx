"use client";

import { ComponentProps } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/libs";
import { Button } from "@/components/inputs/button";
import { CAROUSEL_STYLES } from "../variable";
import { useCarouselContext } from "./context";
import { ORIENTATION, SLOT } from "../constants";

export function Previous({
  variant = "outline",
  size = "icon",
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarouselContext();

  return (
    <Button
      data-slot={SLOT.PREVIOUS}
      variant={variant}
      size={size}
      className={cn(
        CAROUSEL_STYLES.previous,
        orientation === ORIENTATION.HORIZONTAL
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}
