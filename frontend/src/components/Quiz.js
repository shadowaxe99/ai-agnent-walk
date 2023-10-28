```javascript
import React, { useState } from 'react';

const Quiz = () => {
    const [quizState, setQuizState] = useState({
        currentQuestion: 0,
        userAnswers: [],
        quizData: [
            {
                question: "What is an AI agent?",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                answer: "Option 1"
            },
            // More questions...
        ]
    });

    const handleOptionClick = (option) => {
        setQuizState(prevState => ({
            ...prevState,
            userAnswers: [...prevState.userAnswers, option],
            currentQuestion: prevState.currentQuestion + 1
        }));
    };

    const submitQuiz = () => {
        // Logic to submit quiz and calculate score
    };

    return (
        <div id="quizContainer">
            <h2>Quiz</h2>
            {quizState.currentQuestion < quizState.quizData.length ? (
                <div>
                    <h3>{quizState.quizData[quizState.currentQuestion].question}</h3>
                    {quizState.quizData[quizState.currentQuestion].options.map(option => (
                        <button onClick={() => handleOptionClick(option)}>{option}</button>
                    ))}
                </div>
            ) : (
                <button onClick={submitQuiz}>Submit Quiz</button>
            )}
        </div>
    );
};

export default Quiz;
```