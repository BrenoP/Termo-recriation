import styled from 'styled-components';

type LetterProps = {
  hasCursor: boolean,
  hasLetter: boolean,
  color: string
}

type CursorProps = {
  hasLetter: boolean
}

export const Letter = styled.div<LetterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  width: 70px;
  height: 70px;
  border: 3px solid ${(props) => props.color === "#2B2B37" ? "#7C8389" : props.color};
  border-radius: 5px;
  margin: 0.25rem;
  background-color: ${(props) => props.color};
  cursor: pointer;

  ${(props) => props.hasLetter && `
    animation: letter-on .3s 1;
  `}

  ${(props) => props.hasCursor && `
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
  `}

  @keyframes letter-on {
    0% {
      width: 70px;
      height: 70px;
    }
    50% {
      width: 72px;
      height: 72px;
    }
    100% {
      width: 70px;
      height: 70px;
    }
  }
`;

export const Cursor = styled.div<CursorProps>`
  width: 25px;
  height: 5px;
  background-color: #7C8389;
  margin: ${(props => props.hasLetter ? `0rem` : `2rem`)} 1rem 0.5rem 1rem;
  animation: cursor-blink 1.5s steps(2) infinite;

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }
`;