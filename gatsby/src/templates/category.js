import React from 'react';
import { graphql } from 'gatsby';
import WorkList from '../components/WorkList';
import { SEO } from '../components/shared/SEO';

export default function CategoryTemplate({
  data: { category, series, works },
}) {
  const categoryItems = [...series.nodes, ...works.nodes].sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );

  return <WorkList title={category.name} works={categoryItems} />;
}

export function Head({ data: { category } }) {
  return <SEO title={`${category.name} - Christopher Rouleau`} />;
}
