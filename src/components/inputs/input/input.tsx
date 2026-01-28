import { cn } from "@/libs";
import { INPUT_STYLES } from "./variable";
import { InputProps } from "./type";

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        INPUT_STYLES.base,
        INPUT_STYLES.focus,
        INPUT_STYLES.error,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
