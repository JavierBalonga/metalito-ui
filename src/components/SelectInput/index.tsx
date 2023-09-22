import { ComponentProps, MouseEvent, ReactNode } from "react";
import { cx } from "class-variance-authority";

export interface SelectOption {
  value: string | number;
  label?: string;
}

export interface SelectInputProps
  extends Omit<ComponentProps<"input">, "onChange"> {
  /** The label for the input. */
  label?: ReactNode;
  /** The helper text for the input. */
  helperText?: ReactNode;
  /** The icon for the input. */
  icon?: ReactNode;
  /** The options for the select input. */
  options?: SelectOption[];
  /** The callback for when the input changes. */
  onChange?: (value: string | number) => void;
  // TODO: disabled, error, fullWidth
}

export default function SelectInput({
  label,
  helperText,
  icon,
  options = [],
  id,
  name,
  className,
  onChange,
  ...props
}: SelectInputProps) {
  const handleOptionClick = (
    e: MouseEvent<HTMLButtonElement>,
    option: SelectOption,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onChange?.(option.value);
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
      <div className="relative flex flex-row items-center gap-3 rounded border-2 border-neutral-800 bg-inherit px-4 py-3 transition-colors group-focus-within:border-neutral-100">
        <input
          type="text"
          className="w-0 grow bg-transparent focus:outline-none"
          id={id || name}
          name={name}
          {...props}
        />
        {icon}
        <div className="absolute left-0 top-full flex w-full translate-y-0 flex-col rounded border-2 border-neutral-100 bg-neutral-950 opacity-0 transition-all group-focus-within:translate-y-2 group-focus-within:opacity-100">
          {options.map((option) => (
            <button
              key={option.value}
              className="p-2 text-left transition-colors hover:bg-neutral-100/10"
              onClick={(e) => handleOptionClick(e, option)}
            >
              {String(option.value) || option.label}
            </button>
          ))}
        </div>
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
