import { Letter, Cursor } from './InputLetter.styles';
import { useGame } from '../../providers/game';

const InputLetter = ({
  column,
  row
}: any) => {

  const { board, boardAttempt, setBoardAttempt } : any = useGame();
  const cursor = boardAttempt.column === column && boardAttempt.row === row;

  function handleCursor() {
    if(boardAttempt.column === column) {
      setBoardAttempt({ column: boardAttempt.column, row: row })
    }
  }

  return (
    <Letter 
      color={board[column][row].color} 
      hasLetter={board[column][row].letter !== ""}
      hasCursor={cursor} 
      onClick={() => handleCursor()}
    >
      {board[column][row].letter}
      {(cursor) && <Cursor hasLetter={board[column][row].letter !== ""} />}
    </Letter>
  )
}

export default InputLetter;