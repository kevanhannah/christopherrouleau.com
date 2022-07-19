import styled from 'styled-components';
import Header from '../shared/Header';

export const HomePageIntroStyles = styled.div`
  margin: 64px auto;
  max-width: 970px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;

  & > div > h1 {
    font-size: 4em;
    font-weight: 400;
  }

  & > div > p {
    font-size: 1.3em;
    line-height: 1.4;
    margin-bottom: 36px;

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
  /* margin-bottom: 48px;
  padding-bottom: 48px; */
  border-bottom: 4px solid var(--black);

  &:last-of-type {
    border-bottom: none;
  }

  h2 {
    margin: 0;
  }
`;

export const HomePageHeader = styled(Header)`
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
`;
