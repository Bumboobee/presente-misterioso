import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/quiz";
import * as Style from "../components/styles/question";
import Button from "../components/shared/button";
import Option from "./option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  // useEffect(() => {
  //   dispatch({ type: "CHANGE_OPTIONS" });
  // }, [currentQuestion]);

  return (
    <Style.Container>
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>

      <div>
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>

      {quizState.answerSelected && (
        <Button text={"Continuar"} stateToDispatch={"CHANGE_QUESTION"} />
      )}
    </Style.Container>
  );
};

export default Question;
