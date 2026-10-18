import styled from 'styled-components'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
`

export const ErrorText = styled.span`
  font-size: 12px;
  color: var(--color-critical);
`
