import { type VariantProps } from "class-variance-authority";
import { alertVariants } from "./variable";

export interface AlertProps
  extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {}

export type AlertTitleProps = React.ComponentProps<"div">;
export type AlertDescriptionProps = React.ComponentProps<"div">;
