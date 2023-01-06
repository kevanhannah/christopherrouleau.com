import { graphql } from 'gatsby';
import React from 'react';
import ShopProductPage from '../components/ShopProductPage';

export default function ShopProductTemplate({ data: { product } }) {
  return <ShopProductPage product={product} />;
}

export const query = graphql`
  query ($id: String!) {
    product: shopifyProduct(id: { eq: $id }) {
      descriptionHtml
      media {
        ... on ShopifyMediaImage {
          id
          image {
            gatsbyImageData(
              aspectRatio: 1
              width: 800
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
      options {
        name
        shopifyId
        values
      }
      title
      variants {
        id
        price
        storefrontId
        title
      }
    }
  }
`;
