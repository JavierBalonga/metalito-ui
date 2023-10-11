import { ChangeEvent, useState } from "react";
import { cx } from "class-variance-authority";

export interface SwitchProps {
  /** The id of the switch. */
  id?: string;
  /** The value of the switch. */
  checked?: boolean;
  /** The function to call when the value changes. */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** Whether the switch is disabled. */
  disabled?: boolean;
}

export default function Switch({
  id = "switch",
  disabled = false,
  checked: propschecked,
  onChange,
}: SwitchProps) {
  const [localChecked, setLocalChecked] = useState<boolean>(false);

  const checked = propschecked ?? localChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setLocalChecked(e.target.checked);
  };

  return (
    <label
      htmlFor={id}
      className={cx(
        "relative block h-6 w-11 rounded-full outline outline-2 outline-offset-2 outline-transparent transition-all duration-300",
        checked ? "bg-neutral-50" : "bg-neutral-700",
        disabled
          ? "cursor-not-allowed brightness-50"
          : "cursor-pointer brightness-100 focus-within:outline-neutral-50 hover:outline-neutral-50",
      )}
    >
      <div
        className={cx(
          "absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-neutral-950 transition-all duration-300",
          checked
            ? "left-[calc(100%_-_0.125rem)] -translate-x-full brightness-100"
            : "left-[0.125rem] translate-x-0 brightness-50",
        )}
      />
      <input
        type="checkbox"
        className="sr-only"
        id={id}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
    </label>
  );
}
