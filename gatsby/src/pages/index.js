import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import HomePage from '../components/HomePage';
import SEO from '../components/shared/SEO';

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
      items: categoryItems.slice(0, 4), // Max four items displayed
      name: category.name,
      linkToMore: categoryItems.length > 4,
      slug: category.slug,
    };
  });

  const categoryContents = allCategories.filter(
    (category) => category.items.length
  );

  return <HomePage home={home} categoryContents={categoryContents} />;
}

export function Head({ data: { home } }) {
  const imagePath = getSrc(home.metaImage.asset.gatsbyImageData);

  return <SEO image={imagePath} />;
}

export const query = graphql`
  query {
    home: sanityHome(_id: { eq: "home" }) {
      greeting
      introduction: _rawIntroduction
      introImage {
        alt
        asset {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 400
            placeholder: DOMINANT_COLOR
            aspectRatio: 1
          )
        }
      }
      metaImage: introImage {
        asset {
          gatsbyImageData(layout: CONSTRAINED, width: 1200, aspectRatio: 1.905)
        }
      }
      ...HeroFragment
      categories {
        id
        name
        slug {
          current
        }
      }
    }
    # series: allSanityWork(sort: { fields: releaseDate, order: DESC }) {
    #   nodes {
    #     id
    #     name
    #     releaseDate
    #     slug {
    #       current
    #     }
    #     category {
    #       id
    #     }
    #     images {
    #       alt
    #       asset {
    #         gatsbyImageData(aspectRatio: 1)
    #       }
    #     }
    #   }
    # }
    works: allSanityWork(sort: { fields: releaseDate, order: DESC }) {
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
          alt
          asset {
            gatsbyImageData(aspectRatio: 1)
          }
        }
      }
    }
  }
`;
