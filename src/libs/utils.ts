import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-size": [
        "text-title-1",
        "text-title-2",
        "text-title-3",
        "text-caption-1",
        "text-caption-2",
        "text-caption-3",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
