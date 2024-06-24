import { useState,useRef } from "react";
export default function Answer({
  answers,
  onSelect,
  selectedAnswer,
  isCorrect
}){
  const suffleAnswer = useRef();
  if (!suffleAnswer.current) {
    suffleAnswer.current = [...answers].sort(() => Math.random() - 0.5);
  }
  return (
    <>
      <ul id="answers">
        {suffleAnswer.current.map((ans, index) => {
          let cssClass = "";
          if (ans === selectedAnswer && isCorrect === null) {
            cssClass = "selected";
          }
          if (ans == selectedAnswer && isCorrect === true) {
            cssClass = "correct";
          }
          if (ans == selectedAnswer && isCorrect === false) {
            cssClass = "wrong";
          }
          return (
            <li key={index} className="answer">
              <button
                onClick={() => onSelect(ans)}
                className={cssClass}
                disabled={selectedAnswer ? true : false}
              >
                {ans}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  )
}