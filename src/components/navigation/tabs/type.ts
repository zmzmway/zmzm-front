import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps } from "class-variance-authority";
import { tabsListVariants } from "./variable";

export type TabsProps = React.ComponentProps<
  typeof TabsPrimitive.Root
>;
export interface TabsListProps
  extends
    React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}
export type TabsTriggerProps = React.ComponentProps<
  typeof TabsPrimitive.Trigger
>;
export type TabsContentProps = React.ComponentProps<
  typeof TabsPrimitive.Content
>;
