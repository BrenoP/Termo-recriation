import type { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useGame } from '../providers/game';
import { generateWordSet } from '../providers/wordsSet';

import BoardGrid from '../components/BoardGrid/BoardGrid';
import Keyboard from '../components/Keyboard/Keyboard';
import Header from '../components/Header/Header';

type Props = {
  props: { words: string[] } 
}

const Game = ({ props }: Props) => {

  const tries = 6
  const words_max = 5

  const rows = new Array(tries).fill(new Array(words_max).fill({letter: "", color: ""}))

  const [time, setTime] = useState(0)
  const [wordSet, setWordSet] = useState(new Set())

  const { 
    correctAnswer, 
    setCorrectAnswer,
    wordOrder,
    points,  
    setPoints, 
    setBoard,
    setWordOrder,
    boardAttempt,
    setBoardAttempt
  } : any = useGame();

  useEffect(() => {
    generateWordSet().then((res: any) => setWordSet(res.wordSet))
  }, [])

  useEffect(() => {
    if(correctAnswer) {
      setBoard([
        [
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}
        ],
        [
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}
        ],
        [
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}
        ],
        [
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}
        ],
        [
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}
        ],
        [
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}, 
          {letter: "", color: ""}
        ]
      ])
      setWordOrder(wordOrder + 1)
      setPoints(points + numberOfPoints())
      setBoardAttempt({
        column: 0,
        row: 0
      })
      setTime(time + 45)
      setCorrectAnswer(false)
    }
  }, [correctAnswer]);

  function numberOfPoints() {
    switch (boardAttempt.column) {
      case 0:
        return 30
      case 1:
        return 25
      case 2:
        return 20
      case 3:
        return 15
      case 4:
        return 10
      case 5:
        return 5
      default:
        return 0
    }
  }

  useEffect(() => {
    let timerRunning: any = null;
    timerRunning = setInterval(() => {
      if(time !== 0) { 
        setTime(time - 1);
      }
    }, 1000)
    if(time === 0) {
      alert('Acabou o tempo!');
    }
    return () => { 
      clearInterval(timerRunning);
    };
  }, [time]);

  return (
    <>
      <p>palavra: { props.words[wordOrder] }</p>
      <Header 
        time={time}
        wordOrder={wordOrder}
        points={points}
      />
      <BoardGrid rows={rows} />
      <Keyboard word={props.words[wordOrder]} wordSet={wordSet} />
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