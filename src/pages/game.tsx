import type { GetStaticProps } from 'next';
import axios from 'axios';

import { useGame } from '../providers/game';
import InputLetter from '../components/InputLetter/InputLetter';
import BoardGrid from '../components/BoardGrid/BoardGrid';
import Keyboard from '../components/Keyboard/Keyboard';
import { useEffect } from 'react';

const Game = ({ props }: any) => {

  const tries = 5;
  const words_max = 5;

  const rows = new Array(tries).fill(new Array(words_max).fill("a"))

  const { correctAnswer } : any = useGame();

  useEffect(() => {
    if(correctAnswer) {
      alert('Você venceu')
    }
  }, [correctAnswer]);

  return (
    <div>
      <h1>Jogo</h1>
      <p>palavra: { props.word }</p>
      {
        rows.map((row, index) => (
          <BoardGrid key={index}>
            {
              row.map((element: any, rowIndex: any) => 
                <>
                  <InputLetter key={element} column={index} row={rowIndex} />
                </>
              )
            }
          </BoardGrid>
        ))
      }
      <Keyboard word={props.word} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/wordGeneration`);
  const data = await response.data;

  return {
    props: {
      props: data
    }
  }
}

export default Game