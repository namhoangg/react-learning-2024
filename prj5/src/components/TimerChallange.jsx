import React, { useState,useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallange({ title, targetTime }) {
  const dialog=useRef(null);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const timer=useRef(null);
  function handleStart() {
    timer.current=setTimeout(() => {
      setTimerExpired(true);
        dialog.current.showModal();
    }, targetTime * 1000);
    setTimerActive(true);
  }
  function handleStop(){
    clearTimeout(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired&&<p>Lost</p>}
        <p className="challenge-time">Time: {targetTime}s</p>
        <p>
          <button onClick={timerActive?handleStop:handleStart}>
            {timerActive?"Stop":"Start"}
          </button>
        </p>
        <p className={timerActive?'active':undefined}>
            {timerActive?"Timer is running":"Timer is stopped"}
        </p>
      </section>
    </>
  );
}
