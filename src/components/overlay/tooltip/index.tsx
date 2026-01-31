import {
  Tooltip as Root,
  TooltipContent as Content,
  TooltipProvider as Provider,
  TooltipTrigger as Trigger,
} from "./tooltip";

export const Tooltip = Object.assign(Root, {
  Content,
  Provider,
  Trigger,
});

export * from "./variable";
export * from "./type";
