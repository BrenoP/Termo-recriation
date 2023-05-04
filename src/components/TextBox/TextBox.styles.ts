import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

  .box {
    width: 35%;
    padding: 2rem;
    background-color: rgba(124, 131, 137, .2);
    border-radius: 20px;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  h1 {
    display: flex;
    justify-content: center;
    margin: 0;
  }

  button {
    padding: 0.75rem 3rem;
    border: 0;
    border-radius: 10px;
    margin: 1rem 0 0 0;
  }
`;