import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LatestBlogPost from './LatestBlogPost';
import {
  FeatureItemStyles,
  FeatureLinkColumnContainer,
  FeatureLinkColumnHeader,
  FeatureLinkColumnList,
  FeatureLinksStyles,
} from './Styles';
import { renderFeatureItem } from './renderFeatureItem';

export default function FeatureLinks() {
  const { latestPost, featureLists } = useStaticQuery(graphql`
    query {
      latestPost: allSanityPost(
        limit: 1
        sort: { fields: publishedAt, order: DESC }
      ) {
        nodes {
          excerpt
          publishedAt
          slug {
            current
          }
          title
        }
      }
      featureLists: allSanityFeatureList(
        sort: { fields: orderRank, order: ASC }
      ) {
        nodes {
          title
          items {
            endDate
            id: _id
            orderRank
            reference {
              ... on SanityWork {
                id
                name
                slug {
                  current
                }
              }
            }
            startDate
            type
            text
            url
          }
        }
      }
    }
  `);

  return (
    <FeatureLinksStyles>
      <LatestBlogPost post={latestPost} />
      {featureLists.nodes.map((list) => {
        // Double-check that the list items are sorted in ascending order
        const orderedItems = list.items.sort(
          (a, b) => a.orderRank - b.orderRank
        );
        return (
          <FeatureLinkColumnContainer key={list.title}>
            <FeatureLinkColumnHeader>{list.title}</FeatureLinkColumnHeader>
            <FeatureLinkColumnList>
              {orderedItems.map((item) => {
                const renderedItem = renderFeatureItem(item);
                return (
                  <FeatureItemStyles key={item.id}>
                    {renderedItem}
                  </FeatureItemStyles>
                );
              })}
            </FeatureLinkColumnList>
          </FeatureLinkColumnContainer>
        );
      })}
    </FeatureLinksStyles>
  );
}
