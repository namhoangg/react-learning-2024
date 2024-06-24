import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../question.js";
import { useState, useEffect, useRef } from "react";
export default function Question({
  activeQuestionIndex,
  onSelectAnswer,
  onSkipQuestion,
}) {
  const suffleAnswer = useRef();
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  if (!suffleAnswer.current) {
    suffleAnswer.current = [...QUESTIONS[activeQuestionIndex].answers].sort(
      () => Math.random() - 0.5
    );
  }
  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer: selectedAnswer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: selectedAnswer,
        isCorrect:selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0],
      });
      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, 1000);
    }, 1000);

    // setTimeout(()=>{
    //     onSelectAnswer(selectedAnswer);
    // },2000)
  }
  function handleSkipQuestion() {}
  return (
    <>
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={onSkipQuestion}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {suffleAnswer.current.map((ans, index) => {
          let cssClass = "";
          if (ans === answer.selectedAnswer && answer.isCorrect === null) {
            cssClass = "selected";
          }
          if (ans == answer.selectedAnswer && answer.isCorrect === true) {
            cssClass = "correct";
          }
          if (ans == answer.selectedAnswer && answer.isCorrect === false) {
            cssClass = "wrong";
          }
          return (
            <li key={index} className="answer">
              <button
                onClick={() => handleSelectAnswer(ans)}
                className={cssClass}
                disabled={answer.selectedAnswer?true:false}
              >
                {ans}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
