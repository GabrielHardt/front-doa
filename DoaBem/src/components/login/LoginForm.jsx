import { useState } from "react";
import styled from "styled-components";
import { login } from "../../utils/authService.js";
import { FormField } from "./FormField.jsx";

const Container = styled.div`
  width: 100%;
  max-width: 390px;
`;

const Eyebrow = styled.p`
  margin: 0 0 0.5rem;
  color: var(--color-accent);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
`;

const Subtitle = styled.p`
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin: 0 0 1.75rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorMessage = styled.p`
  color: var(--color-critical);
  font-size: 0.875rem;
  margin: 0;
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  background: none;
  border: 0;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: var(--color-primary);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Footer = styled.p`
  margin: 1.5rem 0 0;
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.8rem;
`;

function validateLogin(email, password) {
  const errors = {};

  if (!email.trim()) {
    errors.email = "Informe o e-mail.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!password) {
    errors.password = "Informe a senha.";
  }

  return errors;
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const errors = validateLogin(email, password);
    setFieldErrors(errors);
    setFormError("");

    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    try {
      const result = await login(email, password);
      console.log(result);
    } catch (error) {
      setFormError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Eyebrow>Bem-vindo de volta</Eyebrow>
      <Title>Acesse sua conta</Title>
      <Subtitle>Entre com suas credenciais institucionais.</Subtitle>

      <Form onSubmit={handleSubmit} noValidate>
        <FormField
          label="E-mail"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={fieldErrors.email}
          autoComplete="username"
          autoFocus
        />

        <FormField
          label="Senha"
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={fieldErrors.password}
          autoComplete="current-password"
        />

        {formError && <ErrorMessage role="alert">{formError}</ErrorMessage>}

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
          {!isLoading && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </SubmitButton>
      </Form>

      <Footer>Uso interno. Não há cadastro público.</Footer>
    </Container>
  );
}
