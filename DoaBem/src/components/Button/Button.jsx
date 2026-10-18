import { StyledButton } from './Button.styles.js'

export function Button({ variant = 'solid', family = 'main', type = 'button', children, ...props }) {
  return (
    <StyledButton type={type} $variant={variant} $family={family} {...props}>
      {children}
    </StyledButton>
  )
}
