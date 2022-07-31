import React from 'react';
import { graphql } from 'gatsby';
import WorkPage from '../components/WorkPage';

export default function SeriesWorkTemplate({ data: { work, relatedWorks } }) {
  return (
    <WorkPage
      category={work.category || work.series.category}
      description={work.description}
      forSale={work.forSale}
      images={work.images}
      name={work.name}
      relatedWorks={relatedWorks}
      relatedWorksHeader={`More from ${work.series.name}`}
      storeUrl={work.storeUrl}
    />
  );
}

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
        slug {
          current
        }
        excerpt: _rawExcerpt
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
      limit: 3
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
