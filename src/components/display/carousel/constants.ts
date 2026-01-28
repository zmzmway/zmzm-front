export const SLOT = {
  ROOT: "carousel",
  CONTENT: "carousel-content",
  ITEM: "carousel-item",
  NEXT: "carousel-next",
  PREVIOUS: "carousel-previous",
} as const;

export const ORIENTATION = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const;

export type Orientation = (typeof ORIENTATION)[keyof typeof ORIENTATION];
