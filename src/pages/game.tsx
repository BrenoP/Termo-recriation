import type { NextPage } from 'next'
import InputLetter from '../components/InputLetter/InputLetter';

const Game: NextPage = () => {

  const tries = 5;
  const words_max = 5;

  const rows = new Array(tries).fill(new Array(words_max).fill("a"))

  return (
    <div>
      <h1>Jogo</h1>
      {
        rows.map((row, index) => (
          <div key={index}>
            {
              row.map((element: any, rowIndex: any) => 
                <>
                  <InputLetter key={element} column={index} row={rowIndex} />
                </>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default Game