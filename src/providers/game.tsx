import React, { useState } from "react";

export const GameContext = React.createContext({});

export function GameProvider(props: any) {
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [boardAttempt, setBoardAttempt] = useState({
    column: 0,
    row: 0
  })
  const [board, setBoard] = useState([
    [
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}
    ],
    [
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}
    ],
    [
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}
    ],
    [
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}
    ],
    [
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}, 
      {letter: "", color: ""}
    ]
  ]);
  const [disabledLetters, setDisabledLetters] = useState([]);

  return (
    <GameContext.Provider 
      value={{ 
        correctAnswer, 
        setCorrectAnswer,
        board, 
        setBoard,
        boardAttempt, 
        setBoardAttempt,
        disabledLetters, 
        setDisabledLetters
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);