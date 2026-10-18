import styled from 'styled-components'

export const StyledInput = styled.input`
  padding: 12px 16px;
  border: 1px solid ${({ $hasError }) => ($hasError ? 'var(--color-critical)' : 'var(--color-border)')};
  border-radius: var(--radius);
  background: var(--color-surface);
  color: var(--color-text);
  font: inherit;
  font-size: 14px;

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    outline: none;
    border-color: ${({ $hasError }) => ($hasError ? 'var(--color-critical)' : 'var(--color-primary)')};
  }

  &:disabled {
    background: var(--color-bg);
    opacity: 0.6;
  }
`
