import React from 'react';
import { graphql } from 'gatsby';
import PostList from '../components/PostList';
import { SEO } from '../components/shared/SEO';

export default function PostListTemplate({ data: { posts } }) {
  const year = new Date(posts.nodes[0].publishedAt).getFullYear();

  return <PostList title={`${year} blog posts`} posts={posts} />;
}

export function Head({ data: { posts } }) {
  const year = new Date(posts.nodes[0].publishedAt).getFullYear();

  return (
    <SEO
      title={`${year} blog posts - Christopher Rouleau`}
      description={`All ${year} blog posts from Christopher Rouleau.`}
    />
  );
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
