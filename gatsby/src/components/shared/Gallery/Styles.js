import styled from 'styled-components';

export const GalleryStyles = styled.div`
  --columns: 6;
  display: grid;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  gap: 1em;
  user-select: none;

  & div:first-child {
    grid-column: 1 / span 6;
  }
`;

export const ImageSelectWrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
