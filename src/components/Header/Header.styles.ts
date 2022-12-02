import styled from "styled-components";

type StatisticsProps = {
  words: boolean
}

export const HeaderContent = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h1 { 
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    margin: 1rem;
  }
`;

export const Statistics = styled.div<StatisticsProps>`
  display: flex;
  justify-content: ${(props) => props.words ? `flex-end` : `flex-start`};
  gap: 3rem;
  font-size: 1.3rem;

  h3 { 
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`;