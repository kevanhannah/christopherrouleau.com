import React from 'react';
import { Link } from 'gatsby';
import { LatestBlogPostStyles } from './Styles';

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
