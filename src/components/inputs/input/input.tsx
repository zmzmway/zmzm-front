import { cn } from "@/libs";
import { inputVariants, INPUT_STYLES } from "./variable";
import { InputProps } from "./type";
import { SLOT } from "./constants";

function Input({
  className,
  type,
  variant,
  size,
  shape,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  const hasIcon = !!leftIcon || !!rightIcon;

  const inputElement = (
    <input
      type={type}
      data-slot={SLOT.ROOT}
      className={cn(
        inputVariants({ variant, size, shape }),
        leftIcon && "pl-10",
        rightIcon && "pr-12",
        "peer",
        className,
      )}
      {...props}
    />
  );

  if (!hasIcon) {
    return inputElement;
  }

  return (
    <div className="relative w-full">
      {leftIcon && (
        <span className={cn(INPUT_STYLES.icon, "left-3")}>
          {leftIcon}
        </span>
      )}
      {inputElement}
      {rightIcon && (
        <span className={cn(INPUT_STYLES.icon, "right-3")}>
          {rightIcon}
        </span>
      )}
    </div>
  );
}

export { Input };
