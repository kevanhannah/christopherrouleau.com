import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { useAddItemToCart } from '../../context/siteContext';
import { ExternalPrimaryButton } from '../shared/Buttons/Styles';
import {
  ProductInfo,
  ProductInfoTitle,
  ProductOptionButton,
  ProductOptionsList,
  ProductWrapper,
  ShopProductPageStyles,
} from './Styles';

export default function ShopProductPage({ product }) {
  const addItemToCart = useAddItemToCart();
  const {
    media: [firstMediaItem],
    variants: [firstVariant],
  } = product;
  const [selectedVariant, setSelectedVariant] = useState(firstVariant);

  return (
    <ShopProductPageStyles>
      <ProductWrapper>
        <GatsbyImage
          alt={product.title}
          image={firstMediaItem.image.gatsbyImageData}
        />
        <ProductInfo>
          <ProductInfoTitle>{product.title}</ProductInfoTitle>
          <p>${selectedVariant.price}</p>
          <div style={{ marginBottom: '1em' }}>
            <ProductOptionsList>
              {product.variants.map((variant) => (
                <li key={variant.id}>
                  <ProductOptionButton
                    onClick={() => setSelectedVariant(variant)}
                    selected={selectedVariant.id === variant.id}
                    type="button"
                  >
                    {variant.title}
                  </ProductOptionButton>
                </li>
              ))}
            </ProductOptionsList>
          </div>
          <ExternalPrimaryButton
            onClick={() => addItemToCart(selectedVariant.storefrontId, 1)}
          >
            Add to cart
          </ExternalPrimaryButton>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </ProductInfo>
      </ProductWrapper>
    </ShopProductPageStyles>
  );
}
