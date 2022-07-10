import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SingleItemFeature from '../components/shared/SingleItemFeature';

const PageGrid = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  gap: 3em;
  margin-bottom: 3em;
`;

export default function WorkTemplate({ data: { work, relatedWorks } }) {
  return (
    <PageGrid>
      <SingleItemFeature
        category={work.category || work.series.category}
        description={work.description}
        images={work.images}
        name={work.name}
      />
    </PageGrid>
  );
}

export const query = graphql`
  query ($id: String!, $seriesId: String) {
    work: sanityWork(id: { eq: $id }) {
      name
      description: _rawDescription
      # slug {
      #   current
      # }
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
