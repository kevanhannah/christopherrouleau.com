import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
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

export function Head({ data: { work } }) {
  const imagePath = getSrc(work.metaImage[0].asset.gatsbyImageData);

  return (
    <SEO
      description={`Part of ${work.series.name}. ${work.series.excerpt}`}
      image={imagePath}
      pathname={`/${work.series.slug.current}/${work.slug.current}`}
      title={`${work.name} by Christopher Rouleau`}
    />
  );
}

export const query = graphql`
  query ($id: String!, $seriesId: String) {
    work: sanityWork(id: { eq: $id }) {
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
      slug {
        current
      }
      storeUrl
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
