import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LatestBlogPostStyles = styled.div`
  h5 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 1em;

    & > a {
      color: var(--black);
      text-decoration: none;
      background-color: var(--primary-yellow);
      padding: 2px 0;

      &:hover {
        background-color: var(--primary-yellow-lighter);
      }
    }
  }

  & > p {
    margin-bottom: 1em;

    & > a {
      font-size: 0.9em;
      font-weight: 400;
      color: var(--black);
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;

      &:hover {
        text-decoration: none;
        color: var(--primary-blue);
      }
    }
  }
`;

export default function LatestBlogPost({ post }) {
  const { title, seo, slug } = post.nodes[0];

  return (
    <LatestBlogPostStyles>
      <h4>Latest blog post</h4>
      <h5>
        <Link to={`/blog/${slug.current}`}>{title}</Link>
      </h5>
      <p>{seo.excerpt}</p>
      <p>
        <Link to={`/blog/${slug.current}`}>Read more</Link>
      </p>
    </LatestBlogPostStyles>
  );
}
