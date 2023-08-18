import { styled } from "styled-components";

export const Question = styled.div`
  border: 1px solid var(--grey--01);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: .4s;

  &:hover {
    background-color: var(--grey--00);
    color: var(--white--00);
  }

  &.correct {
    background-color: var(--black--00);
    color: white;
  }

  &.wrong {
    background-color: var(--grey--00);
    opacity: .7;
  }
`;
