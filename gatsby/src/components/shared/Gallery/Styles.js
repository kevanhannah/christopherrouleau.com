import styled from 'styled-components';

export const GalleryStyles = styled.div`
  --columns: 6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 12px;
  min-width: 50%;
  max-width: 50%;
  user-select: none;

  .gatsby-image-wrapper:first-of-type {
    grid-column: 1 / span 6;
  }
`;

export const ImageSelectWrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
