import styled from 'styled-components';

export const WorkPageStyles = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  gap: 3em;
  margin-bottom: 3em;
`;

export const RelatedWorkCards = styled.div`
  grid-column: 1 / span end;

  h3 {
    font-size: 1.75em;
    font-weight: 700;
  }
`;
