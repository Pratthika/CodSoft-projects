import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [newAnswer, setNewAnswer] = useState('');
  const [noQns, setNoQns] = useState(0);
  const [addedQns, setAddedQns] = useState(0);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
      if (score + 1 === questions.length) {
        setConfetti(true);
      }
    }
  };

  const handleNoQns = () => {
    setNoQns(parseInt(noQns));
  };

  const handleAddQuestion = () => {
    const newQuestionObject = {
      question: newQuestion,
      options: newOptions,
      answer: newAnswer,
    };
    setQuestions([...questions, newQuestionObject]);
    setNewQuestion('');
    setNewOptions(['', '', '', '']);
    setNewAnswer('');
    setAddedQns(addedQns + 1);
  };

  return (
    <div className="quiz-container">
      {confetti && <Confetti />}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          {noQns === 0 ? (
            <div className="set-question-section">
              <h3>Set Number of Questions</h3>
              <input
                type="number"
                placeholder="Enter number of questions"
                value={noQns}
                onChange={(e) => setNoQns(e.target.value)}
              />
              <button onClick={handleNoQns}>Set Questions</button>
            </div>
          ) : (
            <div>
              {questions.length > 0 && addedQns >= noQns ? (
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestionIndex].question}
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        className="answer-button"
                        onClick={() => handleAnswerOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="add-question-section">
                  <h3>Add your Question</h3>
                  <input
                    type="text"
                    placeholder="Enter question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                  {newOptions.map((option, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => {
                        const optionsCopy = [...newOptions];
                        optionsCopy[index] = e.target.value;
                        setNewOptions(optionsCopy);
                      }}
                    />
                  ))}
                  <input
                    type="text"
                    placeholder="Enter correct answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                  />
                  <button onClick={handleAddQuestion}>Add Question</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
