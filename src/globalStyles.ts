import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
  :root {
    --pink--00: #F1DDE7;
    --pink--01: #F1E0E6;
    --yellow--00: #F1E6DF;
    --grey--00: #4D4847;
    --grey--01: #b8b8b8;
    --white--00: #F8EFEF;
    --black--00: #000000;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    min-height: 100vh;
    height: 100%;
    background: linear-gradient(
    180deg,
    var(--white--00) 0%,
    var(--yellow--00) 25%,
    var(--pink--01) 50%,
    var(--pink--00) 100%
  );
  }

  h1, h4 {
    margin-bottom: .3rem;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 200;
    font-size: 2rem;
    color: var(--black--00);
  }
`;

export const Container = styled.div`
  text-align: center;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const P = styled.p`
  font-family: "Bricolage Grotesque", sans-serif;
  margin-bottom: 3rem;

  &.intro {
    @media (max-width: 768px) { 
      max-width: 375px;
    }
    
    display: block;
    margin: 1rem auto;
  }
`;

export const ContainerA = styled.div`
  margin-top: 2rem;
`

export default GlobalStyle;
