import styled from "styled-components";
import { LoginForm } from "../components/login/LoginForm.jsx";
import { BrandPanel } from "../components/login/BrandPanel.jsx";

const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: var(--color-bg);
`;

export default function LoginPage() {
  return (
    <Page>
      <BrandPanel />
      <FormSide>
        <LoginForm />
      </FormSide>
    </Page>
  );
}
