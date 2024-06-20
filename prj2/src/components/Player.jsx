import {useState} from 'react';
export default function Player({ name, symbol ,isActive,onNameChange}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    const handleButtonChange = () => {
      if(isEditing){
        setPlayerName(document.querySelector('input').value);
        onNameChange(symbol,document.querySelector('input').value);
      }
      setIsEditing(isEditing => !isEditing);
    };
    return (
      <li className={isActive?"active":undefined}>
        <span className="player">
          {isEditing ? <input type='text' required defaultValue={playerName}/>:  <span className="player-name">{playerName}</span>}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleButtonChange}>{isEditing?"Save":"Edit"}</button>
      </li>
    );
}; 