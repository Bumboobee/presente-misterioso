import { ContainerA } from "../globalStyles";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

function Gift() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <ContainerA>
      <a href={quizState.giftSrc}>
        Presente misterioso aqui 🎁
      </a>
    </ContainerA>
  );
}

export default Gift;
