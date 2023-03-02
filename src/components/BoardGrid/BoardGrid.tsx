import { Board, Grid, Column } from './BoardGrid.styles';
import { BoardGridProps } from './BoardGrid.interface';

import InputLetter from '../InputLetter/InputLetter';
import { useGame } from '../../providers/game';

const BoardGrid = ({ rows }: BoardGridProps) => {

  const { boardAttempt } : any = useGame();

  console.log(rows)

  return (
    <Board>
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