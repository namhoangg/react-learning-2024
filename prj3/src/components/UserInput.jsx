export default function UserInput({onHandleChange, userInput}){
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input  onChange={onHandleChange} type="number" required min="0" name="initialInvestment" value={userInput.initialInvestment}/>
                </p>
                <p>
                    <label>ANUAL INVESTMENT</label>
                    <input onChange={onHandleChange} type="number" required min="0" name="annualInvestment" value={userInput.annualInvestment}/>
                </p>
                <p>
                    <label>EXPECTED RETURN</label>
                    <input onChange={onHandleChange} type="number" required min="0" name="expectedReturn" value={userInput.expectedReturn}/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input onChange={onHandleChange} type="number" required min="0" name="duration" value={userInput.duration}/>
                </p>
            </div>
        </section>
    )
}