import Header_Image from "../assets/quiz-logo.png"
export default function Header(){
    return(
        <>
            <header>
                <img src={Header_Image} alt="Quiz App Logo" />
                <h1>Quiz App By Me</h1>
            </header>
        </>
    )
}