import React from 'react';
import './LandingPage.css';

const LandingPage = ({ setRole }) => {
  return (
    <div className="landing-container">
      <h1>Welcome to Quiz App</h1>
      <div className="role-selection">
        <button onClick={() => setRole('creator')}>Quiz Creator</button>
        <button onClick={() => setRole('taker')}>Quiz Taker</button>
      </div>
    </div>
  );
};

export default LandingPage;
