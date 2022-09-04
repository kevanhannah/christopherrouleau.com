import styled from 'styled-components';

export const AboutPageStyles = styled.main`
  margin-bottom: 3em;

  .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    float: right;
    margin-bottom: 1em;
    margin-left: 1em;

    @media (max-width: 800px) {
      float: none;
      margin: 0 auto 1em;
      width: 100%;

      img {
        object-position: top;
      }
    }
  }
`;

export const AboutPageTitle = styled.h2`
  font-size: 3em;
  margin-bottom: calc(1em / 3);
`;

export const AboutPageLead = styled.p`
  font-size: 2em;
  margin-bottom: 0.5em;
  font-weight: 300;
`;

export const AboutPageHeading = styled.h3`
  font-size: 1.5em;
  font-weight: 400;
  text-transform: none;
  margin-bottom: 0.5em;
`;
