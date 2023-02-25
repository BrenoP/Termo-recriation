import type { NextPage } from 'next'
import Link from 'next/link';
import { GameContext } from '../providers/game';
import { useContext } from 'react';

const Home: NextPage = () => {
  const { coins } : any = useContext(GameContext)
  return (
    <div>
      <h1>Regras: {coins}</h1>
      <Link href="/game"><button>Começar</button></Link>
    </div>
  )
}

export default Home
