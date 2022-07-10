import styled from 'styled-components';

export const BannerStyles = styled.aside`
  width: 100%;
  background-color: var(--primary-yellow);
  border-bottom: 1px solid var(--light-grey);
  text-align: center;
  padding: 12px;

  a {
    font-size: 0.85em;
    font-weight: 400;
    color: var(--black);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      cursor: pointer;
    }
  }
`;
