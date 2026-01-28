"use client";

import { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/libs";
import { Button } from "@/components/inputs/button";
import { CAROUSEL_STYLES } from "../variable";
import { useCarouselContext } from "./context";
import { ORIENTATION, SLOT } from "../constants";

export function Next({
  variant = "outline",
  size = "icon",
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarouselContext();

  return (
    <Button
      data-slot={SLOT.NEXT}
      variant={variant}
      size={size}
      className={cn(
        CAROUSEL_STYLES.next,
        orientation === ORIENTATION.HORIZONTAL
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
