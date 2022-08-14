import styled from 'styled-components';

export const HeroOuterArea = styled.div`
  background-color: var(--primary-blue);
  border-top: 1px solid var(--medium-grey);
  border-bottom: 1px solid var(--medium-grey);
  color: #ffffff;
  padding: 3em 0;

  .gatsby-image-wrapper {
    overflow: visible;
  }

  @media (max-width: 700px) {
    padding: 2em 0;
  }
`;

export const HeroInnerArea = styled.div`
  margin: 0 auto;
  max-width: 60.75em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  align-items: center;

  @media (max-width: 970px) {
    margin: 0 1em;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 1.75em;
  }
`;

export const HeroTextStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: start;

  h2 {
    text-transform: none;
    font-weight: 700;
    font-size: 2em;
    margin: 0;
  }

  p {
    font-size: 1.25em;
    font-weight: 300;
    margin: 0;
  }

  h2::selection,
  p::selection {
    background: #ffffff;
    color: var(--primary-blue);
  }

  @media (max-width: 700px) {
    align-items: stretch;
  }
`;
