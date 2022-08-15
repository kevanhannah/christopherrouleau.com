import React from 'react';
import { Link } from 'gatsby';
import { LatestBlogPostStyles } from './Styles';

export default function LatestBlogPost({ post }) {
  const { excerpt, title, publishedAt, slug } = post.nodes[0];
  const postYear = new Date(publishedAt).getFullYear();

  return (
    <LatestBlogPostStyles>
      <h4>Latest blog post</h4>
      <h5>
        <Link to={`/blog/${postYear}/${slug.current}`}>{title}</Link>
      </h5>
      <p>{excerpt}</p>
      <p>
        <Link to={`/blog/${postYear}/${slug.current}`}>Read more</Link>
      </p>
    </LatestBlogPostStyles>
  );
}
