import styled from 'styled-components';

export const SubfooterStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0 2em;
  font-size: 0.75em;

  div {
    margin: 0 12px;
  }
`;

export const SubfooterLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  gap: 1em;
`;

export const SubfooterLink = styled.li`
  display: flex;
  align-items: center;
  margin: 0;

  a {
    display: flex;
    color: var(--black);
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
  }

  svg {
    width: 16px;
    margin-right: 8px;
  }

  &:hover {
    cursor: pointer;

    a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
    }

    svg {
      fill: var(--primary-blue);
    }
  }
`;
