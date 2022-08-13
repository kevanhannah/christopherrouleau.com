import React from 'react';
import { graphql } from 'gatsby';
import WorkPage from '../components/WorkPage';

export default function NonSeriesWorkTemplate({
  data: { work, relatedWorks },
}) {
  return (
    <WorkPage
      category={work.category}
      description={work.description}
      forSale={work.forSale}
      images={work.images}
      name={work.name}
      pageType="work"
      relatedWorks={relatedWorks}
      relatedWorksHeader={`More ${work.category.name}`}
      releaseDate={work.releaseDate}
      storeUrl={work.storeUrl}
    />
  );
}

export const query = graphql`
  query ($id: String!, $categoryId: String!) {
    work: sanityWork(id: { eq: $id }) {
      name
      forSale
      description: _rawDescription
      releaseDate
      storeUrl
      id
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
      category {
        name
        slug {
          current
        }
      }
    }
    relatedWorks: allSanityWork(
      filter: { category: { id: { eq: $categoryId } }, id: { ne: $id } }
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
