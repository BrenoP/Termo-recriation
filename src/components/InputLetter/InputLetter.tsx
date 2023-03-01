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
    <Letter color={board[column][row].color} hasCursor={cursor} onClick={() => handleCursor()}>
      {board[column][row].letter}
      {(cursor) && <Cursor />}
    </Letter>
  )
}

export default InputLetter;