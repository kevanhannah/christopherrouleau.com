import styled from 'styled-components';

export const LatestBlogPostStyles = styled.div`
  h3 {
    font-size: 2em;
    margin: 0;

    & > a {
      font-weight: 700;
      color: var(--black);
      text-decoration: none;
      background-color: var(--primary-yellow);

      &:hover {
        background-color: var(--primary-yellow-lighter);
      }
    }
  }

  p {
    margin: 0;
  }

  @media (max-width: 800px) {
    grid-column: 1/-1;
    grid-row: 2;
    border-top: 0.25em solid var(--black);
    padding-top: 2em;
  }

  @media (max-width: 600px) {
    order: 4;

    h3 {
      font-size: 1.5em;
    }
  }
`;
