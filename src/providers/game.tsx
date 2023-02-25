import React, { useState } from "react";

export const GameContext = React.createContext({});

export function GameProvider(props: any) {
  const [board, setBoard] = useState([
    ["", "", "", "", ""],
    ["a", "b", "c", "d", "e"],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]);

  return (
    <GameContext.Provider 
      value={{ 
        board, 
        setBoard
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);