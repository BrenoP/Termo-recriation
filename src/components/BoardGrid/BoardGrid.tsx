import { Board, Grid, Column } from './BoardGrid.styles';
import { BoardGridProps } from './BoardGrid.interface';
import Confetti from 'react-confetti';

import InputLetter from '../InputLetter/InputLetter';
import { useGame } from '../../providers/game';
import OneSecondComponent from '../../utils/oneSeccondComponent';
import useWindowSize from '../../utils/useWindowSize';

const BoardGrid = ({ rows }: BoardGridProps) => {

  const { correctAnswer, boardAttempt } : any = useGame();
  const { width, height } = useWindowSize()

  return (
    <Board>
      {/* <OneSecondComponent>
        <Confetti
          width={width}
          height={height}
          tweenDuration={100}
          numberOfPieces={200}
          gravity={0.3}
          friction={1}
        />
      </OneSecondComponent> */}
      <Grid>
        {
          rows.map((row, index) => (
            <Column key={index}>
              {
                row.map((element: any, rowIndex: any) => 
                  <InputLetter key={element} column={index} row={rowIndex} disabled={index > boardAttempt.column} />
                )
              }
            </Column>
          ))
        }
      </Grid>
    </Board>
  ) 
}

export default BoardGrid