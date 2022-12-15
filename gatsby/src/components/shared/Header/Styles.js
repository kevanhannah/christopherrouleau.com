import styled from 'styled-components';

export const HeaderStyles = styled.header`
  margin: 3em auto;
  display: flex;
  justify-content: space-between;
  gap: 1em;

  @media (max-width: 970px) {
    margin: 3em 1em;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1.75em;
  }
`;
