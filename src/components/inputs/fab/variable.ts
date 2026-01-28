import { FabProps } from "./type"

export const FAB_POSITION_CLASSES: Record<NonNullable<FabProps["position"]>, string> = {
  "bottom-right": "bottom-6 right-6",
  "bottom-left": "bottom-6 left-6",
  "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
}
