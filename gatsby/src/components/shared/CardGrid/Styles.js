import styled from 'styled-components';

export const CardGridStyles = styled.ul`
  --columns: 3;
  display: grid;
  gap: 1.75em;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  margin: 0;

  @media (max-width: 600px) {
    --columns: 2;
    gap: 2em;
  }
  @media (max-width: 400px) {
    --columns: 1;
    justify-items: center;
  }
`;
