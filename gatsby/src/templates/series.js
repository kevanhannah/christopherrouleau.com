import React from 'react';
import { graphql } from 'gatsby';
import WorkPage from '../components/WorkPage';

export default function SeriesTemplate({ data: { series, works } }) {
  return (
    <WorkPage
      category={series.category}
      description={series.description}
      images={[series.coverImage]}
      name={series.name}
      relatedWorks={works}
      relatedWorksHeader="Works in this series"
      series={series}
    />
  );
}

export const query = graphql`
  query ($id: String!) {
    series: sanitySeries(id: { eq: $id }) {
      name
      description: _rawDescription
      slug {
        current
      }
      coverImage {
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
