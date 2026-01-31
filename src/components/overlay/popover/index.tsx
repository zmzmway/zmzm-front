import {
  Popover as Root,
  PopoverAnchor as Anchor,
  PopoverContent as Content,
  PopoverDescription as Description,
  PopoverHeader as Header,
  PopoverTitle as Title,
  PopoverTrigger as Trigger,
} from "./popover";

export const Popover = Object.assign(Root, {
  Anchor,
  Content,
  Description,
  Header,
  Title,
  Trigger,
});

export * from "./variable";
export * from "./type";
