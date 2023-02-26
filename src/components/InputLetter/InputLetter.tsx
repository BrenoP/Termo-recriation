import { Letter } from './InputLetter.styles';
import { useGame } from '../../providers/game';

const InputLetter = ({
  column,
  row
}: any) => {

  const { board } : any = useGame();

  return (
    <Letter>
      {board[column][row]}
    </Letter>
  )
}

export default InputLetter;