import * as React from "react"
import { cn } from "@/libs/utils"
import { Button, buttonVariants } from "@/components/common"
import { type VariantProps } from "class-variance-authority"

export interface FabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  position?: "bottom-right" | "bottom-left" | "bottom-center"
}

const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ className, variant = "default", size = "icon-lg", position = "bottom-right", ...props }, ref) => {
    const positionClasses: Record<NonNullable<FabProps["position"]>, string> = {
      "bottom-right": "bottom-6 right-6",
      "bottom-left": "bottom-6 left-6",
      "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "fixed z-50 rounded-full shadow-lg hover:shadow-xl transition-shadow",
          positionClasses[position ?? "bottom-right"],
          className
        )}
        {...props}
      />
    )
  }
)
Fab.displayName = "Fab"

export { Fab }
