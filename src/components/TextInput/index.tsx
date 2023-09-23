import { ComponentProps, MouseEvent, ReactNode } from "react";
import { cx } from "class-variance-authority";

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
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget.querySelector("input");
    input?.focus();
  };

  return (
    <div className={cx("group flex w-64 flex-col", className)}>
      {label && (
        <label
          className="px-1 py-1 text-base font-medium text-neutral-100"
          htmlFor={id || name}
        >
          {label}
        </label>
      )}
      <div
        className="flex flex-row items-center gap-3 rounded border-2 border-neutral-800 px-4 py-3  transition-colors group-focus-within:border-neutral-100"
        onClick={handleClick}
      >
        <input
          type="text"
          className="w-0 grow bg-transparent focus:outline-none"
          id={id || name}
          name={name}
          {...props}
        />
        {icon}
      </div>
      {helperText && (
        <label
          className="px-4 py-1 text-base font-medium text-neutral-400"
          htmlFor={id || name}
        >
          {helperText}
        </label>
      )}
    </div>
  );
}
