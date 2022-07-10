import styled from 'styled-components';

export const FeatureLinksStyles = styled.div`
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  gap: 24px;
  border-top: 4px solid var(--black);
  border-bottom: 4px solid var(--black);

  & > div {
    h4 {
      font-size: 0.8em;
      margin-bottom: 2em;
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
