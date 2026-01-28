import { cn } from "@/libs"
import { AVATAR_STYLES } from "../variable"
import { AvatarBadgeProps } from "../type"
import { SLOT } from "../constants"

export function Badge({ className, ...props }: AvatarBadgeProps) {
  return (
    <span
      data-slot={SLOT.BADGE}
      className={cn(AVATAR_STYLES.badge, className)}
      {...props}
    />
  )
}
