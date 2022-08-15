import styled from 'styled-components';

export const FooterStyles = styled.div`
  max-width: 60.75em;
  margin-left: auto;
  margin-right: auto;
`;

export const EmailFeature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  border-bottom: 0.25em solid var(--black);

  a {
    font-size: 2em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      font-size: 1.75em;
    }
  }

  @media (max-width: 970px) {
    margin: 0 1em;
  }
`;
