import { Letter } from './InputLetter.styles';
import { useGame } from '../../providers/game';

const InputLetter = ({
  column,
  row
}: any) => {

  const { board, setBoard } : any = useGame();

  return (
    <Letter 
      onChange={() => {
        setBoard(...board, )
      }}
    >
      {board[column][row]}
    </Letter>
  )
}

export default InputLetter;