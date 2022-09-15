import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import WorkPage from '../components/WorkPage';
import SEO from '../components/shared/SEO';

export default function SeriesTemplate({ data: { series } }) {
  return (
    <WorkPage
      category={series.category}
      description={series.description}
      images={series.images}
      name={series.name}
      pageType="series"
      relatedItems={series.childWorks}
      relatedItemsHeader="Works in this series"
      releaseDate={series.releaseDate}
      series={series}
    />
  );
}

export function Head({ data: { series } }) {
  const imagePath = getSrc(series.metaImage[0].asset);

  return (
    <SEO
      description={series.excerpt}
      image={imagePath}
      pathname={`/${series.slug.current}`}
      title={`${series.name} by Christopher Rouleau`}
    />
  );
}

export const query = graphql`
  query ($id: String!) {
    series: sanityWork(_id: { eq: $id }) {
      category {
        name
        slug {
          current
        }
      }
      childWorks {
        id: _id
        name
        slug {
          current
        }
        images {
          alt
          asset {
            gatsbyImageData(
              aspectRatio: 1
              width: 500
              placeholder: DOMINANT_COLOR
              layout: CONSTRAINED
            )
          }
        }
      }
      description: _rawDescription
      excerpt
      id: _id
      images {
        alt
        asset {
          gatsbyImageData(
            aspectRatio: 1
            width: 700
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
          )
        }
      }
      metaImage: images {
        asset {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, aspectRatio: 1.905)
        }
      }
      name
      releaseDate
      slug {
        current
      }
    }
  }
`;
