import { BiTime, BiStar, BiFlag } from 'react-icons/bi';
import { HeaderContent, Statistics } from './Header.styles';

function Header() {
  return (  
    <HeaderContent>
      <Statistics words={true}>
        <h3>
          <BiFlag />
          Palavra: 1/10
        </h3>
      </Statistics>
      <h1>Jogo</h1>
      <Statistics words={false}>
        <h3>
          <BiTime />
          1:30
        </h3>
        <h3>
          <BiStar />
          Pontos: 10
        </h3>
      </Statistics>
    </HeaderContent>
  );
}

export default Header;