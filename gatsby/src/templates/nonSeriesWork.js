import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import WorkPage from '../components/WorkPage';
import SEO from '../components/shared/SEO';

export default function NonSeriesWorkTemplate({
  data: { relatedWorks, work },
}) {
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
      pathname={`/${work.slug.current}`}
      pageType="work"
      relatedItems={relatedWorks.nodes}
      relatedItemsHeader={`More ${work.category.name}`}
      releaseDate={work.releaseDate}
      storeUrl={work.storeUrl}
    />
  );
}

export function Head({ data: { work } }) {
  const imagePath = getSrc(work.metaImage[0].asset.gatsbyImageData);

  return (
    <SEO
      description={work.excerpt}
      image={imagePath}
      pathname={`/${work.slug.current}`}
      title={`${work.name} by Christopher Rouleau`}
    />
  );
}

export const query = graphql`
  query ($id: String!, $categoryId: String!) {
    work: sanityWork(_id: { eq: $id }) {
      category {
        name
        slug {
          current
        }
      }
      description: _rawDescription
      excerpt
      forSale
      id
      images {
        alt
        asset {
          id
          publicUrl
          gatsbyImageData(
            width: 700
            layout: CONSTRAINED
            aspectRatio: 1
            placeholder: DOMINANT_COLOR
          )
        }
      }
      metaImage: images {
        asset {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, aspectRatio: 1)
        }
      }
      name
      releaseDate
      slug {
        current
      }
      storeUrl
    }
    relatedWorks: allSanityWork(
      filter: {
        category: { _id: { eq: $categoryId } }
        _id: { ne: $id }
        parentWork: { _id: { eq: null } }
      }
      sort: { releaseDate: DESC }
      limit: 4
    ) {
      nodes {
        id: _id
        name
        releaseDate
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
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`;
