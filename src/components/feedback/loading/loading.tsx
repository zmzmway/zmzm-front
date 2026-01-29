
import { createPortal } from "react-dom"
import { Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/libs"
import { LoadingProps } from "./type"
import { DEFAULT } from "./constants"

export function Loading({ 
  className, 
  size = DEFAULT.SIZE, 
  fullScreen = DEFAULT.FULL_SCREEN, 
  description,
  ...props 
}: LoadingProps) {
  const content = (
    <div
      className={cn("flex flex-col items-center justify-center gap-3", className)}
      {...props}
    >
      <Loader2
        className="animate-spin text-primary"
        size={size}
      />
      {description && (
        <p className="text-sm text-alternative font-medium text-center animate-pulse">
          {description}
        </p>
      )}
    </div>
  )

  if (fullScreen) {

    return createPortal(
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-max h-dvh w-screen flex items-center justify-center bg-background/80 backdrop-blur-md"
        >
          {content}
        </motion.div>
      </AnimatePresence>,
      document.body
    )
  }

  return content
}