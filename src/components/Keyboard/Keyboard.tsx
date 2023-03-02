import { useEffect, useCallback } from 'react';
import { KeyGrids, Key } from './Keyboard.style';

import { useGame } from '../../providers/game';

const Keyboard = ({ word }: any) => {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "⌫"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M", "Enter"];

  const { 
    setCorrectAnswer,
    board, 
    setBoard, 
    boardAttempt, 
    setBoardAttempt
  } : any = useGame();

  const handleKeyboard = useCallback(
    (event: KeyboardEvent) => {
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

  // PONTO DE MELHORIA 
  function nextLine() {
    if(boardAttempt.column > 4) {
      alert('perdeu o jogo')
    } else {
      let writenWord = board[boardAttempt.column].map((row: any) => row)
      let correctWordArray = word.split('')
      for (let index = 0; index < writenWord.length; index++) {
        const newBoard = [...board]
        const writenLetter = writenWord[index].letter.toLowerCase()
  
        if(writenLetter === correctWordArray[index]) {
          newBoard[boardAttempt.column][index].color = "#3AA394"
        } else {
          if(correctWordArray.includes(writenLetter)) {
            newBoard[boardAttempt.column][index].color = "#D3AD69"
          } else {
            newBoard[boardAttempt.column][index].color = "#505356"
          }
        } 
        setBoard(newBoard)
      }
      setBoardAttempt({
        column: boardAttempt.column + 1,
        row: 0
      })
    }
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
    function eraseWord(backOneRow: boolean) {
      const newBoard = [...board]
      newBoard[boardAttempt.column][backOneRow ? boardAttempt.row - 1 : boardAttempt.row] = {letter: "", color: ""}
      setBoard(newBoard)
      const nextRow = boardAttempt.row > 0 ? boardAttempt.row - 1 : boardAttempt.row
      setBoardAttempt({
        column: boardAttempt.column,
        row: nextRow
      })
    }

    if(board[boardAttempt.column][boardAttempt.row].letter === "") {
      if(boardAttempt.row === 0) {
        return
      }
      eraseWord(true)
    } else {
      eraseWord(false)
    }
  }

  function enterKey() {
    let arrayOfLetters = board[boardAttempt.column].map((row: any) => row.letter)
    let writenWord = arrayOfLetters.join().replaceAll(',', '').toLowerCase()
    if(writenWord.length > 4) {
      if(writenWord === word) {
        setCorrectAnswer(true)
      } else {
        nextLine()
      }
    }
  }

  return ( 
    <KeyGrids>
      <div className='key-row'>
        {keys1.map((key, index) => (<Key key={index} onClick={() => PressKey(key)}>{key}</Key>))}
      </div>
      <div className='key-row'>
        {keys2.map((key, index) => (
          <Key key={index} onClick={() => key === "⌫" ? deleteKey() : PressKey(key)}>{key}</Key>
        ))}
      </div>
      <div className='key-row'> 
        {keys3.map((key, index) => (
          <Key key={index} onClick={() => key === "Enter" ? enterKey() : PressKey(key)}>{key}</Key>
        ))}
      </div>
    </KeyGrids>
  );
}
 
export default Keyboard;