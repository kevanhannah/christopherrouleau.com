import React from 'react';
import { graphql } from 'gatsby';
import WorkList from '../components/WorkList';
import SEO from '../components/shared/SEO';

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

export const query = graphql`
  query ($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      name
    }
    series: allSanitySeries(
      filter: { category: { id: { eq: $id } } }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        images: coverImage {
          asset {
            altText
            gatsbyImageData(aspectRatio: 1)
          }
        }
        releaseDate
      }
    }
    works: allSanityWork(
      filter: { category: { id: { eq: $id } } }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        images {
          asset {
            altText
            gatsbyImageData(aspectRatio: 1)
          }
        }
        releaseDate
      }
    }
  }
`;
