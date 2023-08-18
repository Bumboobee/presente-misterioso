import * as Style from "../styles/button"
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

function Button({ text, stateToDispatch }) {

  const [quizState, dispatch] = useContext(QuizContext)


  return (
    <Style.button onClick={() => dispatch({type: stateToDispatch})}>{ text }</Style.button>
  )
}

export default Button