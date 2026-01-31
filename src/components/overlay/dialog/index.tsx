import {
  Dialog as Root,
  DialogClose as Close,
  DialogContent as Content,
  DialogDescription as Description,
  DialogFooter as Footer,
  DialogHeader as Header,
  DialogOverlay as Overlay,
  DialogPortal as Portal,
  DialogTitle as Title,
  DialogTrigger as Trigger,
} from "./dialog";

export const Dialog = Object.assign(Root, {
  Close,
  Content,
  Description,
  Footer,
  Header,
  Overlay,
  Portal,
  Title,
  Trigger,
});

export * from "./variable";
export * from "./type";
