import { cn } from "@/libs";
import { inputVariants } from "./variable";
import { InputProps } from "./type";
import { SLOT } from "./constants";

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot={SLOT.ROOT}
      className={cn(inputVariants(), className)}
      {...props}
    />
  );
}

export { Input };