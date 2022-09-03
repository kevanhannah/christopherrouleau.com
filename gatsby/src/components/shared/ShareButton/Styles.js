import styled from 'styled-components';

export const ShareButtonStyles = styled.a`
  padding: calc(0.75em - 2px) calc(1.5em - 2px);
  font-weight: 400;
  color: var(--black);
  border: 2px solid var(--black);
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0.25em;
  user-select: none;

  &:hover {
    color: var(--primary-red-darker);
    border: 2px solid var(--primary-red-darker);

    svg {
      fill: var(--primary-red-darker);
    }
  }
`;

export const ShareButtonContent = styled.div`
  display: grid;
  grid-template-columns: 1.25em auto;
  align-items: center;
  gap: 0.5em;
`;
