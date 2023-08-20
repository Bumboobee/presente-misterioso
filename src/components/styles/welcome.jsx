import { styled } from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
`;

export const H1 = styled.h1`
  font-size: 3.7rem;

  @media (max-width: 768px) {
    font-size: 3rem;

    @media (max-height: 736px) {
      font-size: 2.2rem;
    }
  }
`;

export const H4 = styled.h4`
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    display: block;
    margin: 0 auto;
    max-width: 250px;

    @media (max-height: 736px) {
      font-size: 1.2rem;
    }
  }
`;
