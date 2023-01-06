import type { NextPage } from 'next'
import InputLetter from '../components/InputLetter/InputLetter';

const Game: NextPage = () => {

  const tries = 3;

  return (
    <div>
      <h1>Jogo</h1>
      {
        [1, 2, 3, 4, 5].map(element => (
          <div key={element}>
            <InputLetter />
            <InputLetter />
            <InputLetter />
            <InputLetter />
            <InputLetter />
          </div>
        ))
      }
    </div>
  )
}

export default Game