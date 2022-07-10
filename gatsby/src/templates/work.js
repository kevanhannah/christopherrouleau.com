import React from 'react';
import { graphql } from 'gatsby';
import ItemFeature from '../components/ItemFeature';
import RelatedItems from '../components/RelatedItems';

export default function WorkTemplate({ data: { work, relatedWorks } }) {
  return (
    <main>
      <ItemFeature item={work} pageType="work" series={work.series} />
      {work.series && <RelatedItems relatedWorks={relatedWorks} />}
    </main>
  );
}

export const query = graphql`
  query ($id: String!, $seriesId: String) {
    work: sanityWork(id: { eq: $id }) {
      name
      description: _rawDescription
      slug {
        current
      }
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
