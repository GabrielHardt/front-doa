import { StyledInput } from './Input.styles.js'

export function Input({ error, ...props }) {
  return <StyledInput aria-invalid={Boolean(error)} $hasError={Boolean(error)} {...props} />
}
