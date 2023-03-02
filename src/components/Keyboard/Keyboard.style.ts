import styled from 'styled-components';

export const KeyGrids = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .key-row {
    display: flex;
  }
`;

export const Key = styled.div`
  margin: 0.25rem;
  padding: 1rem;
  background-color: #41414c;
  border-radius: 5px;
  font-size: 1.25rem;
  cursor: pointer;
`;