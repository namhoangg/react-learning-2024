import { useState, useCallback } from "react";
import QUESTIONS from "../question.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  console.log(activeQuestionIndex);
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    console.log("run here");
    setUserAnswers((prevState) => [...prevState, selectedAnswer])
  },
    [activeQuestionIndex]);
  const handleSkipQuestion = useCallback(() => {
    console.log("it skip")
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);
  function handleRestart() {
    setUserAnswers([]);
  }
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;
  if (quizIsOver) {
    return (
      <Summary userAnswers={userAnswers} onRestart={handleRestart}/>
    );
  }

  return (
    <>
      <div id="quiz">
        <div id="question">
          <Question
            key={activeQuestionIndex}
            activeQuestionIndex={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipQuestion={handleSkipQuestion}
          />
        </div>
      </div>
    </>
  );
}
