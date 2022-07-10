import styled from 'styled-components';

export const PostPageStyles = styled.div`
  max-width: 800px;
  margin: 0 auto 3em;

  a {
    color: var(--primary-blue-lighter);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;

    &:hover {
      text-decoration: none;
    }
  }

  p,
  li {
    color: var(--black-light);
    font-size: 1.125em;
    line-height: 1.75;
    margin-bottom: 1.5em;
  }

  ul,
  ol {
    margin-left: 24px;
  }
`;

export const TextAreaStyles = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const PostTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 0.65em;
`;

export const PostDateStyles = styled.div`
  text-transform: uppercase;
  font-size: 0.875em;
  color: var(--black);
  margin-bottom: 1em;
`;
