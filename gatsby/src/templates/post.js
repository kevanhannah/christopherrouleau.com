import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import PostPage from '../components/PostPage';
import SEO from '../components/shared/SEO';

export default function PostTemplate({ data: { post } }) {
  return <PostPage post={post} />;
}

export function Head({ data: { post } }) {
  const imagePath = getSrc(post.metaImage.asset);
  const postYear = new Date(post.publishedAt).getFullYear();

  return (
    <SEO
      description={post.excerpt}
      image={imagePath}
      pathname={`blog/${postYear}/${post.slug.current}`}
      title={`${post.title} by Christopher Rouleau`}
    />
  );
}

export const query = graphql`
  query ($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      body: _rawBody(resolveReferences: { maxDepth: 8 })
      excerpt
      heroImage {
        alt
        asset {
          gatsbyImageData(
            aspectRatio: 1
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 800
          )
        }
      }
      metaImage: heroImage {
        asset {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, aspectRatio: 1)
        }
      }
      publishedAt
      slug {
        current
      }
      title
    }
  }
`;
