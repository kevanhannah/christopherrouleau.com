import React from 'react';
import { graphql } from 'gatsby';
import CardGrid from '../components/shared/CardGrid';
import CardGridItem from '../components/shared/CardGrid/CardGridItem';
import WorkList from '../components/WorkList';

export default function CategoryTemplate({
  data: { category, series, works },
}) {
  const categoryItems = [...series.nodes, ...works.nodes].sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );

  return (
    <WorkList title={category.name} works={categoryItems} />
    // <main>
    //   <h2 style={{ fontSize: '2em' }}>{category.name}</h2>
    //   <CardGrid>
    //     {categoryItems.map((item) => (
    //       <CardGridItem
    //         imageData={item.images}
    //         key={item.id}
    //         link={`../../${item.slug.current}`}
    //         name={item.name}
    //       />
    //     ))}
    //   </CardGrid>
    // </main>
  );
}

export const query = graphql`
  query ($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      name
    }
    series: allSanitySeries(
      filter: { category: { id: { eq: $id } } }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        images: coverImage {
          asset {
            altText
            gatsbyImageData(aspectRatio: 1)
          }
        }
        releaseDate
      }
    }
    works: allSanityWork(
      filter: { category: { id: { eq: $id } } }
      sort: { fields: releaseDate, order: DESC }
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        images {
          asset {
            altText
            gatsbyImageData(aspectRatio: 1)
          }
        }
        releaseDate
      }
    }
  }
`;
