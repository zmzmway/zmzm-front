import { cn } from "@/libs";
import { SKELETON_STYLES } from "./variable";
import { SkeletonProps } from "./type";
import { SLOT } from "./constants";

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot={SLOT.ROOT}
      className={cn(SKELETON_STYLES.root, className)}
      {...props}
    />
  );
}

export { Skeleton };
