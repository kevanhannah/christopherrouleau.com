import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GalleryStyles, ImageSelectWrapper } from './Styles';

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
