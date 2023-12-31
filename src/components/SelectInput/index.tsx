import {
  ComponentProps,
  MouseEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { cx } from "class-variance-authority";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const UP_KEY = "ArrowUp";
const DOWN_KEY = "ArrowDown";

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
  /** If true, the input will fill the width of its container. */
  fullWidth?: boolean;
  /** The icon for the input. */
  options?: SelectOption[];
  /** The callback for when the input changes. */
  onChange?: (value: string | number) => void;
  // TODO: disabled, error
}

export default function SelectInput({
  label,
  helperText,
  fullWidth,
  options = [],
  id,
  name,
  className,
  value,
  onChange,
  ...props
}: SelectInputProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation between options within up and down arrow keys.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!menuRef.current) return;
      if (e.key !== UP_KEY && e.key !== DOWN_KEY) return;
      const optionElements = menuRef.current.querySelectorAll("button");
      let focusedIndex: number | null = null;
      for (let index = 0; index < optionElements.length; index++) {
        const optionElement = optionElements[index];
        if (optionElement === document.activeElement) {
          focusedIndex = index;
          break;
        }
      }
      if (focusedIndex === null) return;
      if (e.key === DOWN_KEY) {
        optionElements[focusedIndex + 1]?.focus();
      }
      if (e.key === UP_KEY) {
        optionElements[focusedIndex - 1]?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actualValue = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const input = e.currentTarget.querySelector("input");
    input?.focus();
  };

  const handleOptionClick = (
    e: MouseEvent<HTMLButtonElement>,
    option: SelectOption,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    onChange?.(option.value);
    e.currentTarget.blur();
  };

  return (
    <div
      className={cx(
        "group flex w-64 flex-col",
        fullWidth ? "w-full" : "w-64",
        className,
      )}
    >
      {label && (
        <label
          className="px-1 py-1 text-base font-medium text-neutral-100"
          htmlFor={id || name}
        >
          {label}
        </label>
      )}
      <div
        className="relative flex flex-row items-center gap-3 rounded border-2 border-neutral-800 bg-inherit px-4 py-3 transition-colors group-focus-within:border-neutral-100"
        onClick={handleClick}
      >
        <input
          type="text"
          className="w-0 grow bg-transparent caret-transparent focus:outline-none"
          id={id || name}
          name={name}
          value={
            actualValue ? actualValue.label || String(actualValue.value) : ""
          }
          {...props}
        />
        <ArrowDownIcon className="rotate-0 transition-transform group-focus-within:rotate-180" />
        <div
          className="pointer-events-none absolute left-0 top-full z-10 flex w-full translate-y-0 flex-col rounded border-2 border-neutral-100 bg-neutral-950 opacity-0 transition-all group-focus-within:pointer-events-auto group-focus-within:translate-y-2 group-focus-within:opacity-100"
          ref={menuRef}
        >
          {options.map((option) => (
            <button
              key={option.value}
              className="p-2 text-left transition-colors hover:bg-neutral-100/5 focus:bg-neutral-100/5 focus:outline-none"
              onClick={(e) => handleOptionClick(e, option)}
            >
              {option.label || String(option.value)}
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
