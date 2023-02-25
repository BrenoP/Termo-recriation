import { useEffect, useCallback } from 'react';
import { KeyGrids, Key } from './Keyboard.style';
import { useGame } from '../../providers/game';

const Keyboard = () => {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { board, setBoard, boardAttempt, setBoardAttempt } : any = useGame();

  function deleteKey() {
    const newBoard = [...board]
    newBoard[boardAttempt.column][boardAttempt.row] = ""
    setBoard(newBoard)
    setBoardAttempt({
      column: 0,
      row: boardAttempt.row - 1
    })
  }

  const handleKeyboard = useCallback(
    (event: any) => {
      if (event.key === "Backspace") {
        deleteKey()
      }
    },
    [boardAttempt]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  function PressKey(key: string) {
    const newBoard = [...board]
    newBoard[boardAttempt.column][boardAttempt.row] = key
    setBoard(newBoard)
    setBoardAttempt({
      column: 0,
      row: boardAttempt.row + 1
    })
  }

  return ( 
    <>
      <h1>Keyboard</h1>
      <KeyGrids>
        <div className='key-row'>
          {keys1.map((key, index) => (<Key key={index} onClick={() => PressKey(key)}>{key}</Key>))}
        </div>
        <div className='key-row'>
          {keys2.map((key, index) => (<Key key={index} onClick={() => PressKey(key)}>{key}</Key>))}
        </div>
        <div className='key-row'> 
          {keys3.map((key, index) => (<Key key={index} onClick={() => PressKey(key)}>{key}</Key>))}
        </div>
      </KeyGrids>
    </>
  );
}
 
export default Keyboard;