"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/libs";
import { POPOVER_STYLES } from "./variable";
import {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverAnchorProps,
  PopoverHeaderProps,
  PopoverTitleProps,
  PopoverDescriptionProps,
} from "./type";

function Popover({ ...props }: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(POPOVER_STYLES.content, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({ ...props }: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

function PopoverHeader({ className, ...props }: PopoverHeaderProps) {
  return (
    <div
      data-slot="popover-header"
      className={cn(POPOVER_STYLES.header, className)}
      {...props}
    />
  );
}

function PopoverTitle({ className, ...props }: PopoverTitleProps) {
  return (
    <div
      data-slot="popover-title"
      className={cn(POPOVER_STYLES.title, className)}
      {...props}
    />
  );
}

function PopoverDescription({ className, ...props }: PopoverDescriptionProps) {
  return (
    <p
      data-slot="popover-description"
      className={cn(POPOVER_STYLES.description, className)}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
};
