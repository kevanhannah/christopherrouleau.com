import styled from 'styled-components';

export const BannerStyles = styled.aside`
  width: 100%;
  background-color: var(--primary-yellow);
  text-align: center;
  padding: 0.5em;

  a {
    font-size: 1em;
    font-weight: 400;
    color: var(--black);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.125em;
      cursor: pointer;
      color: var(--black);
    }
  }

  @media (max-width: 700px) {
    a {
      font-size: 0.75em;
    }
  }
`;
