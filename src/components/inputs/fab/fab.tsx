import { cn } from "@/libs";
import { Button } from "@/components";
import { FabProps } from "./type";
import { FAB_POSITION_CLASSES } from "./variable";
import { forwardRef } from "react";

const Fab = forwardRef<HTMLButtonElement, FabProps>(
  (
    {
      className,
      variant = "default",
      size = "icon-lg",
      position = "bottom-right",
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "fixed z-50 rounded-full shadow-lg hover:shadow-xl transition-shadow",
          FAB_POSITION_CLASSES[position ?? "bottom-right"],
          className,
        )}
        {...props}
      />
    );
  },
);
Fab.displayName = "Fab";

export { Fab };
