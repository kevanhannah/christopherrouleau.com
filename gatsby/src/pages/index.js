import React from 'react';
import { graphql } from 'gatsby';
import HomePage from '../components/HomePage';

export default function Home({ data: { home, series, works } }) {
  const allCategories = home.categories.map((category) => {
    const seriesInCategory = series.nodes.filter(
      (s) => s.category.id === category.id
    );
    const worksInCategory = works.nodes.filter(
      (w) => w.category.id === category.id
    );

    const categoryItems = [...seriesInCategory, ...worksInCategory].sort(
      (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );

    return {
      id: category.id,
      items: categoryItems.slice(0, 3), // Max three items displayed
      name: category.name,
      linkToMore: categoryItems.length > 3,
      slug: category.slug,
    };
  });

  const categoryContents = allCategories.filter(
    (category) => category.items.length
  );

  return <HomePage home={home} categoryContents={categoryContents} />;
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
