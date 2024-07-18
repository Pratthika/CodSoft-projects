import React, { useState } from 'react';
import './Quiz.css';
import './App.css';
import Quiz from './Quiz';
import CreateQuiz from './CreateQuiz';
import LandingPage from './LandingPage';

function App() {
  const [role, setRole] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        {role === '' && <LandingPage setRole={setRole} />}
        {role === 'creator' && <CreateQuiz />}
        {role === 'taker' && <Quiz />}
      </header>
    </div>
  );
}

export default App;
