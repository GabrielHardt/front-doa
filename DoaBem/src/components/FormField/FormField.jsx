import { Input } from '../Input/Input.jsx'
import { ErrorText, Field, Label } from './FormField.styles.js'

export function FormField({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
  autoComplete,
  autoFocus,
}) {
  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        error={error}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
    </Field>
  )
}
