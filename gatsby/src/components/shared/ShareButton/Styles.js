import styled from 'styled-components';

export const ShareButtonStyles = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(0.75em - 2px) 1.5em;
  font-weight: 400;
  color: var(--black);
  border: 2px solid var(--black);
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0.25em;
  user-select: none;

  svg {
    max-width: 100%;
  }

  &:hover {
    color: var(--primary-red-darker);
    border: 2px solid var(--primary-red-darker);

    svg {
      fill: var(--primary-red-darker);
    }
  }

  @media (max-width: 400px) {
    font-size: 0.75em;
  }
`;

export const ShareButtonContent = styled.div`
  display: grid;
  grid-template-columns: 1.25em auto;
  align-items: center;
  gap: 0.5em;
`;
