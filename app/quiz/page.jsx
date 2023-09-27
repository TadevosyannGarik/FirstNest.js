"use client"
import React, {useState} from "react";
import { quiz } from '../data.js';

const page = () => {

    const [activeQuiestion, setActibeQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswer: 0,
        wrongAnswer:0,
    });

    const {questions} = quiz;
    const { question, answers, correctAnswer} = questions[activeQuiestion];
    const onAnswerSelected = (answer, idx) => {
        setChecked(true)
        setSelectedAnswerIndex(idx);
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
            console.log("true");
        } else {
            setSelectedAnswer(false);
            console.log("false");
        }
    }

    const nextQuestion = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) => 
        selectedAnswer ?
        {...prev,
        score: prev.score + 5,
        correctAnswer: prev.correctAnswer + 1,
        } : {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 1,
        }
        );
        if (activeQuiestion !== questions.length  - 1) {
            setActibeQuestion((prev) => prev + 1)
        } else {
            setActibeQuestion(0);
            setShowResult(true);
        }
        setChecked(false);
    };

    return (
        <div className="container">
  <h1>Question Page</h1>
  <div className="question-container">
    <h2>
      Question {activeQuiestion + 1} <span>/ {questions.length}</span>
    </h2>
  </div>
  {!showResult ? (
    <div className="question-container">
      <h3>{questions[activeQuiestion].question}</h3>
      <ul>
        {answers.map((answer, idx) => (
          <li
            key={idx}
            onClick={() => onAnswerSelected(answer, idx)}
            className={
              selectedAnswerIndex === idx ? "li-selected" : "li-hover"
            }
          >
            <span>{answer}</span>
          </li>
        ))}
      </ul>
      {checked ? (
        <button onClick={nextQuestion} className="btn">
          {activeQuiestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      ) : (
        <button onClick={nextQuestion} disabled className="btn-disable">
          {"   "}
          {activeQuiestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  ) : (
    <div className="quiz-container">
      <h3>Results</h3>
      <h3>Overall {(result.score / (questions.length * 5)) * 100}%</h3>
      <p>
        Total Questions: <span>{questions.length}</span>
      </p>
      <p>
        Total Score: <span>{result.score}</span>
      </p>
      <p>
        Correct Answers: <span>{result.correctAnswer}</span>
      </p>
      <p>
        Wrong Answers: <span>{result.wrongAnswer}</span>
      </p>
      <button onClick={() => window.location.reload()}>Restart</button>
    </div>
  )}
</div>
    );
};

export default page