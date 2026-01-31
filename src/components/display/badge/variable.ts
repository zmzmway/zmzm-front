import { cva } from "class-variance-authority"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border border-transparent font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error transition-[color,box-shadow] overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        secondary:
          "bg-blue-400 text-white hover:bg-blue-500",
        destructive:
          "bg-error text-white hover:bg-error/90 focus-visible:ring-error/20",
        warning: "bg-warning text-gray-900 hover:bg-warning/90",
        success: "bg-success text-white hover:bg-success/90",
        outline:
          "border-gray-200 text-foreground hover:bg-bg-neutral hover:text-gray-900",
        ghost: "hover:bg-bg-neutral hover:text-gray-900",
        link: "text-blue-500 underline-offset-4 hover:underline",
        card: "bg-white text-gray-900 border-gray-100 hover:bg-bg-neutral",
        custom: "",
      },
      size: {
        sm: "h-5 px-2 text-caption-3 [&>svg]:size-2.5 gap-1",
        default: "h-6 px-2.5 text-caption-2 [&>svg]:size-3 gap-1.5",
        lg: "h-7 px-3 text-caption-1 [&>svg]:size-3.5 gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
