import React, { useState,useRef } from 'react'
import ResultModal from './ResultModal'
export default function TimerChallenge({title,targetTime}) {
  const [timerExpired, setTimerExpired] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)
  const timerRef = useRef(null)
  const dialog=useRef(null)
  function handleStart(){
    timerRef.current=setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open()
    }, targetTime * 1000)
    setTimerStarted(true)
  }
  function handleStop(){
    setTimerStarted(false);
    clearTimeout(timerRef.current)
  }
  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p className="challenge-expired">Challenge Expired</p>}
        <p className="challenge-time">
          {targetTime} seconds
        </p>
        <p>
          <button onClick={timerStarted?handleStop:handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerStarted?'active':undefined}>
          {timerStarted ? "Timer Started" : "Timer Stopped"}
        </p>
      </section>
    </>
  )
}