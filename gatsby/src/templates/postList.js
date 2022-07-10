import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import PostList from '../components/PostList';

export default function PostListTemplate({ data: { posts } }) {
  const year = format(new Date(posts.nodes[0].publishedAt), 'yyyy');

  return <PostList title={`${year} blog posts`} posts={posts} />;
}

export const query = graphql`
  query ($yearStart: Date!, $yearEnd: Date!) {
    posts: allSanityPost(
      filter: { publishedAt: { gte: $yearStart, lte: $yearEnd } }
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        id
        publishedAt
        title
        slug {
          current
        }
        heroImage {
          alt
          asset {
            gatsbyImageData(
              width: 350
              layout: CONSTRAINED
              placeholder: BLURRED
              aspectRatio: 1.6
            )
          }
        }
      }
    }
  }
`;
