import { useEffect, useCallback } from 'react';
import { KeyGrids, Key } from './Keyboard.style';
import { useGame } from '../../providers/game';

const Keyboard = ({ word }: any) => {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { 
    setCorrectAnswer,
    board, 
    setBoard, 
    boardAttempt, 
    setBoardAttempt
  } : any = useGame();

  console.log(board)

  const handleKeyboard = useCallback(
    (event: any) => {
      if (event.key === "Enter" && board[boardAttempt.column].length > 4) {
        enterKey()
      } else if (event.key === "Backspace") {
        deleteKey()
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            PressKey(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            PressKey(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            PressKey(key);
          }
        });
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

  function nextLine() {
    setBoardAttempt({
      column: boardAttempt.column + 1,
      row: 0
    })
  }

  function PressKey(key: string) {
    const newBoard = [...board]
    newBoard[boardAttempt.column][boardAttempt.row].letter = key
    setBoard(newBoard)
    const nextRow = boardAttempt.row < 4 ? boardAttempt.row + 1 : boardAttempt.row
    setBoardAttempt({
      column: boardAttempt.column,
      row: nextRow
    })
  }

  function deleteKey() {
    const newBoard = [...board]
    newBoard[boardAttempt.column][boardAttempt.row] = ""
    setBoard(newBoard)
    const nextRow = boardAttempt.row > 0 ? boardAttempt.row - 1 : boardAttempt.row
    setBoardAttempt({
      column: boardAttempt.column,
      row: nextRow
    })
  }

  function enterKey() {
    let arrayOfLetters = board[boardAttempt.column].map((row: any) => row.letter)
    let writenWord = arrayOfLetters.join().replaceAll(',', '').toLowerCase()
    console.log(writenWord)
    console.log(writenWord === word ? 'Acertou' : 'Errouuuu')
    if(writenWord === word) {
      setCorrectAnswer(true)
    } else {
      nextLine()
    }
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