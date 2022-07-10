import styled from 'styled-components';

export const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 25%;
  max-width: 50%;

  li {
    margin: 0;
  }

  a {
    font-size: 0.75rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    display: block;
    letter-spacing: 0.05em;
    color: var(--black);
    text-align: right;

    &:hover {
      color: var(--primary-blue);
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    }
  }
`;
