import styled from "styled-components";

const Panel = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
  background: var(--color-sidebar);
  color: var(--color-sidebar-text);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;

  span {
    color: var(--color-accent);
  }
`;

const LogoMark = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--color-accent);
  display: grid;
  place-items: center;
  color: var(--color-sidebar);
`;

const Hero = styled.div`
  max-width: 560px;
`;

const Eyebrow = styled.p`
  margin: 0 0 1rem;
  color: var(--color-accent);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Headline = styled.h2`
  color: #f1f7f5;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 1.25rem;
`;

const Lead = styled.p`
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.85;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

export function BrandPanel() {
  return (
    <Panel>
      <Logo>
        <LogoMark>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 7l9 6 9-6M3 7v10h18V7H3z" />
          </svg>
        </LogoMark>
        <div>
          Doa<span>Bem</span>
        </div>
      </Logo>

      <Hero>
        <Eyebrow>Gestão que acolhe</Eyebrow>
        <Headline>Doações certas, nas mãos de quem precisa.</Headline>
        <Lead>
          Controle estoque, solicitações e entregas com clareza, segurança e
          respeito.
        </Lead>
      </Hero>

      <Footer>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>Rastreabilidade completa de cada doação</span>
      </Footer>
    </Panel>
  );
}
