import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';

import { useGame } from '../providers/game';
import BoardGrid from '../components/BoardGrid/BoardGrid';
import Keyboard from '../components/Keyboard/Keyboard';
import { useEffect } from 'react';
import Header from '../components/Header/Header';

type Props = {
  props: { words: string[] } 
}

const Game = ({ props }: Props) => {

  const tries = 5;
  const words_max = 5;

  const rows = new Array(tries).fill(new Array(words_max).fill({letter: "", color: ""}))

  const { correctAnswer } : any = useGame();

  useEffect(() => {
    if(correctAnswer) {
      alert('Você venceu')
    }
  }, [correctAnswer]);

  return (
    <>
      {/* <p>palavra: { props.word }</p> */}
      <Header />
      <BoardGrid rows={rows} />
      <Keyboard word={props.words[0]} />
    </>
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