import { graphql } from 'gatsby';
import React from 'react';

export default function Shop({ data: { products } }) {
  return (
    <div>
      {products.nodes.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export const query = graphql`
  query {
    products: allShopifyProduct {
      nodes {
        id
        title
      }
    }
  }
`;
