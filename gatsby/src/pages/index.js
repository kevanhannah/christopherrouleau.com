import React from 'react';
import { graphql } from 'gatsby';
import HomePage from '../components/HomePage';

export default function Home({ data: { home, series, works } }) {
  return <HomePage home={home} series={series} works={works} />;
}

export const query = graphql`
  query {
    home: sanityHome(_id: { eq: "home" }) {
      greeting
      introduction: _rawIntroduction
      ...HeroFragment
      categories {
        id
        name
        slug {
          current
        }
      }
    }
    series: allSanitySeries(sort: { fields: releaseDate, order: DESC }) {
      nodes {
        id
        name
        releaseDate
        slug {
          current
        }
        category {
          id
        }
        images: coverImage {
          asset {
            altText
            gatsbyImageData(aspectRatio: 1)
          }
        }
      }
    }
    works: allSanityWork(
      filter: { inSeries: { eq: false } }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id
        name
        releaseDate
        slug {
          current
        }
        category {
          id
        }
        images {
          asset {
            altText
            gatsbyImageData(aspectRatio: 1)
          }
        }
      }
    }
  }
`;
