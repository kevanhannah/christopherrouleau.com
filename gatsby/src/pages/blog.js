import React from 'react';
import { graphql } from 'gatsby';
import PostList from '../components/PostList';

export default function BlogPage({ data: { posts } }) {
  return <PostList main title="Blog" posts={posts} />;
}

export const query = graphql`
  query {
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
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
