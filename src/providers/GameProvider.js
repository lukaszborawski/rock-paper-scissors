import { useState, createContext } from 'react';

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{ userChoice, setUserChoice, score, setScore }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider;