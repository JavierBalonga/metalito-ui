import { ComponentProps } from "react";
import { cx } from "class-variance-authority";

export default function IconButton({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={cx(
        "cursor-pointer rounded-full p-2 transition-colors hover:bg-neutral-100/20",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
