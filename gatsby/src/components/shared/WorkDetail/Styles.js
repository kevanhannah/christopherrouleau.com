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
  gap: 1em;
  align-items: start;
  order: -1;

  @media (max-width: 600px) {
    order: 1;
  }
`;

export const WorkDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: start;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ItemTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 700;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.75em;
  }
`;
