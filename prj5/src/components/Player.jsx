import React, { useState, useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const inputRef = useRef(null);
  function handleChange(e) {
    setPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
