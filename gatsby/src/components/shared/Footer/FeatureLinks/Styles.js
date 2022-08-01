import styled from 'styled-components';

export const FeatureLinksStyles = styled.div`
  max-width: 60.75em;
  margin-left: auto;
  margin-right: auto;
  padding: 2em 0;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 1.5em;
  border-top: 0.25em solid var(--black);
  border-bottom: 0.25em solid var(--black);

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1em;

    h4 {
      font-size: 1em;
      margin: 0;
      display: block;
      min-height: 2.5em;
    }
  }

  @media (max-width: 970px) {
    margin: 0 1em;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    row-gap: 2em;

    & > div {
      h4 {
        min-height: 1.5em;
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2em;

    & > div {
      h4 {
        min-height: inherit;
      }
    }
  }
`;

export const FeatureLinkColumnContainer = styled.div`
  @media (max-width: 800px) {
    grid-row: 1;
  }
`;

export const FeatureLinkColumn = styled.ul`
  margin: 0;

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;

    li:after {
      content: '/';
      margin-left: 0.75em;
    }

    li:last-of-type:after {
      content: none;
      margin-left: 0;
    }
  }
`;

export const FeatureItemStyles = styled.li`
  list-style-type: none;
  font-size: 0.75em;
  margin: 0;

  a {
    font-weight: 400;
    color: var(--black);
    text-decoration: none;

    &:hover {
      color: var(--primary-blue);
    }
  }
`;
