import React from 'react';
import { graphql } from 'gatsby';
import PostPage from '../components/PostPage';

export default function PostTemplate({ data: { post } }) {
  return <PostPage post={post} />;
}

export const query = graphql`
  query ($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      body: _rawBody(resolveReferences: { maxDepth: 8 })
      title
      publishedAt
      seo {
        excerpt
      }
      heroImage {
        alt
        asset {
          gatsbyImageData(
            aspectRatio: 1.78
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 800
          )
        }
      }
    }
  }
`;
