import React from 'react';
import CardGrid from '../shared/CardGrid';
import ProductCard from '../shared/CardGrid/ProductCard';

export default function ShopPage({ products }) {
  return (
    <main>
      <h2>Shop</h2>
      <CardGrid>
        {products.nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardGrid>
    </main>
  );
}
