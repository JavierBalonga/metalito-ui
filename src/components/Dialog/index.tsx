import { ComponentProps } from "react";
import { cx } from "class-variance-authority";
import CloseIcon from "../icons/CloseIcon";

export interface DialogProps extends ComponentProps<"dialog"> {
  /** If true, the dialog will be open. */
  open?: boolean;
  /** The event handler for when the dialog is closed. */
  onClose?: () => void;
}

export default function Dialog({
  open = true,
  onClose,
  className,
  children,
  ...props
}: DialogProps) {
  return (
    <>
      <div
        className={cx(
          "fixed left-0 top-0 h-full w-full backdrop-blur-sm transition-opacity",
          open
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />
      <dialog
        role="dialog"
        className={cx(
          "fixed left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-neutral-100 bg-neutral-950 text-neutral-100 transition-opacity",
          open
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0",
          className,
        )}
        tabIndex={-1}
        {...props}
        open
      >
        <button
          className="absolute right-2 top-2 cursor-pointer rounded-full p-2 transition-colors hover:bg-neutral-100/20"
          tabIndex={-1}
          onClick={onClose}
        >
          <CloseIcon className="text-2xl" />
        </button>
        {children}
      </dialog>
    </>
  );
}
