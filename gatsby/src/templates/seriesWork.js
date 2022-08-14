import React from 'react';
import { graphql } from 'gatsby';
import WorkPage from '../components/WorkPage';
import { SEO } from '../components/shared/SEO';

export default function SeriesWorkTemplate({ data: { work, relatedWorks } }) {
  return (
    <WorkPage
      category={work.category || work.series.category}
      description={work.description}
      forSale={work.forSale}
      images={work.images}
      name={work.name}
      pageType="work"
      relatedItems={relatedWorks.nodes}
      relatedItemsHeader="More in this series"
      releaseDate={work.series.releaseDate}
      series={work.series}
      storeUrl={work.storeUrl}
    />
  );
}

export const Head = ({ data: { work } }) => (
  <SEO
    title={`${work.name} | Christopher Rouleau`}
    description={`Part of ${work.series.name}. ${work.series.excerpt}`}
  />
);

export const query = graphql`
  query ($id: String!, $seriesId: String) {
    work: sanityWork(id: { eq: $id }) {
      id
      name
      description: _rawDescription
      forSale
      storeUrl
      images {
        alt
        asset {
          id
          gatsbyImageData(
            width: 700
            layout: CONSTRAINED
            aspectRatio: 1
            placeholder: BLURRED
          )
        }
      }
      series {
        name
        releaseDate
        slug {
          current
        }
        excerpt
        category {
          name
          slug {
            current
          }
        }
      }
      category {
        name
        slug {
          current
        }
      }
    }
    relatedWorks: allSanityWork(
      filter: { series: { id: { eq: $seriesId } }, id: { ne: $id } }
      limit: 4
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        images {
          alt
          asset {
            id
            gatsbyImageData(
              width: 500
              layout: CONSTRAINED
              aspectRatio: 1
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
