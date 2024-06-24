import { useState, useEffect } from "react";
export default function Timer({ timeout, onTimeout }) {
 
  useEffect(()=>{
    console.log("Timer component mounted");
  },[])
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const timer=setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  return (
    <>
      <progress id="question-time" value={remainingTime} max={timeout} />
    </>
  );
}
