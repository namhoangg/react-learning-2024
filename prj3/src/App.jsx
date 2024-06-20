import Results from "./components/Results"
import UserInput from "./components/UserInput"
import {useState} from "react"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});
const isValidInput=userInput.duration>=1;
function handleChange(e){
    setUserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [e.target.name]: parseInt(e.target.value)
        }
    })
}
  return (
    <>
      <UserInput onHandleChange={handleChange} userInput={userInput}/>
      {isValidInput&&<Results userInput={userInput}/>}
    </>
  )
}

export default App
