import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../question.js";
import { useState, useEffect, useRef } from "react";
import Answer from "./Answer.jsx";
export default function Question({
  activeQuestionIndex,
  onSelectAnswer,
  onSkipQuestion,
}) {
  let timer = 10000;
  
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  console.log(answer);
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
 
  function handleSelectAnswer(selectedAnswer) {
    // Get the current date and time
    setAnswer((prevAnswer) => {
      return { ...prevAnswer, selectedAnswer: selectedAnswer }
    })
    setTimeout(() => {
      setAnswer((prevAnswer) => {
        return { ...prevAnswer, isCorrect: selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0] }
      })
      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  }
  return (
    <>
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipQuestion : null}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answer answers={QUESTIONS[activeQuestionIndex].answers} onSelect={handleSelectAnswer} selectedAnswer={answer.selectedAnswer} isCorrect={answer.isCorrect}/>
    </>
  );
}
