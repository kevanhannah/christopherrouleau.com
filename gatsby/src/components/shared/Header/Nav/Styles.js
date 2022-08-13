import styled from 'styled-components';

export const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  user-select: none;

  li {
    margin: 0;
    padding: 1px 4px;
    border-radius: 4px;

    a {
      font-size: 0.75rem;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 400;
      display: block;
      letter-spacing: 0.05em;
      color: var(--black);
      text-align: right;

      /* &:hover {
      color: var(--primary-blue);
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.125em;
    } */
    }

    &:hover {
      background-color: var(--primary-yellow-lighter);
      a {
        color: var(--black);
        text-decoration: none;
      }
    }
  }
`;

export const HighlightItem = styled.li`
  background-color: var(--primary-yellow);

  &:hover {
    background-color: var(--primary-yellow-lighter);
    a {
      color: var(--black);
      text-decoration: none;
    }
  }
`;
