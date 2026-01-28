import { Loader2 } from "lucide-react"
import { cn } from "@/libs"
import { LoadingProps } from "./type"

export function Loading({ className, size = 24, fullScreen = false, ...props }: LoadingProps) {
  const content = (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <Loader2
        className="animate-spin text-muted-foreground"
        size={size}
      />
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        {content}
      </div>
    )
  }

  return content
}
