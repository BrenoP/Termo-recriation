import { useEffect, useCallback, useState, useRef } from 'react';
import { KeyGrids, Key } from './Keyboard.style';

import { useGame } from '../../providers/game';

const Keyboard = ({ word, wordSet }: any) => {

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]

  const [disabledKeys, setDisabledKeys] = useState<string[]>([])
  const [correctKey, setCorrectKey] = useState<string[]>([])
  const [positionKey, setPositionKey] = useState<string[]>([])

  const { 
    setCorrectAnswer,
    board, 
    setBoard, 
    boardAttempt, 
    setBoardAttempt
  } : any = useGame()
  const audioRef = useRef(null);

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
        })
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            PressKey(key);
          }
        })
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            PressKey(key);
          }
        })
      }
    },
    [boardAttempt]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)

    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    };
  }, [handleKeyboard]);


  // PONTO DE MELHORIA 
  function nextLine() {

    function hasDuplicates(array: string[]) {
      return (new Set(array)).size !== array.length;
    }

    if(boardAttempt.column > 4) {
      alert('perdeu o jogo')
    } else {
      let writenWord = board[boardAttempt.column].map((row: string[]) => row)
      let correctWordArray = word.split('')
      for (let index = 0; index < writenWord.length; index++) {
        const newBoard = [...board]
        const writenLetter: string = writenWord[index].letter.toLowerCase()
        if(writenLetter === correctWordArray[index]) {
          newBoard[boardAttempt.column][index].color = "#3AA394"
          const newArr = correctKey
          newArr.push(writenLetter)
          setCorrectKey(newArr)
          if(!hasDuplicates(correctWordArray) && positionKey.includes(writenLetter)) {
            newBoard[boardAttempt.column].map((row: any, rowIndex: any) => {
              if(row.letter.toLowerCase() === writenLetter && newBoard[boardAttempt.column][rowIndex].color !== "#3AA394") {
                newBoard[boardAttempt.column][rowIndex].color = "#505356"
              }
            })
            let newPositionKeys = positionKey.filter(word => word !== writenLetter)
            setPositionKey(newPositionKeys)
          }
        } else {
          if(correctWordArray.includes(writenLetter)) {
            let onlyLettersWrittenArray = writenWord.map((letter: any) => letter.letter.toLowerCase())
            if(
              (!hasDuplicates(correctWordArray) && correctKey.includes(writenLetter)) ||
              (
                (hasDuplicates(onlyLettersWrittenArray) && !hasDuplicates(correctWordArray)) && 
                positionKey.includes(writenLetter) || correctKey.includes(writenLetter)
              )
            ) {
              newBoard[boardAttempt.column][index].color = "#505356"
            } else {
              newBoard[boardAttempt.column][index].color = "#D3AD69"
              const newArr = positionKey
              newArr.push(writenLetter)
              setPositionKey(newArr)
            }
          } else {
            newBoard[boardAttempt.column][index].color = "#505356"
            const newArr = disabledKeys
            newArr.push(writenLetter)
            setDisabledKeys(newArr)
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
      if(wordSet.has(writenWord + '\r')) {
        if(writenWord === word) {
          setCorrectAnswer(true)
          setCorrectKey([])
          setDisabledKeys([])
          setPositionKey([])
          audioRef.current && audioRef.current.play();
        } else {
          nextLine()
        }
      } else {
        alert("Essa palavra não é válida!")
      }
    } 
  }

  return ( 
    <KeyGrids>
      <audio ref={audioRef}>
        <source src="../../assets/correct.wav" type="audio/wav" />
      </audio>
      <div className='key-row'>
        {keys1.map((key, index) => (
          <Key 
            key={index} 
            correctKey={correctKey.includes(key.toLowerCase())}
            positionKey={positionKey.includes(key.toLowerCase())}
            disabled={disabledKeys.includes(key.toLowerCase())} 
            onClick={() => PressKey(key)}
          >
            {key}
          </Key>
        ))}
      </div>
      <div className='key-row'>
        {keys2.map((key, index) => (
          <Key 
            key={index} 
            correctKey={correctKey.includes(key.toLowerCase())}
            positionKey={positionKey.includes(key.toLowerCase())}
            disabled={disabledKeys.includes(key.toLowerCase())} 
            onClick={() => PressKey(key)}
          >
            {key}
          </Key>
        ))}
        <Key onClick={() => deleteKey()}>⌫</Key>
      </div>
      <div className='key-row'> 
        {keys3.map((key, index) => (
          <Key 
            key={index} 
            correctKey={correctKey.includes(key.toLowerCase())}
            positionKey={positionKey.includes(key.toLowerCase())}
            disabled={disabledKeys.includes(key.toLowerCase())} 
            onClick={() => PressKey(key)}
          >
            {key}
          </Key>
        ))}
        <Key onClick={() => enterKey()}>Enter</Key>
      </div>
    </KeyGrids>
  );
}
 
export default Keyboard;