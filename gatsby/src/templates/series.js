import React from 'react';
import { graphql } from 'gatsby';
import ItemFeature from '../components/ItemFeature';
import CardGrid from '../components/shared/CardGrid';
import CardGridItem from '../components/shared/CardGrid/CardGridItem';

export default function SeriesTemplate({ data: { series, works } }) {
  return (
    <main>
      <ItemFeature item={series} pageType="series" />
      <h2>Works in this series</h2>
      <CardGrid>
        {works.nodes.map((work) => (
          <CardGridItem
            imageData={work.images[0]}
            key={work.id}
            link={`../${work.slug.current}`}
            name={work.name}
          />
        ))}
      </CardGrid>
    </main>
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
      images: coverImage {
        alt
        asset {
          id
          gatsbyImageData(
            aspectRatio: 1
            width: 700
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
