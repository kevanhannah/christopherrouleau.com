import styled from 'styled-components';

export const WorkListStyles = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 3em;

  h2 {
    font-size: 2.25em;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.75em;
    }
  }
`;
