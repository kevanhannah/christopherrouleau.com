import React from 'react';
import { graphql } from 'gatsby';
import PostList from '../components/PostList';
import SEO from '../components/shared/SEO';

export default function BlogPage({ data: { posts } }) {
  return <PostList main title="Blog" posts={posts} />;
}

export function Head() {
  return (
    <SEO
      title="Blog - Christopher Rouleau"
      description="All blog posts from Christopher Rouleau."
    />
  );
}

export const query = graphql`
  query {
    posts: allSanityPost(sort: { publishedAt: DESC }) {
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
              aspectRatio: 1
            )
          }
        }
      }
    }
  }
`;
