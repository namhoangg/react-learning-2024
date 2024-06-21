import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef(null);
  const dialog = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);

    dialog.current.open();
  }
  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((time) => time - 10);
    }, 10);
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timerRef.current);
  }
  return (
    <>
      <ResultModal
        onReset={handleReset}
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime} seconds</p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer Started" : "Timer Stopped"}
        </p>
      </section>
    </>
  );
}
