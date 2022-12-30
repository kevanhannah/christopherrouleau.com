import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ProductCardPrice, ProductCardStyles } from './Styles';

export default function ProductCard({ product }) {
  const {
    media: [firstMediaItem],
    variants: [firstVariant],
  } = product;

  return (
    <ProductCardStyles>
      <Link to={`./products/${product.handle}`}>
        <GatsbyImage
          alt={product.title}
          image={firstMediaItem.image.gatsbyImageData}
          aria-hidden
          role="presentation"
        />
        <p>{product.title}</p>
        <ProductCardPrice>${firstVariant.price}</ProductCardPrice>
      </Link>
    </ProductCardStyles>
  );
}
