import {
  Sheet as Root,
  SheetClose as Close,
  SheetContent as Content,
  SheetDescription as Description,
  SheetFooter as Footer,
  SheetHeader as Header,
  SheetTitle as Title,
  SheetTrigger as Trigger,
} from "./sheet";

export const Sheet = Object.assign(Root, {
  Close,
  Content,
  Description,
  Footer,
  Header,
  Title,
  Trigger,
});

export * from "./variable";
export * from "./type";
