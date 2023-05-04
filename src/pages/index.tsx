import type { NextPage } from 'next';
import Link from 'next/link';

import TextBox from '../components/TextBox/TextBox';

const Home: NextPage = () => {
  return (
    <TextBox>
      <div className='box'>
        <h1>Regras</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam labore deleniti dicta est expedita tempore excepturi laboriosam reprehenderit nesciunt iusto vel unde, quibusdam et provident magni quod! Nulla, earum?</p>
        <div className='center'>
          <button><Link href="/game">Começar</Link></button>
        </div>
      </div>
    </TextBox>
  )
}

export default Home
