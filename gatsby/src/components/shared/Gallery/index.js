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
  const [index, setIndex] = useState(0);

  return (
    <GalleryStyles>
      <GatsbyImage image={imageData[index].image} alt={imageData[index].alt} />
      {imageData.length > 1 &&
        imageData.map((img, imgIndex) => (
          <ImageSelectWrapper
            tabIndex="0"
            role="button"
            key={img.id}
            onClick={() => setIndex(imgIndex)}
            onKeyPress={(event) => event.key === 'Enter' && setIndex(imgIndex)}
          >
            <GatsbyImage image={img.image} alt={img.alt} />
          </ImageSelectWrapper>
        ))}
    </GalleryStyles>
  );
}
