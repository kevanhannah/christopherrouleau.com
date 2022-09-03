import styled from 'styled-components';

export const WorkDetailStyles = styled.div`
  --columns: 2;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 3em;
  align-items: start;

  @media (max-width: 600px) {
    --columns: 1;
    gap: 2em;
  }
`;

export const WorkInformationPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  align-items: start;
  order: -1;

  div > p:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    order: 1;
    align-items: stretch;
  }
`;

export const WorkDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: start;
  width: 100%;

  div {
    time {
      font-size: 1.25em;
      font-weight: 400;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75em;
  }
`;

export const WorkButtonRow = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
`;

export const ItemTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 700;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

export const SeriesExcerpt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;

  h3 {
    font-size: 1.75em;
  }
`;
