import styled from 'styled-components';

export const SubfooterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
  font-size: 0.75em;
  gap: 2em;

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: stretch;
    font-size: 1em;
    margin: 2em 1em;

    div {
      text-align: center;
    }
  }
`;

export const SubfooterLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  gap: 1em;
  margin: 0;

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

export const SubfooterLink = styled.li`
  margin: 0;

  a {
    display: grid;
    grid-template-columns: 1em auto;
    align-items: center;
    gap: 0.5em;
    color: var(--black);
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
  }

  svg {
    max-width: 100%;
  }

  &:hover {
    cursor: pointer;

    a {
      color: var(--primary-blue);
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.125em;
    }

    svg {
      fill: var(--primary-blue);
    }
  }

  @media (max-width: 600px) {
    a {
      font-size: 0.75em;
    }
  }
`;

export const CopyrightSection = styled.div`
  text-align: center;
  font-size: 0.75em;
  font-weight: 300;

  @media (max-width: 600px) {
    margin: 0 1em;
  }
`;
