import { useState, createContext } from "react";

export const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState(null);

  return (
    <GameContext.Provider value={{ userChoice, setUserChoice }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider;