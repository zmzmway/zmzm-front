import { cn } from "@/libs";
import { SKELETON_STYLES } from "./variable";
import { SkeletonProps } from "./type";

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn(SKELETON_STYLES.root, className)}
      {...props}
    />
  );
}

export { Skeleton };
