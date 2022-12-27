import styled from 'styled-components';

export const WorkPageStyles = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-bottom: 3em;
`;

export const RelatedWorkCards = styled.div`
  grid-column: 1 / span end;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h3 {
    font-size: 1.75em;
    font-weight: 700;
    margin: 0;
  }
`;
