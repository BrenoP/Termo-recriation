import { Board, Grid, Column } from './BoardGrid.styles';
import { BoardGridProps } from './BoardGrid.interface';

import InputLetter from '../InputLetter/InputLetter';

const BoardGrid = ({ rows }: BoardGridProps) => {

  return (
    <Board>
      <Grid>
        {
          rows.map((row, index) => (
            <Column key={index}>
              {
                row.map((element: any, rowIndex: any) => 
                  <InputLetter key={element} column={index} row={rowIndex} />
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