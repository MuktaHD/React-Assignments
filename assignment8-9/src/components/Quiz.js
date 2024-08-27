import React, { useState } from 'react';
import Question from './Question';
import AnswerList from './AnswerList';

function Quiz({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleAnswerSelected = (answer) => {
        setSelectedAnswers([...selectedAnswers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Quiz is complete
            alert('Quiz Complete!');
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <Question question={currentQuestion.question} />
            <AnswerList
                answers={currentQuestion.answers}
                onAnswerSelected={handleAnswerSelected}
            />
        </div>
    );
}

export default Quiz;
