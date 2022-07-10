import React, { useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const GalleryStyles = styled.div`
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

const ImageSelectWrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default function Gallery({ images }) {
  const imageData = images.length
    ? images.map((image) => ({
        alt: image.alt,
        id: image.asset.id,
        image: image.asset.gatsbyImageData,
      }))
    : [
        {
          alt: images.alt,
          id: images.asset.id,
          image: images.asset.gatsbyImageData,
        },
      ];
  const [leadImage, setLeadImage] = useState(imageData[0]);

  return (
    <GalleryStyles>
      <GatsbyImage image={leadImage.image} alt={leadImage.alt} />
      {imageData.length > 1 &&
        imageData.map((image) => (
          <ImageSelectWrapper
            tabIndex="0"
            role="button"
            key={image.id}
            onClick={() => setLeadImage(image)}
            onKeyPress={(event) => event.key === 'Enter' && setLeadImage(image)}
          >
            <GatsbyImage image={image.image} alt={image.alt} />
          </ImageSelectWrapper>
        ))}
    </GalleryStyles>
  );
}
