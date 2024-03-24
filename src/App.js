import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [expectedAnswer, setExpectedAnswer] = useState('');
  const [gameRunning, setGameRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameRunning) {
        const random = Math.random();
        if (random < 0.5) {
          setDisplayText('Deve');
          setExpectedAnswer('deve');
        } else {
          setDisplayText('Cüce');
          setExpectedAnswer('cuce');
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [gameRunning]);

  const handleButtonClick = (answer) => {
    if (answer === expectedAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div className="container">
      <h1>Deve Cüce Oyunu</h1>
      <h2>Puan: {score}</h2>
      <div className="game-container">
        <div className="display">{displayText}</div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={() => handleButtonClick('deve')}>Deve</button>
          <button className="btn btn-primary" onClick={() => handleButtonClick('cuce')}>Cüce</button>
        </div>
        <button className="btn btn-success" onClick={() => setGameRunning(!gameRunning)}>{gameRunning ? 'Oyunu Durdur' : 'Oyunu Başlat'}</button>
      </div>
    </div>
  );
}

export default App;
