import { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { cva } from "class-variance-authority";

export type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonColor = "primary" | "danger" | "white";

export type ButtonSize = "small" | "medium" | "large";

const getButtonClassName = cva(
  "font-bold rounded-lg transition-colors border",
  {
    variants: {
      variant: {
        contained: "",
        outlined: "hover:text-neutral-950 active:text-neutral-950",
        text: "border-transparent hover:bg-neutral-500/50 active:bg-neutral-500/75",
      },
      color: {
        primary: "",
        white: "",
        danger: "",
      },
      size: {
        small: "px-4 py-2 text-xs",
        medium: "px-6 py-3 text-sm",
        large: "px-8 py-4 text-lg",
      },
    },
    compoundVariants: [
      /* variant: "contained" */
      {
        variant: "contained",
        color: "primary",
        className:
          "bg-primary border-primary text-neutral-900 hover:bg-primary-light active:bg-primary-dark",
      },
      {
        variant: "contained",
        color: "white",
        className: [
          "bg-neutral-200 border-neutral-200 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-400",
        ],
      },
      {
        variant: "contained",
        color: "danger",
        className:
          "bg-error border-error text-neutral-200 hover:bg-error-light active:bg-error-dark",
      },
      /* variant: "outlined" */
      {
        variant: "outlined",
        color: "primary",
        className:
          "border-primary text-primary hover:bg-primary-light active:bg-primary-dark",
      },
      {
        variant: "outlined",
        color: "white",
        className: [
          "border-neutral-200 text-neutral-200 hover:bg-neutral-50 active:bg-neutral-400",
        ],
      },
      {
        variant: "outlined",
        color: "danger",
        className:
          "border-error text-error hover:bg-error-light active:bg-error-dark",
      },
      /* variant: "text" */
      {
        variant: "text",
        color: "primary",
        className: "text-primary",
      },
      {
        variant: "text",
        color: "white",
        className: "text-white",
      },
      {
        variant: "text",
        color: "danger",
        className: "text-error",
      },
    ],
    defaultVariants: {
      variant: "text",
      color: "white",
    },
  },
);

export interface ButtonProps extends Omit<ComponentProps<"button">, "color"> {
  /** The variant to use. */
  variant?: ButtonVariant;
  /** The color to use. */
  color?: ButtonColor;
  /** The size of the button. */
  size?: ButtonSize;
  /** The button content. */
  children?: ReactNode;
  /** The handler function for the `click` event. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  variant = "text",
  color = "white",
  size = "medium",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName({ variant, color, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
