import { useState, useCallback } from "react";
import QUESTIONS from "../question.js";
import Quiz_Complete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  console.log(activeQuestionIndex);
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevState) => [...prevState, selectedAnswer])
  },
  [activeQuestionIndex]);
  const handleSkipQuestion = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;
  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={Quiz_Complete} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
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
