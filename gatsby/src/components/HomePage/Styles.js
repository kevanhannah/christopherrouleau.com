import styled from 'styled-components';
import Header from '../shared/Header';

export const HomePageIntroStyles = styled.div`
  margin: 4em auto;
  max-width: 60.75em;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2em;

  & > div > h1 {
    font-size: 4em;
    font-weight: 400;
  }

  & > div > p {
    font-size: 1.5em;
    line-height: 1.4;
    margin-bottom: 1.5em;

    & strong {
      font-weight: 400;
    }

    & a {
      color: var(--black);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .gatsby-image-wrapper {
    user-select: none;
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
    font-size: 2.25em;
    font-weight: 700;
    margin: 0;
  }
`;

export const HomePageHeader = styled(Header)`
  max-width: 60.75em;
  margin-left: auto;
  margin-right: auto;
`;
