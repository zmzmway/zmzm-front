import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "./variable"

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
