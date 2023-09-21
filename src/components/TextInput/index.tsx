import { cx } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";

export interface TextInputProps extends ComponentProps<"input"> {
  /** The label for the input. */
  label?: ReactNode;
  /** The helper text for the input. */
  helperText?: ReactNode;
  /** The icon for the input. */
  icon?: ReactNode;
  // TODO: disabled, error, fullWidth
}

export default function TextInput({
  label,
  helperText,
  icon,
  id,
  name,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className={cx("group flex flex-col w-64", className)}>
      {label && (
        <label
          className="text-base font-medium text-neutral-100 px-1 py-1"
          htmlFor={id || name}
        >
          {label}
        </label>
      )}
      <div className="flex flex-row items-center gap-3 border-2 border-neutral-800 px-4 py-3 rounded  group-focus-within:border-neutral-100 transition-colors">
        <input
          type="text"
          className="bg-transparent grow w-0 focus:outline-none"
          id={id || name}
          name={name}
          {...props}
        />
        {icon}
      </div>
      {helperText && (
        <label
          className="text-base font-medium text-neutral-400 px-4 py-1"
          htmlFor={id || name}
        >
          {helperText}
        </label>
      )}
    </div>
  );
}
