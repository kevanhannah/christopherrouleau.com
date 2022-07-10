import React from 'react';
import { graphql } from 'gatsby';
import SeriesPage from '../components/SeriesPage';

export default function SeriesTemplate({ data: { series, works } }) {
  return <SeriesPage series={series} works={works} />;
}

export const query = graphql`
  query ($id: String!) {
    series: sanitySeries(id: { eq: $id }) {
      name
      description: _rawDescription
      slug {
        current
      }
      images: coverImage {
        alt
        asset {
          id
          gatsbyImageData(
            aspectRatio: 1
            width: 600
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
      category {
        name
        slug {
          current
        }
      }
    }
    works: allSanityWork(filter: { series: { id: { eq: $id } } }) {
      nodes {
        id
        images {
          alt
          asset {
            id
            gatsbyImageData(aspectRatio: 1)
          }
        }
        name
        slug {
          current
        }
      }
    }
  }
`;
