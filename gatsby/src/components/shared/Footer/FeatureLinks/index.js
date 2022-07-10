import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LatestBlogPost from './LatestBlogPost';
import { FeatureItemStyles, FeatureLinksStyles } from './Styles';
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
          title
          publishedAt
          seo {
            excerpt
          }
          slug {
            current
          }
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
                  ... on SanitySeries {
                    name
                    slug {
                      current
                    }
                    id
                  }
                  ... on SanityWork {
                    id
                    name
                    series {
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
        <div key={list.title}>
          <h4>{list.title}</h4>
          <ul>
            {list.items.map((item) => {
              const renderedItem = renderFeatureItem(item);
              return (
                <FeatureItemStyles key={item.item[0]._key}>
                  {renderedItem}
                </FeatureItemStyles>
              );
            })}
          </ul>
        </div>
      ))}
    </FeatureLinksStyles>
  );
}
