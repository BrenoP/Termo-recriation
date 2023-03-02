import { BiTime, BiStar, BiFlag } from 'react-icons/bi';

import { HeaderProps } from './Header.interface';
import { HeaderContent, Statistics } from './Header.styles';

function Header({
  wordOrder,
  time,
  points
}: HeaderProps) {
  return (  
    <HeaderContent>
      <Statistics words={true}>
        <h3>
          <BiFlag />
          Palavra: {wordOrder + 1}/10
        </h3>
      </Statistics>
      <h1>Jogo</h1>
      <Statistics words={false}>
        <h3>
          <BiTime />
          {time}
        </h3>
        <h3>
          <BiStar />
          Pontos: {points}
        </h3>
      </Statistics>
    </HeaderContent>
  );
}

export default Header;