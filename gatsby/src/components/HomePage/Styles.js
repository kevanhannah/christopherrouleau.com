import styled from 'styled-components';
import Header from '../shared/Header';

export const HomePageIntroStyles = styled.div`
  margin: 4em auto;
  max-width: 60.75em;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2em;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.5em;

    h1 {
      font-size: 4em;
      font-weight: 400;
      margin: 0;
    }

    p {
      font-size: 1.25em;
      line-height: 1.5;
      margin: 0;

      & strong {
        font-weight: 400;
      }
    }
  }

  .gatsby-image-wrapper {
    user-select: none;
  }

  @media (max-width: 970px) {
    margin: 4em 1em;

    h1 {
      font-size: 3.25em;
    }
  }

  @media (max-width: 600px) {
    display: block;
    margin: 2em 1em;

    & > div {
      align-items: stretch;

      h1 {
        font-size: 3em;
      }
    }

    .gatsby-image-wrapper {
      display: none;
    }
  }

  @media (max-width: 400px) {
    & > div {
      h1 {
        font-size: 2.5em;
      }

      p {
        font-size: 1em;
      }
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.25em;
  padding: 2em 0 2.75em;
  border-bottom: 0.25em solid var(--black);

  &:last-of-type {
    border-bottom: none;
  }

  h2 {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0;
  }

  @media (max-width: 970px) {
    margin: 0 1em;
  }

  @media (max-width: 600px) {
    align-items: stretch;
    padding: 2em 0;

    h2 {
      font-size: 1.75em;
    }
  }
`;

export const HomePageHeader = styled(Header)`
  max-width: 60.75em;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 970px) {
    margin-left: 1em;
    margin-right: 1em;
  }
`;
