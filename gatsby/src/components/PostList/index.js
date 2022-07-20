import React from 'react';
import { PostListStyles } from './Styles';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';

export default function PostList({ main, title, posts }) {
  return (
    <PostListStyles>
      <h2 style={{ fontSize: '2em' }}>{title}</h2>
      <CardGrid>
        {posts.nodes.map((post) => (
          <CardGridItem
            date={post.publishedAt}
            imageData={post.heroImage}
            key={post.id}
            link={`../${main ? 'blog/' : ''}${post.slug.current}`}
            name={post.title}
          />
        ))}
      </CardGrid>
    </PostListStyles>
  );
}
