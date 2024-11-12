import React from 'react';
function AnswerList({ answers, onAnswerSelected }) {
    return (
        <ul>
            {answers.map((answer, index) => (
                <li key={index}>
                    <button onClick={() => onAnswerSelected(answer)}>{answer}</button>
                </li>
            ))}
        </ul>
    );
}
export default AnswerList;
