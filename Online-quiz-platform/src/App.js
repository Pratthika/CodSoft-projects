import React from 'react';
import './Quiz.css';
import './App.css';
import Quiz from './Quiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        <p>Click the answer to move to the next question!</p>
        <Quiz />
      </header>
    </div>
  );
}

export default App;
