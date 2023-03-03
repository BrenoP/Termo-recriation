import styled from 'styled-components';

type KeyProps = {
  disabled?: boolean
  correctKey?: boolean
  positionKey?: boolean
}

export const KeyGrids = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .key-row {
    display: flex;
  }
`;

export const Key = styled.div<KeyProps>`
  margin: 0.25rem;
  padding: 1rem;
  ${(props) => props.correctKey ? `background-color: #3AA394` : props.positionKey ? `background-color: #D3AD69` : `background-color: #41414c`};
  border-radius: 5px;
  font-size: 1.25rem;
  ${(props) => props.disabled && `opacity: .4;`}
  cursor: pointer;
`;