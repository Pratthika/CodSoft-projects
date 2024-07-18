import React, { useState } from 'react';
import './Quiz.css';

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [newAnswer, setNewAnswer] = useState('');
  const [noQns, setNoQns] = useState(0);
  const [addedQns, setAddedQns] = useState(0);

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
    localStorage.setItem('questions', JSON.stringify([...questions, newQuestionObject]));
  };

  return (
    <div className="quiz-container">
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
          {addedQns >= noQns ? (
              <h3 className='info'>All questions added!</h3>
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
  );
};

export default CreateQuiz;
