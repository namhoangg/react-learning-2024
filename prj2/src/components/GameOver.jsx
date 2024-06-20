export default function GameOver({onReset,winner,winnerName}){
    return (
        <div id="game-over">
            <h2>Game Over</h2>
           
            {winner&&<p>{winnerName[winner]} won!</p>}
            {!winner&&<p>Draw!</p>}
            <button onClick={onReset}>Play Again</button>
        </div>
    )
}