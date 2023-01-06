import React from 'react';
import { graphql } from 'gatsby';
import ShopPage from '../components/ShopPage';

export default function Shop({ data: { products } }) {
  return <ShopPage products={products} />;
}

export const query = graphql`
  query {
    products: allShopifyProduct {
      nodes {
        handle
        id
        media {
          ... on ShopifyMediaImage {
            id
            image {
              gatsbyImageData(
                aspectRatio: 1.00
                width: 400
                layout: CONSTRAINED
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
        title
        variants {
          price
        }
      }
    }
  }
`;
