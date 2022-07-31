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

    ul {
      margin: 0;
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
