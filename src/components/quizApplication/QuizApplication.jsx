import React, { useState } from 'react';
import "./quizApplication.css";
import { quizData } from './index.quiz';

function QuizApplication() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [userSelected, setUserSelected] = useState("");
    const [score, setScore] = useState(0);

    function handleInput(e) {
        setUserSelected(e.target.value);
    }

    function nextQuestion() {
        if (userSelected === quizData[questionNumber].correct) {
            setScore(score + 1);
        }
        if (questionNumber < quizData.length - 1) {
            setQuestionNumber(questionNumber + 1);
        } else {
            alert(`Quiz finished! Your score is ${score + (userSelected === quizData[questionNumber].correct ? 1 : 0)} out of ${quizData.length}`);
            setQuestionNumber(0);
            setScore(0);
        }

        setUserSelected("");
    }

    return (
        <div className="quiz-container" id="quiz">
            <div className="quiz-header d-flex justify-content-center align-items-center pt-5 position-relative">
                <strong className=' position-absolute' style={{ left: "10px" }}>
                    {questionNumber + 1}/{quizData.length}
                </strong>
                <h2 className="header-txt">Technology Quiz</h2>
            </div>
            <div className="quiz-body">
                <h2 id="question">{quizData[questionNumber].question}</h2>
                <ul>
                    {['a', 'b', 'c', 'd'].map(option => (
                        <li key={option}>
                            <input 
                                checked={userSelected === option} 
                                onChange={handleInput} 
                                value={option} 
                                type="radio" 
                                name="answer" 
                                id={option} 
                                className="answer" 
                                disabled={userSelected && userSelected !== option} 
                            />
                            <label htmlFor={option} id={`${option}_text`}>{quizData[questionNumber][option]}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="quiz-footer text-center">
                <div className="quiz-details"></div>
                {
                    userSelected && <button type="button" id="btn" onClick={nextQuestion}>{questionNumber < quizData.length - 1  ?"Next" : "Result"}</button>
                }
            </div>
        </div>
    )
}

export default QuizApplication;
