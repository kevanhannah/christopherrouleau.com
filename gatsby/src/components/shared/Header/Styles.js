import styled from 'styled-components';

export const HeaderStyles = styled.header`
  margin: 3em 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
`;
