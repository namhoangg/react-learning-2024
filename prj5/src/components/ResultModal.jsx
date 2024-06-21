import { forwardRef, useImperativeHandle, useRef } from "react"
const ResultModal = forwardRef(function ResultModal({onReset, remainingTime, targetTime }, ref) {
  const dialog = useRef(null);
  const userLost=remainingTime<=0;
  const formattedTime=(remainingTime/1000).toFixed(2);
  const a=targetTime*1000-remainingTime;
  const b=targetTime*1000;
  console.log(a);
  console.log(b);
  const score=Math.round((a/b)*100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  })
  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost&&<h2>You lost</h2>}
      {!userLost&&<h2>Your Score: {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped the timer with <strong>{formattedTime} seconds left.</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  )
})
export default ResultModal