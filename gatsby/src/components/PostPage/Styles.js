import styled from 'styled-components';

export const PostPageStyles = styled.div`
  max-width: 43.75em;
  margin: 0 auto 3em;
  display: flex;
  flex-direction: column;
  gap: 2em;

  a {
    color: var(--primary-blue-lighter);
    text-decoration: underline;
    text-decoration-thickness: 0.125em;
    text-underline-offset: 0.125em;

    &:hover {
      text-decoration: none;
    }
  }

  p,
  li {
    color: var(--black-light);
    font-size: 1em;
    line-height: 1.75;
  }

  ul,
  ol {
    margin-left: 1.5em;
  }
`;

export const TextAreaStyles = styled.div`
  max-width: 40em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.75em;

  @media (max-width: 600px) {
    gap: 0.75em;
  }
`;

export const PostHeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const PostTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  color: var(--black);

  @media (max-width: 600px) {
    font-size: 2.25em;
  }
`;

export const PostDateStyles = styled.time`
  text-transform: uppercase;
  font-size: 1em;
  color: var(--black);
`;
