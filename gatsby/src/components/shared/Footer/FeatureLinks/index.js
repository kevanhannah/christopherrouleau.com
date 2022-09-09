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
  const {
    latestPost,
    sanitySettings: { featureLists },
  } = useStaticQuery(graphql`
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
      sanitySettings {
        featureLists {
          title
          items {
            item {
              ... on SanityLinkExternal {
                _type
                linkText
                newWindow
                url
                _key
              }
              ... on SanityLinkInternal {
                _type
                linkText
                reference {
                  ... on SanityWork {
                    id
                    name
                    series: parentWork {
                      slug {
                        current
                      }
                    }
                    slug {
                      current
                    }
                  }
                  ... on SanityCategory {
                    id
                    name
                    slug {
                      current
                    }
                  }
                }
                _key
              }
              ... on SanityPlainTextItem {
                _type
                text
                _key
              }
            }
            endDate
            startDate
          }
        }
      }
    }
  `);

  return (
    <FeatureLinksStyles>
      <LatestBlogPost post={latestPost} />
      {featureLists.map((list) => (
        <FeatureLinkColumnContainer key={list.title}>
          <FeatureLinkColumnHeader>{list.title}</FeatureLinkColumnHeader>
          <FeatureLinkColumnList>
            {list.items.map((item) => {
              const renderedItem = renderFeatureItem(item);
              return (
                <FeatureItemStyles key={item.item[0]._key}>
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
