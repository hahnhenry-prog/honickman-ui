import type { ReactNode } from "react";

export interface FieldProps {
  label: string;
  /** Shows a marker in the theme's primary colour next to the label. */
  required?: boolean;
  /** Helper text below the control. Hidden while `error` is set. */
  hint?: string;
  /** Validation message. Replaces `hint` and marks the control invalid. */
  error?: string;
  /** Ties the label to the control. Strongly recommended — without it,
   *  clicking the label does nothing and screen readers cannot pair them. */
  htmlFor?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Label + control + helper text.
 *
 * Layout and spacing only — it does not style the control it wraps. Pair it
 * with <Input>, or any control of your own.
 */
export function Field({
  label, required, hint, error, htmlFor, className, children,
}: FieldProps) {
  return (
    <div className={className ? `hui-field ${className}` : "hui-field"}>
      <label className="hui-field__label" htmlFor={htmlFor}>
        {label}
        {required && <span className="hui-field__required" aria-hidden="true">*</span>}
      </label>
      {children}
      {error
        ? <p className="hui-field__error" role="alert">{error}</p>
        : hint ? <p className="hui-field__hint">{hint}</p> : null}
    </div>
  );
}
