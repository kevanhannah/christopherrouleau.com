import React from 'react';
import { graphql } from 'gatsby';
import WorkList from '../components/WorkList';
import SEO from '../components/shared/SEO';

export default function CategoryTemplate({ data: { category, works } }) {
  return <WorkList title={category.name} works={works.nodes} />;
}

export function Head({ data: { category } }) {
  return <SEO title={`${category.name} - Christopher Rouleau`} />;
}

export const query = graphql`
  query ($id: String!) {
    category: sanityCategory(_id: { eq: $id }) {
      name
    }
    works: allSanityWork(
      filter: {
        category: { _id: { eq: $id } }
        parentWork: { _id: { eq: null } }
      }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id: _id
        name
        images {
          asset {
            altText
            gatsbyImageData(
              width: 500
              layout: CONSTRAINED
              aspectRatio: 1
              placeholder: DOMINANT_COLOR
            )
          }
        }
        releaseDate
        slug {
          current
        }
      }
    }
  }
`;
