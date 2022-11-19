import styled from 'styled-components';

export const CardGridItemStyles = styled.li`
  display: block;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    text-decoration: none;
    font-weight: 300;
    color: var(--black);
    user-select: none;

    p {
      font-size: 1em;
      font-weight: 400;
      line-height: 1.4;
      text-transform: uppercase;
      margin: 0;
    }

    &:visited {
      color: var(--black);
    }

    &:active {
      color: var(--black);
    }
  }

  &:hover {
    a {
      color: var(--primary-blue);
    }

    a > p {
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.125em;
    }

    div.gatsby-image-wrapper {
      opacity: 0.8;
    }
  }

  @media (max-width: 400px) {
    a {
      p {
        font-size: 0.75em;
      }
    }
  }
`;

export const ItemDateStyles = styled.time`
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 400;
`;
