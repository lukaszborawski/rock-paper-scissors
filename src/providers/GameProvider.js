import { useState, createContext, useEffect } from 'react';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const localScore = JSON.parse(localStorage.getItem('rps-score'));
    if (localScore) {
      setScore(localScore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('rps-score', score)
  }, [score]);


  return (
    <GameContext.Provider value={{ userChoice, setUserChoice, score, setScore }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider;