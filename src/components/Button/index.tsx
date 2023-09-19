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
        "px-6 py-3 font-bold text-sm rounded-lg transition-colors border",
        variant === "filled"
          ? color === "primary"
            ? "bg-primary border-primary hover:bg-primary-light active:bg-primary-dark"
            : color === "white"
            ? "bg-neutral-200 border-neutral-200 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-400"
            : color === "error"
            ? "bg-error border-error hover:bg-error-light active:bg-error-dark"
            : color === "success"
            ? "bg-success border-success hover:bg-success-light active:bg-success-dark"
            : color === "warning"
            ? "bg-warning border-warning hover:bg-warning-light active:bg-warning-dark"
            : ""
          : color === "primary"
          ? "border-primary text-primary hover:bg-primary-light active:bg-primary-dark"
          : color === "white"
          ? "border-neutral-200 text-neutral-200 hover:bg-neutral-50 active:bg-neutral-400"
          : color === "error"
          ? "border-error text-error hover:bg-error-light active:bg-error-dark"
          : color === "success"
          ? "border-success text-success hover:bg-success-light active:bg-success-dark"
          : color === "warning"
          ? "border-warning text-warning hover:bg-warning-light active:bg-warning-dark"
          : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
