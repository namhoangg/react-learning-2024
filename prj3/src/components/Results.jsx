import {calculateInvestmentResults, formatter} from '../util/investment.js';
export default function Results({userInput}){
    const results = calculateInvestmentResults(userInput);
    return (
        <>
           <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Interest Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => {
                    return (
                        <tr key={index}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.interest + result.annualInvestment)}</td>
                            <td>{formatter.format(result.annualInvestment)}</td>
                        </tr>
                    )
                })}
            </tbody>
           </table>
        </>
    )
}