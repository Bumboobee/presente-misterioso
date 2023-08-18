import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import * as Style from "../components/styles/option";

const Option = ({ option, answer, selectOption }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <Style.Question onClick={() => selectOption()} className={`${quizState.answerSelected && option === answer ? "correct" : ""} ${quizState.answerSelected && option !== answer ? "wrong" : ""}`} > 
      <p>{option}</p>
    </Style.Question>

  );
};

export default Option;
