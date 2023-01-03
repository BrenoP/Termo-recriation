import type { NextPage } from 'next'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Regras</h1>
      <Link href="/game"><button>Começar</button></Link>
    </div>
  )
}

export default Home
