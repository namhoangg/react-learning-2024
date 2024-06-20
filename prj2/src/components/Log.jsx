export default function Log({turns}){
    return (
        <ol id="log">
            {turns.map((turn, index) => {
                return(
                    <li key={index}>
                        <span>{`Player ${turn.player} moved to ${turn.square.row},${turn.square.col}`}</span>
                    </li>
                )
            })}
        </ol>
    )
}