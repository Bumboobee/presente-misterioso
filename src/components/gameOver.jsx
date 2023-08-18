import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import * as Style from "../components/styles/gameOver";
import Button from "../components/shared/button";

import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from "react-confetti";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { width, height } = useWindowSize();

  return (
    <Style.Container>
      {quizState.score === quizState.currentQuestion ? (
        <Confetti width={width} height={height} />
      ) : (
        ""
      )}

      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}
      </p>

      {quizState.score === 1 || quizState.score === 0 ? (
        <p>Meu deus, vai estudar 😍</p>
      ) : quizState.score === quizState.currentQuestion / 2 ? (
        <p>Acertou metade em, pelo menos o nome deve saber escrever 🥰</p>
      ) : quizState.score === quizState.currentQuestion ? (
        <p>Não esperava menos 💅</p>
      ) : (
        <p>Nossa, que sorte seus concorrentes tiveram no enem ❤</p>
      )}

      <Button text={"Jogar Novamente"} stateToDispatch={"NEW_GAME"} />
    </Style.Container>
  );
};

export default GameOver;
