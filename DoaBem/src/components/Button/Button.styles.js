import styled, { css } from 'styled-components'

const FAMILY_COLORS = {
  main: 'var(--color-primary)',
  confirm: 'var(--color-success)',
  deny: 'var(--color-critical)',
}

const VARIANT_STYLES = {
  solid: (color) => css`
    background: ${color};
    border: 1px solid ${color};
    color: var(--white);

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  outline: (color) => css`
    background: transparent;
    border: 1px solid ${color};
    color: ${color};

    &:hover:not(:disabled) {
      background: var(--color-bg);
    }
  `,
  text: (color) => css`
    background: transparent;
    border: 1px solid transparent;
    color: ${color};

    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  `,
}

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: var(--radius);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${({ $variant, $family }) => VARIANT_STYLES[$variant](FAMILY_COLORS[$family])}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
