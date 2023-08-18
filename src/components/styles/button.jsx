import { styled } from "styled-components";

export const button = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(90deg, var(--grey--00) 0%, var(--black--00) 100%);
  border-radius: 9px;
  border: none;
  transition: 0.4s;
  color: var(--white--00);
  font-family: "Bricolage Grotesque";

  &:hover {
    opacity: 0.9;
  }
`;
