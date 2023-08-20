import { styled } from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
`;

export const H1 = styled.h1`
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const H4 = styled.h4`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    display: block;
    margin: 0 auto;
    max-width: 250px;
  }
`;
