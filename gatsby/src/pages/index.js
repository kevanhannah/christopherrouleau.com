import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import HomePage from '../components/HomePage';
import SEO from '../components/shared/SEO';

export default function Home({ data: { home, works } }) {
  const allCategories = home.categories.map((category) => {
    const worksInCategory = works.nodes.filter(
      (w) => w.category.id === category.id
    );

    const categoryItems = worksInCategory.sort(
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
        id: _id
        name
        slug {
          current
        }
      }
    }
    works: allSanityWork(
      filter: { parentWork: { _id: { eq: null } } }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id: _id
        name
        releaseDate
        slug {
          current
        }
        category {
          id: _id
        }
        images {
          alt
          asset {
            gatsbyImageData(
              width: 500
              layout: CONSTRAINED
              aspectRatio: 1
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`;
