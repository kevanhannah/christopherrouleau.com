import styled from 'styled-components';

export const WorkDetailStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  align-items: start;
`;

export const SingleItemInformationPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const SingleItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25em;
`;

export const ItemTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 700;
  margin: 0;
`;
