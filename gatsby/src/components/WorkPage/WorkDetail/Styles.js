import styled from 'styled-components';

export const WorkDetailStyles = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const GalleryWrapper = styled.div`
  float: right;
  max-width: calc(50% - 2em);
  margin: 0 0 2em 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 600px) {
    float: none;
    max-width: 100%;
    margin: 0;
    order: 2;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 75%;

  @media (max-width: 600px) {
    max-width: 100%;
    order: 3;
  }
`;

export const WorkDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: start;
  width: 100%;
  max-width: 50%;
  float: left;
  margin-bottom: 1.25em;

  div {
    time {
      font-size: 1.25em;
      font-weight: 400;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75em;
    margin-bottom: 0;
    float: none;
    max-width: 100%;
    order: 1;
  }
`;

export const WorkButtonRow = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 1em;
`;

export const ItemTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 700;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

export const SeriesExcerpt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;

  h3 {
    font-size: 1.75em;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 0;
    order: 4;
  }
`;
