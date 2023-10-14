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
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-neutral-100/20 transition-colors hover:border-transparent hover:bg-neutral-100/20",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
