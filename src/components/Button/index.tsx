import { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ComponentProps<"button"> {
  /**
   * The variant to use.
   */
  variant?: "filled" | "outlined";
  /**
   * The color to use.
   */
  color?: "primary" | "white" | "error" | "success" | "warning";
  /**
   * The button content.
   */
  children?: ReactNode;
  /**
   * The handler function for the `click` event.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  variant = "outlined",
  color = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "px-6 py-3 font-bold text-sm rounded-lg transition-colors",
        variant === "filled"
          ? color === "primary"
            ? "bg-primary hover:bg-primary-light active:bg-primary-dark"
            : color === "white"
            ? "bg-neutral-200 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-400"
            : color === "error"
            ? "bg-error hover:bg-error-light active:bg-error-dark"
            : color === "success"
            ? "bg-success hover:bg-success-light active:bg-success-dark"
            : color === "warning"
            ? "bg-warning hover:bg-warning-light active:bg-warning-dark"
            : ""
          : color === "primary"
          ? "border border-primary text-primary hover:bg-primary-light active:bg-primary-dark"
          : color === "white"
          ? "border border-neutral-200 text-neutral-200 hover:bg-neutral-50 active:bg-neutral-400"
          : color === "error"
          ? "border border-error text-error hover:bg-error-light active:bg-error-dark"
          : color === "success"
          ? "border border-success text-success hover:bg-success-light active:bg-success-dark"
          : color === "warning"
          ? "border border-warning text-warning hover:bg-warning-light active:bg-warning-dark"
          : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
