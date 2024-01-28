      
import { useState } from 'react';
import { questions } from './data';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  function correctAnswer(selectedOption) {
    setSelectedOption(selectedOption);
    if (selectedOption === questions[currentQuestion].correctIndex) {
      alert("Correct answer");
    } else {
      alert("Wrong answer");
    }
  }

  const restart = () => {
    setCurrentQuestion(0);
  };

  if (currentQuestion === questions.length) {
    return (
      <div className="container my-5">
        <h1>Online Quiz</h1>
        <h3>Quiz Finish!</h3>
        <button onClick={restart}>Restart</button>
      </div>
    );
  }

  const nextQuestion = () => {
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <div className="container">
        <h1>Quiz App</h1>
        <h2>Choose The Correct Ans</h2>
        <div className="card" key={questions[currentQuestion].id}>
          <div className="card-header">{questions[currentQuestion]?.statement}</div>
          <div className="card-body">
            <ul>
              {questions[currentQuestion]?.options.map((val, index) => (
                <li key={index} onClick={() => correctAnswer((index))}>
                  {val}
                </li>
              ))}
            </ul>
            <button onClick={nextQuestion}>Next Question</button>
          </div>
        </div>
      </div>
    </>
  );
}