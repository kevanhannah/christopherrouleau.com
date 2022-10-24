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
    border-radius: 0.25em;

    a {
      font-size: 0.75rem;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 400;
      display: block;
      letter-spacing: 0.05em;
      text-align: right;
    }
  }

  @media (max-width: 800px) {
    gap: 1em;
  }

  @media (max-width: 600px) {
    li {
      a {
        font-size: 0.5rem;
      }
    }
  }
`;

export const MenuItem = styled.li`
  > a {
    color: var(--black);
  }

  &:hover {
    background-color: var(--primary-yellow-lighter);

    a {
      color: var(--black);
      text-decoration: none;
    }
  }
`;

export const HighlightedMenuItem = styled.li`
  background-color: var(--primary-red-darker);

  > a {
    color: #ffffff;
  }

  &:hover {
    background-color: var(--primary-red);

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
`;
