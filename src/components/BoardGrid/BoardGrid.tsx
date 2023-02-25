import { Grid } from './BoardGrid.styles';

const BoardGrid = ({children}: any) => {
  return (
    <Grid>
      {children}
    </Grid>
  ) 
}

export default BoardGrid