import { useEffect } from "react";
import { P } from "../globalStyles";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";


function Intro() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  const selectNewMeme = () => {
    dispatch({
      type: "CHANGE_MEME",
    })
  } 

  useEffect(() => {
    selectNewMeme()
    
    const interval = setInterval(() => {
      selectNewMeme()
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <P className="intro">{quizState.meme}</P>
  )
}

export default Intro