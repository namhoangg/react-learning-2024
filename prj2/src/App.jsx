import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from './winning-combinations';
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function App() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  });
  const [gameTurns, setGameTurns] = useState([]);
  function deriveActivePlayer(turns) {
    let currentPlayer = "X";
    if (turns.length > 0 && turns[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  }
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard=[...initialGameBoard.map(row=>[...row])];
  for(const turn of gameTurns){
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
  }
  let winner=null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquare=gameBoard[combination[0].row][combination[0].column];
    const secondSquare=gameBoard[combination[1].row][combination[1].column];
    const thirdSquare=gameBoard[combination[2].row][combination[2].column];
    if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare){
      winner=firstSquare;
      break;
    }
  }
  const hasDraw=gameTurns.length===9 && !winner;
  const handleSelectSquare = (rowIndex, colIndex) => {
   
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  const handleResetGame = () => {
    setGameTurns([]);
  };
  function handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayers=>({
      ...prevPlayers,
      [symbol]:newName
    }));
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player ">
            <Player
              onNameChange={handlePlayerNameChange}
              name={players['X']}
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
            onNameChange={handlePlayerNameChange}
              name={players['O']}
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          {(winner||hasDraw) && <GameOver winnerName={players} onReset={handleResetGame} winner={winner}/>}
          <GameBoard
            gameBoard={gameBoard}
            onSelectSquare={handleSelectSquare}
          />
        </div>
        <Log turns={gameTurns}/>
      </main>
    </>
  );
}

export default App;
