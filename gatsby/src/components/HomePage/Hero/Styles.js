import styled from 'styled-components';

export const HeroStyles = styled.div`
  background-color: var(--primary-blue);
  border-top: 1px solid var(--medium-grey);
  border-bottom: 1px solid var(--medium-grey);
  color: #ffffff;
  padding: 4em 0;

  .heroPromoInner {
    margin: 0 auto;
    max-width: 60.75em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3em;
    align-items: center;

    h2 {
      text-transform: none;
      font-weight: 700;
      font-size: 2em;
      margin-bottom: 1em;
    }

    p {
      max-width: 90%;
      font-size: 1.25em;
      font-weight: 300;
      margin-bottom: 2em;
    }

    .gatsby-image-wrapper {
      overflow: visible;
    }

    h2::selection,
    p::selection {
      background: #ffffff;
      color: var(--primary-blue);
    }
  }
`;
