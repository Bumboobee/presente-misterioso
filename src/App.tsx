import GlobalStyle from "./globalStyles";
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";
import { Container } from "./globalStyles";
import { Welcome } from "./components/welcome";
import Question from "./components/question";
import Button from "./components/shared/button";
import GameOver from "./components/gameOver";
import Gift from "./components/gift";

export function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <Container>
      <GlobalStyle />

      <Welcome />

      {quizState.gameStage === "Start" && (
        <Button text={"Bora lá"} stateToDispatch={"CHANGE_STATE"}></Button>
      )}

      {quizState.gameStage === "Playing" && <Question />}

      {quizState.gameStage === "End" && <GameOver />}

      {quizState.gameStage === "End" ? (
        quizState.score >= quizState.currentQuestion / 2 ? (
          <Gift />
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </Container>
  );
}
