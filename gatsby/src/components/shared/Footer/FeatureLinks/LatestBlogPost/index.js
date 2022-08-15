import React from 'react';
import { Link } from 'gatsby';
import { LatestBlogPostStyles } from './Styles';
import { FeatureLinkColumnHeader } from '../Styles';

export default function LatestBlogPost({ post }) {
  const { excerpt, title, publishedAt, slug } = post.nodes[0];
  const postYear = new Date(publishedAt).getFullYear();

  return (
    <LatestBlogPostStyles>
      <FeatureLinkColumnHeader>Latest blog post</FeatureLinkColumnHeader>
      <h3>
        <Link to={`/blog/${postYear}/${slug.current}`}>{title}</Link>
      </h3>
      <p>{excerpt}</p>
      <p>
        <Link to={`/blog/${postYear}/${slug.current}`}>Read this post</Link>
      </p>
    </LatestBlogPostStyles>
  );
}
