import React from 'react';
import { graphql } from 'gatsby';
import WorkPage from '../components/WorkPage';
import { SEO } from '../components/shared/SEO';

export default function SeriesTemplate({ data: { series, works } }) {
  return (
    <WorkPage
      category={series.category}
      description={series.description}
      images={[series.coverImage]}
      name={series.name}
      pageType="series"
      relatedItems={works.nodes}
      relatedItemsHeader="Works in this series"
      releaseDate={series.releaseDate}
      series={series}
    />
  );
}

export const Head = ({ data: { series } }) => (
  <SEO
    description={series.excerpt}
    image={series.coverImage.asset.publicUrl}
    pathname={`/${series.slug.current}`}
    title={`${series.name} - Christopher Rouleau`}
  />
);

export const query = graphql`
  query ($id: String!) {
    series: sanitySeries(id: { eq: $id }) {
      name
      description: _rawDescription
      excerpt
      slug {
        current
      }
      coverImage {
        alt
        asset {
          id
          publicUrl
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
      releaseDate
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
