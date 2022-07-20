import styled from 'styled-components';

export const BannerStyles = styled.aside`
  width: 100%;
  background-color: var(--primary-yellow);
  border-bottom: 1px solid var(--light-grey);
  text-align: center;
  padding: 0.75em;

  a {
    font-size: 1em;
    font-weight: 400;
    color: var(--black);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 0.125em;
      text-underline-offset: 0.25em;
      cursor: pointer;
    }
  }
`;
