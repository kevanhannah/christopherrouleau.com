import React from 'react';
import { graphql } from 'gatsby';
import WorkPage from '../components/WorkPage';
import { SEO } from '../components/shared/SEO';

export default function NonSeriesWorkTemplate({
  data: { relatedSeries, relatedWorks, work },
}) {
  // Because related items for non-series works can be either a work or a series, we grab four of each, sort them by date, and then grab the latest four to display
  const relatedItems = [...relatedSeries.nodes, ...relatedWorks.nodes]
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .map((item) => ({
      id: item.id,
      images: item.images || [item.coverImage],
      name: item.name,
      releaseDate: item.releaseDate,
      slug: item.slug,
    }))
    .slice(0, 4);

  return (
    <WorkPage
      category={work.category}
      description={work.description}
      forSale={work.forSale}
      images={work.images}
      name={work.name}
      pageType="work"
      relatedItems={relatedItems}
      relatedItemsHeader={`More ${work.category.name}`}
      releaseDate={work.releaseDate}
      storeUrl={work.storeUrl}
    />
  );
}

export const Head = ({ data: { work } }) => (
  <SEO
    title={`${work.name} | Christopher Rouleau`}
    description={work.excerpt}
  />
);

export const query = graphql`
  query ($id: String!, $categoryId: String!) {
    work: sanityWork(id: { eq: $id }) {
      name
      excerpt
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
      limit: 4
    ) {
      nodes {
        id
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
              placeholder: BLURRED
            )
          }
        }
      }
    }
    relatedSeries: allSanitySeries(
      filter: { category: { id: { eq: $categoryId } } }
      limit: 4
    ) {
      nodes {
        id
        name
        releaseDate
        slug {
          current
        }
        coverImage {
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
