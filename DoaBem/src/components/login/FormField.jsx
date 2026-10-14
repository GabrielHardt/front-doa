import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.6rem 0.75rem;
  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? "var(--color-critical)" : "var(--color-border)"};
  border-radius: var(--radius);
  background: var(--color-surface);
  font: inherit;

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 1px;
  }
`;

const ErrorText = styled.span`
  color: var(--color-critical);
  font-size: 0.8rem;
`;

export function FormField({
  label,
  id,
  type = "text",
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
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        $hasError={Boolean(error)}
      />
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
    </Field>
  );
}
