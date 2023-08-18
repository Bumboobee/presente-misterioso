import Intro from "./intro";
import * as Style from "./styles/welcome";

export function Welcome() {

  return (
    <Style.Container>
      <Style.H4>acerte mais da metade e concora a um </Style.H4>
      <Style.H1>presente misterioso</Style.H1>

      <Intro />

    </Style.Container>
  );
}
