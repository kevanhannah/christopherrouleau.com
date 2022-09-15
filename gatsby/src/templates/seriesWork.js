import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import WorkPage from '../components/WorkPage';
import SEO from '../components/shared/SEO';

export default function SeriesWorkTemplate({ data: { work, relatedWorks } }) {
  const metaImageURL = getSrc(work.metaImage[0].asset.gatsbyImageData);

  return (
    <WorkPage
      category={work.category}
      description={work.description}
      forSale={work.forSale}
      images={work.images}
      metaDescription={work.excerpt}
      metaImageURL={metaImageURL}
      name={work.name}
      pageType="work"
      relatedItems={relatedWorks.nodes}
      relatedItemsHeader="More in this series"
      releaseDate={work.releaseDate}
      series={work.parentWork}
      storeUrl={work.storeUrl}
    />
  );
}

export function Head({ data: { work } }) {
  const imagePath = getSrc(work.metaImage[0].asset.gatsbyImageData);

  return (
    <SEO
      description={`Part of ${work.parentWork.name}. ${work.parentWork.excerpt}`}
      image={imagePath}
      pathname={`/${work.parentWork.slug.current}/${work.slug.current}`}
      title={`${work.name} by Christopher Rouleau`}
    />
  );
}

export const query = graphql`
  query ($id: String!, $parentId: String!) {
    work: sanityWork(_id: { eq: $id }) {
      category {
        name
        slug {
          current
        }
      }
      description: _rawDescription
      forSale
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
      metaImage: images {
        asset {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, aspectRatio: 1.905)
        }
      }
      name
      parentWork {
        excerpt
        name
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
      releaseDate
      slug {
        current
      }
      storeUrl
    }
    relatedWorks: allSanityWork(
      filter: { parentWork: { _id: { eq: $parentId } }, _id: { ne: $id } }
      limit: 4
    ) {
      nodes {
        id: _id
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
