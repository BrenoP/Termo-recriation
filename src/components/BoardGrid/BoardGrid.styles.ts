import styled from "styled-components";

export const Board = styled.section`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(5,1fr);
`;

export const Column = styled.div`
  display: flex;
`;