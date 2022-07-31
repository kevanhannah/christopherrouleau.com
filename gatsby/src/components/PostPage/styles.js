import styled from 'styled-components';

export const PostPageStyles = styled.div`
  max-width: 800px;
  margin: 0 auto 3em;

  a {
    color: var(--primary-blue-lighter);
    text-decoration: underline;
    text-decoration-thickness: 0.125em;
    text-underline-offset: 0.25em;

    &:hover {
      text-decoration: none;
    }
  }

  p,
  li {
    color: var(--black-light);
    font-size: 1em;
    line-height: 1.75;
    margin-bottom: 1.25em;
  }

  ul,
  ol {
    margin-left: 1.5em;
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
  margin-bottom: 0.5em;
`;

export const PostDateStyles = styled.time`
  text-transform: uppercase;
  font-size: 1em;
  color: var(--black);
  margin-bottom: 0.75em;
`;
