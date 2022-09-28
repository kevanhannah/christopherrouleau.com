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
          id: _id
          title
          items {
            endDate
            id: _id
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
      {featureLists.nodes.map((list) => (
        <FeatureLinkColumnContainer key={list.id}>
          <FeatureLinkColumnHeader>{list.title}</FeatureLinkColumnHeader>
          <FeatureLinkColumnList>
            {list.items.map((item) => {
              const renderedItem = renderFeatureItem(item);
              return (
                <FeatureItemStyles key={item.id}>
                  {renderedItem}
                </FeatureItemStyles>
              );
            })}
          </FeatureLinkColumnList>
        </FeatureLinkColumnContainer>
      ))}
    </FeatureLinksStyles>
  );
}
