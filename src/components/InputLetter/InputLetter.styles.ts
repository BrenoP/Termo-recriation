import styled from 'styled-components';

type LetterProps = {
  hasCursor: boolean
}

export const Letter = styled.div<LetterProps>`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  cursor: pointer;

  ${(props) => props.hasCursor && `
    display: flex;
    align-items: flex-end;
  `}
`;

export const Cursor = styled.div`
  width: 25px;
  height: 5px;
  background-color: gray;
  margin: 1rem 1rem 0.5rem 1rem;
  animation: cursor-blink 1.5s steps(2) infinite;

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }
`;