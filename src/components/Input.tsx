import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Marks the control invalid and turns the border red. Pair with
   *  <Field error="..."> so the reason is visible, not just the colour. */
  invalid?: boolean;
}

/**
 * Text input styled from the active theme.
 *
 * Forwards every native input prop, so type, value, onChange, placeholder,
 * disabled and the rest behave exactly as they would on a bare <input>.
 */
export function Input({ invalid, className, ...props }: InputProps) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      className={className ? `hui-input ${className}` : "hui-input"}
    />
  );
}
